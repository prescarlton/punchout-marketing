import fs from "fs";
import path from "path";

export interface ChangelogEntry {
  version: string;
  content: string;
  date?: string;
}

const changelogDirectory = path.join(process.cwd(), "content/changelog");

export function getAllChangelogEntries(): ChangelogEntry[] {
  try {
    const fileNames = fs.readdirSync(changelogDirectory);
    const entries: ChangelogEntry[] = [];

    for (const fileName of fileNames) {
      if (fileName.endsWith(".md")) {
        const version = fileName.replace(/\.md$/, "");
        const fullPath = path.join(changelogDirectory, fileName);
        const content = fs.readFileSync(fullPath, "utf8");
        entries.push({ version, content });
      }
    }

    // Sort by version (newest first) - simple version comparison
    entries.sort((a, b) => {
      const aParts = a.version.split(".").map(Number);
      const bParts = b.version.split(".").map(Number);
      
      for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
        const aPart = aParts[i] || 0;
        const bPart = bParts[i] || 0;
        if (bPart !== aPart) {
          return bPart - aPart;
        }
      }
      return 0;
    });

    return entries;
  } catch (error) {
    console.error("Error reading changelog entries:", error);
    return [];
  }
}

