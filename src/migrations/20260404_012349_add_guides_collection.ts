import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_guides_audience" AS ENUM('brand', 'provider', 'ops', 'both');
  CREATE TYPE "public"."enum_guides_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__guides_v_version_audience" AS ENUM('brand', 'provider', 'ops', 'both');
  CREATE TYPE "public"."enum__guides_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "guides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"loom_url" varchar,
  	"loom_embed_id" varchar,
  	"audience" "enum_guides_audience" DEFAULT 'both',
  	"category_id" integer,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_guides_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_guides_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_loom_url" varchar,
  	"version_loom_embed_id" varchar,
  	"version_audience" "enum__guides_v_version_audience" DEFAULT 'both',
  	"version_category_id" integer,
  	"version_sort_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__guides_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "guides_id" integer;
  ALTER TABLE "guides" ADD CONSTRAINT "guides_category_id_kb_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."kb_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_parent_id_guides_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."guides"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_guides_v" ADD CONSTRAINT "_guides_v_version_category_id_kb_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."kb_categories"("id") ON DELETE set null ON UPDATE no action;
  CREATE UNIQUE INDEX "guides_slug_idx" ON "guides" USING btree ("slug");
  CREATE INDEX "guides_category_idx" ON "guides" USING btree ("category_id");
  CREATE INDEX "guides_updated_at_idx" ON "guides" USING btree ("updated_at");
  CREATE INDEX "guides_created_at_idx" ON "guides" USING btree ("created_at");
  CREATE INDEX "guides__status_idx" ON "guides" USING btree ("_status");
  CREATE INDEX "_guides_v_parent_idx" ON "_guides_v" USING btree ("parent_id");
  CREATE INDEX "_guides_v_version_version_slug_idx" ON "_guides_v" USING btree ("version_slug");
  CREATE INDEX "_guides_v_version_version_category_idx" ON "_guides_v" USING btree ("version_category_id");
  CREATE INDEX "_guides_v_version_version_updated_at_idx" ON "_guides_v" USING btree ("version_updated_at");
  CREATE INDEX "_guides_v_version_version_created_at_idx" ON "_guides_v" USING btree ("version_created_at");
  CREATE INDEX "_guides_v_version_version__status_idx" ON "_guides_v" USING btree ("version__status");
  CREATE INDEX "_guides_v_created_at_idx" ON "_guides_v" USING btree ("created_at");
  CREATE INDEX "_guides_v_updated_at_idx" ON "_guides_v" USING btree ("updated_at");
  CREATE INDEX "_guides_v_latest_idx" ON "_guides_v" USING btree ("latest");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_guides_fk" FOREIGN KEY ("guides_id") REFERENCES "public"."guides"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_guides_id_idx" ON "payload_locked_documents_rels" USING btree ("guides_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "guides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_guides_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "guides" CASCADE;
  DROP TABLE "_guides_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_guides_fk";
  
  DROP INDEX "payload_locked_documents_rels_guides_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "guides_id";
  DROP TYPE "public"."enum_guides_audience";
  DROP TYPE "public"."enum_guides_status";
  DROP TYPE "public"."enum__guides_v_version_audience";
  DROP TYPE "public"."enum__guides_v_version_status";`)
}
