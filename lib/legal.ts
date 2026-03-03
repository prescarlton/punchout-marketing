import fs from "fs";
import path from "path";

const legalDirectory = path.join(process.cwd(), "content/legal");

export function getLegalMarkdown(fileName: "tos.md" | "privacy.md"): string {
  try {
    const fullPath = path.join(legalDirectory, fileName);
    return fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.error(`Error reading legal markdown file ${fileName}:`, error);
    return "";
  }
}
