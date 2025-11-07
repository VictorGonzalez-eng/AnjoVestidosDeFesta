import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjo Vestidos de Festa - Vestidos para Ocasiões Especiais",
  description: "Encontre o vestido perfeito para sua ocasião especial. Vestidos de festa elegantes e modernos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
