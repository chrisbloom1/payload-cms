import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the customer-stories collection so the team can edit case
 * studies (currently hardcoded in src/lib/customer-stories.ts) from
 * the Payload admin UI.
 *
 * Mirrors the convention set by the existing posts/articles/guides
 * collections: main table + array sub-tables + a parallel versions
 * table set with `_<name>_v` / `version_` prefixes. All `IF NOT
 * EXISTS` and `IF EXISTS` guards so re-runs are safe.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- Enums --
    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_card_theme" AS ENUM('navy','navyDeep','teal','mint','cream','lavender','amber');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_card_align" AS ENUM('left','right');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_logo_type" AS ENUM('monochrome','color');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_logo_mono_color" AS ENUM('white','black');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_nodes_value" AS ENUM('Build','Deliver','Service');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum_customer_stories_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Mirror enums for the versions table --
    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_card_theme" AS ENUM('navy','navyDeep','teal','mint','cream','lavender','amber');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_card_align" AS ENUM('left','right');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_logo_type" AS ENUM('monochrome','color');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_logo_mono_color" AS ENUM('white','black');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_nodes_value" AS ENUM('Build','Deliver','Service');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      CREATE TYPE "public"."enum__customer_stories_v_version_status" AS ENUM('draft','published');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Main table --
    CREATE TABLE IF NOT EXISTS "customer_stories" (
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar NOT NULL,
      "slug" varchar,
      "slug_lock" boolean DEFAULT true,
      "card_theme" "enum_customer_stories_card_theme" DEFAULT 'cream',
      "card_align" "enum_customer_stories_card_align" DEFAULT 'left',
      "sort_order" numeric DEFAULT 0,
      "hero_image_id" integer,
      "hero_url" varchar,
      "logo_image_id" integer,
      "logo_url" varchar,
      "logo_dark_image_id" integer,
      "logo_dark_url" varchar,
      "logo_alt" varchar NOT NULL,
      "logo_type" "enum_customer_stories_logo_type" DEFAULT 'monochrome',
      "logo_mono_color" "enum_customer_stories_logo_mono_color" DEFAULT 'black',
      "intro" jsonb,
      "body" jsonb,
      "quote_text" varchar,
      "quote_author" varchar,
      "quote_role" varchar,
      "outro" jsonb,
      "closing" jsonb,
      "meta_title" varchar,
      "meta_image_id" integer,
      "meta_description" varchar,
      "published_at" timestamp(3) with time zone,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "_status" "enum_customer_stories_status" DEFAULT 'draft'
    );

    -- Array sub-tables --
    CREATE TABLE IF NOT EXISTS "customer_stories_top_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "benefit" varchar
    );

    CREATE TABLE IF NOT EXISTS "customer_stories_nodes" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "value" "enum_customer_stories_nodes_value"
    );

    CREATE TABLE IF NOT EXISTS "customer_stories_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "title" varchar,
      "description" varchar
    );

    -- Versions table --
    CREATE TABLE IF NOT EXISTS "_customer_stories_v" (
      "id" serial PRIMARY KEY NOT NULL,
      "parent_id" integer,
      "version_title" varchar,
      "version_slug" varchar,
      "version_slug_lock" boolean DEFAULT true,
      "version_card_theme" "enum__customer_stories_v_version_card_theme" DEFAULT 'cream',
      "version_card_align" "enum__customer_stories_v_version_card_align" DEFAULT 'left',
      "version_sort_order" numeric DEFAULT 0,
      "version_hero_image_id" integer,
      "version_hero_url" varchar,
      "version_logo_image_id" integer,
      "version_logo_url" varchar,
      "version_logo_dark_image_id" integer,
      "version_logo_dark_url" varchar,
      "version_logo_alt" varchar,
      "version_logo_type" "enum__customer_stories_v_version_logo_type" DEFAULT 'monochrome',
      "version_logo_mono_color" "enum__customer_stories_v_version_logo_mono_color" DEFAULT 'black',
      "version_intro" jsonb,
      "version_body" jsonb,
      "version_quote_text" varchar,
      "version_quote_author" varchar,
      "version_quote_role" varchar,
      "version_outro" jsonb,
      "version_closing" jsonb,
      "version_meta_title" varchar,
      "version_meta_image_id" integer,
      "version_meta_description" varchar,
      "version_published_at" timestamp(3) with time zone,
      "version_updated_at" timestamp(3) with time zone,
      "version_created_at" timestamp(3) with time zone,
      "version__status" "enum__customer_stories_v_version_status" DEFAULT 'draft',
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "latest" boolean,
      "autosave" boolean
    );

    CREATE TABLE IF NOT EXISTS "_customer_stories_v_version_top_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "benefit" varchar,
      "_uuid" varchar
    );

    CREATE TABLE IF NOT EXISTS "_customer_stories_v_version_nodes" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "value" "enum__customer_stories_v_version_nodes_value",
      "_uuid" varchar
    );

    CREATE TABLE IF NOT EXISTS "_customer_stories_v_version_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "title" varchar,
      "description" varchar,
      "_uuid" varchar
    );

    -- Lock-table column --
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "customer_stories_id" integer;

    -- Foreign keys --
    DO $$ BEGIN
      ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_hero_image_id_media_id_fk"
        FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_logo_image_id_media_id_fk"
        FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_logo_dark_image_id_media_id_fk"
        FOREIGN KEY ("logo_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_meta_image_id_media_id_fk"
        FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories_top_benefits" ADD CONSTRAINT "customer_stories_top_benefits_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories_nodes" ADD CONSTRAINT "customer_stories_nodes_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "customer_stories_benefits" ADD CONSTRAINT "customer_stories_benefits_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_parent_id_customer_stories_id_fk"
        FOREIGN KEY ("parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_hero_image_id_media_id_fk"
        FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_logo_image_id_media_id_fk"
        FOREIGN KEY ("version_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_logo_dark_image_id_media_id_fk"
        FOREIGN KEY ("version_logo_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_meta_image_id_media_id_fk"
        FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v_version_top_benefits" ADD CONSTRAINT "_customer_stories_v_version_top_benefits_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v_version_nodes" ADD CONSTRAINT "_customer_stories_v_version_nodes_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "_customer_stories_v_version_benefits" ADD CONSTRAINT "_customer_stories_v_version_benefits_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_customer_stories_fk"
        FOREIGN KEY ("customer_stories_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Indexes --
    CREATE UNIQUE INDEX IF NOT EXISTS "customer_stories_slug_idx" ON "customer_stories" USING btree ("slug");
    CREATE INDEX IF NOT EXISTS "customer_stories_sort_order_idx" ON "customer_stories" USING btree ("sort_order");
    CREATE INDEX IF NOT EXISTS "customer_stories_updated_at_idx" ON "customer_stories" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "customer_stories_created_at_idx" ON "customer_stories" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "customer_stories__status_idx" ON "customer_stories" USING btree ("_status");

    CREATE INDEX IF NOT EXISTS "customer_stories_top_benefits_parent_idx" ON "customer_stories_top_benefits" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "customer_stories_top_benefits_order_idx" ON "customer_stories_top_benefits" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "customer_stories_nodes_parent_idx" ON "customer_stories_nodes" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "customer_stories_nodes_order_idx" ON "customer_stories_nodes" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "customer_stories_benefits_parent_idx" ON "customer_stories_benefits" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "customer_stories_benefits_order_idx" ON "customer_stories_benefits" USING btree ("_order");

    CREATE INDEX IF NOT EXISTS "_customer_stories_v_parent_idx" ON "_customer_stories_v" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_version_slug_idx" ON "_customer_stories_v" USING btree ("version_slug");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_version_updated_at_idx" ON "_customer_stories_v" USING btree ("version_updated_at");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_version_created_at_idx" ON "_customer_stories_v" USING btree ("version_created_at");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_version__status_idx" ON "_customer_stories_v" USING btree ("version__status");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_created_at_idx" ON "_customer_stories_v" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_updated_at_idx" ON "_customer_stories_v" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_latest_idx" ON "_customer_stories_v" USING btree ("latest");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_autosave_idx" ON "_customer_stories_v" USING btree ("autosave");

    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_top_benefits_parent_idx" ON "_customer_stories_v_version_top_benefits" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_top_benefits_order_idx" ON "_customer_stories_v_version_top_benefits" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_nodes_parent_idx" ON "_customer_stories_v_version_nodes" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_nodes_order_idx" ON "_customer_stories_v_version_nodes" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_benefits_parent_idx" ON "_customer_stories_v_version_benefits" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "_customer_stories_v_version_benefits_order_idx" ON "_customer_stories_v_version_benefits" USING btree ("_order");

    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_customer_stories_id_idx" ON "payload_locked_documents_rels" USING btree ("customer_stories_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_customer_stories_fk";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_customer_stories_id_idx";
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "customer_stories_id";

    DROP TABLE IF EXISTS "_customer_stories_v_version_benefits" CASCADE;
    DROP TABLE IF EXISTS "_customer_stories_v_version_nodes" CASCADE;
    DROP TABLE IF EXISTS "_customer_stories_v_version_top_benefits" CASCADE;
    DROP TABLE IF EXISTS "_customer_stories_v" CASCADE;
    DROP TABLE IF EXISTS "customer_stories_benefits" CASCADE;
    DROP TABLE IF EXISTS "customer_stories_nodes" CASCADE;
    DROP TABLE IF EXISTS "customer_stories_top_benefits" CASCADE;
    DROP TABLE IF EXISTS "customer_stories" CASCADE;

    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_status";
    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_nodes_value";
    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_logo_mono_color";
    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_logo_type";
    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_card_align";
    DROP TYPE IF EXISTS "public"."enum__customer_stories_v_version_card_theme";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_status";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_nodes_value";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_logo_mono_color";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_logo_type";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_card_align";
    DROP TYPE IF EXISTS "public"."enum_customer_stories_card_theme";
  `)
}
