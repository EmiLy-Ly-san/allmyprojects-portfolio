import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/MainLayout";



export const metadata: Metadata = {
  title: "All my projects - Portfolio - Emilie De Duyver",
  description: "All Emilie De Duyver's web projects",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
