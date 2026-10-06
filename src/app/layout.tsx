import type { Metadata } from "next";
import "./globals.css";
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
      <head>
        {/* Injecting raw HTML comments directly inside the page head */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<!-- Made with ❤️ -->
<!-- Name: Muzammil Hassan -->
<!-- Github: https://github.com -->
<!-- Gmail: mmuzammilhassan24@gmail.com -->
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
