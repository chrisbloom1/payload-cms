export type ServiceCategory =
  | "Warehouse"
  | "After-Sales Service"
  | "Engineering"
  | "Manufacturing & Assembly"
  | "Component Sourcing"
  | "Delivery";

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company?: string;
  avatarSrc?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  label: string;
  description: string;
}

export interface PricingTier {
  name: "Seed" | "Growth" | "Full Bloom";
  price: string;
  blurb: string;
  highlighted?: boolean;
}

export interface PricingFeatureRow {
  feature: string;
  detail?: string;
  values: { tier: PricingTier["name"]; value: string }[];
}

export interface ProviderCriterion {
  number: number;
  title: string;
  description: string;
}

export interface CustomerStory {
  slug: string;
  title: string;
  href?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  linkedin: string;
  bio: string;
  photoSrc?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

export interface BloomPayState {
  selectedTerm: "Net 15" | "Net 30" | "Net 90" | "Net 120";
  amount: string;
  dueIn: string;
}
