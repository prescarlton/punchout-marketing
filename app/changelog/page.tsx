import Header from "@/components/header";
import ChangelogEntry from "@/components/changelog-entry";
import { getAllChangelogEntries } from "@/lib/changelog";

function isEntryHidden(content: string): boolean {
  const hiddenMatch = content.match(/^Hidden:\s*([^\n]+)/im);
  return hiddenMatch ? hiddenMatch[1].trim().toLowerCase() === "true" : false;
}

export default function Changelog() {
  const entries = getAllChangelogEntries();
  const visibleEntries = entries.filter((entry) => !isEntryHidden(entry.content));

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-[#FFFCF0] px-4 py-4 font-sans dark:bg-[#100F0F] sm:justify-between sm:px-8">
      <Header />
      <main className="flex w-full flex-col items-center gap-12 max-w-4xl">
        <div className="flex flex-col gap-8 w-full">
          <h2 className="text-3xl font-bold text-black dark:text-zinc-50">
            Changelog
          </h2>
          <div className="flex flex-col gap-6">
            {visibleEntries.length > 0 ? (
              visibleEntries.map((entry) => (
                <ChangelogEntry
                  key={entry.version}
                  version={entry.version}
                  content={entry.content}
                />
              ))
            ) : (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-black dark:text-zinc-50">
                    No updates yet
                  </h3>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-md">
                    We're working on exciting new features and improvements. Check back soon for updates!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* Footer Links */}
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
