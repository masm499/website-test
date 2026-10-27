import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | innovative-aiagents",
  description:
    "Tell us about a workflow that takes too much time and we'll explore a practical automation solution.",
};

export default function ContactUsPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl">
          Contact us
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          Have a workflow in mind? Tell us what takes too much time, involves
          repetitive manual work, or needs to run more efficiently, and
          we&rsquo;ll explore a practical solution together.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}
