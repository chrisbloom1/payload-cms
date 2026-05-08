import { permanentRedirect } from "next/navigation";

/**
 * Legacy alias. The canonical URL for customer stories is
 * /customer-stories/[slug]; /stories/[slug] is preserved as a 308
 * permanent redirect so old indexed URLs and email links keep working.
 */
export default async function LegacyStoryRedirect(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  permanentRedirect(`/customer-stories/${slug}`);
}
