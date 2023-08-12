import { Header } from "./_components/Header";
import type { Metadata } from "next";
import "./_styles/globals.css";

export const metadata: Metadata = {
  title: "megatkhs",
  description: "フロントエンドエンジニアmegatkhsのホームページです",
};
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
