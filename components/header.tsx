import Link from "next/link";

export default function Header() {
  return (
    <div className="flex gap-4 w-full items-center justify-between">
      <Link href="/">
        <h1 className="font-bold tracking-tight text-black dark:text-zinc-50 text-xl">
          MyApp
        </h1>
      </Link>
      <Link
        href="/changelog"
        className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
      >
        Changelog
      </Link>
    </div>
  );
}
