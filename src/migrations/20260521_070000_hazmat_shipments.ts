import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Add the hazmat_shipments collection + its audit_trail array sub-table,
 * plus the polymorphic locked-documents reference column.
 *
 * Schema derived directly from src/collections/HazmatShipments/index.ts.
 * Hand-written following the same pattern as the surgical mcp_audit_log
 * migration — `migrate:create` is unreliable in this repo because the
 * snapshot has drifted from prod.
 *
 * Idempotent: IF NOT EXISTS / DO blocks throughout, so re-running is
 * safe.
 */

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- =============================================================
    -- Enums
    -- =============================================================
    DO $$ BEGIN
      CREATE TYPE "public"."enum_hazmat_shipments_weight_tier" AS ENUM(
        'small', 'placarded', 'ftl'
      );
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_hazmat_shipments_product_type" AS ENUM(
        'escooter', 'ebike', 'emotorcycle', 'ev_other',
        'drone', 'robot',
        'equipment_installed', 'battery_packed',
        'battery_alone', 'lithium_metal_alone'
      );
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_hazmat_shipments_status" AS ENUM(
        'draft', 'signed', 'transmitted', 'delivered', 'archived'
      );
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- =============================================================
    -- Main table
    -- =============================================================
    CREATE TABLE IF NOT EXISTS "hazmat_shipments" (
      "id" serial PRIMARY KEY NOT NULL,

      -- Identifiers
      "bol_ref" varchar NOT NULL,
      "pro_number" varchar,
      "date_tendered" timestamp(3) with time zone NOT NULL,
      "carrier" varchar NOT NULL,
      "weight_tier" "enum_hazmat_shipments_weight_tier" DEFAULT 'small',

      -- Shipper group
      "shipper_company" varchar,
      "shipper_address" varchar,
      "shipper_city_state_zip" varchar,
      "shipper_site_contact" varchar,

      -- Consignee group
      "consignee_name" varchar,
      "consignee_address" varchar,
      "consignee_city_state_zip" varchar,
      "consignee_phone" varchar,

      -- Hazmat description
      "product_type" "enum_hazmat_shipments_product_type" NOT NULL,
      "product_name" varchar,
      "un_number" varchar,
      "shipping_name" varchar,
      "hazard_class" varchar,
      "packing_group" varchar,
      "num_units" numeric DEFAULT 1,
      "container_type" varchar DEFAULT 'Crate',
      "dimensions" varchar,
      "total_weight" numeric,
      "battery_wh" numeric,
      "special_notes" varchar,

      -- Emergency
      "emergency_phone" varchar DEFAULT '313-473-7499',
      "chemtrec_contract" varchar,

      -- Certification
      "signer_name" varchar DEFAULT 'Christopher J Nolte II',
      "signer_title" varchar DEFAULT 'President, Bloom',
      "signature_image_id" integer,
      "signed_at" timestamp(3) with time zone,

      -- Output
      "generated_pdf_id" integer,
      "status" "enum_hazmat_shipments_status" DEFAULT 'draft',
      "transmitted_at" timestamp(3) with time zone,
      "transmitted_to" varchar,

      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    CREATE INDEX IF NOT EXISTS "hazmat_shipments_bol_ref_idx"
      ON "hazmat_shipments" USING btree ("bol_ref");
    CREATE INDEX IF NOT EXISTS "hazmat_shipments_pro_number_idx"
      ON "hazmat_shipments" USING btree ("pro_number");
    CREATE INDEX IF NOT EXISTS "hazmat_shipments_updated_at_idx"
      ON "hazmat_shipments" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "hazmat_shipments_created_at_idx"
      ON "hazmat_shipments" USING btree ("created_at");

    -- FK: signatureImage upload → media
    DO $$ BEGIN
      ALTER TABLE "hazmat_shipments"
        ADD CONSTRAINT "hazmat_shipments_signature_image_id_fk"
        FOREIGN KEY ("signature_image_id")
        REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- FK: generatedPdf upload → media
    DO $$ BEGIN
      ALTER TABLE "hazmat_shipments"
        ADD CONSTRAINT "hazmat_shipments_generated_pdf_id_fk"
        FOREIGN KEY ("generated_pdf_id")
        REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- =============================================================
    -- Audit trail array sub-table
    -- =============================================================
    CREATE TABLE IF NOT EXISTS "hazmat_shipments_audit_trail" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "event" varchar,
      "user_id" integer,
      "timestamp" timestamp(3) with time zone,
      "changes" jsonb
    );

    CREATE INDEX IF NOT EXISTS "hazmat_shipments_audit_trail_order_idx"
      ON "hazmat_shipments_audit_trail" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "hazmat_shipments_audit_trail_parent_id_idx"
      ON "hazmat_shipments_audit_trail" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "hazmat_shipments_audit_trail_user_id_idx"
      ON "hazmat_shipments_audit_trail" USING btree ("user_id");

    -- FK: parent → hazmat_shipments
    DO $$ BEGIN
      ALTER TABLE "hazmat_shipments_audit_trail"
        ADD CONSTRAINT "hazmat_shipments_audit_trail_parent_id_fk"
        FOREIGN KEY ("_parent_id")
        REFERENCES "public"."hazmat_shipments"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- FK: user → users
    DO $$ BEGIN
      ALTER TABLE "hazmat_shipments_audit_trail"
        ADD CONSTRAINT "hazmat_shipments_audit_trail_user_id_fk"
        FOREIGN KEY ("user_id")
        REFERENCES "public"."users"("id")
        ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- =============================================================
    -- payload_locked_documents_rels polymorphic ref
    -- =============================================================
    ALTER TABLE "payload_locked_documents_rels"
      ADD COLUMN IF NOT EXISTS "hazmat_shipments_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels"
        ADD CONSTRAINT "payload_locked_documents_rels_hazmat_shipments_fk"
        FOREIGN KEY ("hazmat_shipments_id")
        REFERENCES "public"."hazmat_shipments"("id")
        ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_hazmat_shipments_id_idx"
      ON "payload_locked_documents_rels" USING btree ("hazmat_shipments_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
      DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_hazmat_shipments_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_hazmat_shipments_id_idx";
    ALTER TABLE "payload_locked_documents_rels"
      DROP COLUMN IF EXISTS "hazmat_shipments_id";

    DROP TABLE IF EXISTS "hazmat_shipments_audit_trail" CASCADE;
    DROP TABLE IF EXISTS "hazmat_shipments" CASCADE;

    DROP TYPE IF EXISTS "public"."enum_hazmat_shipments_status";
    DROP TYPE IF EXISTS "public"."enum_hazmat_shipments_product_type";
    DROP TYPE IF EXISTS "public"."enum_hazmat_shipments_weight_tier";
  `)
}
