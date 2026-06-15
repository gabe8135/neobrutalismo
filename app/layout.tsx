import type { Metadata } from "next";
import type { ReactNode } from "react";
import ScrollMotion from "./ScrollMotion";
import "./globals.css";

export const metadata: Metadata = {
  title: "QUINA | Streetwear de rua",
  description: "Streetwear neobrutalista inspirado em pista, guia, asfalto e cultura skate de rua."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ScrollMotion />
        {children}
      </body>
    </html>
  );
}
