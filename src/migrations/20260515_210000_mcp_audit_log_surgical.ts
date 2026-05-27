import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Add the mcp_audit_log collection table and the `mcp_audit_log_id`
 * reference column on `payload_locked_documents_rels`.
 *
 * Why a hand-crafted migration:
 * - `payload migrate:create` generated a 16k-line migration that tried to
 *   re-create customer_stories, testimonials, marketing_faqs, team_members,
 *   home_page, etc. Those were originally pushed to prod via dev push mode
 *   and only later got hand-written migration files without accompanying
 *   schema snapshots — so the generator's snapshot is stale and the diff
 *   contains a CREATE for everything since April. That migration failed in
 *   prod on the first "type already exists" and got silently swallowed by
 *   the build's `|| echo` fallback.
 * - This surgical migration only adds the things genuinely missing in prod:
 *   the new mcp_audit_log table + the rels column that points at it.
 *
 * Idempotent: uses IF NOT EXISTS / DO blocks so re-running won't error
 * if any part is already present (e.g. from a partially-applied earlier
 * deploy or a manual fix).
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- ENUM types for mcp_audit_log
    DO $$ BEGIN
      CREATE TYPE "public"."enum_mcp_audit_log_tool" AS ENUM(
        'payload_create', 'payload_update', 'payload_delete',
        'payload_publish', 'payload_update_global'
      );
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_mcp_audit_log_status" AS ENUM('success', 'error');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Main table
    CREATE TABLE IF NOT EXISTS "mcp_audit_log" (
      "id" serial PRIMARY KEY NOT NULL,
      "summary" varchar NOT NULL,
      "tool" "enum_mcp_audit_log_tool" NOT NULL,
      "collection" varchar,
      "document_id" varchar,
      "status" "enum_mcp_audit_log_status" DEFAULT 'success' NOT NULL,
      "args" jsonb,
      "result" jsonb,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "mcp_audit_log_updated_at_idx"
      ON "mcp_audit_log" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "mcp_audit_log_created_at_idx"
      ON "mcp_audit_log" USING btree ("created_at");

    -- Reference column in the polymorphic locked-documents rels table.
    -- Adding this fixes the "SQL failure on update/delete" symptom: with
    -- mcp-audit-log in the Payload model, drizzle expects this column
    -- to exist when generating queries against payload_locked_documents_rels.
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "mcp_audit_log_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_mcp_audit_log_fk"
        FOREIGN KEY ("mcp_audit_log_id")
        REFERENCES "public"."mcp_audit_log"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_mcp_audit_log_id_idx"
      ON "payload_locked_documents_rels" USING btree ("mcp_audit_log_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_mcp_audit_log_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_mcp_audit_log_id_idx";
    ALTER TABLE "payload_locked_documents_rels"
      DROP COLUMN IF EXISTS "mcp_audit_log_id";
    DROP TABLE IF EXISTS "mcp_audit_log" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_mcp_audit_log_status";
    DROP TYPE IF EXISTS "public"."enum_mcp_audit_log_tool";
  `)
}
