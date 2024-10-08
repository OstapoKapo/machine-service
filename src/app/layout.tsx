import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Machine-Service",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <div className="my-container">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
