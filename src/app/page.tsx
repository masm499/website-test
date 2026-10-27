import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "innovative-aiagents | Workflow automation and AI agents",
  description:
    "Practical automation with n8n, LangChain, LangGraph and AI. Reduce repetitive work, connect your tools and streamline workflows.",
};

const services = [
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, approvals, notifications and data entry with n8n.",
  },
  {
    title: "App & API Integration",
    description:
      "Connect CRMs, websites, spreadsheets, databases and third-party services.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Build intelligent workflows using LLMs, LangChain and LangGraph.",
  },
  {
    title: "Custom Python Solutions",
    description:
      "Handle complex business logic, data processing and integrations.",
  },
  {
    title: "Workflow Optimization",
    description:
      "Improve existing automations, troubleshoot errors and make workflows more reliable.",
  },
];

const steps = [
  {
    title: "Understand your process",
    description:
      "We start with how the work happens today and where the time goes.",
  },
  {
    title: "Identify what to automate",
    description:
      "We pick the repetitive, error-prone steps that are worth handing off.",
  },
  {
    title: "Build a solution that fits",
    description:
      "I build a reliable, maintainable workflow around your business needs.",
  },
];

function WorkflowVisual() {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Diagram of a workflow: a trigger feeds an AI agent, which updates a CRM, a spreadsheet and an inbox"
      className="h-auto w-full"
    >
      <g className="stroke-neutral-300" strokeWidth={2} fill="none">
        <path d="M130 180 H190" />
        <path d="M290 180 H320 V80 H350" />
        <path d="M290 180 H350" />
        <path d="M290 180 H320 V280 H350" />
      </g>

      <g>
        <rect
          x="30"
          y="145"
          width="100"
          height="70"
          rx="10"
          className="fill-white stroke-neutral-300"
          strokeWidth={2}
        />
        <text
          x="80"
          y="186"
          textAnchor="middle"
          className="fill-neutral-700 text-[15px] font-medium"
        >
          Trigger
        </text>

        <rect
          x="190"
          y="135"
          width="100"
          height="90"
          rx="10"
          className="fill-blue-700"
        />
        <text
          x="240"
          y="186"
          textAnchor="middle"
          className="fill-white text-[15px] font-medium"
        >
          AI agent
        </text>

        <rect
          x="350"
          y="50"
          width="100"
          height="60"
          rx="10"
          className="fill-white stroke-neutral-300"
          strokeWidth={2}
        />
        <text
          x="400"
          y="86"
          textAnchor="middle"
          className="fill-neutral-700 text-[15px] font-medium"
        >
          CRM
        </text>

        <rect
          x="350"
          y="150"
          width="100"
          height="60"
          rx="10"
          className="fill-white stroke-neutral-300"
          strokeWidth={2}
        />
        <text
          x="400"
          y="186"
          textAnchor="middle"
          className="fill-neutral-700 text-[15px] font-medium"
        >
          Sheets
        </text>

        <rect
          x="350"
          y="250"
          width="100"
          height="60"
          rx="10"
          className="fill-white stroke-neutral-300"
          strokeWidth={2}
        />
        <text
          x="400"
          y="286"
          textAnchor="middle"
          className="fill-neutral-700 text-[15px] font-medium"
        >
          Inbox
        </text>
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="w-full bg-white text-neutral-900">
      {/* Hero */}
      <section className="w-full">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Automation that takes repetitive work off your team
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              I help businesses reduce manual work, connect their tools and
              streamline workflows using n8n, LangChain, LangGraph and
              AI-powered solutions. Practical, reliable and easy to maintain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-md bg-blue-700 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Book a call
              </Link>
              <Link
                href="#services"
                className="rounded-md border border-neutral-300 px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                See how I can help
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 sm:p-10">
            <WorkflowVisual />
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="w-full scroll-mt-4 border-t border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            How I can help grow your business
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description }) => (
              <div key={title} className="bg-white p-8">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {description}
                </p>
              </div>
            ))}

            <div className="bg-blue-700 p-8 text-white">
              <h3 className="text-lg font-semibold">Not sure where to start?</h3>
              <p className="mt-3 leading-relaxed text-blue-50">
                You don&rsquo;t need to know which technology to use. Tell me
                what takes too much time and we&rsquo;ll find a practical
                solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="w-full border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A straightforward approach
          </h2>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(({ title, description }, index) => (
              <li key={title} className="border-t-2 border-blue-700 pt-6">
                <span className="text-sm font-medium text-blue-700">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="w-full bg-neutral-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Have a workflow in mind?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300">
              Send a message or book a call and we&rsquo;ll look at how
              automation can save your business time. &mdash; innovative-aiagents
            </p>
          </div>
          <Link
            href="/contact-us"
            className="shrink-0 rounded-md bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a call
          </Link>
        </div>
      </section>
    </main>
  );
}
