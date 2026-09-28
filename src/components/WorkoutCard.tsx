'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Workout } from '../types/workout';

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link 
      href={`/workout/${workout.id}`}
      className="group bg-[#16191e] border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-[#101214]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Container */}
        <div className="p-5 space-y-3">
          
          {/* Category Tag Pills (Lime Green Pill Badges) */}
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
                style={{ backgroundColor: '#ccff00', color: '#000000' }}
                className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight group-hover:text-[#ccff00] transition-colors">
            {workout.name}
          </h3>

          {/* Equipment Line */}
          <p className="text-xs text-gray-400 font-medium">
            {workout.equipment}
          </p>
        </div>
      </div>

      {/* Bottom Stats Row with Icons */}
      <div className="px-5 pb-5 pt-2 flex items-center gap-4 text-xs font-semibold text-gray-400 border-t border-gray-800/40 mt-auto">
        {/* Duration */}
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" />
          </svg>
          <span>{workout.duration} min</span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 23c-4.97 0-9-4.03-9-9 0-4.13 3.74-8.89 8.25-13.33a1.002 1.002 0 011.5 0C17.26 5.11 21 9.87 21 14c0 4.97-4.03 9-9 9zm0-20.15C8.42 6.88 5 11.02 5 14c0 3.86 3.14 7 7 7s7-3.14 7-7c0-2.98-3.42-7.12-7-11.15z" />
          </svg>
          <span>{workout.caloriesBurned} kcal</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>{workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}