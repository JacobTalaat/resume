import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jacob Moawad - Portfolio",
  description:
    "Junior Software Engineer specializing in full-stack development with React.js, Next.js, and Express.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav">
          <div className="container nav-container">
            <a href="#" className="nav-logo">
              Jacob Moawad
            </a>
            <div className="nav-links">
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#education" className="nav-link">
                Education
              </a>
              <a href="#skills" className="nav-link">
                Skills
              </a>
              <a href="#projects" className="nav-link">
                Projects
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
