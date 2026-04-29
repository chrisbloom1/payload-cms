"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { LinkedInIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  title: string;
  linkedin: string;
  photo: string;
  bio: string;
}

export const TEAM: readonly TeamMember[] = [
  {
    name: "Justin Kosmides",
    title: "CEO & Co-founder",
    linkedin: "https://www.linkedin.com/in/justinkosmides/",
    photo: "/images/team/justin-kosmides.png",
    bio: "Justin Kosmides blends Wall Street rigor with shop-floor grit to fix the worst pain points in hardware. Over twelve years in structured finance at Barclays and other investment banks, closing more than $5 billion in transactions. In 2020 he shifted from adviser to operator, taking the helm of São Paulo–born e-bike maker Vela just as pandemic chaos was shredding global supply lines. Within eighteen months he re-engineered the entire chain—moving production from China to Detroit, shortening cash-conversion cycles, and proving that reshoring can work for growth-stage companies.\n\nThat firsthand lesson—that brilliant hardware dies when financing, manufacturing, and logistics live in silos—drove Justin to launch Bloom in 2023 with veteran retailer Chris Nolte. As CEO he is turning fragmented supplier networks into a single, data-driven marketplace that lets mobility, robotics, and cleantech brands stand up production and after-sales service in weeks instead of years. His unique edge is the ability to speak fluently to factory GMs, logistics managers, and institutional investors in the same meeting, aligning incentives so the physical-world flywheel accelerates instead of stalls. If Bloom’s mission is to make “hardware less hard,” Justin supplies the capital strategy and operational discipline that keep the engine humming.",
  },
  {
    name: "Chris Nolte",
    title: "President & Co-founder",
    linkedin: "https://www.linkedin.com/in/chrisnolte2nd/",
    photo: "/images/team/chris-nolte.png",
    bio: "Chris Nolte has spent the past fifteen years fixing the practical hurdles that stop people from choosing light electric vehicles. After a back injury ended his Army deployment in Iraq, he built an e-bike so he could stay mobile. That project led to Long Island Electric Bikes in 2011—rebranded as Propel—which he grew into one of the largest U.S. e-bike retailers without outside capital. Running Propel meant negotiating manufacturing runs in Asia and Europe, auditing battery lines for safety, and setting up a service network capable of fast warranty turnarounds. His work with UL and PeopleForBikes helped shape the battery-safety standards most e-bike brands follow today.\n\nThose years on the front line highlighted a bigger issue: hardware companies burn time and money stitching together manufacturing, logistics, and after-sales service on their own. In 2023 Chris teamed up with former banker-turned-operator Justin Kosmides to start Bloom, a marketplace that lets hardware brands plug into a vetted network of factories, shippers, and service partners. As President, Chris defines supplier criteria, oversees onboarding, and ensures the platform meets the quality, cost, and response-time targets brands need to scale. His goal is straightforward: give hardware teams a reliable operational backbone so they can focus on building better products, not chasing parts and repairs.",
  },
  {
    name: "Markus Vitulli",
    title: "COO & Founding Member",
    linkedin: "https://www.linkedin.com/in/markus-v-438244121/",
    photo: "/images/team/markus-vitulli.png",
    bio: "Markus Vitulli is the execution engine behind some of the world’s fastest-growing marketplaces. He joined Airbnb when the company was still crammed into a single San Francisco loft and spent the next ten years designing the playbooks that took it from 100 employees to a public company approaching a $100 billion market cap. His remit spanned host acquisition, trust-and-safety operations, and the data-driven pricing systems that underpin Airbnb’s global liquidity—experience that hard-wired him to spot bottlenecks early and scale infrastructure before it creaks.\n\nAfter Airbnb, Markus became the go-to operator for venture and growth investors, shaping marketplace strategy at WestCap and hands-on steering Swimply and Marketplace Dynamics through periods of explosive expansion. The common thread: he builds flywheels—systems where supply, demand, and unit economics reinforce one another instead of grinding gears.\n\nNow, as Bloom’s COO, Markus is translating that digital-marketplace muscle into the physical world of manufacturing and logistics. He is architecting the operational backbone that lets hardware brands tap Bloom’s network of factories, shippers, and service partners without losing sleep over lead times or working-capital burn. His mandate is clear: turn Bloom’s marketplace into a self-sustaining engine that compounds value for every participant and scales as reliably as the software platforms that changed how we travel—and soon, how we build.",
  },
  {
    name: "Hitesh Chudasama",
    title: "CTO & Founding Member",
    linkedin: "https://www.linkedin.com/in/hitesh-chudasama-338a512a/",
    photo: "/images/team/hitesh-chudasama.png",
    bio: "Hitesh is a technology leader with more than decades of experience building and scaling global engineering organizations and digital platforms that power some of the world’s most recognizable marketplaces. At eBay, he played a key role in scaling commerce and search infrastructure to support millions of daily transactions and helped pioneer the company’s early mobile initiatives laying the groundwork for eBay’s transition into mobile commerce. At Upwork, he led engineering for the company’s core marketplace systems, expanding user and platform growth and reliability through data-driven design and distributed system architectures. At Trove, he guided the development of a sustainable commerce platform that powered circular retail for major brands, reimagining product lifecycle management with data, AI and automation. At Marpai, he led large-scale modernization of healthcare data systems while introducing AI and machine learning to enhance prediction, automation, and operational efficiency across the company’s ecosystem.\n\nAt Bloom, Hitesh leads the development of the company’s technology platform, fusing marketplace logic with AI and data architecture to unify manufacturing, logistics, and after-sales operations. He brings a pragmatic approach to innovation through designing systems that make the physical world as agile, intelligent, and connected as the digital one.",
  },
  {
    name: "Kevin Klein",
    title: "Head of Business Development & Founding Member",
    linkedin: "https://www.linkedin.com/in/kevin-klein-7798aa6/",
    photo: "/images/team/kevin-klein.png",
    bio: "Kevin Klein brings nearly twenty years of hands-on experience turning niche hardware into global business. As General Manager for Swedish electric-motorcycle maker CAKE, he opened new markets in North America, Europe, and Asia while building sales programs that moved the company from early adopters to fleet customers. Earlier, at portable-power pioneer GOAL ZERO, he led international channel strategy and helped launch product lines that doubled annual revenue and pushed the brand into big-box retail.\n\nAcross cleantech, consumer electronics, and performance gear, Kevin has managed every link of the go-to-market chain—direct-to-consumer sites, enterprise sales teams, and distributor networks—while keeping margins intact and inventory moving. That mix of channel discipline and brand storytelling is now focused on Bloom, where he secures the factory, logistics, and service partners our member brands need to scale without stumbling. His mandate is simple: convert Bloom’s network into real capacity and dependable revenue for the companies building the next generation of hardware.",
  },
  {
    name: "Sebastian Ferrari",
    title: "Engineering Manager",
    linkedin: "https://www.linkedin.com/in/sebas5384/",
    photo: "/images/team/sebastian-ferrari.png",
    bio: "Sebastian is a full-stack engineer and technical leader with over 15 years of experience designing and building digital products using open-source technologies. As co-founder and CTO of Taller, he has led engineering efforts across startups and enterprise clients, with a focus on sociotechnical system design and agile delivery. At Bloom, Sebastian applies his expertise in system architecture, DevOps culture, and user-centered design to help scale the platform and support product development across the network.",
  },
  {
    name: "Mike Ableson",
    title: "Head of Manufacturing Strategy",
    linkedin: "https://www.linkedin.com/in/michael-ableson-21963449/",
    photo: "/images/team/mike-ableson.png",
    bio: "Mike Ableson brings over 30 years of experience building and scaling complex manufacturing systems. As a former Vice President at General Motors, he led global strategy, engineering, and advanced manufacturing efforts—helping launch EV programs and manage supplier networks across multiple continents. Later, as CEO of Arrival Automotive North America, he oversaw U.S. market entry and production strategy for a new class of electric delivery vehicles.\n\nAt Bloom, Mike leads the expansion of our contract manufacturing and assembly network, shaping how we identify, partner with, and upgrade production capabilities across the U.S. He bridges decades of high-volume manufacturing experience with Bloom’s startup velocity, helping hardware brands scale domestically with less friction.\n\nWhether developing expansion programs for factories or refining how we match clients with the right production partners, Mike’s focus is clear: build a modern, distributed supply base that empowers the next generation of mobility, robotics, and cleantech companies. His deep understanding of manufacturing strategy—from the boardroom to the factory floor—makes him a critical driver of Bloom’s mission to make hardware less hard.",
  },
  {
    name: "Lindsey Graves",
    title: "Operations Manager",
    linkedin: "https://www.linkedin.com/in/lhgraves/",
    photo: "/images/team/lindsey-graves.png",
    bio: "Lindsey is a logistics and operations specialist with experience in 3PL, manufacturing, and inventory management. With a background in environmental anthropology and sustainable systems, she brings a holistic approach to optimizing supply chains with efficiency and sustainability in mind. She previously managed operations at Beacon Manufacturing and Detroit Bikes, optimizing supply chains and fulfillment processes. At Bloom, she oversees order flows, shipment coordination, and partner management, ensuring brands receive best-in-class support.",
  },
  {
    name: "Jimmy Hurley",
    title: "Provider Lead",
    linkedin: "https://www.linkedin.com/in/jimmyhurley/",
    photo: "/images/team/jimmy-hurley.png",
    bio: "Jimmy is a logistics and supply chain expert with extensive experience in third-party logistics (3PL), fulfillment operations, and vendor management. He previously held leadership roles at Ryder and Whiplash, optimizing fulfillment networks and WMS implementations. At Bloom, he manages the provider network, ensuring warehousing, assembly, and logistics partners meet the highest standards.",
  },
  {
    name: "Zach Garrett",
    title: "Senior Engineer",
    linkedin: "https://www.linkedin.com/in/zachagarrett/",
    photo: "/images/team/zach-garrett.png",
    bio: "Zach is an engineer and entrepreneur specializing in industrial design and full-stack development. An Olympic silver medalist in archery, he applies the same precision and discipline to engineering. He has co-founded ventures in climate tech, logistics, and consumer goods, focusing on scalable product ecosystems. A Climatebase Fellow, he has advised startups on product development and software architecture. At Bloom, Zach is building software solutions that power the platform and enhance operational efficiency.",
  },
  {
    name: "Cássio Rúbio",
    title: "Head of Design",
    linkedin: "https://www.linkedin.com/in/cassio-rubio/",
    photo: "/images/team/cassio-rubio.png",
    bio: "Cássio is a multidisciplinary designer with expertise in branding, digital products, and UX. He has developed scalable design systems, visual identities, and digital platforms for global organizations. At Bloom, he leads brand identity and digital experience, ensuring a cohesive visual presence across all platforms.",
  },
  {
    name: "Diogo Vianna",
    title: "Staff Engineer",
    linkedin: "https://www.linkedin.com/in/diogoviannaaraujo/",
    photo: "/images/team/diogo-vianna.png",
    bio: "Diogo is a software engineer and product designer specializing in web, app, and hardware development. With expertise in front-end architecture and open-source technologies, he has built scalable digital experiences for companies like Dailyhuman and Fora. At Bloom, he develops the platform’s technology infrastructure, ensuring seamless integration and scalability.",
  },
  {
    name: "Anna Ho",
    title: "Account Manager",
    linkedin: "https://www.linkedin.com/in/anna-ho-b072251b4/",
    photo: "/images/team/anna-ho.png",
    bio: "Anna is an account management and communications specialist with a background in marketing, media, and storytelling. She is the founder and host of Mind Maps, a podcast that explores the personal journeys and mindsets of diverse guests from around the world. Prior to Bloom, she held creative and leadership roles at TEDxUofM, MA:E Magazine, and Eli Lilly. At Bloom, Anna manages brand relationships and internal coordination, ensuring consistent communication and operational execution across the network.",
  },
] as const;

