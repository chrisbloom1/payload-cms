import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the `brands-page` and `providers-page` globals so /brands and
 * /providers marketing copy is editable in the Payload admin instead
 * of being hardcoded in the route.
 *
 * Heavy widgets (Brandsintroanimation, Animationmap, Pricingmatrix,
 * Mockupterms, FrameworkChevrons, CriteriaCarousel) and shared layouts
 * stay in code — those are design-system pieces, not editor content.
 *
 * Both globals follow the Payload single-row global convention plus
 * array sub-tables for repeatable items (verticals, framework steps,
 * benefit rows, criteria, hero icon tiles).
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- ===================== BRANDS PAGE =====================

    CREATE TABLE IF NOT EXISTS "brands_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_headline" varchar,
      "hero_body" varchar,
      "built_for_heading" varchar,
      "built_for_body" varchar,
      "coast_to_coast_heading" varchar,
      "coast_to_coast_body" varchar,
      "framework_heading" varchar,
      "framework_body" varchar,
      "pricing_heading" varchar,
      "pricing_body" jsonb,
      "bloom_pay_heading" varchar,
      "bloom_pay_body" varchar,
      "cta_heading" varchar,
      "cta_button_label" varchar,
      "cta_button_href" varchar,
      "faq_heading" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    CREATE TABLE IF NOT EXISTS "brands_page_verticals" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar,
      "image_id" integer,
      "image_url" varchar
    );

    CREATE TABLE IF NOT EXISTS "brands_page_framework_steps" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar,
      "description" varchar
    );

    DO $$ BEGIN
      ALTER TABLE "brands_page_verticals" ADD CONSTRAINT "brands_page_verticals_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "brands_page_verticals" ADD CONSTRAINT "brands_page_verticals_image_id_media_id_fk"
        FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "brands_page_framework_steps" ADD CONSTRAINT "brands_page_framework_steps_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "brands_page_verticals_parent_idx" ON "brands_page_verticals" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "brands_page_verticals_order_idx" ON "brands_page_verticals" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "brands_page_framework_steps_parent_idx" ON "brands_page_framework_steps" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "brands_page_framework_steps_order_idx" ON "brands_page_framework_steps" USING btree ("_order");

    -- ===================== PROVIDERS PAGE =====================

    CREATE TABLE IF NOT EXISTS "providers_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_headline" varchar,
      "hero_body" varchar,
      "criteria_heading" varchar,
      "criteria_body" varchar,
      "framework_heading" varchar,
      "framework_body" varchar,
      "cta_heading" varchar,
      "cta_button_label" varchar,
      "cta_button_href" varchar,
      "faq_heading" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    CREATE TABLE IF NOT EXISTS "providers_page_hero_icon_tiles" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "image_id" integer,
      "image_url" varchar,
      "alt" varchar
    );

    CREATE TABLE IF NOT EXISTS "providers_page_benefits" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "eyebrow" varchar,
      "heading" varchar,
      "body" varchar,
      "image_id" integer,
      "image_url" varchar,
      "image_alt" varchar
    );

    CREATE TABLE IF NOT EXISTS "providers_page_criteria_items" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar,
      "title" varchar,
      "description" varchar
    );

    CREATE TABLE IF NOT EXISTS "providers_page_framework_steps" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "label" varchar,
      "description" varchar
    );

    DO $$ BEGIN
      ALTER TABLE "providers_page_hero_icon_tiles" ADD CONSTRAINT "providers_page_hero_icon_tiles_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "providers_page_hero_icon_tiles" ADD CONSTRAINT "providers_page_hero_icon_tiles_image_id_media_id_fk"
        FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "providers_page_benefits" ADD CONSTRAINT "providers_page_benefits_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "providers_page_benefits" ADD CONSTRAINT "providers_page_benefits_image_id_media_id_fk"
        FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "providers_page_criteria_items" ADD CONSTRAINT "providers_page_criteria_items_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "providers_page_framework_steps" ADD CONSTRAINT "providers_page_framework_steps_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "providers_page_hero_icon_tiles_parent_idx" ON "providers_page_hero_icon_tiles" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "providers_page_hero_icon_tiles_order_idx" ON "providers_page_hero_icon_tiles" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "providers_page_benefits_parent_idx" ON "providers_page_benefits" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "providers_page_benefits_order_idx" ON "providers_page_benefits" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "providers_page_criteria_items_parent_idx" ON "providers_page_criteria_items" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "providers_page_criteria_items_order_idx" ON "providers_page_criteria_items" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "providers_page_framework_steps_parent_idx" ON "providers_page_framework_steps" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "providers_page_framework_steps_order_idx" ON "providers_page_framework_steps" USING btree ("_order");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "providers_page_framework_steps" CASCADE;
    DROP TABLE IF EXISTS "providers_page_criteria_items" CASCADE;
    DROP TABLE IF EXISTS "providers_page_benefits" CASCADE;
    DROP TABLE IF EXISTS "providers_page_hero_icon_tiles" CASCADE;
    DROP TABLE IF EXISTS "providers_page" CASCADE;
    DROP TABLE IF EXISTS "brands_page_framework_steps" CASCADE;
    DROP TABLE IF EXISTS "brands_page_verticals" CASCADE;
    DROP TABLE IF EXISTS "brands_page" CASCADE;
  `)
}
