import * as migration_20241125_222020_initial from './20241125_222020_initial';
import * as migration_20241214_124128 from './20241214_124128';
import * as migration_20260222_003500_payload_3_77_compat from './20260222_003500_payload_3_77_compat';
import * as migration_20260403_173231 from './20260403_173231';
import * as migration_20260404_012349_add_guides_collection from './20260404_012349_add_guides_collection';
import * as migration_20260508_120000_blog_posts_editable from './20260508_120000_blog_posts_editable';
import * as migration_20260508_120100_blog_hero_image_upload from './20260508_120100_blog_hero_image_upload';
import * as migration_20260508_130000_customer_stories from './20260508_130000_customer_stories';

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
];
