import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20241214_124128 from './20241214_124128';
import * as migration_20260222_003500_payload_3_77_compat from './20260222_003500_payload_3_77_compat';
import * as migration_20260403_173231 from './20260403_173231';
import * as migration_20260404_012349_add_guides_collection from './20260404_012349_add_guides_collection';
import * as migration_20260508_120000_blog_posts_editable from './20260508_120000_blog_posts_editable';
import * as migration_20260508_120100_blog_hero_image_upload from './20260508_120100_blog_hero_image_upload';
import * as migration_20260508_130000_customer_stories from './20260508_130000_customer_stories';
import * as migration_20260508_140000_home_page_global from './20260508_140000_home_page_global';
import * as migration_20260508_150000_brands_providers_globals from './20260508_150000_brands_providers_globals';
import * as migration_20260508_160000_testimonials_and_faqs from './20260508_160000_testimonials_and_faqs';
import * as migration_20260508_170000_company_team from './20260508_170000_company_team';

export const migrations = [
  {
    up: migration_20241125_222020_initial.up,
    down: migration_20241125_222020_initial.down,
    name: '20241125_222020_initial',
  },
  {
    up: migration_20241214_124128.up,
    down: migration_20241214_124128.down,
    name: '20241214_124128',
  },
  {
    up: migration_20260222_003500_payload_3_77_compat.up,
    down: migration_20260222_003500_payload_3_77_compat.down,
    name: '20260222_003500_payload_3_77_compat',
  },
  {
    up: migration_20260403_173231.up,
    down: migration_20260403_173231.down,
    name: '20260403_173231',
  },
  {
    up: migration_20260404_012349_add_guides_collection.up,
    down: migration_20260404_012349_add_guides_collection.down,
    name: '20260404_012349_add_guides_collection',
  },
  {
    up: migration_20260508_120000_blog_posts_editable.up,
    down: migration_20260508_120000_blog_posts_editable.down,
    name: '20260508_120000_blog_posts_editable',
  },
  {
    up: migration_20260508_120100_blog_hero_image_upload.up,
    down: migration_20260508_120100_blog_hero_image_upload.down,
    name: '20260508_120100_blog_hero_image_upload',
  },
  {
    up: migration_20260508_130000_customer_stories.up,
    down: migration_20260508_130000_customer_stories.down,
    name: '20260508_130000_customer_stories',
  },
  {
    up: migration_20260508_140000_home_page_global.up,
    down: migration_20260508_140000_home_page_global.down,
    name: '20260508_140000_home_page_global',
  },
  {
    up: migration_20260508_150000_brands_providers_globals.up,
    down: migration_20260508_150000_brands_providers_globals.down,
    name: '20260508_150000_brands_providers_globals',
  },
  {
    up: migration_20260508_160000_testimonials_and_faqs.up,
    down: migration_20260508_160000_testimonials_and_faqs.down,
    name: '20260508_160000_testimonials_and_faqs',
  },
  {
    up: migration_20260508_170000_company_team.up,
    down: migration_20260508_170000_company_team.down,
    name: '20260508_170000_company_team',
  },
];
