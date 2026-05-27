import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds a Media-relationship `hero_image_id` column to `posts` (and the
 * mirrored versions table) so editors can upload hero images via the
 * Payload Media library instead of pasting URLs into `heroUrl`.
 *
 * `heroUrl` stays in place as a fallback for the legacy seed data —
 * the route reads heroImage first and falls back to heroUrl if blank.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "hero_image_id" integer;
    ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "version_hero_image_id" integer;

    DO $$ BEGIN
      ALTER TABLE "posts"
        ADD CONSTRAINT "posts_hero_image_id_media_id_fk"
        FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    DO $$ BEGIN
      ALTER TABLE "_posts_v"
        ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk"
        FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id")
        ON DELETE set null ON UPDATE no action;
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "posts" ("hero_image_id");
    CREATE INDEX IF NOT EXISTS "_posts_v_version_hero_image_idx" ON "_posts_v" ("version_hero_image_id");
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP INDEX IF EXISTS "posts_hero_image_idx";
    DROP INDEX IF EXISTS "_posts_v_version_hero_image_idx";

    ALTER TABLE "posts" DROP CONSTRAINT IF EXISTS "posts_hero_image_id_media_id_fk";
    ALTER TABLE "_posts_v" DROP CONSTRAINT IF EXISTS "_posts_v_version_hero_image_id_media_id_fk";

    ALTER TABLE "posts" DROP COLUMN IF EXISTS "hero_image_id";
    ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_hero_image_id";
  `)
}
