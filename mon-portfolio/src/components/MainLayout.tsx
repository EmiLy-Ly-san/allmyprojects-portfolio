import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <Footer />
    </>
  );
}