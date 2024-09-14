import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;
const imageUrl = `${baseUrl}/thumbnail.jpg`;

const title = "Satyam Mishra | Front-End Designer and Developer";
const description =
  "Empower your campaigns with secure, transparent blockchain listing.";
const iconSizes: `${number}`[] = ["16", "32"];

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  keywords:
    "Frontend Development, HTML, CSS, JavaScript, ReactJS, NextJS, TypeScript, UI/UX Design, Wireframing, Figma, Version Control, Git, GitHub, Problem Solving, Data Structures, Algorithms, Operating Systems, Linux, Web 3, Typing, Software Development, Full-Stack Developer, Portfolio, Programming Skills, Web Development, Coding, Open Source, Developer Tools",
  openGraph: {
    type: "profile",
    title,
    description,
    images: [
      {
        url: imageUrl,
        width: 1356, // Optional width of the image
        height: 830, // Optional height of the image
        alt: "I am Satyam Mishra, Front-End Designer and Developer", // Alt text for the image
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Satyam_Mis", // Your Twitter handle
    images: [imageUrl],
    title,
    description,
  },
  icons: {
    icon: iconSizes.map((size) => ({
      url: `/favicon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    })),
    shortcut: "/favicon.ico", // Shortcut icon (favicon)
    apple: "/apple-touch-icon.png", // Icon for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
