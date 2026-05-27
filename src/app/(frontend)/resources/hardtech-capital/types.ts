export type Resource = {
  id: string;
  name: string;
  url?: string;
  kind:
    | "vc"
    | "cvc"
    | "angel"
    | "family_office"
    | "accelerator"
    | "federal_program"
    | "foundation"
    | "govt_loan"
    | "grant";
  hq?: string;
  geography?: string;
  verticals?: string[];
  stages?: string[];
  check_min?: number;
  check_max?: number;
  award?: string;
  deadline?: string;
  apply_url?: string;
  notes?: string;
  // Deep-scrape fields (populated for curated entries):
  thesis?: string;
  portfolio_sample?: string[];
  team_sample?: { name: string; title?: string }[];
  recent_activity?: string;
  url_was_corrected?: boolean;
  original_url?: string;
  deep_scraped_at?: string;
  // Operational corrections:
  correction_note?: string;
  renamed_from?: string;
  dormant?: boolean;
  // Federal program awardee overlay:
  past_awardees?: {
    name: string;
    year?: number;
    amount?: string;
    description?: string;
    url?: string;
  }[];
  awardee_data_source?: string;
  // Bloom focus tagging (derived):
  bloom_focus?: ("mobility" | "energy" | "robotics" | "drones")[];
  // Meta:
  source?: string;
  score?: number;
  last_verified?: string;
  needs_verification?: boolean;
};

export const BLOOM_FOCUS_LABELS: Record<string, string> = {
  mobility: "Mobility",
  energy: "Energy",
  robotics: "Robotics",
  drones: "Drones",
};

export const VERTICAL_LABELS: Record<string, string> = {
  climate_energy: "Climate & energy",
  defense_space: "Defense & space",
  robotics_manufacturing: "Robotics & manufacturing",
  biotech_medtech_materials: "Biotech, medtech, materials",
  deeptech_general: "Deep tech (general)",
};

export const KIND_LABELS: Record<Resource["kind"], string> = {
  vc: "VC",
  cvc: "Corporate VC",
  angel: "Angel",
  family_office: "Family office",
  accelerator: "Accelerator / Lab",
  federal_program: "Federal program",
  foundation: "Foundation",
  govt_loan: "Government loan",
  grant: "Grant / Competition",
};

export const STAGE_LABELS: Record<string, string> = {
  pre_seed: "Pre-seed",
  seed_series_a: "Seed / Series A",
  series_b_plus: "Series B+",
  growth: "Growth",
  non_dilutive: "Non-dilutive",
};

export const GEOGRAPHY_LABELS: Record<string, string> = {
  us: "United States",
  global: "Global",
  uk: "United Kingdom",
  europe: "Europe",
  canada: "Canada",
  asia: "Asia",
  oceania: "Australia / NZ",
  israel: "Israel",
  "us+israel": "US / Israel",
};
