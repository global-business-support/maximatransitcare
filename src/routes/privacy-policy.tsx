import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/Section";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Maxima Transit Care" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Maxima Transit Care, including our mobile information and text messaging privacy practices.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy and the protection of your information are important to Maxima Transit Care."
      />

      <Section>
        <div className="container-pro max-w-4xl">
          <article className="bg-white p-6 md:p-10 rounded-3xl border border-border shadow-sm space-y-8">
            <header>
              <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand-red)]">
                Maxima Transit Care
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[color:var(--brand-blue-deep)]">
                Privacy Policy
              </h2>
            </header>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                1. Introduction
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                Maxima Transit Care (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects
                your privacy and is committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, store, and protect your information when you
                visit our website, use our services, or communicate with us.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                By accessing our website or using our services, you agree to the practices described
                in this Privacy Policy.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                2. Information We Collect
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We may collect the following types of information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-7">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, mailing
                  address, and other contact details.
                </li>
                <li>
                  <strong>Business Information:</strong> Company name, business address, and
                  service-related information.
                </li>
                <li>
                  <strong>Communication Information:</strong> Messages, inquiries, customer support
                  requests, and communication preferences.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, device
                  information, website usage data, and cookies.
                </li>
                <li>
                  <strong>SMS Consent Information:</strong> Mobile phone numbers and consent records
                  provided when opting in to receive text messages from us.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                3. How We Use Your Information
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We may use the collected information for the following purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-7">
                <li>To provide and manage our transportation and logistics services.</li>
                <li>To respond to inquiries and customer support requests.</li>
                <li>To communicate important service-related updates.</li>
                <li>
                  To send appointment confirmations, service notifications, and operational updates.
                </li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To comply with applicable legal and regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                4. SMS/Text Messaging Privacy Policy
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                If you provide your mobile phone number and consent to receive SMS/text messages
                from Maxima Transit Care, we may send you messages related to our services, updates,
                notifications, and other communications based on your consent.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                Message and data rates may apply. Message frequency may vary. You can opt out at any
                time by replying <strong>STOP</strong> to any message. For assistance, reply{" "}
                <strong>HELP</strong> or contact us using the details provided on our website.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                Providing consent to receive text messages is not a condition of purchasing any
                goods or services.
              </p>
              <p className="mt-3 font-semibold text-[color:var(--brand-blue-deep)]">
                Mobile Information Sharing Statement:
              </p>
              <p className="mt-2 text-muted-foreground leading-8">
                No mobile information will be shared with third parties/affiliates for
                marketing/promotional purposes. All other categories exclude text messaging
                originator opt-in data and consent; this information will not be shared with any
                third parties.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                5. Information Sharing and Disclosure
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We do not sell, rent, or trade your personal information to third parties for their
                marketing purposes.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                We may share limited information with trusted service providers when necessary to
                operate our business, deliver services, maintain our website, or comply with legal
                obligations.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                However, SMS/text messaging consent, opt-in data, and mobile information will not be
                shared with third parties or affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                6. Cookies and Tracking Technologies
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                Our website may use cookies and similar tracking technologies to improve website
                functionality, analyze traffic, understand visitor preferences, and enhance the user
                experience.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                You may disable cookies through your browser settings. However, certain website
                features may not function properly.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                7. Data Security
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We implement reasonable administrative, technical, and organizational security
                measures to protect your personal information against unauthorized access, misuse,
                alteration, disclosure, or destruction.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                However, no method of internet transmission or electronic storage is completely
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                8. Data Retention
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We retain personal information only for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, provide our services, resolve disputes, and comply
                with applicable legal requirements.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                9. Your Privacy Rights
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                Depending on applicable laws, you may have the right to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground leading-7">
                <li>Request access to your personal information.</li>
                <li>Request correction of inaccurate information.</li>
                <li>
                  Request deletion of your personal information, subject to legal requirements.
                </li>
                <li>Withdraw your consent where applicable.</li>
                <li>Opt out of SMS communications at any time by replying STOP.</li>
              </ul>
              <p className="mt-3 text-muted-foreground leading-8">
                To exercise these rights, please contact Maxima Transit Care.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                10. Third-Party Websites
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                Our website may contain links to third-party websites or services. We are not
                responsible for the privacy practices, content, or security of those external
                websites. We encourage users to review their respective privacy policies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                11. Children&apos;s Privacy
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                Our services are not intended for children under the age of 13. We do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                12. Changes to This Privacy Policy
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                We reserve the right to update or modify this Privacy Policy at any time. Any
                changes will be published on this page with an updated effective date.
              </p>
              <p className="mt-3 text-muted-foreground leading-8">
                We encourage visitors to review this page periodically.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[color:var(--brand-blue-deep)]">
                13. Contact Information
              </h3>
              <p className="mt-3 text-muted-foreground leading-8">
                If you have questions, concerns, or requests regarding this Privacy Policy, please
                contact us:
              </p>
              <address className="mt-3 space-y-2 not-italic text-muted-foreground leading-7">
                <p>
                  <strong>Company Name:</strong> Maxima Transit Care
                </p>
                <p>
                  <strong>Website:</strong> maximatransitcare.com
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    className="text-[color:var(--brand-blue)] underline"
                    href="mailto:contact@maximatransitcare.com"
                  >
                    contact@maximatransitcare.com
                  </a>
                </p>
              </address>
            </section>

            <p className="border-t border-border pt-6 text-sm text-muted-foreground">
              © 2026 Maxima Transit Care. All Rights Reserved.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
