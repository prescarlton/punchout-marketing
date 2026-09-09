import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getLegalMarkdown } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for PunchOut",
};

export default function LegalPage() {
  const markdown = getLegalMarkdown("privacy.md").trim();

  return (
    <div className="mx-auto flex min-h-svh w-[calc(100%-40px)] flex-col max-[359px]:w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[min(100%-96px,1160px)]">
      <Header />
      <main
        id="main-content"
        className="mx-auto w-full max-w-[820px] flex-1 pt-11 pb-16 md:pt-16 md:pb-24"
      >
        <h1 className="mb-8 text-[clamp(36px,6vw,56px)] font-[650] leading-[1.1] tracking-[-0.05em] md:mb-10">Privacy Policy</h1>
        <div className="document-copy">
          {markdown ? (
            <ReactMarkdown components={{ h1: ({ children }) => <h2>{children}</h2> }}>
              {markdown}
            </ReactMarkdown>
          ) : (
            <p>Privacy Policy content coming soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
