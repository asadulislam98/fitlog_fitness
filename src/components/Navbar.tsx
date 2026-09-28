'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  planCount?: number;
  savedCount?: number;
}

export default function Navbar({ planCount = 0, savedCount = 0 }: NavbarProps) {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === '/';
  const isMyPlanActive = pathname === '/my-plan';

  return (
    <header className="w-full bg-[#101214] border-b border-gray-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div style={{ color: '#ccff00' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6.5 6.5 11 11" />
              <path d="m21 21-1 1" />
              <path d="m3 3 1 1" />
              <path d="m18 22 4-4" />
              <path d="m2 6 4-4" />
              <path d="m3 10 7-7" />
              <path d="m14 21 7-7" />
            </svg>
          </div>
          <span className="font-black text-lg tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 bg-[#1a1d20] p-1.5 rounded-full border border-gray-800">
          <Link
            href="/"
            style={
              isWorkoutsActive
                ? { backgroundColor: '#ccff00', color: '#000000' }
                : {}
            }
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-colors ${
              !isWorkoutsActive ? 'text-gray-400 hover:text-white' : ''
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            style={
              isMyPlanActive
                ? { backgroundColor: '#ccff00', color: '#000000' }
                : {}
            }
            className={`px-5 py-1.5 rounded-full text-xs font-bold transition-colors ${
              !isMyPlanActive ? 'text-gray-400 hover:text-white' : ''
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Badges */}
        <div className="flex items-center gap-5 text-xs font-semibold">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Plan</span>
            <span
              style={{ backgroundColor: '#ccff00', color: '#000000' }}
              className="w-5 h-5 rounded-full text-[11px] font-extrabold flex items-center justify-center"
            >
              {planCount}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>Saved</span>
            <span className="w-5 h-5 rounded-full bg-[#1a1d20] text-gray-300 text-[11px] font-bold flex items-center justify-center border border-gray-700">
              {savedCount}
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}