// Components
import Header from "@/components/common/header/Header";

// Styles
import "@styles/base.css";

// Types
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "iShop | Your Ultimate Online Shopping Destination",
  description:
    "Explore a world of endless possibilities at iShop, your go-to online shopping website. Discover a curated collection of top-quality products, unbeatable deals, and a seamless shopping experience. Welcome to iShop, where convenience meets style!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
