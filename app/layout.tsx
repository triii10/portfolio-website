import Header from "@/components/header";
import Umami from "@/components/umami";
import "./globals.css";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { currentRole } from "@/lib/data";

const title = `Trilok Bhattacharya | ${currentRole.title}`;
const description =
  `London-based ${currentRole.title.toLowerCase()} at ${currentRole.organisation}. I work on trading and infrastructure systems with Rust and C++.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://trilok.dev"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Trilok Bhattacharya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="motion-safe:scroll-smooth" suppressHydrationWarning>
      <head>
        <Umami />
      </head>
      <body
        className="relative bg-gray-50 pt-28 font-mono text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" containerStyle={{ top: 96 }} />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
