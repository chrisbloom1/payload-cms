import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_customer_stories_nodes_value" AS ENUM('Build', 'Deliver', 'Service');
  CREATE TYPE "public"."enum_customer_stories_card_theme" AS ENUM('navy', 'navyDeep', 'teal', 'mint', 'cream', 'lavender', 'amber');
  CREATE TYPE "public"."enum_customer_stories_card_align" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_customer_stories_logo_type" AS ENUM('monochrome', 'color');
  CREATE TYPE "public"."enum_customer_stories_logo_mono_color" AS ENUM('white', 'black');
  CREATE TYPE "public"."enum_customer_stories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__customer_stories_v_version_nodes_value" AS ENUM('Build', 'Deliver', 'Service');
  CREATE TYPE "public"."enum__customer_stories_v_version_card_theme" AS ENUM('navy', 'navyDeep', 'teal', 'mint', 'cream', 'lavender', 'amber');
  CREATE TYPE "public"."enum__customer_stories_v_version_card_align" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__customer_stories_v_version_logo_type" AS ENUM('monochrome', 'color');
  CREATE TYPE "public"."enum__customer_stories_v_version_logo_mono_color" AS ENUM('white', 'black');
  CREATE TYPE "public"."enum__customer_stories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_testimonials_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_marketing_faqs_surfaces" AS ENUM('brands', 'providers');
  CREATE TYPE "public"."enum_team_members_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__team_members_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_mcp_audit_log_tool" AS ENUM('payload_create', 'payload_update', 'payload_delete', 'payload_publish', 'payload_update_global');
  CREATE TYPE "public"."enum_mcp_audit_log_status" AS ENUM('success', 'error');
  CREATE TYPE "public"."enum_home_page_ecosystem_stats_label_color" AS ENUM('orange', 'coral', 'red', 'navy');
  CREATE TABLE "customer_stories_top_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"benefit" varchar
  );
  
  CREATE TABLE "customer_stories_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" "enum_customer_stories_nodes_value"
  );
  
  CREATE TABLE "customer_stories_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "customer_stories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"card_theme" "enum_customer_stories_card_theme" DEFAULT 'cream',
  	"card_align" "enum_customer_stories_card_align" DEFAULT 'left',
  	"sort_order" numeric DEFAULT 0,
  	"hero_image_id" integer,
  	"hero_url" varchar,
  	"logo_image_id" integer,
  	"logo_url" varchar,
  	"logo_dark_image_id" integer,
  	"logo_dark_url" varchar,
  	"logo_alt" varchar,
  	"logo_type" "enum_customer_stories_logo_type" DEFAULT 'monochrome',
  	"logo_mono_color" "enum_customer_stories_logo_mono_color" DEFAULT 'black',
  	"intro" jsonb,
  	"body" jsonb,
  	"quote_text" varchar,
  	"quote_author" varchar,
  	"quote_role" varchar,
  	"outro" jsonb,
  	"closing" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_customer_stories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_customer_stories_v_version_top_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"benefit" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_customer_stories_v_version_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" "enum__customer_stories_v_version_nodes_value",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_customer_stories_v_version_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_customer_stories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_card_theme" "enum__customer_stories_v_version_card_theme" DEFAULT 'cream',
  	"version_card_align" "enum__customer_stories_v_version_card_align" DEFAULT 'left',
  	"version_sort_order" numeric DEFAULT 0,
  	"version_hero_image_id" integer,
  	"version_hero_url" varchar,
  	"version_logo_image_id" integer,
  	"version_logo_url" varchar,
  	"version_logo_dark_image_id" integer,
  	"version_logo_dark_url" varchar,
  	"version_logo_alt" varchar,
  	"version_logo_type" "enum__customer_stories_v_version_logo_type" DEFAULT 'monochrome',
  	"version_logo_mono_color" "enum__customer_stories_v_version_logo_mono_color" DEFAULT 'black',
  	"version_intro" jsonb,
  	"version_body" jsonb,
  	"version_quote_text" varchar,
  	"version_quote_author" varchar,
  	"version_quote_role" varchar,
  	"version_outro" jsonb,
  	"version_closing" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__customer_stories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"title" varchar,
  	"company" varchar,
  	"avatar_image_id" integer,
  	"avatar_url" varchar,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_testimonials_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_testimonials_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_quote" varchar,
  	"version_author" varchar,
  	"version_title" varchar,
  	"version_company" varchar,
  	"version_avatar_image_id" integer,
  	"version_avatar_url" varchar,
  	"version_sort_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__testimonials_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "marketing_faqs_surfaces" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_marketing_faqs_surfaces",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "marketing_faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "team_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"title" varchar,
  	"linkedin" varchar,
  	"photo_image_id" integer,
  	"photo_url" varchar,
  	"bio" jsonb,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_team_members_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_team_members_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_title" varchar,
  	"version_linkedin" varchar,
  	"version_photo_image_id" integer,
  	"version_photo_url" varchar,
  	"version_bio" jsonb,
  	"version_sort_order" numeric DEFAULT 0,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__team_members_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "mcp_audit_log" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"summary" varchar NOT NULL,
  	"tool" "enum_mcp_audit_log_tool" NOT NULL,
  	"collection" varchar,
  	"document_id" varchar,
  	"status" "enum_mcp_audit_log_status" DEFAULT 'success' NOT NULL,
  	"args" jsonb,
  	"result" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_hero_rotating_words" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"word" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_logo_marquee_row1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_image_id" integer,
  	"logo_url" varchar,
  	"alt" varchar NOT NULL,
  	"width" numeric DEFAULT 200,
  	"height" numeric DEFAULT 60
  );
  
  CREATE TABLE "home_page_logo_marquee_row2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_image_id" integer,
  	"logo_url" varchar,
  	"alt" varchar NOT NULL,
  	"width" numeric DEFAULT 200,
  	"height" numeric DEFAULT 60
  );
  
  CREATE TABLE "home_page_ecosystem_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" numeric NOT NULL,
  	"suffix" varchar DEFAULT '%',
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"label_color" "enum_home_page_ecosystem_stats_label_color" DEFAULT 'orange'
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'Hardware shouldn''t be hard.',
  	"hero_subheading_prefix" varchar DEFAULT 'We help make',
  	"hero_subheading_suffix" varchar DEFAULT 'easier.',
  	"hero_chat_placeholder" varchar DEFAULT 'Describe your product''s supply chain needs',
  	"hero_chat_button_label" varchar DEFAULT 'Chat now',
  	"hero_chat_prefill_url" varchar DEFAULT 'https://app.bloomnetwork.ai/marketplace/request/new',
  	"hero_badge_text" varchar DEFAULT 'Start for free now!',
  	"hero_tagline" varchar DEFAULT 'Bloom helps leading mobility, energy, robotics brands scale faster through our vetted network',
  	"discover_heading" varchar DEFAULT 'Discover and access a vetted supply chain network ready to scale',
  	"discover_body" varchar DEFAULT 'Bloom intelligently matches brands with vetted supply chain and operations partners tailored to their products requirements throughout its lifecycle.',
  	"manage_heading" varchar DEFAULT 'Easily manage partners with Bloom''s platform.',
  	"manage_body" varchar DEFAULT 'Discover, bid, book, and pay supply chain and operation partners all on a single platform.',
  	"pay_heading" varchar DEFAULT 'Simplify and expand payment options',
  	"pay_body" varchar DEFAULT 'Leverage BloomPay to pay all your vendors in one place and access extended payment terms up to 120 days.',
  	"ecosystem_heading" varchar DEFAULT 'Cultivating an ecosystem',
  	"ecosystem_body" varchar DEFAULT 'With deep roots in the hardware industry, we provide the support and connections you need to flourish, ensuring your business blossoms in an ever-evolving landscape.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "brands_page_verticals" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"image_id" integer,
  	"image_url" varchar
  );
  
  CREATE TABLE "brands_page_framework_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "brands_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'Supply chain complexity is killing your momentum',
  	"hero_body" varchar DEFAULT 'Hardware innovation should be about breakthroughs, not spreadsheets, shipping labels, and supplier drama. Bloom unblocks your growth by giving you instant, vetted access to the domestic manufacturing, assembly, logistics, and service partners that power today''s most ambitious hardware brands.',
  	"built_for_heading" varchar DEFAULT 'Built for the brands building the future',
  	"built_for_body" varchar DEFAULT 'Bloom is purpose-built to support the unique operational challenges of today''s most advanced hardware categories, where complexity, regulation, and logistics often stall growth.',
  	"coast_to_coast_heading" varchar DEFAULT 'Coast to coast',
  	"coast_to_coast_body" varchar DEFAULT 'Our vetted network covers the entire US, linking you to local specialists and Fortune 100 powerhouses alike. Get fast, competitive access to partners ready to build, deliver, and service for you.',
  	"framework_heading" varchar DEFAULT 'Proven framework built for scaling hardware brands',
  	"framework_body" varchar DEFAULT 'Bloom orchestrates the heavy-lift of hardware operations so you can focus on product and customers. Here''s exactly what happens after you request access.',
  	"pricing_heading" varchar DEFAULT 'Choose your plan',
  	"pricing_body" jsonb,
  	"bloom_pay_heading" varchar DEFAULT 'Simplify and expand payment options',
  	"bloom_pay_body" varchar DEFAULT 'Leverage BloomPay to pay all your vendors in one place and access on platform extended payment terms up to 120 days.',
  	"cta_heading" varchar DEFAULT 'Ready to cut costs, launch faster, and de‑risk your operations?',
  	"cta_button_label" varchar DEFAULT 'UNLOCK YOUR POTENTIAL',
  	"cta_button_href" varchar DEFAULT 'https://welcome.togetherwebloom.us/',
  	"faq_heading" varchar DEFAULT 'FAQ',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "providers_page_hero_icon_tiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"image_url" varchar,
  	"alt" varchar NOT NULL
  );
  
  CREATE TABLE "providers_page_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"image_id" integer,
  	"image_url" varchar,
  	"image_alt" varchar
  );
  
  CREATE TABLE "providers_page_criteria_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "providers_page_framework_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "providers_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'Work with the most promising hardware brands, vetted by Bloom.',
  	"hero_body" varchar DEFAULT 'Unlock a pipeline of qualified projects from fast-growing hard-tech companies, backed by Bloom''s rigorous screening and centralized payments.',
  	"criteria_heading" varchar DEFAULT 'Bloom Service Provider Qualifying Criteria',
  	"criteria_body" varchar DEFAULT 'Each partner is evaluated across 8 core criteria before joining the Bloom network.',
  	"framework_heading" varchar DEFAULT 'Win better jobs. Get paid faster.',
  	"framework_body" varchar DEFAULT 'Bloom matches proven providers with vetted hardware brands and handles the back-office—RFQs, milestones, and payments—so you can focus on execution.',
  	"cta_heading" varchar DEFAULT 'Apply to join the elite providers on Bloom''s Network',
  	"cta_button_label" varchar DEFAULT 'APPLY NOW',
  	"cta_button_href" varchar DEFAULT '/contact-us',
  	"faq_heading" varchar DEFAULT 'FAQ',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "company_page_ecosystem_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "company_page_resources" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"href" varchar,
  	"coming_soon" boolean DEFAULT false
  );
  
  CREATE TABLE "company_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'Hi. We''re Bloom.',
  	"hero_body" varchar DEFAULT 'Bloom brings hard tech brands into an operations ecosystem that nurtures every stage of their product''s growth.',
  	"what_we_do_eyebrow" varchar DEFAULT 'What We Do',
  	"what_we_do_heading" varchar DEFAULT 'We provide the support and connections you need to flourish.',
  	"what_we_do_body" varchar DEFAULT 'Just as a thriving natural ecosystem relies on interconnected relationships and balanced processes to flourish, Bloom''s operations ecosystem is built on a foundation of collaboration and resilience. By nurturing a network that thrives on the diverse capabilities of our partners, we ensure that the hard tech industry can thrive, adapt, and grow.',
  	"who_we_are_eyebrow" varchar DEFAULT 'Who We Are',
  	"who_we_are_heading" varchar DEFAULT 'We are committed to exploring the full potential of hardware.',
  	"who_we_are_body" varchar DEFAULT 'We are a global team of builders and connectors with deep roots in the hardware industry. Together, we are exploring the full potential of hard tech products, optimizing their places within our daily lives.',
  	"ecosystem_heading" varchar DEFAULT 'Bloom is an ecosystem of operations services',
  	"team_eyebrow" varchar DEFAULT 'Meet the Bloom Team',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_page_paths" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar NOT NULL,
  	"heading" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"cta" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page_offices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"city" varchar NOT NULL,
  	"line1" varchar NOT NULL,
  	"line2" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_headline" varchar DEFAULT 'Let''s build hardware, together.',
  	"hero_body" varchar DEFAULT 'Whether you''re a hardware brand, a service provider, or just have a question — drop us a line and the right person at Bloom will get back to you.',
  	"form_section_eyebrow" varchar DEFAULT 'Get in touch',
  	"form_section_heading" varchar DEFAULT 'Send us a message',
  	"form_section_body" varchar DEFAULT 'Fill out the form and we''ll route your message to the right team — usually a same-day response on weekdays.',
  	"offices_heading" varchar DEFAULT 'Offices',
  	"connect_heading" varchar DEFAULT 'Connect',
  	"linkedin_url" varchar DEFAULT 'https://www.linkedin.com/company/bloomus',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "posts" ADD COLUMN "excerpt" varchar;
  ALTER TABLE "posts" ADD COLUMN "hero_image_id" integer;
  ALTER TABLE "posts" ADD COLUMN "hero_url" varchar;
  ALTER TABLE "posts" ADD COLUMN "display_category" varchar;
  ALTER TABLE "posts" ADD COLUMN "display_author" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_excerpt" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_hero_image_id" integer;
  ALTER TABLE "_posts_v" ADD COLUMN "version_hero_url" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_display_category" varchar;
  ALTER TABLE "_posts_v" ADD COLUMN "version_display_author" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "customer_stories_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "testimonials_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "marketing_faqs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "team_members_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "mcp_audit_log_id" integer;
  ALTER TABLE "customer_stories_top_benefits" ADD CONSTRAINT "customer_stories_top_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "customer_stories_nodes" ADD CONSTRAINT "customer_stories_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "customer_stories_benefits" ADD CONSTRAINT "customer_stories_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_logo_dark_image_id_media_id_fk" FOREIGN KEY ("logo_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "customer_stories" ADD CONSTRAINT "customer_stories_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_customer_stories_v_version_top_benefits" ADD CONSTRAINT "_customer_stories_v_version_top_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_customer_stories_v_version_nodes" ADD CONSTRAINT "_customer_stories_v_version_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_customer_stories_v_version_benefits" ADD CONSTRAINT "_customer_stories_v_version_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customer_stories_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_parent_id_customer_stories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."customer_stories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_logo_image_id_media_id_fk" FOREIGN KEY ("version_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_logo_dark_image_id_media_id_fk" FOREIGN KEY ("version_logo_dark_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_customer_stories_v" ADD CONSTRAINT "_customer_stories_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_parent_id_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_avatar_image_id_media_id_fk" FOREIGN KEY ("version_avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "marketing_faqs_surfaces" ADD CONSTRAINT "marketing_faqs_surfaces_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."marketing_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_photo_image_id_media_id_fk" FOREIGN KEY ("photo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_parent_id_team_members_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."team_members"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_version_photo_image_id_media_id_fk" FOREIGN KEY ("version_photo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_hero_rotating_words" ADD CONSTRAINT "home_page_hero_rotating_words_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_logo_marquee_row1" ADD CONSTRAINT "home_page_logo_marquee_row1_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_logo_marquee_row1" ADD CONSTRAINT "home_page_logo_marquee_row1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_logo_marquee_row2" ADD CONSTRAINT "home_page_logo_marquee_row2_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_logo_marquee_row2" ADD CONSTRAINT "home_page_logo_marquee_row2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_ecosystem_stats" ADD CONSTRAINT "home_page_ecosystem_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_page_verticals" ADD CONSTRAINT "brands_page_verticals_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "brands_page_verticals" ADD CONSTRAINT "brands_page_verticals_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "brands_page_framework_steps" ADD CONSTRAINT "brands_page_framework_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."brands_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "providers_page_hero_icon_tiles" ADD CONSTRAINT "providers_page_hero_icon_tiles_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "providers_page_hero_icon_tiles" ADD CONSTRAINT "providers_page_hero_icon_tiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "providers_page_benefits" ADD CONSTRAINT "providers_page_benefits_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "providers_page_benefits" ADD CONSTRAINT "providers_page_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "providers_page_criteria_items" ADD CONSTRAINT "providers_page_criteria_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "providers_page_framework_steps" ADD CONSTRAINT "providers_page_framework_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."providers_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_page_ecosystem_paragraphs" ADD CONSTRAINT "company_page_ecosystem_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "company_page_resources" ADD CONSTRAINT "company_page_resources_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."company_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_paths" ADD CONSTRAINT "contact_page_paths_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_offices" ADD CONSTRAINT "contact_page_offices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "customer_stories_top_benefits_order_idx" ON "customer_stories_top_benefits" USING btree ("_order");
  CREATE INDEX "customer_stories_top_benefits_parent_id_idx" ON "customer_stories_top_benefits" USING btree ("_parent_id");
  CREATE INDEX "customer_stories_nodes_order_idx" ON "customer_stories_nodes" USING btree ("_order");
  CREATE INDEX "customer_stories_nodes_parent_id_idx" ON "customer_stories_nodes" USING btree ("_parent_id");
  CREATE INDEX "customer_stories_benefits_order_idx" ON "customer_stories_benefits" USING btree ("_order");
  CREATE INDEX "customer_stories_benefits_parent_id_idx" ON "customer_stories_benefits" USING btree ("_parent_id");
  CREATE INDEX "customer_stories_slug_idx" ON "customer_stories" USING btree ("slug");
  CREATE INDEX "customer_stories_hero_image_idx" ON "customer_stories" USING btree ("hero_image_id");
  CREATE INDEX "customer_stories_logo_image_idx" ON "customer_stories" USING btree ("logo_image_id");
  CREATE INDEX "customer_stories_logo_dark_image_idx" ON "customer_stories" USING btree ("logo_dark_image_id");
  CREATE INDEX "customer_stories_meta_meta_image_idx" ON "customer_stories" USING btree ("meta_image_id");
  CREATE INDEX "customer_stories_updated_at_idx" ON "customer_stories" USING btree ("updated_at");
  CREATE INDEX "customer_stories_created_at_idx" ON "customer_stories" USING btree ("created_at");
  CREATE INDEX "customer_stories__status_idx" ON "customer_stories" USING btree ("_status");
  CREATE INDEX "_customer_stories_v_version_top_benefits_order_idx" ON "_customer_stories_v_version_top_benefits" USING btree ("_order");
  CREATE INDEX "_customer_stories_v_version_top_benefits_parent_id_idx" ON "_customer_stories_v_version_top_benefits" USING btree ("_parent_id");
  CREATE INDEX "_customer_stories_v_version_nodes_order_idx" ON "_customer_stories_v_version_nodes" USING btree ("_order");
  CREATE INDEX "_customer_stories_v_version_nodes_parent_id_idx" ON "_customer_stories_v_version_nodes" USING btree ("_parent_id");
  CREATE INDEX "_customer_stories_v_version_benefits_order_idx" ON "_customer_stories_v_version_benefits" USING btree ("_order");
  CREATE INDEX "_customer_stories_v_version_benefits_parent_id_idx" ON "_customer_stories_v_version_benefits" USING btree ("_parent_id");
  CREATE INDEX "_customer_stories_v_parent_idx" ON "_customer_stories_v" USING btree ("parent_id");
  CREATE INDEX "_customer_stories_v_version_version_slug_idx" ON "_customer_stories_v" USING btree ("version_slug");
  CREATE INDEX "_customer_stories_v_version_version_hero_image_idx" ON "_customer_stories_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_customer_stories_v_version_version_logo_image_idx" ON "_customer_stories_v" USING btree ("version_logo_image_id");
  CREATE INDEX "_customer_stories_v_version_version_logo_dark_image_idx" ON "_customer_stories_v" USING btree ("version_logo_dark_image_id");
  CREATE INDEX "_customer_stories_v_version_meta_version_meta_image_idx" ON "_customer_stories_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_customer_stories_v_version_version_updated_at_idx" ON "_customer_stories_v" USING btree ("version_updated_at");
  CREATE INDEX "_customer_stories_v_version_version_created_at_idx" ON "_customer_stories_v" USING btree ("version_created_at");
  CREATE INDEX "_customer_stories_v_version_version__status_idx" ON "_customer_stories_v" USING btree ("version__status");
  CREATE INDEX "_customer_stories_v_created_at_idx" ON "_customer_stories_v" USING btree ("created_at");
  CREATE INDEX "_customer_stories_v_updated_at_idx" ON "_customer_stories_v" USING btree ("updated_at");
  CREATE INDEX "_customer_stories_v_latest_idx" ON "_customer_stories_v" USING btree ("latest");
  CREATE INDEX "_customer_stories_v_autosave_idx" ON "_customer_stories_v" USING btree ("autosave");
  CREATE INDEX "testimonials_avatar_image_idx" ON "testimonials" USING btree ("avatar_image_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "testimonials__status_idx" ON "testimonials" USING btree ("_status");
  CREATE INDEX "_testimonials_v_parent_idx" ON "_testimonials_v" USING btree ("parent_id");
  CREATE INDEX "_testimonials_v_version_version_avatar_image_idx" ON "_testimonials_v" USING btree ("version_avatar_image_id");
  CREATE INDEX "_testimonials_v_version_version_updated_at_idx" ON "_testimonials_v" USING btree ("version_updated_at");
  CREATE INDEX "_testimonials_v_version_version_created_at_idx" ON "_testimonials_v" USING btree ("version_created_at");
  CREATE INDEX "_testimonials_v_version_version__status_idx" ON "_testimonials_v" USING btree ("version__status");
  CREATE INDEX "_testimonials_v_created_at_idx" ON "_testimonials_v" USING btree ("created_at");
  CREATE INDEX "_testimonials_v_updated_at_idx" ON "_testimonials_v" USING btree ("updated_at");
  CREATE INDEX "_testimonials_v_latest_idx" ON "_testimonials_v" USING btree ("latest");
  CREATE INDEX "_testimonials_v_autosave_idx" ON "_testimonials_v" USING btree ("autosave");
  CREATE INDEX "marketing_faqs_surfaces_order_idx" ON "marketing_faqs_surfaces" USING btree ("order");
  CREATE INDEX "marketing_faqs_surfaces_parent_idx" ON "marketing_faqs_surfaces" USING btree ("parent_id");
  CREATE INDEX "marketing_faqs_updated_at_idx" ON "marketing_faqs" USING btree ("updated_at");
  CREATE INDEX "marketing_faqs_created_at_idx" ON "marketing_faqs" USING btree ("created_at");
  CREATE INDEX "team_members_photo_image_idx" ON "team_members" USING btree ("photo_image_id");
  CREATE INDEX "team_members_updated_at_idx" ON "team_members" USING btree ("updated_at");
  CREATE INDEX "team_members_created_at_idx" ON "team_members" USING btree ("created_at");
  CREATE INDEX "team_members__status_idx" ON "team_members" USING btree ("_status");
  CREATE INDEX "_team_members_v_parent_idx" ON "_team_members_v" USING btree ("parent_id");
  CREATE INDEX "_team_members_v_version_version_photo_image_idx" ON "_team_members_v" USING btree ("version_photo_image_id");
  CREATE INDEX "_team_members_v_version_version_updated_at_idx" ON "_team_members_v" USING btree ("version_updated_at");
  CREATE INDEX "_team_members_v_version_version_created_at_idx" ON "_team_members_v" USING btree ("version_created_at");
  CREATE INDEX "_team_members_v_version_version__status_idx" ON "_team_members_v" USING btree ("version__status");
  CREATE INDEX "_team_members_v_created_at_idx" ON "_team_members_v" USING btree ("created_at");
  CREATE INDEX "_team_members_v_updated_at_idx" ON "_team_members_v" USING btree ("updated_at");
  CREATE INDEX "_team_members_v_latest_idx" ON "_team_members_v" USING btree ("latest");
  CREATE INDEX "_team_members_v_autosave_idx" ON "_team_members_v" USING btree ("autosave");
  CREATE INDEX "mcp_audit_log_updated_at_idx" ON "mcp_audit_log" USING btree ("updated_at");
  CREATE INDEX "mcp_audit_log_created_at_idx" ON "mcp_audit_log" USING btree ("created_at");
  CREATE INDEX "home_page_hero_rotating_words_order_idx" ON "home_page_hero_rotating_words" USING btree ("_order");
  CREATE INDEX "home_page_hero_rotating_words_parent_id_idx" ON "home_page_hero_rotating_words" USING btree ("_parent_id");
  CREATE INDEX "home_page_logo_marquee_row1_order_idx" ON "home_page_logo_marquee_row1" USING btree ("_order");
  CREATE INDEX "home_page_logo_marquee_row1_parent_id_idx" ON "home_page_logo_marquee_row1" USING btree ("_parent_id");
  CREATE INDEX "home_page_logo_marquee_row1_logo_image_idx" ON "home_page_logo_marquee_row1" USING btree ("logo_image_id");
  CREATE INDEX "home_page_logo_marquee_row2_order_idx" ON "home_page_logo_marquee_row2" USING btree ("_order");
  CREATE INDEX "home_page_logo_marquee_row2_parent_id_idx" ON "home_page_logo_marquee_row2" USING btree ("_parent_id");
  CREATE INDEX "home_page_logo_marquee_row2_logo_image_idx" ON "home_page_logo_marquee_row2" USING btree ("logo_image_id");
  CREATE INDEX "home_page_ecosystem_stats_order_idx" ON "home_page_ecosystem_stats" USING btree ("_order");
  CREATE INDEX "home_page_ecosystem_stats_parent_id_idx" ON "home_page_ecosystem_stats" USING btree ("_parent_id");
  CREATE INDEX "brands_page_verticals_order_idx" ON "brands_page_verticals" USING btree ("_order");
  CREATE INDEX "brands_page_verticals_parent_id_idx" ON "brands_page_verticals" USING btree ("_parent_id");
  CREATE INDEX "brands_page_verticals_image_idx" ON "brands_page_verticals" USING btree ("image_id");
  CREATE INDEX "brands_page_framework_steps_order_idx" ON "brands_page_framework_steps" USING btree ("_order");
  CREATE INDEX "brands_page_framework_steps_parent_id_idx" ON "brands_page_framework_steps" USING btree ("_parent_id");
  CREATE INDEX "providers_page_hero_icon_tiles_order_idx" ON "providers_page_hero_icon_tiles" USING btree ("_order");
  CREATE INDEX "providers_page_hero_icon_tiles_parent_id_idx" ON "providers_page_hero_icon_tiles" USING btree ("_parent_id");
  CREATE INDEX "providers_page_hero_icon_tiles_image_idx" ON "providers_page_hero_icon_tiles" USING btree ("image_id");
  CREATE INDEX "providers_page_benefits_order_idx" ON "providers_page_benefits" USING btree ("_order");
  CREATE INDEX "providers_page_benefits_parent_id_idx" ON "providers_page_benefits" USING btree ("_parent_id");
  CREATE INDEX "providers_page_benefits_image_idx" ON "providers_page_benefits" USING btree ("image_id");
  CREATE INDEX "providers_page_criteria_items_order_idx" ON "providers_page_criteria_items" USING btree ("_order");
  CREATE INDEX "providers_page_criteria_items_parent_id_idx" ON "providers_page_criteria_items" USING btree ("_parent_id");
  CREATE INDEX "providers_page_framework_steps_order_idx" ON "providers_page_framework_steps" USING btree ("_order");
  CREATE INDEX "providers_page_framework_steps_parent_id_idx" ON "providers_page_framework_steps" USING btree ("_parent_id");
  CREATE INDEX "company_page_ecosystem_paragraphs_order_idx" ON "company_page_ecosystem_paragraphs" USING btree ("_order");
  CREATE INDEX "company_page_ecosystem_paragraphs_parent_id_idx" ON "company_page_ecosystem_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "company_page_resources_order_idx" ON "company_page_resources" USING btree ("_order");
  CREATE INDEX "company_page_resources_parent_id_idx" ON "company_page_resources" USING btree ("_parent_id");
  CREATE INDEX "contact_page_paths_order_idx" ON "contact_page_paths" USING btree ("_order");
  CREATE INDEX "contact_page_paths_parent_id_idx" ON "contact_page_paths" USING btree ("_parent_id");
  CREATE INDEX "contact_page_offices_order_idx" ON "contact_page_offices" USING btree ("_order");
  CREATE INDEX "contact_page_offices_parent_id_idx" ON "contact_page_offices" USING btree ("_parent_id");
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_customer_stories_fk" FOREIGN KEY ("customer_stories_id") REFERENCES "public"."customer_stories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_marketing_faqs_fk" FOREIGN KEY ("marketing_faqs_id") REFERENCES "public"."marketing_faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_team_members_fk" FOREIGN KEY ("team_members_id") REFERENCES "public"."team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_mcp_audit_log_fk" FOREIGN KEY ("mcp_audit_log_id") REFERENCES "public"."mcp_audit_log"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "payload_locked_documents_rels_customer_stories_id_idx" ON "payload_locked_documents_rels" USING btree ("customer_stories_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_marketing_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("marketing_faqs_id");
  CREATE INDEX "payload_locked_documents_rels_team_members_id_idx" ON "payload_locked_documents_rels" USING btree ("team_members_id");
  CREATE INDEX "payload_locked_documents_rels_mcp_audit_log_id_idx" ON "payload_locked_documents_rels" USING btree ("mcp_audit_log_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "customer_stories_top_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "customer_stories_nodes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "customer_stories_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "customer_stories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_customer_stories_v_version_top_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_customer_stories_v_version_nodes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_customer_stories_v_version_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_customer_stories_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_testimonials_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "marketing_faqs_surfaces" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "marketing_faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "team_members" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_team_members_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "mcp_audit_log" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_hero_rotating_words" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_logo_marquee_row1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_logo_marquee_row2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page_ecosystem_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "home_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "brands_page_verticals" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "brands_page_framework_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "brands_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "providers_page_hero_icon_tiles" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "providers_page_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "providers_page_criteria_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "providers_page_framework_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "providers_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "company_page_ecosystem_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "company_page_resources" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "company_page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page_paths" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page_offices" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_page" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "customer_stories_top_benefits" CASCADE;
  DROP TABLE "customer_stories_nodes" CASCADE;
  DROP TABLE "customer_stories_benefits" CASCADE;
  DROP TABLE "customer_stories" CASCADE;
  DROP TABLE "_customer_stories_v_version_top_benefits" CASCADE;
  DROP TABLE "_customer_stories_v_version_nodes" CASCADE;
  DROP TABLE "_customer_stories_v_version_benefits" CASCADE;
  DROP TABLE "_customer_stories_v" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "_testimonials_v" CASCADE;
  DROP TABLE "marketing_faqs_surfaces" CASCADE;
  DROP TABLE "marketing_faqs" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "_team_members_v" CASCADE;
  DROP TABLE "mcp_audit_log" CASCADE;
  DROP TABLE "home_page_hero_rotating_words" CASCADE;
  DROP TABLE "home_page_logo_marquee_row1" CASCADE;
  DROP TABLE "home_page_logo_marquee_row2" CASCADE;
  DROP TABLE "home_page_ecosystem_stats" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "brands_page_verticals" CASCADE;
  DROP TABLE "brands_page_framework_steps" CASCADE;
  DROP TABLE "brands_page" CASCADE;
  DROP TABLE "providers_page_hero_icon_tiles" CASCADE;
  DROP TABLE "providers_page_benefits" CASCADE;
  DROP TABLE "providers_page_criteria_items" CASCADE;
  DROP TABLE "providers_page_framework_steps" CASCADE;
  DROP TABLE "providers_page" CASCADE;
  DROP TABLE "company_page_ecosystem_paragraphs" CASCADE;
  DROP TABLE "company_page_resources" CASCADE;
  DROP TABLE "company_page" CASCADE;
  DROP TABLE "contact_page_paths" CASCADE;
  DROP TABLE "contact_page_offices" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  ALTER TABLE "posts" DROP CONSTRAINT "posts_hero_image_id_media_id_fk";
  
  ALTER TABLE "_posts_v" DROP CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_customer_stories_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_testimonials_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_marketing_faqs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_team_members_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_mcp_audit_log_fk";
  
  DROP INDEX "posts_hero_image_idx";
  DROP INDEX "_posts_v_version_version_hero_image_idx";
  DROP INDEX "payload_locked_documents_rels_customer_stories_id_idx";
  DROP INDEX "payload_locked_documents_rels_testimonials_id_idx";
  DROP INDEX "payload_locked_documents_rels_marketing_faqs_id_idx";
  DROP INDEX "payload_locked_documents_rels_team_members_id_idx";
  DROP INDEX "payload_locked_documents_rels_mcp_audit_log_id_idx";
  ALTER TABLE "posts" DROP COLUMN "excerpt";
  ALTER TABLE "posts" DROP COLUMN "hero_image_id";
  ALTER TABLE "posts" DROP COLUMN "hero_url";
  ALTER TABLE "posts" DROP COLUMN "display_category";
  ALTER TABLE "posts" DROP COLUMN "display_author";
  ALTER TABLE "_posts_v" DROP COLUMN "version_excerpt";
  ALTER TABLE "_posts_v" DROP COLUMN "version_hero_image_id";
  ALTER TABLE "_posts_v" DROP COLUMN "version_hero_url";
  ALTER TABLE "_posts_v" DROP COLUMN "version_display_category";
  ALTER TABLE "_posts_v" DROP COLUMN "version_display_author";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "customer_stories_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "testimonials_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "marketing_faqs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "team_members_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "mcp_audit_log_id";
  DROP TYPE "public"."enum_customer_stories_nodes_value";
  DROP TYPE "public"."enum_customer_stories_card_theme";
  DROP TYPE "public"."enum_customer_stories_card_align";
  DROP TYPE "public"."enum_customer_stories_logo_type";
  DROP TYPE "public"."enum_customer_stories_logo_mono_color";
  DROP TYPE "public"."enum_customer_stories_status";
  DROP TYPE "public"."enum__customer_stories_v_version_nodes_value";
  DROP TYPE "public"."enum__customer_stories_v_version_card_theme";
  DROP TYPE "public"."enum__customer_stories_v_version_card_align";
  DROP TYPE "public"."enum__customer_stories_v_version_logo_type";
  DROP TYPE "public"."enum__customer_stories_v_version_logo_mono_color";
  DROP TYPE "public"."enum__customer_stories_v_version_status";
  DROP TYPE "public"."enum_testimonials_status";
  DROP TYPE "public"."enum__testimonials_v_version_status";
  DROP TYPE "public"."enum_marketing_faqs_surfaces";
  DROP TYPE "public"."enum_team_members_status";
  DROP TYPE "public"."enum__team_members_v_version_status";
  DROP TYPE "public"."enum_mcp_audit_log_tool";
  DROP TYPE "public"."enum_mcp_audit_log_status";
  DROP TYPE "public"."enum_home_page_ecosystem_stats_label_color";`)
}
