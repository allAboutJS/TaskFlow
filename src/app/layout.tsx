import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TaskFlow | Advanced Kanban Management System",
    template: "%s | TaskFlow",
  },
  description:
    "A full-stack Kanban board for managing tasks and team workflows, featuring drag-and-drop interactions and real-time state management.",
  keywords: [
    "Kanban",
    "Project Management",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Full-stack Portfolio",
  ],
  authors: [{ name: "Onah Victor" }],
  creator: "Onah Victor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskflow.vercel.app",
    siteName: "TaskFlow",
    title: "TaskFlow: Advanced Kanban Management",
    description:
      "Streamline team workflows with interactive drag-and-drop boards and optimistic UI updates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TaskFlow Kanban Board Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaskFlow | Kanban Management",
    description:
      "Full-stack task management application built with Next.js and Prisma.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialised">{children}</body>
    </html>
  );
}
