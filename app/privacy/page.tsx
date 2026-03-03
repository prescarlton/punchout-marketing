import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

import Header from "@/components/header";
import { getLegalMarkdown } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MyApp",
};

export default function PrivacyPolicyPage() {
  const markdown = getLegalMarkdown("privacy.md").trim();

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-background px-4 py-4 font-sans text-foreground sm:justify-between sm:px-8">
      <Header />
      <main className="flex w-full max-w-4xl flex-col gap-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
          Privacy Policy
        </h1>
        {markdown ? (
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            Privacy Policy content coming soon.
          </p>
        )}
      </main>
      <div className="flex flex-col items-center gap-4 text-center">
        <a
          href="https://preston.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base text-zinc-600 underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          preston.codes
        </a>
      </div>
    </div>
  );
}
