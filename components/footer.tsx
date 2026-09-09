import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 border-t border-line py-[18px] text-[11px] text-muted md:gap-6 md:py-6 md:text-xs">
      <a
        className="inline-flex min-h-7 items-center gap-1 hover:text-accent"
        href="https://preston.codes"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by <span className="text-foreground">preston.codes</span> <ArrowUpRight aria-hidden="true" className="size-3" />
      </a>
      <nav aria-label="Legal" className="flex gap-4 md:gap-6">
        <Link className="inline-flex min-h-7 items-center gap-1 hover:text-accent" href="/privacy">Privacy</Link>
        <Link className="inline-flex min-h-7 items-center gap-1 hover:text-accent" href="/tos">Terms</Link>
      </nav>
    </footer>
  );
}
