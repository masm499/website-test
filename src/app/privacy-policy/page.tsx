import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | innovative-aiagents",
  description:
    "How innovative-aiagents collects, uses and protects information when you visit this site or work with us on automation and AI projects.",
};

// Replace these before publishing
const CONTACT_EMAIL = "innovations2000@gmail.com";
const LAST_UPDATED = "October 27, 2026";

const h2 = "mt-12 text-2xl font-semibold tracking-tight text-neutral-900";
const p = "mt-4 leading-relaxed text-neutral-700";
const ul = "mt-4 list-disc space-y-2 pl-6 leading-relaxed text-neutral-700";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-600">
          Last updated: {LAST_UPDATED}
        </p>

        <p className={p}>
          This policy explains how innovative-aiagents (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects, uses and protects information when you
          visit this website or work with us on workflow automation, API
          integration and AI projects.
        </p>

        <h2 className={h2}>1. Information we collect</h2>
        <ul className={ul}>
          <li>
            <strong>Contact details:</strong> your name, email address, company
            and anything you include when you message us or book a call.
          </li>
          <li>
            <strong>Project information:</strong> descriptions of your
            processes, workflows and the tools you use, so we can scope and
            build a solution.
          </li>
          <li>
            <strong>Access and business data:</strong> when we build or
            maintain an automation, we may need access to your tools (such as
            CRMs, spreadsheets, databases and APIs) and to the data inside
            them.
          </li>
          <li>
            <strong>Website usage data:</strong> basic technical information
            such as pages visited, browser and device type, and approximate
            location, collected through server logs
            [and analytics, if you use them].
          </li>
        </ul>

        <h2 className={h2}>2. How we use information</h2>
        <ul className={ul}>
          <li>To respond to enquiries and schedule calls.</li>
          <li>To scope, build, test, maintain and support your automations.</li>
          <li>To keep this website secure and working properly.</li>
          <li>To meet legal and contractual obligations.</li>
        </ul>
        <p className={p}>We do not sell personal information.</p>

        <h2 className={h2}>3. Client data and credentials</h2>
        <p className={p}>
          Client projects often involve access to business systems. When we
          work with that access, we:
        </p>
        <ul className={ul}>
          <li>Ask only for the access needed to complete the work.</li>
          <li>
            Prefer dedicated accounts or API keys with limited permissions
            over personal logins.
          </li>
          <li>
            Store credentials in the credential storage of the automation
            platform (for example n8n) rather than in plain text inside
            workflows.
          </li>
          <li>
            Remove our access when the engagement ends, and recommend that you
            rotate any keys we used.
          </li>
        </ul>

        <h2 className={h2}>4. AI services and third-party tools</h2>
        <p className={p}>
          Automations we build may send data to third-party services chosen for
          your project. These can include large language model (LLM)
          providers, automation platforms such as n8n (cloud or self-hosted),
          hosting providers, and the business tools you already use.
        </p>
        <ul className={ul}>
          <li>
            We will tell you which providers a solution relies on, and you
            decide what data is sent to them.
          </li>
          <li>
            Each provider handles data under its own terms and privacy policy,
            including whether data may be retained or used to improve models.
            We recommend reviewing these, and we use API and business-tier
            settings that limit data use where they are available.
          </li>
          <li>
            We recommend avoiding highly sensitive data (such as health or
            payment card details) in AI workflows unless this has been
            discussed and agreed with us first.
          </li>
        </ul>

        <h2 className={h2}>5. Sharing information</h2>
        <p className={p}>
          We share information only with service providers that help us run the
          website or deliver your project, when required by law, or as part of
          a business transfer. We do not share your project data with anyone
          else.
        </p>

        <h2 className={h2}>6. How long we keep information</h2>
        <p className={p}>
          We keep enquiry and contact details for as long as needed to respond
          and maintain our business relationship, typically no longer than
          [24 months] after our last contact. At the end of a project, we
          delete or return project data on request, within [30 days].
        </p>

        <h2 className={h2}>7. Security</h2>
        <p className={p}>
          We use reasonable technical and organisational measures to protect
          information. No method of transmission or storage is completely
          secure, so we cannot guarantee absolute security.
        </p>

        <h2 className={h2}>8. Your rights</h2>
        <p className={p}>
          Depending on where you live, you may have the right to access,
          correct or delete your personal information, to object to or restrict
          certain uses, and to withdraw consent. To make a request, email us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-800"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className={h2}>9. Cookies and analytics</h2>
        <p className={p}>
          [Describe your setup here. For example: &ldquo;This site uses only
          essential cookies&rdquo; or &ldquo;We use [analytics tool] to
          understand how the site is used.&rdquo;]
        </p>

        <h2 className={h2}>10. International processing</h2>
        <p className={p}>
          Information may be processed in countries other than your own,
          including where our service providers operate.
        </p>

        <h2 className={h2}>11. Children</h2>
        <p className={p}>
          Our services are for businesses and are not directed to children under
          16. We do not knowingly collect their information.
        </p>

        <h2 className={h2}>12. Changes to this policy</h2>
        <p className={p}>
          We may update this policy from time to time. The date at the top shows
          when it was last changed.
        </p>

        <h2 className={h2}>13. Contact</h2>
        <p className={p}>
          Questions about this policy? Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-800"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          or visit our{" "}
          <Link
            href="/contact-us"
            className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-800"
          >
            contact page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
