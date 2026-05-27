import type { Metadata } from "next";
import type { ReactNode } from "react";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { pageMetadata } from "@/utilities/pageMetadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Bloom's Privacy Policy describes how we collect, use, and share personal information and how you can exercise your privacy rights.",
  path: "/privacy",
  ogTag: "Privacy",
});

interface TocLink {
  /** Anchor target — note section 7/8 anchors are swapped on the live site (verbatim). */
  href: string;
  label: string;
}

const TOC: readonly TocLink[] = [
  { href: "#01", label: "1. Scope" },
  { href: "#02", label: "2. Personal Information We Collect" },
  { href: "#03", label: "3. How We Use Your Information" },
  { href: "#04", label: "4. How We Disclose Your Information" },
  { href: "#05", label: "5. Your Privacy Choices and Rights  " },
  { href: "#06", label: "6. Security of Your Information" },
  { href: "#08", label: "7. International Data Transfers" },
  { href: "#07", label: "8. Retention of Personal Information" },
  { href: "#09", label: "9. Supplemental Notice for California Residents" },
  { href: "#10", label: "10. Supplemental Notice for Nevada Residents" },
  { href: "#11", label: "11. Children's Information" },
  { href: "#12", label: "12. Other Provisions" },
  { href: "#13", label: "13. Contact Us" },
];

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 border-t border-bloom-grey/40 pt-10 first:border-none first:pt-0"
    >
      <h4 className="mb-4 text-[26px] font-bold leading-tight text-bloom-navy">
        {title}
      </h4>
      <div className="space-y-4 text-[16px] leading-[26px] text-bloom-navy">
        {children}
      </div>
    </section>
  );
}

function H5({ children }: { children: ReactNode }) {
  return (
    <h5 className="mt-6 text-[18px] font-bold leading-tight text-bloom-navy">
      {children}
    </h5>
  );
}

