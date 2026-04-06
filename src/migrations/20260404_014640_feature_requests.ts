import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_feature_requests_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_feature_requests_audience" AS ENUM('brand', 'provider', 'both');
  CREATE TYPE "public"."enum__feature_requests_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__feature_requests_v_version_audience" AS ENUM('brand', 'provider', 'both');
  CREATE TABLE "feature_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"description" varchar,
  	"status" "enum_feature_requests_status" DEFAULT 'new',
  	"votes" numeric DEFAULT 0,
  	"submitter_name" varchar,
  	"submitter_email" varchar,
  	"audience" "enum_feature_requests_audience" DEFAULT 'both',
  	"category_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_feature_requests_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_feature_requests_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_description" varchar,
  	"version_status" "enum__feature_requests_v_version_status" DEFAULT 'new',
  	"version_votes" numeric DEFAULT 0,
  	"version_submitter_name" varchar,
  	"version_submitter_email" varchar,
  	"version_audience" "enum__feature_requests_v_version_audience" DEFAULT 'both',
  	"version_category_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__feature_requests_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "feature_requests_id" integer;
  ALTER TABLE "feature_requests" ADD CONSTRAINT "feature_requests_category_id_kb_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."kb_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_feature_requests_v" ADD CONSTRAINT "_feature_requests_v_parent_id_feature_requests_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."feature_requests"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_feature_requests_v" ADD CONSTRAINT "_feature_requests_v_version_category_id_kb_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."kb_categories"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "feature_requests_slug_idx" ON "feature_requests" USING btree ("slug");
  CREATE INDEX "feature_requests_category_idx" ON "feature_requests" USING btree ("category_id");
  CREATE INDEX "feature_requests_updated_at_idx" ON "feature_requests" USING btree ("updated_at");
  CREATE INDEX "feature_requests_created_at_idx" ON "feature_requests" USING btree ("created_at");
  CREATE INDEX "feature_requests__status_idx" ON "feature_requests" USING btree ("_status");
  CREATE INDEX "_feature_requests_v_parent_idx" ON "_feature_requests_v" USING btree ("parent_id");
  CREATE INDEX "_feature_requests_v_version_version_slug_idx" ON "_feature_requests_v" USING btree ("version_slug");
  CREATE INDEX "_feature_requests_v_version_version_category_idx" ON "_feature_requests_v" USING btree ("version_category_id");
  CREATE INDEX "_feature_requests_v_version_version_updated_at_idx" ON "_feature_requests_v" USING btree ("version_updated_at");
  CREATE INDEX "_feature_requests_v_version_version_created_at_idx" ON "_feature_requests_v" USING btree ("version_created_at");
  CREATE INDEX "_feature_requests_v_version_version__status_idx" ON "_feature_requests_v" USING btree ("version__status");
  CREATE INDEX "_feature_requests_v_created_at_idx" ON "_feature_requests_v" USING btree ("created_at");
  CREATE INDEX "_feature_requests_v_updated_at_idx" ON "_feature_requests_v" USING btree ("updated_at");
  CREATE INDEX "_feature_requests_v_latest_idx" ON "_feature_requests_v" USING btree ("latest");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_feature_requests_fk" FOREIGN KEY ("feature_requests_id") REFERENCES "public"."feature_requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_feature_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("feature_requests_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "feature_requests" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_feature_requests_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "feature_requests" CASCADE;
  DROP TABLE "_feature_requests_v" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_feature_requests_fk";
  
  DROP INDEX "payload_locked_documents_rels_feature_requests_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "feature_requests_id";
  DROP TYPE "public"."enum_feature_requests_status";
  DROP TYPE "public"."enum_feature_requests_audience";
  DROP TYPE "public"."enum__feature_requests_v_version_status";
  DROP TYPE "public"."enum__feature_requests_v_version_audience";`)
}
