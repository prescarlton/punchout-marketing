import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-5 border-b border-line py-[18px] md:py-[30px]">
      <a
        className="absolute top-3 left-3 z-10 -translate-y-[200%] bg-background px-4 py-3 focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Link
        className="inline-flex items-center text-[22px] font-[750] tracking-[-1.2px] md:text-[25px]"
        href="/"
        aria-label="PunchOut home"
      >
        <Image src="/icon.png" alt="" width={32} height={32} />
        PunchOut
        <span className="text-accent" aria-hidden="true">
          .
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link
          className="inline-flex min-h-11 items-center gap-[7px] text-xs font-medium hover:text-accent md:gap-3.5 md:text-[13px]"
          href="/changelog"
        >
          Changelog <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </Link>
      </nav>
    </header>
  );
}
