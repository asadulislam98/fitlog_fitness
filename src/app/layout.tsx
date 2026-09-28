import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import { PlanProvider } from '../context/PlanContext';
import Footer from '../components/Footer';

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
        <PlanProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}







