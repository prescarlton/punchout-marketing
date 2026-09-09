import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChangelogEntry from "@/components/changelog-entry";
import { getAllChangelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "The latest updates and improvements to PunchOut.",
};

function isEntryHidden(content: string): boolean {
  const hiddenMatch = content.match(/^Hidden:\s*([^\n]+)/im);
  return hiddenMatch ? hiddenMatch[1].trim().toLowerCase() === "true" : false;
}

export default function Changelog() {
  const entries = getAllChangelogEntries();
  const visibleEntries = entries.filter((entry) => !isEntryHidden(entry.content));

  return (
    <div className="mx-auto flex min-h-svh w-[calc(100%-40px)] flex-col max-[359px]:w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[min(100%-96px,1160px)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full max-w-[820px] flex-1 pt-11 pb-16 md:pt-16 md:pb-24"
      >
        <h1 className="mb-8 text-[clamp(36px,6vw,56px)] font-[650] leading-[1.1] tracking-[-0.05em] md:mb-10">Changelog</h1>
        {visibleEntries.length > 0 ? (
          <div>
            {visibleEntries.map((entry) => (
              <ChangelogEntry key={entry.version} version={entry.version} content={entry.content} />
            ))}
          </div>
        ) : (
          <div className="document-copy">
            <h2>No updates yet</h2>
            <p>We&apos;re working on exciting new features and improvements. Check back soon for updates!</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
