"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { sendMessage, type FormState } from "./actions";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: { sitekey: string; theme?: "light" | "dark" | "auto" },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const initialState: FormState = {
  status: "idle",
  message: "",
  values: { name: "", email: "", company: "", message: "" },
};

const field =
  "mt-2 block w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700";
const label = "block text-sm font-medium text-neutral-900";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendMessage,
    initialState,
  );
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);
  const [scriptReady, setScriptReady] = useState(false);

  // Render the captcha widget once the Turnstile script is available
  useEffect(() => {
    if (!scriptReady || !widgetRef.current || !window.turnstile) return;
    if (widgetId.current) return;

    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
      theme: "light",
    });

    return () => {
      if (widgetId.current) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = undefined;
      }
    };
  }, [scriptReady]);

  // Captcha tokens are single-use, so reset after every submission
  useEffect(() => {
    if (state.status !== "idle" && widgetId.current) {
      window.turnstile?.reset(widgetId.current);
    }
  }, [state]);

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />

      <form action={formAction} className="relative mt-10 space-y-6">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            defaultValue={state.values.name}
            className={field}
          />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            defaultValue={state.values.email}
            className={field}
          />
        </div>

        <div>
          <label htmlFor="company" className={label}>
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={150}
            autoComplete="organization"
            defaultValue={state.values.company}
            className={field}
          />
        </div>

        <div>
          <label htmlFor="message" className={label}>
            What takes too much time in your business?
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            defaultValue={state.values.message}
            className={field}
          />
        </div>

        {/* Honeypot field: hidden from people, filled in by simple bots */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div ref={widgetRef} />

        {state.status !== "idle" && (
          <p
            role={state.status === "error" ? "alert" : "status"}
            className={`rounded-md border px-4 py-3 text-sm ${
              state.status === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : "border-green-200 bg-green-50 text-green-800"
            }`}
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-700 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
      </form>
    </>
  );
}
