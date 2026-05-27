import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Fix the marketing_faqs_surfaces sub-table column convention.
 *
 * Background: `select` fields with `hasMany: true` produce a sub-table
 * via Payload's drizzle adapter. Unlike `array` field sub-tables (which
 * use `_order` and `_parent_id` with underscore prefixes), `select
 * hasMany` sub-tables use `order` and `parent_id` (no underscore) per
 * @payloadcms/drizzle/dist/schema/traverseFields.js.
 *
 * The previous migration (20260508_160000_testimonials_and_faqs)
 * created the table with the array convention by mistake. The runtime
 * then errored at /admin and any FAQ query with:
 *   error: column marketing_faqs_surfaces.parent_id does not exist
 *   hint: Perhaps you meant to reference the column "..._parent_id"
 *
 * Cleanest fix is to drop and rebuild the table since it's still
 * empty (no seed has run yet). CASCADE removes the wrongly-named
 * indexes and FK along with it.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "marketing_faqs_surfaces" CASCADE;

    CREATE TABLE "marketing_faqs_surfaces" (
      "order" integer NOT NULL,
      "parent_id" integer NOT NULL,
      "id" serial PRIMARY KEY NOT NULL,
      "value" "enum_marketing_faqs_surfaces"
    );

    ALTER TABLE "marketing_faqs_surfaces"
      ADD CONSTRAINT "marketing_faqs_surfaces_parent_fk"
      FOREIGN KEY ("parent_id") REFERENCES "public"."marketing_faqs"("id")
      ON DELETE cascade ON UPDATE no action;

    CREATE INDEX "marketing_faqs_surfaces_parent_idx"
      ON "marketing_faqs_surfaces" USING btree ("parent_id");
    CREATE INDEX "marketing_faqs_surfaces_order_idx"
      ON "marketing_faqs_surfaces" USING btree ("order");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "marketing_faqs_surfaces" CASCADE;
  `)
}
