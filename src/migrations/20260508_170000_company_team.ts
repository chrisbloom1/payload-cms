import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the `company-page` global and `team-members` collection so the
 * /company page hero, mission 2-up, ecosystem statement, resources
 * grid, and team grid are editable in the Payload admin.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- ============== COMPANY PAGE ==============

    CREATE TABLE IF NOT EXISTS "company_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_headline" varchar,
      "hero_body" varchar,
      "what_we_do_eyebrow" varchar,
      "what_we_do_heading" varchar,
      "what_we_do_body" varchar,
      "who_we_are_eyebrow" varchar,
      "who_we_are_heading" varchar,
      "who_we_are_body" varchar,
      "ecosystem_heading" varchar,
      "team_eyebrow" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    CREATE TABLE IF NOT EXISTS "company_page_ecosystem_paragraphs" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "text" varchar
    );

    CREATE TABLE IF NOT EXISTS "company_page_resources" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "title" varchar,
      "body" varchar,
      "href" varchar,
      "coming_soon" boolean DEFAULT false
    );

    DO $$ BEGIN
      ALTER TABLE "company_page_ecosystem_paragraphs" ADD CONSTRAINT "company_page_ecosystem_paragraphs_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."company_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "company_page_resources" ADD CONSTRAINT "company_page_resources_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."company_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "company_page_ecosystem_paragraphs_parent_idx" ON "company_page_ecosystem_paragraphs" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "company_page_ecosystem_paragraphs_order_idx" ON "company_page_ecosystem_paragraphs" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "company_page_resources_parent_idx" ON "company_page_resources" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "company_page_resources_order_idx" ON "company_page_resources" USING btree ("_order");

    -- ============== TEAM MEMBERS ==============

    DO $$ BEGIN
      CREATE TYPE "public"."enum_team_members_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__team_members_v_version_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE TABLE IF NOT EXISTS "team_members" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "title" varchar NOT NULL,
      "linkedin" varchar,
      "photo_image_id" integer,
      "photo_url" varchar,
      "bio" jsonb,
      "sort_order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "_status" "enum_team_members_status" DEFAULT 'draft'
    );

    CREATE TABLE IF NOT EXISTS "_team_members_v" (
      "id" serial PRIMARY KEY NOT NULL,
      "parent_id" integer,
      "version_name" varchar,
      "version_title" varchar,
      "version_linkedin" varchar,
      "version_photo_image_id" integer,
      "version_photo_url" varchar,
      "version_bio" jsonb,
      "version_sort_order" numeric DEFAULT 0,
      "version_updated_at" timestamp(3) with time zone,
      "version_created_at" timestamp(3) with time zone,
      "version__status" "enum__team_members_v_version_status" DEFAULT 'draft',
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "latest" boolean,
      "autosave" boolean
    );

    DO $$ BEGIN
      ALTER TABLE "team_members" ADD CONSTRAINT "team_members_photo_image_id_media_id_fk"
        FOREIGN KEY ("photo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_parent_id_fk"
        FOREIGN KEY ("parent_id") REFERENCES "public"."team_members"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_version_photo_image_id_media_id_fk"
        FOREIGN KEY ("version_photo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "team_members_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk"
        FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "team_members_sort_order_idx" ON "team_members" USING btree ("sort_order");
    CREATE INDEX IF NOT EXISTS "team_members__status_idx" ON "team_members" USING btree ("_status");
    CREATE INDEX IF NOT EXISTS "_team_members_v_parent_idx" ON "_team_members_v" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "_team_members_v_latest_idx" ON "_team_members_v" USING btree ("latest");
    CREATE INDEX IF NOT EXISTS "_team_members_v_autosave_idx" ON "_team_members_v" USING btree ("autosave");
    CREATE INDEX IF NOT EXISTS "_team_members_v_version_version__status_idx" ON "_team_members_v" USING btree ("version__status");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_team_members_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_team_members_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "team_members_id";

    DROP TABLE IF EXISTS "_team_members_v" CASCADE;
    DROP TABLE IF EXISTS "team_members" CASCADE;
    DROP TYPE IF EXISTS "public"."enum__team_members_v_version_status";
    DROP TYPE IF EXISTS "public"."enum_team_members_status";

    DROP TABLE IF EXISTS "company_page_resources" CASCADE;
    DROP TABLE IF EXISTS "company_page_ecosystem_paragraphs" CASCADE;
    DROP TABLE IF EXISTS "company_page" CASCADE;
  `)
}
