import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Agentes de Inteligência Artificial | Aprenda sobre IA",
  description: "Entenda o que são agentes de IA, como funcionam e onde estão sendo aplicados no mundo real. Conteúdo educativo e acessível.",
  keywords: "inteligência artificial, agentes de IA, machine learning, automação, tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
