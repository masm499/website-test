import Link from "next/link";

const links = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6">
        <p className="text-sm text-neutral-600">
          &copy; 2026 All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded text-sm text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
