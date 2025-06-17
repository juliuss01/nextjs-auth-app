import "./globals.css";
import type { Metadata } from "next";
import { SessionWrapper } from "@/components/SessionWrapper"; // adjust path if needed

export const metadata: Metadata = {
  title: "Auth App",
  description: "Next.js Auth App with Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}

