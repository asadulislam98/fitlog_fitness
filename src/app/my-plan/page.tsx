'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Workout } from '@/src/types/workout';
import { usePlan } from '@/src/context/PlanContext';
interface PlanContextType {
  planItems: Workout[];
  savedItems: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  toastMessage: string | null;
}

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const { planItems, savedItems, removeFromPlan, removeFromSaved } = usePlan();

  const currentList = activeTab === 'today' ? planItems : savedItems;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">
          My Fitness Plan
        </h1>
        <p className="text-gray-400">
          Manage your daily workout routine and saved exercises.
        </p>
      </div>

      {/* Tabs Header */}
      <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-8">
        <button
          onClick={() => setActiveTab('today')}
          style={activeTab === 'today' ? { backgroundColor: '#ccff00', color: '#000000' } : {}}
          className={`px-5 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
            activeTab !== 'today' ? 'bg-[#16191e] text-gray-400 hover:text-white border border-gray-800' : ''
          }`}
        >
          Today&apos;s Plan ({planItems.length})
        </button>

        <button
          onClick={() => setActiveTab('saved')}
          style={activeTab === 'saved' ? { backgroundColor: '#ccff00', color: '#000000' } : {}}
          className={`px-5 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
            activeTab !== 'saved' ? 'bg-[#16191e] text-gray-400 hover:text-white border border-gray-800' : ''
          }`}
        >
          Saved Items ({savedItems.length})
        </button>
      </div>

      {/* Grid List or Empty State */}
      {currentList.length === 0 ? (
        <div className="p-12 text-center bg-[#16191e] border border-gray-800 rounded-xl">
          <p className="text-gray-400 font-medium mb-4">
            {activeTab === 'today'
              ? "No workouts added to today's plan yet."
              : 'No workouts saved for later yet.'}
          </p>
          <Link
            href="/"
            style={{ backgroundColor: '#ccff00', color: '#000000' }}
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase inline-block hover:brightness-110 transition-all"
          >
            Explore Workouts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#16191e] border border-gray-800 rounded-xl flex flex-col justify-between space-y-5"
            >
              <div className="flex gap-4 items-center">
                {item.image && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#101214]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-bold text-white mb-1 uppercase">
                    {item.name}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {item.duration} mins • {item.caloriesBurned} kcal
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-800/80">
                <Link
                  href={`/workout/${item.id}`}
                  style={{ backgroundColor: '#ccff00', color: '#000000' }}
                  className="flex-1 text-center px-4 py-2 text-xs font-bold rounded-lg uppercase hover:brightness-110 transition-all"
                >
                  View Details
                </Link>

                <button
                  onClick={() =>
                    activeTab === 'today'
                      ? removeFromPlan(item.id)
                      : removeFromSaved(item.id)
                  }
                  className="px-3 py-2 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg text-xs font-bold uppercase transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}