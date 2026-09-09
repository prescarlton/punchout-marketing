"use client";

import Image from "next/image";
import { useState } from "react";

// Keep these paths stable so the temporary screenshots can be replaced in place.
const screenshots = [1, 2, 3, 4];

export default function ScreenshotGallery() {
  const [selected, setSelected] = useState(1);

  return (
    <section className="flex min-w-0 flex-col items-center" aria-label="Screenshot gallery">
      <div
        id="screenshot-preview"
        className="aspect-[1206/2622] w-[266px] max-w-full overflow-hidden rounded-[40px] border-[7px] border-[#262722] bg-[#10100f] shadow-[0_18px_35px_-18px_#26272255,0_2px_5px_#26272220] md:w-[290px] md:rounded-[43px]"
        aria-live="polite"
        aria-atomic="true"
      >
        {screenshots.map((number) => (
          <Image
            key={number}
            className="h-full w-full object-cover"
            src={`/screenshot-${number}.png`}
            alt={`Preview screenshot ${number} of ${screenshots.length}`}
            width={1206}
            height={2622}
            sizes="(max-width: 767px) 252px, 276px"
            priority={number === 1}
            hidden={number !== selected}
          />
        ))}
      </div>
      <div
        className="mt-4 flex"
        role="group"
        aria-label="Choose a screenshot"
      >
        {screenshots.map((number) => (
          <button
            key={number}
            type="button"
            className="group grid size-11 place-items-center rounded-md hover:bg-[#eeece4]"
            aria-label={`Show screenshot ${number}`}
            aria-pressed={number === selected}
            aria-controls="screenshot-preview"
            onClick={() => setSelected(number)}
          >
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[#94948a] group-aria-pressed:w-5 group-aria-pressed:rounded group-aria-pressed:bg-accent"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
