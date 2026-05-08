import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the `home_page` global so the marketing home page (hero copy,
 * rotating words, logo marquee, section copy, ecosystem stats) is
 * editable by the team via the Payload admin.
 *
 * Globals in Payload are single-row tables. Array sub-fields use the
 * same `_order/_parent_id/id` convention as collection arrays.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    -- Enums --
    DO $$ BEGIN
      CREATE TYPE "public"."enum_home_page_ecosystem_stats_label_color" AS ENUM('orange','coral','red','navy');
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Main global row table --
    CREATE TABLE IF NOT EXISTS "home_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_headline" varchar DEFAULT 'Hardware shouldn''t be hard.',
      "hero_subheading_prefix" varchar DEFAULT 'We help make',
      "hero_subheading_suffix" varchar DEFAULT 'easier.',
      "hero_chat_placeholder" varchar DEFAULT 'Describe your product''s supply chain needs',
      "hero_chat_button_label" varchar DEFAULT 'Chat now',
      "hero_chat_prefill_url" varchar DEFAULT 'https://app.bloomnetwork.ai/marketplace/request/new',
      "hero_badge_text" varchar DEFAULT 'Start for free now!',
      "hero_tagline" varchar DEFAULT 'Bloom helps leading mobility, energy, robotics brands scale faster through our vetted network',
      "discover_heading" varchar,
      "discover_body" varchar,
      "manage_heading" varchar,
      "manage_body" varchar,
      "pay_heading" varchar,
      "pay_body" varchar,
      "ecosystem_heading" varchar,
      "ecosystem_body" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    -- Hero rotating words --
    CREATE TABLE IF NOT EXISTS "home_page_hero_rotating_words" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "word" varchar
    );

    -- Logo marquee row 1 --
    CREATE TABLE IF NOT EXISTS "home_page_logo_marquee_row1" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "logo_image_id" integer,
      "logo_url" varchar,
      "alt" varchar,
      "width" numeric DEFAULT 200,
      "height" numeric DEFAULT 60
    );

    -- Logo marquee row 2 --
    CREATE TABLE IF NOT EXISTS "home_page_logo_marquee_row2" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "logo_image_id" integer,
      "logo_url" varchar,
      "alt" varchar,
      "width" numeric DEFAULT 200,
      "height" numeric DEFAULT 60
    );

    -- Ecosystem stats --
    CREATE TABLE IF NOT EXISTS "home_page_ecosystem_stats" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "value" numeric,
      "suffix" varchar DEFAULT '%',
      "label" varchar,
      "description" varchar,
      "label_color" "enum_home_page_ecosystem_stats_label_color" DEFAULT 'orange'
    );

    -- Foreign keys --
    DO $$ BEGIN
      ALTER TABLE "home_page_hero_rotating_words" ADD CONSTRAINT "home_page_hero_rotating_words_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "home_page_logo_marquee_row1" ADD CONSTRAINT "home_page_logo_marquee_row1_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "home_page_logo_marquee_row1" ADD CONSTRAINT "home_page_logo_marquee_row1_logo_image_id_media_id_fk"
        FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "home_page_logo_marquee_row2" ADD CONSTRAINT "home_page_logo_marquee_row2_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "home_page_logo_marquee_row2" ADD CONSTRAINT "home_page_logo_marquee_row2_logo_image_id_media_id_fk"
        FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "home_page_ecosystem_stats" ADD CONSTRAINT "home_page_ecosystem_stats_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    -- Indexes --
    CREATE INDEX IF NOT EXISTS "home_page_hero_rotating_words_parent_idx" ON "home_page_hero_rotating_words" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_page_hero_rotating_words_order_idx" ON "home_page_hero_rotating_words" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_page_logo_marquee_row1_parent_idx" ON "home_page_logo_marquee_row1" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_page_logo_marquee_row1_order_idx" ON "home_page_logo_marquee_row1" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_page_logo_marquee_row2_parent_idx" ON "home_page_logo_marquee_row2" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_page_logo_marquee_row2_order_idx" ON "home_page_logo_marquee_row2" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "home_page_ecosystem_stats_parent_idx" ON "home_page_ecosystem_stats" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "home_page_ecosystem_stats_order_idx" ON "home_page_ecosystem_stats" USING btree ("_order");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "home_page_ecosystem_stats" CASCADE;
    DROP TABLE IF EXISTS "home_page_logo_marquee_row2" CASCADE;
    DROP TABLE IF EXISTS "home_page_logo_marquee_row1" CASCADE;
    DROP TABLE IF EXISTS "home_page_hero_rotating_words" CASCADE;
    DROP TABLE IF EXISTS "home_page" CASCADE;
    DROP TYPE IF EXISTS "public"."enum_home_page_ecosystem_stats_label_color";
  `)
}
