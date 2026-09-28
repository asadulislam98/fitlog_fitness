import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FITLOG - Workout & Fitness Planner',
  description: 'Track your workout routines and plans',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0b0c0e] text-white min-h-screen`}>
        <Navbar planCount={0} savedCount={0} />
        <main>{children}</main>
      </body>
    </html>
  );
}