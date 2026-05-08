import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the `testimonials` and `marketing-faqs` collections so the
 * carousel quotes and the brands/providers FAQ entries become
 * editable in /admin instead of living in src/components/widgets/
 * TestimonialCarousel.tsx and src/data/faq.ts.
 *
 * Testimonials uses the standard collection-with-versions+autosave
 * shape (so Live Preview works). MarketingFaqs uses select hasMany
 * for the surfaces checkbox, which Payload backs with a sub-table.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- ============== TESTIMONIALS ==============

    DO $$ BEGIN
      CREATE TYPE "public"."enum_testimonials_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE TABLE IF NOT EXISTS "testimonials" (
      "id" serial PRIMARY KEY NOT NULL,
      "quote" varchar NOT NULL,
      "author" varchar NOT NULL,
      "title" varchar NOT NULL,
      "company" varchar,
      "avatar_image_id" integer,
      "avatar_url" varchar,
      "sort_order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "_status" "enum_testimonials_status" DEFAULT 'draft'
    );

    CREATE TABLE IF NOT EXISTS "_testimonials_v" (
      "id" serial PRIMARY KEY NOT NULL,
      "parent_id" integer,
      "version_quote" varchar,
      "version_author" varchar,
      "version_title" varchar,
      "version_company" varchar,
      "version_avatar_image_id" integer,
      "version_avatar_url" varchar,
      "version_sort_order" numeric DEFAULT 0,
      "version_updated_at" timestamp(3) with time zone,
      "version_created_at" timestamp(3) with time zone,
      "version__status" "enum__testimonials_v_version_status" DEFAULT 'draft',
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "latest" boolean,
      "autosave" boolean
    );

    DO $$ BEGIN
      ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_avatar_image_id_media_id_fk"
        FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_parent_id_fk"
        FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_avatar_image_id_media_id_fk"
        FOREIGN KEY ("version_avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "testimonials_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk"
        FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "testimonials_sort_order_idx" ON "testimonials" USING btree ("sort_order");
    CREATE INDEX IF NOT EXISTS "testimonials__status_idx" ON "testimonials" USING btree ("_status");
    CREATE INDEX IF NOT EXISTS "_testimonials_v_parent_idx" ON "_testimonials_v" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "_testimonials_v_latest_idx" ON "_testimonials_v" USING btree ("latest");
    CREATE INDEX IF NOT EXISTS "_testimonials_v_autosave_idx" ON "_testimonials_v" USING btree ("autosave");
    CREATE INDEX IF NOT EXISTS "_testimonials_v_version_version__status_idx" ON "_testimonials_v" USING btree ("version__status");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");

    -- ============== MARKETING FAQS ==============

    DO $$ BEGIN
      CREATE TYPE "public"."enum_marketing_faqs_surfaces" AS ENUM('brands','providers');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE TABLE IF NOT EXISTS "marketing_faqs" (
      "id" serial PRIMARY KEY NOT NULL,
      "question" varchar NOT NULL,
      "answer" jsonb NOT NULL,
      "sort_order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    -- select hasMany sub-table
    CREATE TABLE IF NOT EXISTS "marketing_faqs_surfaces" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "value" "enum_marketing_faqs_surfaces"
    );

    DO $$ BEGIN
      ALTER TABLE "marketing_faqs_surfaces" ADD CONSTRAINT "marketing_faqs_surfaces_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."marketing_faqs"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "marketing_faqs_id" integer;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_marketing_faqs_fk"
        FOREIGN KEY ("marketing_faqs_id") REFERENCES "public"."marketing_faqs"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "marketing_faqs_sort_order_idx" ON "marketing_faqs" USING btree ("sort_order");
    CREATE INDEX IF NOT EXISTS "marketing_faqs_surfaces_parent_idx" ON "marketing_faqs_surfaces" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "marketing_faqs_surfaces_order_idx" ON "marketing_faqs_surfaces" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_marketing_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("marketing_faqs_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_marketing_faqs_fk";
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_testimonials_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_marketing_faqs_id_idx";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_testimonials_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "marketing_faqs_id";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonials_id";

    DROP TABLE IF EXISTS "marketing_faqs_surfaces" CASCADE;
    DROP TABLE IF EXISTS "marketing_faqs" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_marketing_faqs_surfaces";

    DROP TABLE IF EXISTS "_testimonials_v" CASCADE;
    DROP TABLE IF EXISTS "testimonials" CASCADE;
    DROP TYPE IF EXISTS "public"."enum__testimonials_v_version_status";
    DROP TYPE IF EXISTS "public"."enum_testimonials_status";
  `)
}
