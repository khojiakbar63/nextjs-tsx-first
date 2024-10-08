import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/header";
import MainLayout from "../components/main";
import Footer from "../components/footer";



export const metadata: Metadata = {
  title: "Next One",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        <MainLayout>{children}</MainLayout>
        <Footer />
      </body>
    </html>
  );
}
