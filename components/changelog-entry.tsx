"use client";

import ReactMarkdown from "react-markdown";

interface ChangelogEntryProps {
  content: string;
  version: string;
}

export default function ChangelogEntry({
  content,
  version,
}: ChangelogEntryProps) {
  // Parse the new format: key-value pairs at the top, then markdown content
  const versionMatch = content.match(/^Version:\s*([^\n]+)/im);
  const dateMatch = content.match(/^ReleaseDate:\s*([^\n]+)/im);
  const hiddenMatch = content.match(/^Hidden:\s*([^\n]+)/im);

  // Check if entry should be hidden
  const isHidden = hiddenMatch && hiddenMatch[1].trim().toLowerCase() === "true";
  if (isHidden) {
    return null;
  }

  const displayVersion = versionMatch ? versionMatch[1].trim() : version;
  const rawDate = dateMatch ? dateMatch[1].trim() : null;

  // Format the date
  let formattedDate = rawDate;
  if (rawDate) {
    try {
      const dateObj = new Date(rawDate);
      if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    } catch (e) {
      // Keep original format if parsing fails
    }
  }

  // Remove Version, ReleaseDate, and Hidden metadata lines, then let ReactMarkdown handle the rest
  const releaseNotes = content
    .replace(/^Version:\s*[^\n]+\n*/im, "")
    .replace(/^ReleaseDate:\s*[^\n]+\n*/im, "")
    .replace(/^Hidden:\s*[^\n]+\n*/im, "")
    .trim();

  return (
    <div className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-zinc-300 dark:border-zinc-700 last:border-b-0">
      {/* Left Column: Version and Date */}
      <div className="flex-shrink-0 sm:w-52">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-black dark:text-zinc-50">
            {formattedDate}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {displayVersion}
          </p>
        </div>
      </div>

      {/* Right Column: Release Notes */}
      <div className="flex-1 min-w-0">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-bold text-black dark:text-zinc-50 mb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mt-4 mb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mt-3 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base text-zinc-600 dark:text-zinc-400 mb-2">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-base text-zinc-600 dark:text-zinc-400 mb-2 space-y-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-base text-zinc-600 dark:text-zinc-400 mb-2 space-y-1">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-base text-zinc-600 dark:text-zinc-400">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-black dark:text-zinc-50">
                  {children}
                </strong>
              ),
            }}
          >
            {releaseNotes}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
