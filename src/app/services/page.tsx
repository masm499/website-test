import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | innovative-aiagents",
  description:
    "Workflow automation, app and API integration, AI-powered automation, custom Python solutions and workflow optimization with n8n, LangChain and LangGraph.",
};

const services = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks, approvals, notifications and data entry with n8n, so your team spends its time on work that needs people.",
    examples: [
      "Approval and sign-off flows",
      "Notifications and alerts across your channels",
      "Automated data entry and record updates",
    ],
  },
  {
    id: "app-api-integration",
    title: "App & API Integration",
    description:
      "Connect the tools you already use so data moves between them without copying and pasting.",
    examples: [
      "CRMs, websites and spreadsheets working together",
      "Database and third-party service connections",
      "Custom API integrations when there is no ready-made connector",
    ],
  },
  {
    id: "ai-powered-automation",
    title: "AI-Powered Automation",
    description:
      "Build intelligent workflows with LLMs, LangChain and LangGraph, including AI agents that handle multi-step tasks.",
    examples: [
      "AI agents that carry out multi-step tasks",
      "LLM steps inside your existing workflows",
      "Agent logic that stays reliable and maintainable",
    ],
  },
  {
    id: "custom-python-solutions",
    title: "Custom Python Solutions",
    description:
      "When a workflow tool is not enough, custom Python handles complex business logic, data processing and integrations.",
    examples: [
      "Complex business rules and calculations",
      "Data processing and transformation",
      "Integrations that need custom code",
    ],
  },
  {
    id: "workflow-optimization",
    title: "Workflow Optimization",
    description:
      "Already have automations? I improve them, troubleshoot errors and make them more reliable.",
    examples: [
      "Diagnosing failing or unreliable workflows",
      "Simplifying and cleaning up existing automations",
      "Making workflows easier to maintain",
    ],
  },
];

const tools = ["n8n", "LangChain", "LangGraph", "Python", "LLM APIs"];

export default function ServicesPage() {
  return (
    <main className="w-full bg-white text-neutral-900">
      {/* Intro */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Practical automation for real business problems
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            From connecting APIs and automating data processing to building AI
            agents, the focus is on reliable, maintainable solutions that fit
            how your business works.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map(({ id, title, description, examples }, index) => (
        <section
          key={id}
          id={id}
          className={`w-full scroll-mt-4 border-t border-neutral-200 ${
            index % 2 === 0 ? "bg-neutral-50" : "bg-white"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-16 md:py-20">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-neutral-600">
                {description}
              </p>
            </div>

            <ul className="divide-y divide-neutral-200 border-y border-neutral-200 self-start">
              {examples.map((example) => (
                <li key={example} className="py-4 text-neutral-800">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Tools */}
      <section className="w-full border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tools I work with
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-md border border-neutral-300 px-4 py-2 text-base font-medium text-neutral-800"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl leading-relaxed text-neutral-600">
            You don&rsquo;t need to know which technology fits. Describe the
            problem and we&rsquo;ll choose the right tool together.
          </p>
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
              Tell us what takes too much time or needs to run more efficiently,
              and we&rsquo;ll explore a practical solution.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="shrink-0 rounded-md bg-white px-6 py-3 text-base font-medium text-neutral-900 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
