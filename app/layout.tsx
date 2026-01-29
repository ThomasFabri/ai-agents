import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat', // opcional (pra usar no Tailwind)
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
      <body className={`${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
