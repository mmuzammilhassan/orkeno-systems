import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Orkena Systems",
  description: "Orkena Systems Company is a leading provider of innovative technology solutions, specializing in software development, IT consulting, and digital transformation services. Our mission is to empower businesses with cutting-edge technology to drive growth and efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="nextjs-ui-theme">
          {children}
        </ThemeProvider>

        {/* <!-- Made with ❤️ --> */}
        {/* <!-- Name:     Muzammil Hassan --> */}
        {/* <!-- Github:   https://github.com/mmuzammilhassan --> */}
        {/* <!-- Gmail:    mmuzammilhassan24@gmail.com --> */}
      </body>
    </html>
  );
}
