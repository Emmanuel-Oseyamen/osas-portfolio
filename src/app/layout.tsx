import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Osas | Web Designer & Developer",
    template: "%s | Osas",
  },

  description:
    "Modern websites for hotels, schools, clinics, restaurants, pharmacies and local businesses across Nigeria.",

  keywords: [
    "Web Designer Nigeria",
    "Web Developer Nigeria",
    "Website Design Lagos",
    "Hotel Website Design",
    "School Website Design",
  ],

  authors: [
    {
      name: "Osas",
    },
  ],

  creator: "Osas",

  openGraph: {
    title: "Osas | Web Designer & Developer",
    description:
      "Modern websites for hotels, schools, clinics, restaurants and local businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}