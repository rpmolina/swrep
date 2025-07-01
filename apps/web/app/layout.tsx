"use client";

import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { SidebarProvider, useSidebar } from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileHeader } from "@/components/mobile-header";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <>
      <AppSidebar />
      <div className={"flex-1 flex flex-col transition-all duration-300"}>
        {isMobile && <MobileHeader onMenuClick={toggleSidebar} />}
        <main className="flex-1 overflow-auto">
          <div className="bg-gradient-to-br from-slate-900 via-[#637278] to-slate-900 min-h-screen">
            <div className="container mx-auto px-4 py-8">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>SWAPI Explorer - Star Wars Database</title>
        <meta
          name="description"
          content="Explore the Star Wars universe: planets, ships, vehicles, characters and more using the SWAPI API"
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <div className="flex h-screen bg-slate-950">
          <Providers>
            <SidebarProvider>
              <Layout>{children}</Layout>
            </SidebarProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
