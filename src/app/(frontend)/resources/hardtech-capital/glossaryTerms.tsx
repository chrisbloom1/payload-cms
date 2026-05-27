/**
 * Server-safe glossary data and auto-linker.
 *
 * Lives in its own non-client module so server components can call
 * `withGlossary()` to wrap matching terms in <Term> (which is the client
 * component). React serializes the resulting tree across the RSC boundary.
 */

import type { ReactNode } from "react";
import { Term } from "./Glossary";

export const GLOSSARY: Record<string, string> = {
  SBIR:
    "Small Business Innovation Research. The federal R&D grant program every science agency runs. Phase I is feasibility, Phase II is prototyping, Phase III is non-SBIR follow-on (usually a sole-source contract).",
  STTR:
    "Small Business Technology Transfer. SBIR's twin program but requires a research partner (university or federal lab). Same dollar tiers as SBIR.",
  "Phase I":
    "First SBIR/STTR tier. Roughly $250K to $300K to demonstrate technical feasibility. 6 to 12 months.",
  "Phase II":
    "Second SBIR/STTR tier. $1M to $2M to build a working prototype. 18 to 24 months.",
  "Phase III":
    "Third SBIR/STTR tier. No statutory ceiling. Usually a sole-source production contract from the awarding agency. Not separately solicited.",
  "Direct-to-Phase II":
    "Special pathway that skips Phase I if you can prove feasibility was achieved elsewhere. Common with DoD components.",
  FOA:
    "Funding Opportunity Announcement. The formal solicitation document for a federal grant. Includes scope, eligibility, budget, deadlines.",
  BAA:
    "Broad Agency Announcement. A long-running federal solicitation (often year-round) for research proposals on broad topics. DoD components use these heavily.",
  OTA:
    "Other Transaction Authority. A non-FAR contracting vehicle DoD uses for prototypes and follow-on production. Faster than standard procurement and more flexible on IP.",
  OT:
    "Other Transaction. Sometimes used interchangeably with OTA. Refers to the contract issued under Other Transaction Authority.",
  CSO:
    "Commercial Solutions Opening. DIU's standing solicitation for commercial tech that meets a DoD need. Awards via OTA.",
  STRATFI:
    "Strategic Funding Increase (Air Force / Space Force). Matching pool that adds up to $15M govt + $30M private to a Phase II SBIR. Turns ~$1.9M Phase II into a $60M Phase III prototype.",
  TACFI:
    "Tactical Funding Increase. Smaller AFWERX/SpaceWERX matching vehicle. Up to $3.75M govt match.",
  TABA:
    "Technical and Business Assistance. Stipend baked into SBIR awards for outside business/technical advisors. $6.5K Phase I, $50K Phase II as of 2026.",
  "Program of Record":
    "An officially funded, multi-year DoD program with appropriated dollars. The graduation goal for most DoD-facing startups.",
  LPO:
    "DOE Loan Programs Office. Federal loan guarantees for clean-energy, advanced-vehicle, and (as of 2026) clean coal, gas, oil, and nuclear projects. Now branded the Office of Energy Dominance Financing.",
  EDFP:
    "Energy Dominance Financing Program (Section 1706). The 2026 successor name for the main LPO loan vehicle.",
  TCF:
    "DOE Technology Commercialization Fund. $100K to $1.5M grants requiring 50% non-federal match and a national lab as proposal originator.",
  "NSF Engines":
    "NSF Regional Innovation Engines. Up to $160M over 10 years to fund regional R&D consortia. Startups participate through the consortium, not directly.",
  EIC:
    "European Innovation Council. The EU's deep-tech funding arm. Three main vehicles: Pathfinder (pre-commercial), Transition, and Accelerator (commercial).",
  "EIC Accelerator":
    "EU's flagship deep-tech program. Up to €2.5M grant plus up to €10M equity (€17.5M typical blended ceiling). EU-based companies only.",
  IRAP:
    "Industrial Research Assistance Program (Canada). Non-dilutive R&D funding from NRC, matched to your stage by an Industrial Technology Advisor.",
  BIRD:
    "Binational Industrial Research and Development Foundation. US-Israel joint R&D grants up to $1.5M, conditional, repaid via royalties.",
  DIU:
    "Defense Innovation Unit. DoD's commercial-tech pipeline based in Mountain View / Austin / Boston / DC. Awards prototypes via OTA, then production contracts.",
  AFWERX:
    "Air Force innovation arm. Runs SBIR, STRATFI, TACFI, and Open Topic vehicles for Air Force commercial-tech needs.",
  SpaceWERX:
    "Space Force counterpart to AFWERX. Same funding tools, space-domain mission.",
  "ARPA-E":
    "DOE's high-risk energy research agency. Concept-paper-led. Awards $250K to $10M. SCALEUP vehicle bridges to $20M+ industrial-scale projects.",
  "ARPA-H":
    "Advanced Research Projects Agency for Health. Established 2022 to fund high-risk biomedical breakthroughs the way DARPA funds defense ones. New as of 2024-26, learning what works.",
  OCED:
    "DOE Office of Clean Energy Demonstrations. Funds large-scale commercial demonstrations of clean energy technology. Created by the 2021 Infrastructure Investment and Jobs Act.",
  IIJA:
    "Infrastructure Investment and Jobs Act (2021). Created multibillion-dollar pools for clean energy demonstrations, EV charging, transmission, and advanced materials. Source of OCED and many DOE programs.",
  IRA:
    "Inflation Reduction Act (2022). Largest US climate investment to date. Created the 45V hydrogen tax credit, 45Q carbon credit, 30D EV credit, and expanded LPO loan authority.",
  KIC:
    "Knowledge and Innovation Community. EU EIT's structure for cross-border innovation networks: Climate-KIC, EIT Health, EIT Manufacturing, etc. Each runs its own funding programs and accelerator.",
  NAICS:
    "North American Industry Classification System. Six-digit codes the government uses to categorize businesses. Matters for SBIR/STTR eligibility and tracking awards by sector.",
  DARPA:
    "Defense Advanced Research Projects Agency. The DoD's high-risk research arm. Programs are rotating, technically specific, and program-manager-led.",
  CDMRP:
    "Congressionally Directed Medical Research Programs. DoD-administered medical research grants, disease-specific.",
  "BARDA DRIVe":
    "HHS BARDA's accelerator. Awards $50K to $200K per milestone with rolling proof-of-concept programs (VANGUARD, Paratus, SPARK, VITAL).",
  Activate:
    "Two-year hardtech entrepreneurship fellowship at LBNL/NREL/ARL/multiple sites. Absorbed Cyclotron Road. $100K stipend plus lab access. Best non-dilutive starting point for science-founded hardtech.",
  ARIA:
    "UK Advanced Research and Invention Agency. The UK's ARPA equivalent. Programme directors picked for taste rather than peer review.",
  DASA:
    "UK Defence and Security Accelerator. UK MoD/Home Office innovation pipeline. £50K to £3M.",
  CIC:
    "Canada Innovation Corporation. The new federal innovation agency absorbing IRAP and SDTC functions by 2026 to 27.",
  SDTC:
    "Sustainable Development Technology Canada. Climate-tech non-dilutive funding in transition into CIC.",
};

/**
 * Auto-link known glossary terms in a paragraph. Walks the prose once
 * with matchAll, wrapping each whole-word match with <Term>. Only first
 * occurrence per paragraph gets wrapped, to keep the editorial quiet.
 */
export function withGlossary(text: string): ReactNode[] {
  const keys = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);
  const escaped = keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`\\b(${escaped.join("|")})\\b`, "g");

  const out: ReactNode[] = [];
  let lastIndex = 0;
  const seen = new Set<string>();

  for (const match of text.matchAll(pattern)) {
    const start = match.index ?? 0;
    if (start > lastIndex) out.push(text.slice(lastIndex, start));
    const matched = match[1];
    if (seen.has(matched)) {
      out.push(matched);
    } else {
      seen.add(matched);
      out.push(<Term key={`${matched}-${start}`}>{matched}</Term>);
    }
    lastIndex = start + matched.length;
  }
  if (lastIndex < text.length) out.push(text.slice(lastIndex));
  return out;
}
