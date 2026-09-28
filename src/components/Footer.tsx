'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#101214] border-t border-gray-800/80 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Left Side: Brand Logo + Text */}
        <Link href="/" className="flex items-center gap-2.5">
          <div style={{ color: '#ccff00' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
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
          <span className="font-black text-base tracking-wider text-white uppercase">
            FITLOG
          </span>
        </Link>

        {/* Right Side: Copyright Text */}
        <p className="text-xs text-gray-400 font-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}