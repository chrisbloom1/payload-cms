import type { Metadata } from "next";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";
import { ShortlistViewer } from "./ShortlistViewer";

export const metadata: Metadata = pageMetadata({
  title: "Your shortlist : Hardtech Capital",
  description: "Funders you've saved from Bloom's Hardtech Capital directory.",
  path: "/resources/hardtech-capital/shortlist",
  ogTag: "Shortlist",
});

export default function ShortlistPage() {
  return (
    <>
      <HelpHeader />
      <main className="bg-bloom-cream">
        <ShortlistViewer />
      </main>
      <UnifiedFooter />
    </>
  );
}