function Bold({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-bloom-navy">{children}</strong>;
}

export default function PrivacyPage() {
  return (
    <>
      <HelpHeader />

      <main id="main-content" className="bg-bloom-cream">
        {/* Hero */}
        <section className="pt-20 pb-12 sm:pt-24 lg:pt-28">
          <div className="mx-auto max-w-[960px] px-4">
            <h1 className="text-[40px] font-bold leading-[44px] tracking-[-0.01em] text-bloom-navy md:text-[48px] md:leading-[52px]">
              Privacy Policy
            </h1>
            <p className="mt-6 text-[14px] uppercase tracking-wider text-bloom-muted">
              Privacy Policy last updated:
              <br />
              <span className="text-bloom-navy normal-case tracking-normal">
                September 6, 2024
              </span>
            </p>
            <p className="mt-6 max-w-[760px] text-[16px] leading-[26px] text-bloom-navy">
              Bloom Inc (“Bloom” or the “Company”) provides technology that
              connects hardware brands with the services they need to thrive.
              This Privacy Policy is designed to help you understand how we
              collect, use, and share your personal information and to help you
              understand and exercise your privacy rights.
            </p>
          </div>
        </section>

        {/* TOC */}
        <section
          aria-label="Table of Contents"
          className="pb-16"
        >
          <div className="mx-auto max-w-[720px] px-4">
            <nav>
              <ol className="space-y-2 text-[16px] leading-[26px] text-bloom-navy">
                {TOC.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:underline underline-offset-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </section>

        {/* Sections */}
        <div className="mx-auto max-w-[720px] space-y-10 px-4 pb-24">
          <Section id="01" title="1. Scope">
            <p>
              This Privacy Policy applies to personal information processed by
              us, including on our websites, through communications with
              individuals, and other online or offline offerings. To make this
              Privacy Policy easier to read, these websites and other offerings
              and interactions are collectively called “Services.”
            </p>
            <p>
              This Privacy Policy does not apply to any of the personal
              information that our customers may collect and process using
              Bloom’s Services (“Customer Data”). Our customers’ respective
              privacy policies govern their collection and use of Customer
              Data. Our processing of Customer Data is governed by the
              contracts that we have in place with our customers, not this
              Privacy Policy. Any questions or requests relating to Customer
              Data should be directed to our customer. Bloom is the controller
              for the personal information we process, unless otherwise stated.
              For information on how to contact us, please refer to Contact Us
              below.
            </p>
          </Section>

          <Section id="02" title="2. Personal Information We Collect">
            <p>
              The categories of personal information we collect depend on how
              you interact with us, our Services, and the requirements of
              applicable law. We collect information that you provide to us,
              information we obtain automatically (such as through video
              recordings and when you use our Services), and information from
              other sources such as third-party services and organizations, as
              described below.
            </p>

            <H5>2.a Information You Choose to Give Us</H5>
            <p>We may collect the following personal information that you provide to us.</p>
            <p>
              <Bold>Profile and Account Information.</Bold> We may collect
              personal information that you provide to view video recordings
              and live stream demonstrations, such as name, title, company,
              and email address.
            </p>
            <p>
              <Bold>Information About Others</Bold>. Such as a payment
              instrument or contact information belonging to another person or
              information about a co-worker. By providing us with personal
              information about others, you certify that you have permission to
              provide that information to Bloom for the purposes described in
              this Privacy Policy and you have shared the Bloom Privacy Policy
              with them.
            </p>
            <p>
              <Bold>Purchases.</Bold> We may collect personal information and
              details associated with your purchases, including payment
              information. Any payments made through or for our Services are
              processed by third-party payment processors. We do not directly
              collect or store any payment card information entered through
              our Services, but it may receive information associated with
              your payment card information (e.g., your billing details).
            </p>
            <p>
              <Bold>Payment Information</Bold>. Such as payment account or
              bank account information. If you are not a Bloom user, we may
              receive payment information relating to you, such as when a
              Bloom user provides your payment card to complete a booking.
            </p>
            <p>
              <Bold>Your Communications with Us.</Bold> We may collect
              personal information, such as email address, phone number, or
              mailing address when you request information about our Services,
              register for our newsletter, request customer or technical
              support, apply for a job, or otherwise communicate with us.
            </p>
            <p>
              <Bold>Surveys.</Bold> We may contact you to participate in
              surveys. If you decide to participate, you may be asked to
              provide certain information which may include personal
              information.
            </p>
            <p>
              <Bold>Interactive Features.</Bold> We and others who use our
              Services may collect personal information that you submit or
              make available through our interactive features (e.g., video
              recordings, messaging and chat features, commenting
              functionalities, forums, blogs, and social media pages). Any
              information you provide using the public sharing features of the
              Services (referred to herein as “User Content”) will be
              considered “public,” unless otherwise required by applicable
              law, and is not subject to the privacy protections referenced
              herein. Please exercise caution before revealing any information
              that may identify you in the real world to other users.
              Conferences, Trade Shows, and Other Events. We may collect
              personal information from individuals when we attend
              conferences, trade shows, and other events.
            </p>
            <p>
              <Bold>Business Development and Strategic Partnerships</Bold>.
              We may collect personal information from individuals and third
              parties to assess and pursue potential business opportunities.
              Job Applications. We may post job openings and opportunities on
              our Services. If you reply to one of these postings by
              submitting your application, CV and/or cover letter to us, we
              will collect and use your information to assess your
              qualifications.
            </p>
            <p>
              <Bold>Referrals and Co-Workers.</Bold> If you are invited to the
              Bloom Platform, for example, as a co-worker, the person who
              invited you can submit personal information about you.
            </p>

            <H5>2.b Information Collected Automatically</H5>
            <p>We may collect personal information automatically when you use our Services:</p>
            <p>
              <Bold>Automatic Data Collection.</Bold> We may collect certain
              information automatically when you use our Services, such as
              your Internet protocol (IP) address, user settings, MAC address,
              cookie identifiers, mobile carrier, mobile advertising and other
              unique identifiers, browser or device information, location
              information (including approximate location derived from IP
              address), and Internet service provider. We may automatically
              collect information regarding your use of our Services, such as
              pages that you visit before, during and after using our
              Services, information about the links you click, the types of
              content you interact with, the frequency and duration of your
              activities, and other information about how you use our
              Services. We may also collect personal information through video
              recordings. For example, your image may be captured if and when
              you are in front of the cameras outside of a vehicle used by
              Bloom for technology testing and demonstration purposes.
            </p>
            <p>
              <Bold>Location Information.</Bold> We may collect precise
              location information, such as through GPS coordinates associated
              with our technology testing and demonstration hardware.
            </p>
            <p>
              <Bold>Cookies, Pixel Tags/Web Beacons, and Other Technologies.</Bold>{" "}
              We, as well as third parties that provide content, advertising,
              or other functionality on our Services, may use cookies, pixel
              tags, local storage, and other technologies (“Technologies”) to
              automatically collect information through your use of our
              Services.
            </p>
            <p>
              <Bold>Cookies.</Bold> Cookies are small text files placed in
              device browsers that store preferences and facilitate and
              enhance your experience.
            </p>
            <p>
              <Bold>Pixel Tags/Web Beacons.</Bold> A pixel tag (also known as
              a web beacon) is a piece of code embedded in our Services that
              collects information about engagement on our Services. The use
              of a pixel tag allows us to record, for example, that a user has
              visited a particular web page or clicked on a particular
              advertisement. We may also include web beacons in e-mails to
              understand whether messages have been opened, acted on, or
              forwarded. Our uses of these Technologies fall into the
              following general categories:
            </p>
            <p>
              <Bold>Operationally Necessary.</Bold> This includes Technologies
              that allow you access to our Services, applications, and tools
              that are required to identify irregular website behavior,
              prevent fraudulent activity and improve security or that allow
              you to make use of our functionality;
            </p>
            <p>
              <Bold>Performance-Related.</Bold> We may use Technologies to
              assess the performance of our Services, including as part of
              our analytic practices to help us understand how individuals use
              our Services (see Analytics below);
            </p>
            <p>
              <Bold>Functionality-Related.</Bold> We may use Technologies that
              allow us to offer you enhanced functionality when accessing or
              using our Services. This may include identifying you when you
              sign into our Services or keeping track of your specified
              preferences, interests, or past items viewed;
            </p>
            <p>
              <Bold>Advertising- or Targeting-Related.</Bold> We may use first
              party or third-party Technologies to deliver content, including
              ads relevant to your interests, on our Services or on third-
              party websites. See “Your Privacy Choices and Rights” below to
              understand your choices regarding these Technologies.
            </p>
            <p>
              <Bold>Analytics.</Bold> We may use Technologies and other third-
              party tools to process analytics information on our Services.
              Our analytics partners may include:
            </p>
            <p>
              <Bold>AWS Pinpoint.</Bold> For more information, please visit{" "}
              <a
                href="https://aws.amazon.com/privacy/?nc1=f_pr"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                AWS’ Privacy Notice
              </a>
              . To learn more about how to opt-out of AWS’ use of your
              information, please click{" "}
              <a
                href="https://aws.amazon.com/privacy/?nc1=f_pr#Access_and_Choice"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                here.
              </a>
            </p>
            <p>
              <Bold>Google Analytics.</Bold> For more information, please
              visit{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                Google Analytics’ Privacy Policy
              </a>
              . To learn more about how to opt-out of Google Analytics’ use of
              your information, please click{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                here.
              </a>
            </p>
            <p>
              <Bold>Leadfeeder.</Bold> For more information, please visit{" "}
              <a
                href="https://www.leadfeeder.com/privacy/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                Leadfeeder’s Privacy Notice
              </a>
              . To learn more about how to opt-out of Leadfeeder’s use of your
              information, please click{" "}
              <a
                href="https://www.leadfeeder.com/privacy/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                here.
              </a>
            </p>

            <H5>2.c Information Collected from Other Sources</H5>
            <p>
              We may obtain information about you from other sources,
              including through third-party services and organizations. For
              example, if you access our Services through a third-party
              application, such as an app store, a third-party login service,
              or a social networking site, we may collect information about
              you from that third-party application that you have made
              available via your privacy settings.
            </p>
            <p>
              <Bold>Social Media Platforms.</Bold> Our Services may contain
              social media buttons such as LinkedIn or Instagram (that might
              include widgets such as the “share this” button or other
              interactive mini programs). These features may collect your IP
              address, which page you are visiting on our Services, and may
              set a cookie to enable the feature to function properly. Your
              interactions with these platforms are governed by the privacy
              policy of the company providing it.
            </p>
            <p>
              <Bold>Third-Party Applications.</Bold> If you choose to link,
              connect, or login to the Bloom Platform with a third-party
              service, such as Google, Facebook, and WeChat, you direct the
              service to send us information such as your registration,
              friends list, and profile information as controlled by that
              service or as authorized by you via your privacy settings at
              that service. If you choose to connect a smart lock to your
              Bloom account, we may collect information about the smart
              device, such as log or event information and device information.
            </p>
            <p>
              <Bold>Financial Institutions.</Bold> If you elect to pay with
              funds from your bank account, we may receive certain information
              from your financial institution, such as bank account details
              and account balance.
            </p>
            <p>
              <Bold>Flexible Payment Plans and Financing Providers.</Bold> If
              you elect to purchase a reservation and pay on an installment
              plan, we may receive certain information from the third-party
              provider, such as the payment schedule and actual payments on
              authorized payment plans.
            </p>
          </Section>

          <Section id="03" title="3. How We Use Your Information">
            <p>
              We use your information for a variety of business purposes,
              including to provide our Services, for administrative purposes,
              and to market our products and Services, as described below.
            </p>

            <H5>3.a Provide Our Services</H5>
            <p>
              We use your information to fulfill our contract with you and
              provide you with our Services, such as: Managing your
              information and accounts; Providing access to certain areas,
              functionalities, and features of our Services; Answering
              requests for customer or technical support; Communicating with
              you about your account, activities on our Services, and policy
              changes; Processing your financial information and other payment
              methods for products or Services purchased; Processing
              applications if you apply for a job we post on our Services; and
              Allowing you to register for events.
            </p>

            <H5>3.b Administrative Purposes</H5>
            <p>
              We use your information for various administrative purposes,
              such as: Pursuing our legitimate interests such as research and
              development (including marketing research), direct marketing,
              network and information security, and fraud prevention;
              Detecting security incidents, protecting against malicious,
              deceptive, fraudulent or illegal activity, and prosecuting those
              responsible for that activity; Measuring interest and engagement
              in our Services; Short-term, transient use, such as contextual
              customization of ads; Improving, upgrading or enhancing our
              Services; Developing new products and Services; Ensuring
              internal quality control and safety; Authenticating and
              verifying individual identities, including requests to exercise
              your rights under this policy; Debugging to identify and repair
              errors with our Services; Auditing relating to interactions,
              transactions and other compliance activities; Enforcing our
              agreements and policies; and Complying with our legal
              obligations.
            </p>

            <H5>3.c Marketing and Advertising our Products and Services</H5>
            <p>
              We may use personal information to tailor and provide you with
              content and advertisements. We may provide you with these
              materials as permitted by applicable law.
            </p>
            <p>
              Some of the ways we may market to you include email campaigns,
              custom audiences advertising, and “interest-based” or
              “personalized advertising,” including through cross-device
              tracking.
            </p>
            <p>
              If you have any questions about our marketing practices or if
              you would like to opt out of the use of your personal
              information for marketing purposes, you may contact us at any
              time as set forth in Contact Us below.
            </p>

            <H5>3.d Other Purposes</H5>
            <p>We also use your information for other purposes as requested by you or as permitted by applicable law.</p>
            <p>
              <Bold>Consent.</Bold> We may use personal information for other
              purposes that are clearly disclosed to you at the time you
              provide personal information or with your consent.
            </p>
            <p>
              <Bold>De-identified and Aggregated Information.</Bold> We may
              use personal information and other information about you to
              create de-identified and/or aggregated information, such as de-
              identified demographic information, de-identified location
              information, information about the device from which you access
              our Services, or other analyses we create.
            </p>
          </Section>

          <Section id="04" title="4. How We Disclose Your Information">
            <p>
              We disclose your information to third parties for a variety of
              business purposes, including to provide our Services, to protect
              us or others, or in the event of a major business transaction
              such as a merger, sale, or asset transfer, as described below.
            </p>

            <H5>4.a Disclosures to Provide Our Services</H5>
            <p>The categories of third parties with whom we may share your information are described below.</p>
            <p>
              <Bold>Service Providers.</Bold> We may share your personal
              information with our third-party service providers who use that
              information to help us provide our Services. This includes
              service providers that provide us with IT support, data
              analytics, hosting, payment processing, customer service, and
              related services.
            </p>
            <p>
              <Bold>Business Partners.</Bold> We may share your personal
              information with business partners to provide you with a product
              or service you have requested. We may also share your personal
              information to business partners with whom we jointly offer
              products or services.
            </p>
            <p>
              <Bold>Social Networks.</Bold> We may share your personal
              information with social networks when you request that we do
              so, such as when you share or repost content from our Services.
            </p>
            <p>
              <Bold>Advertising Partners.</Bold> We may share your personal
              information with third-party advertising partners. These third-
              party advertising partners may set Technologies and other
              tracking tools on our Services to collect information regarding
              your activities and your device (e.g., your IP address, cookie
              identifiers, page(s) visited, location, time of day). These
              advertising partners may use this information (and similar
              information collected from other services) for purposes of
              delivering personalized advertisements to you when you visit
              digital properties within their networks. This practice is
              commonly referred to as “interest-based advertising” or
              “personalized advertising.”
            </p>
            <p>
              <Bold>APIs/SDKs.</Bold> We may use third-party Application
              Program Interfaces (“APIs”) and Software Development Kits
              (“SDKs”) as part of the functionality of our Services. For more
              information about our use of APIs and SDKs, please contact us as
              set forth in Contact Us below.
            </p>

            <H5>4.b Disclosures to Protect Us or Others</H5>
            <p>
              We may access, preserve, and disclose any information we store
              associated with you to external parties if we, in good faith,
              believe doing so is required or appropriate to: comply with law
              enforcement or national security requests and legal process,
              such as a court order or subpoena; protect your, our, or others’
              rights, property, or safety; enforce our policies or contracts;
              collect amounts owed to us; or assist with an investigation or
              prosecution of suspected or actual illegal activity.
            </p>

            <H5>4.c Disclosures in the Event of Merger, Sale, or Other Asset Transfers</H5>
            <p>
              If we are involved in a merger, acquisition, financing due
              diligence, reorganization, bankruptcy, receivership, purchase or
              sale of assets, or transition of service to another provider,
              your information may be sold or transferred as part of such a
              transaction, as permitted by law and/or contract.
            </p>
          </Section>

          <Section id="05" title="5. Your Privacy Choices and Rights">
            <H5>5.a Your Privacy Choices</H5>
            <p>The privacy choices you may have about your personal information are determined by applicable law and are described below.</p>
            <p>
              <Bold>Email and Telephone Communications.</Bold> If you receive
              an unwanted email from us, you can use the unsubscribe link
              found at the bottom of the email to opt out of receiving future
              emails. Note that you will continue to receive transaction-
              related emails regarding products or Services you have
              requested. We may also send you certain non-promotional
              communications regarding us and our Services, and you will not
              be able to opt out of those communications (e.g., communications
              regarding our Services or updates to our Terms or this Privacy
              Policy).
            </p>
            <p>We process requests to be placed on do-not-mail, do-not-phone, and do-not-contact lists as required by applicable law.</p>
            <p>
              <Bold>“Do Not Track.”</Bold> Do Not Track (“DNT”) is a privacy
              preference that users can set in certain web browsers. Please
              note that we do not respond to or honor DNT signals or similar
              mechanisms transmitted by web browsers.
            </p>
            <p>
              <Bold>Cookies and Interest-Based Advertising.</Bold> You may
              stop or restrict the placement of Technologies on your device or
              remove them by adjusting your preferences as your browser or
              device permits. However, if you adjust your preferences, our
              Services may not work properly. Please note that cookie-based
              opt-outs are not effective on mobile applications. However, you
              may opt-out of personalized advertisements on some mobile
              applications by following the instructions for{" "}
              <a
                href="https://support.google.com/googleplay/android-developer/answer/6048248?hl=en"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                Android
              </a>
              ,{" "}
              <a
                href="https://support.apple.com/en-us/HT202074"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                iOS
              </a>
              , and{" "}
              <a
                href="https://www.networkadvertising.org/mobile-choice/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                others
              </a>
              .
            </p>
            <p>
              The online advertising industry also provides websites from
              which you may opt out of receiving targeted ads from data
              partners and other advertising partners that participate in
              self-regulatory programs. You can access these and learn more
              about targeted advertising and consumer choice and privacy by
              visiting the{" "}
              <a
                href="https://optout.networkadvertising.org/?c=1"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                Network Advertising Initiative
              </a>
              ,{" "}
              <a
                href="https://optout.aboutads.info/?c=2&lang=EN"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                the Digital Advertising Alliance
              </a>
              ,{" "}
              <a
                href="https://www.youronlinechoices.eu/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                the European Digital Advertising Alliance
              </a>
              , and{" "}
              <a
                href="https://youradchoices.ca/en/tools"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                the Digital Advertising Alliance of Canada
              </a>
              .
            </p>
            <p>Please note you must separately opt out in each browser and on each device.</p>
            <p>
              <Bold>Personal Information in Video Recordings.</Bold> Bloom may
              use video to facilitate the marketing and sales of this
              technology. The Company recognizes that such video recordings
              may occasionally and unintentionally capture personal
              information that is not relevant or necessary for these
              purposes. We have implemented controls to remove such personal
              information (e.g., truncation of recordings or blurring of
              individuals or objects within the recordings). If you observe
              any of your personal information that you would like to request
              that we remove, please contact us as set forth in Contact Us
              below.
            </p>
            <p>
              We will process such requests as we deem appropriate and in
              accordance with applicable laws. Similarly, you may report
              inappropriate content (e.g., intellectual property violations;
              illegal, dangerous, or violent content) by contacting us.
            </p>

            <H5>5.b Your Privacy Rights</H5>
            <p>In accordance with applicable law, you may have the right to:</p>
            <p>
              <Bold>Access Personal Information</Bold> about you, including:
              (i) confirming whether we are processing your personal
              information; (ii) obtaining access to or a copy of your personal
              information;
            </p>
            <p>
              <Bold>Request Correction</Bold> of your personal information
              where it is inaccurate, incomplete or outdated. In some cases,
              we may provide self-service tools that enable you to update your
              personal information;
            </p>
            <p>
              <Bold>Request Deletion, Anonymization or Blocking</Bold> of
              your personal information when processing is based on your
              consent or when processing is unnecessary, excessive or
              noncompliant;
            </p>
            <p>
              <Bold>Request Restriction of or Object to</Bold> our processing
              of your personal information when processing is noncompliant;
            </p>
            <p>
              <Bold>Withdraw your Consent</Bold> to our processing of your
              personal information. If you refrain from providing personal
              information or withdraw your consent to processing, some
              features of our Service may not be available;
            </p>
            <p>
              <Bold>Request data portability</Bold> and receive an electronic
              copy of personal information that you have provided to us;
            </p>
            <p>
              <Bold>Be informed</Bold> about third parties with which your
              personal information has been shared; and{" "}
              <Bold>Request the review of decisions taken exclusively based on automated processing</Bold>{" "}
              if that could affect data subject rights. If you would like to
              exercise any of these rights, please contact us as set forth in
              Contact Us below. We will process such requests in accordance
              with applicable laws.
            </p>
          </Section>

          <Section id="06" title="6. Security of Your Information">
            <p>
              We take steps to ensure that your information is treated
              securely and in accordance with this Privacy Policy.
              Unfortunately, no system is 100% secure, and we cannot ensure or
              warrant the security of any information you provide to us. We
              have taken appropriate safeguards to require that your personal
              information will remain protected and require our third-party
              service providers and partners to have appropriate safeguards as
              well. To the fullest extent permitted by applicable law, we do
              not accept liability for unauthorized disclosure.
            </p>
            <p>
              By using our Services or providing personal information to us,
              you agree that we may communicate with you electronically
              regarding security, privacy, and administrative issues relating
              to your use of our Services. If we learn of a security system’s
              breach, we may attempt to notify you electronically by posting a
              notice on our Services, by mail or by sending an email to you.
            </p>
          </Section>

          {/* Note: anchor IDs intentionally swap for sections 7 & 8 to match live site */}
          <Section id="08" title="7. International Data Transfers">
            <p>
              All information processed by us may be transferred, processed,
              and stored anywhere in the world, including, but not limited to,
              the United States or other countries, which may have data
              protection laws that are different from the laws where you
              live. We endeavor to safeguard your information consistent with
              the requirements of applicable laws.
            </p>
          </Section>

          <Section id="07" title="8. Retention of Personal Information">
            <p>
              We store the personal information we collect as described in
              this Privacy Policy for as long as you use our Services or as
              necessary to fulfill the purpose(s) for which it was collected,
              provide our Services, resolve disputes, establish legal
              defenses, conduct audits, pursue legitimate business purposes,
              enforce our agreements, and comply with applicable laws.
            </p>
          </Section>

          <Section id="09" title="9. Supplemental Notice for California Residents">
            <p>
              If you are a California resident, the California Consumer
              Privacy Act of 2018, as amended (the “CCPA”), grants you
              specific rights regarding personal information, as outlined in
              the table below.
            </p>
            <p>
              <Bold>“Sales” of Personal Information under the CCPA.</Bold>{" "}
              For purposes of the CCPA, Bloom does not “sell” personal
              information, nor do we have actual knowledge of any “sale” of
              personal information of minors under 16 years of age.
            </p>
            <p>
              <Bold>Additional Privacy Rights for California Residents.</Bold>
            </p>
            <p>
              <Bold>Non-Discrimination.</Bold> California residents have the
              right not to receive discriminatory treatment by us for the
              exercise of their rights conferred by the CCPA.
            </p>
            <p>
              <Bold>Authorized Agent.</Bold> Only you, or someone legally
              authorized to act on your behalf, may make a verifiable consumer
              request related to your personal information. You may also make
              a verifiable consumer request on behalf of your minor child. To
              designate an authorized agent, please contact us as set forth in
              Contact Us below and provide written authorization signed by you
              and your designated agent.
            </p>
            <p>
              <Bold>Verification.</Bold> To protect your privacy, we will take
              steps to verify your identity before fulfilling your request.
              When you make a request, we will ask you to provide sufficient
              information that allows us to reasonably verify you are the
              person about whom we collected personal information or an
              authorized representative, which may include asking you to
              answer questions regarding your profile information and use of
              our Services.
            </p>
            <p>
              If you are a California resident and would like to exercise any
              of your rights under the CCPA, please contact us as set forth in
              Contact Us below. We will process such requests in accordance
              with applicable laws.
            </p>
            <p>
              <Bold>Right for Minors to Remove Posted Content.</Bold> Where
              required by law, California residents under the age of 18 may
              request to have their posted content or information removed
              from the publicly-viewable portions of the Services by
              contacting us directly as set forth in Contact Us below.
            </p>
          </Section>

          <Section id="10" title="10. Supplemental Notice for Nevada Residents">
            <p>
              If you are a resident of Nevada, you have the right to opt-out
              of the sale of certain Personal Information to third parties who
              intend to license or sell that Personal Information. Please note
              that we do not currently sell your Personal Information as
              sales are defined in Nevada Revised Statutes Chapter 603A. To
              request that we not sell your information in the future, please
              contact us at{" "}
              <a
                href="mailto:info@bloomnetwork.ai"
                className="underline underline-offset-4 hover:opacity-80"
              >
                info@bloomnetwork.ai
              </a>{" "}
              with the subject line “Nevada Do Not Sell Request” and provide
              us with your name and the email address associated with your
              account.
            </p>
          </Section>

          <Section id="11" title="11. Children's Information">
            <p>
              The Services are not directed to individuals under the age of
              18, and we do not knowingly collect personal information from
              children. If you are a parent or guardian and believe your child
              has uploaded personal information to our site without your
              consent, you may contact us as described in Contact Us below.
              If we become aware that a child has provided us with personal
              information in violation of applicable law, we will delete any
              personal information we have collected, unless we have a legal
              obligation to keep it.
            </p>
          </Section>

          <Section id="12" title="12. Other Provisions">
            <p>
              <Bold>Third-Party Websites/Applications.</Bold> The Services may
              contain links to other websites/applications and other
              websites/applications may reference or link to our Services.
              These third-party services are not controlled by us. We
              encourage our users to read the privacy policies of each website
              and application with which they interact. We do not endorse,
              screen or approve, and are not responsible for, the privacy
              practices or content of such other websites or applications.
              Providing personal information to third-party websites or
              applications is at your own risk.
            </p>
            <p>
              <Bold>Supervisory Authority.</Bold> If you are located in the
              European Economic Area, Switzerland, the United Kingdom or
              Brazil, you have the right to lodge a complaint with a
              supervisory authority if you believe our processing of your
              personal information violates applicable law.
            </p>
            <p>
              <Bold>Changes to our Privacy Policy.</Bold> We may revise this
              Privacy Policy from time to time in our sole discretion. If
              there are any material changes to this Privacy Policy, we will
              notify you as required by applicable law. You understand and
              agree that you will be deemed to have accepted the updated
              Privacy Policy if you continue to use our Services after the
              new Privacy Policy takes effect.
            </p>
          </Section>

          <Section id="13" title="13. Contact Us">
            <p>
              If you have any questions about our privacy practices or this
              Privacy Policy, or to exercise your rights as detailed in this
              Privacy Policy, please contact us at:
            </p>
            <p>
              <Bold>Bloom</Bold>
              <br />
              <a
                href="mailto:hello@bloomnetwork.ai"
                className="underline underline-offset-4 hover:opacity-80"
              >
                hello@bloomnetwork.ai
              </a>
              <br />
              2050 15th St, Detroit, MI 48216
            </p>
          </Section>
        </div>
      </main>

      <UnifiedFooter />
    </>
  );
}
