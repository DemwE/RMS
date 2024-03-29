import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import { AuthContextProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RMS",
  description: "Ranking Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
             {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
