"use client";

import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const APP_STORE_URL = "";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshots = [1, 2, 3, 4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-background px-4 py-4 font-sans text-foreground sm:justify-between sm:px-8">
      <Header />
      <main className="flex w-full flex-col items-center gap-12">
        {/* Screenshots Section */}
        <div className="flex w-full flex-col items-center gap-8">
          {/* Cycling Screenshot */}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full max-w-[240px] overflow-hidden border-black dark:border-zinc-800 sm:max-w-[260px] md:max-w-[280px] transition-transform duration-300 hover:scale-110 cursor-pointer rounded-[30px] sm:rounded-[50px]"
            style={{
              borderWidth: "12px",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="aspect-[1206/2622] overflow-hidden rounded-[18px] sm:rounded-[38px]">
              {screenshots.map((num, index) => (
                <div
                  key={num}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={`/screenshot-${num}.png`}
                    alt={`Screenshot ${num}`}
                    width={1206}
                    height={2622}
                    className="w-full h-full object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </a>
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
