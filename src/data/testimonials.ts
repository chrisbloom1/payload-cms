import type { Testimonial } from '@/types/bloom'

/**
 * Carousel testimonial data extracted from TestimonialCarousel.tsx so
 * server resolvers can import it without pulling the "use client"
 * carousel into the server bundle (which causes tree-shaking to strip
 * the const at build time).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Bloom is leading the pack by building an amazing ecosystem that will allow us to achieve our goals, both near-term and at scale.",
    author: "Colin Godby",
    title: "CEO and Founder",
    avatarSrc: "/images/brands/testimonial-colin.jpeg",
  },
  {
    quote:
      "This partnership represents an important step for Moonbikes' next chapter. By leveraging Bloom's platform we are confident in our ability to accelerate growth in the U.S., streamline operations, and enhance our customer experience. We are excited to continue to deliver sustainable, all-electric, winter snow sports offerings in North America while expanding our innovation in the mobility space.",
    author: "Nicolas Muron",
    title: "CEO and Founder",
    company: "Moonbikes",
    avatarSrc: "/images/brands/testimonial-nicolas.jpeg",
  },
  {
    quote:
      "This partnership has been instrumental for Maeving as we bring our Built in Britain electric motorcycles to the U.S. By leveraging Bloom's platform, we can scale quickly, streamline our operations, and deliver an exceptional experience to our riders. We're excited to expand our reach and make Maeving accessible to more and more riders.",
    author: "Augustin Brajeux",
    title: "US General Manager",
    company: "Maeving",
    avatarSrc: "/images/brands/testimonial-augustin.jpeg",
  },
];
