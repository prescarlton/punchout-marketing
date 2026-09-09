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
    } catch {
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
    <article className="grid grid-cols-1 gap-[18px] border-b border-line py-8 first:pt-0 last:border-b-0 md:grid-cols-[170px_1fr] md:gap-8">
      <div>
        <p className="text-sm font-semibold">{formattedDate}</p>
        <p className="mt-2 font-mono text-xs text-accent">{displayVersion}</p>
      </div>
      <div className="document-copy">
        <ReactMarkdown components={{ h1: ({ children }) => <h2>{children}</h2> }}>
          {releaseNotes}
        </ReactMarkdown>
      </div>
    </article>
  );
}
