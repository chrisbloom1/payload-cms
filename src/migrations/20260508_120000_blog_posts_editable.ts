import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Adds the team-editable display fields to the `posts` collection so the
 * marketing /blog flow can read from Payload instead of the hardcoded
 * BLOG_POSTS array in src/lib/blog-posts.ts.
 *
 * Mirrors each new column on the versions table (`_posts_v`) with the
 * `version_` prefix per Payload's drafts/versions convention.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "excerpt" varchar;
    ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "hero_url" varchar;
    ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "display_category" varchar;
    ALTER TABLE "posts" ADD COLUMN IF NOT EXISTS "display_author" varchar;

    ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "version_excerpt" varchar;
    ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "version_hero_url" varchar;
    ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "version_display_category" varchar;
    ALTER TABLE "_posts_v" ADD COLUMN IF NOT EXISTS "version_display_author" varchar;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" DROP COLUMN IF EXISTS "excerpt";
    ALTER TABLE "posts" DROP COLUMN IF EXISTS "hero_url";
    ALTER TABLE "posts" DROP COLUMN IF EXISTS "display_category";
    ALTER TABLE "posts" DROP COLUMN IF EXISTS "display_author";

    ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_excerpt";
    ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_hero_url";
    ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_display_category";
    ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "version_display_author";
  `)
}
