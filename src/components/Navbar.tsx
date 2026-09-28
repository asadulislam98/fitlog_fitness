'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 0, savedCount = 0 }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Workouts', href: '/' },
    { name: 'My Plan', href: '/my-plan' },
  ];

  return (
    <header className="w-full bg-[#0d0f12] text-white border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="FITLOG Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="font-extrabold text-xl tracking-wider uppercase font-sans">
            FITLOG
          </span>
        </Link>

        {/* Middle Side: Navigation Links */}
        <div className="flex items-center gap-2 bg-[#16191e] p-1 rounded-full border border-gray-800/50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1e2710] text-[#ccff00] border border-[#ccff00]/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Status Badges */}
        <div className="flex items-center gap-4 text-sm font-medium">
          {/* Plan Badge (Filled Pill) */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Plan</span>
            <span className="bg-[#ccff00] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {planCount}
            </span>
          </div>

          {/* Saved Badge (Outline Pill) */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Saved</span>
            <span className="border border-gray-600 text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {savedCount}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}