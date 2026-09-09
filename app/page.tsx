import { ArrowUpRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScreenshotGallery from "@/components/screenshot-gallery";

// Replace with the live listing once the app is approved.
const APP_STORE_URL = "https://example.com";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh w-[calc(100%-40px)] flex-col max-[359px]:w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[min(100%-96px,1160px)]">
      <Header />
      <main
        id="main-content"
        className="grid flex-1 grid-cols-1 items-center gap-11 pt-13 pb-7 md:grid-cols-[1.2fr_1fr] md:gap-8 md:pt-16 md:pb-12 lg:gap-16"
      >
        <div className="md:pb-8">
          <p className="mb-[22px] flex items-center gap-2.5 font-mono text-[10px] font-medium tracking-[1.7px] md:mb-7 md:text-[11px]">
            <span aria-hidden="true" className="size-[7px] bg-accent" /> THE PUNCH LIST APP
          </p>
          <h1 className="text-[clamp(60px,12vw,88px)] font-[650] leading-[0.99] tracking-[-0.075em] max-[359px]:text-[56px] md:text-[clamp(64px,8vw,82px)] lg:text-[clamp(68px,7.8vw,104px)]">
            Small fixes.<br /><span className="text-accent">Job done.</span>
          </h1>
          <p className="mt-6 max-w-[360px] text-base leading-[1.75] text-pretty text-muted md:mt-[30px] md:max-w-[355px] md:text-[17px]">
            Keep construction punch lists organized, attach photos, and
            generate PDF reports. All on your device.
          </p>
          <a
            className="mt-[26px] inline-flex items-center gap-[9px] rounded-[7px] bg-accent px-[18px] py-4 text-[13px] font-semibold text-white hover:bg-accent-hover max-[359px]:gap-1.5 max-[359px]:px-3 max-[359px]:text-xs md:mt-8"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="23" height="23">
              <path d="M17.1 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.2.8-.6 0-1.6-.8-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.4-.4 6 1 8 .6 1 1.4 2 2.4 1.9 1 0 1.4-.6 2.7-.6 1.2 0 1.6.6 2.7.6s1.8-1 2.4-1.9c.8-1.1 1.1-2.2 1.1-2.3-.1 0-1.7-.7-1.7-3.1ZM15 6.6c.5-.7.9-1.6.8-2.6-.8 0-1.9.6-2.5 1.2-.5.6-1 1.6-.9 2.5 1 .1 2-.4 2.6-1.1Z" />
            </svg>
            Download on the App Store
            <ArrowUpRight aria-hidden="true" className="ml-3.5 size-[18px] max-[359px]:ml-2" />
          </a>
        </div>
        <ScreenshotGallery />
      </main>
      <Footer />
    </div>
  );
}
