import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the `contact-page` global so /contact-us hero + 2-up path
 * cards + offices + LinkedIn link become editable.
 *
 * The form itself is built via the form-builder plugin; this global
 * only owns the surrounding marketing copy.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contact_page" (
      "id" serial PRIMARY KEY NOT NULL,
      "hero_headline" varchar,
      "hero_body" varchar,
      "form_section_eyebrow" varchar,
      "form_section_heading" varchar,
      "form_section_body" varchar,
      "offices_heading" varchar,
      "connect_heading" varchar,
      "linkedin_url" varchar,
      "updated_at" timestamp(3) with time zone,
      "created_at" timestamp(3) with time zone
    );

    CREATE TABLE IF NOT EXISTS "contact_page_paths" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "eyebrow" varchar,
      "heading" varchar,
      "body" varchar,
      "href" varchar,
      "cta" varchar
    );

    CREATE TABLE IF NOT EXISTS "contact_page_offices" (
      "_order" integer NOT NULL,
      "_parent_id" integer NOT NULL,
      "id" varchar PRIMARY KEY NOT NULL,
      "city" varchar,
      "line1" varchar,
      "line2" varchar
    );

    DO $$ BEGIN
      ALTER TABLE "contact_page_paths" ADD CONSTRAINT "contact_page_paths_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    DO $$ BEGIN
      ALTER TABLE "contact_page_offices" ADD CONSTRAINT "contact_page_offices_parent_id_fk"
        FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
    EXCEPTION WHEN duplicate_object THEN null; END $$;

    CREATE INDEX IF NOT EXISTS "contact_page_paths_parent_idx" ON "contact_page_paths" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "contact_page_paths_order_idx" ON "contact_page_paths" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "contact_page_offices_parent_idx" ON "contact_page_offices" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "contact_page_offices_order_idx" ON "contact_page_offices" USING btree ("_order");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "contact_page_offices" CASCADE;
    DROP TABLE IF EXISTS "contact_page_paths" CASCADE;
    DROP TABLE IF EXISTS "contact_page" CASCADE;
  `)
}
