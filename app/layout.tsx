import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviders from "./ThemeProviders";
import NextProvider from "./nextuiProviders";
import EditModalContextProvider from "@/context/ModalContext";
import { CartProvider } from "react-use-cart";
import TansTackQueryProvider from "./TansTackQueryProvider";
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "./NextAuthProvider";
import NextTopLoader from "nextjs-toploader";
import CartContextProvider from "@/context/CartContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis",
  description: "oasis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProviders>
          <NextProvider>
            <EditModalContextProvider>
              <TansTackQueryProvider>
                <NextAuthProvider>
                  <NextTopLoader
                    color="#ffaf00"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #ffaf00,0 0 5px #2299DD"
                    template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    zIndex={1600}
                    showAtBottom={false}
                  />
                  <NextTopLoader />
                  {children}
                </NextAuthProvider>
              </TansTackQueryProvider>
            </EditModalContextProvider>
          </NextProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