function nameLines(name: string): [string, string] {
  const parts = name.split(" ");
  if (parts.length === 1) return [parts[0], ""];
  const last = parts.pop()!;
  return [parts.join(" "), last];
}

function TeamCard({ member, onOpenBio }: { member: TeamMember; onOpenBio: (m: TeamMember) => void }) {
  const [first, last] = nameLines(member.name);

  return (
    <article
      className={cn(
        "flex w-full flex-col bg-bloom-cream p-5",
        "sm:w-[350px]",
      )}
    >
      <div className="flex h-[150px] gap-4">
        <div className="relative h-[150px] w-[150px] flex-none overflow-hidden border-2 border-white">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="150px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between min-w-0">
          <div>
            <h5 className="text-[24px] font-normal leading-[100%] tracking-[-0.005em] text-bloom-navy">
              {first}
              {last && (
                <>
                  <br />
                  {last}
                </>
              )}
            </h5>
            <p className="mt-3 text-[13px] leading-[120%] text-bloom-navy">
              {member.title}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="inline-flex h-5 w-5 items-center justify-center text-bloom-navy transition-opacity duration-150 hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => onOpenBio(member)}
              className="rounded-full border border-bloom-navy/20 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-bloom-navy transition-colors duration-150 hover:bg-bloom-navy hover:text-bloom-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream"
            >
              Bio
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function BioModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);

  // Body scroll lock while open + ESC to close
  useEffect(() => {
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const [first, last] = nameLines(member.name);

  // Portal to <body> so the fixed positioning isn't trapped inside an
  // ancestor with a transform (RevealOnScroll's will-change-transform creates
  // a containing block, breaking position: fixed for descendants).
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close bio"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-bloom-navy/60 backdrop-blur-sm transition-opacity duration-200 motion-safe:animate-[fade-in_180ms_ease-out]"
      />
      {/* Dialog */}
      <div className="relative flex max-h-[90vh] w-full max-w-[720px] flex-col overflow-hidden rounded-2xl bg-bloom-cream shadow-2xl ring-1 ring-bloom-navy/10 motion-safe:animate-[fade-in-up_220ms_ease-out]">
        {/* Header */}
        <div className="flex items-start gap-5 border-b border-bloom-navy/10 bg-white p-6 sm:p-8">
          <div className="relative h-[88px] w-[88px] flex-none overflow-hidden border-2 border-white shadow-bloom-card sm:h-[120px] sm:w-[120px]">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
            <h2
              id="bio-modal-title"
              className="text-[24px] font-normal leading-tight tracking-tight text-bloom-navy sm:text-[28px]"
            >
              {first}
              {last && (
                <>
                  <br />
                  {last}
                </>
              )}
            </h2>
            <p className="text-[14px] text-bloom-navy/80 sm:text-[16px]">
              {member.title}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="mt-1 inline-flex h-5 w-5 items-center justify-center text-bloom-navy transition-opacity duration-150 hover:opacity-70"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bloom-navy/5 text-bloom-navy transition-colors hover:bg-bloom-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        {/* Bio body */}
        <div className="flex-1 space-y-4 overflow-y-auto p-6 text-[15px] leading-[1.6] text-bloom-navy sm:p-8 sm:text-[16px] sm:leading-[1.65]">
          {member.bio.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function TeamGrid() {
  const [active, setActive] = useState<TeamMember | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {TEAM.map((member) => (
          <TeamCard
            key={member.name}
            member={member}
            onOpenBio={setActive}
          />
        ))}
      </div>
      {active ? <BioModal member={active} onClose={close} /> : null}
    </>
  );
}
