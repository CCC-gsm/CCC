import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CCC",
  description: "CCC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="ko">{children}</html>;
}
