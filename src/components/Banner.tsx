import Image from 'next/image';

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Text Content */}
        <div className="flex-1 md:w-[58%] space-y-6">
          
          {/* Eyebrow Text */}
          <span 
            style={{ color: '#ccff00' }} 
            className="text-[11px] font-black tracking-[0.2em] uppercase bg-[#1a1d20] px-4 py-1.5 rounded-full border border-gray-800 inline-block"
          >
            WORKOUT LIBRARY
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-extrabold tracking-[-0.02em] text-white uppercase leading-[0.95] max-w-2xl">
            TRAIN WITH INTENT.<br />
            LOG EVERY SET.
          </h1>

          {/* Subtitle */}
          <p className="text-[#989da3] text-base sm:text-lg font-medium max-w-xl leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Primary CTA Button with Anchor Link */}
          <div className="pt-2">
            <a
              href="#library"
              style={{ backgroundColor: '#ccff00', color: '#000000' }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-black text-sm tracking-wide uppercase transition-all duration-200 hover:brightness-110 active:scale-95 shadow-lg"
            >
              BROWSE WORKOUTS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="flex-shrink-0 md:w-[42%] flex justify-center md:justify-end">
          <div className="relative w-full max-w-[380px] h-[340px] sm:h-[400px] md:h-[450px]">
            <Image
              src="/banner.png"
              alt="FitLog Workout Banner"
              fill
              priority
              className="object-contain object-center md:object-right"
            />
          </div>
        </div>

      </div>
    </section>
  );
}