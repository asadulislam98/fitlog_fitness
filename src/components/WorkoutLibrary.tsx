import { Workout } from '../types/workout';
import WorkoutCard from './WorkoutCard';

async function getWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
      next: { revalidate: 3600 } // Revalidate hourly
    });
    if (!res.ok) throw new Error('Failed to fetch workouts');
    return res.json();
  } catch (error) {
    console.error('Error fetching workouts:', error);
    return [];
  }
}

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-800/60">
      
      {/* Section Header */}
      <div className="mb-8 space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider">
          THE LIBRARY
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-medium">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* 3x4 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>

    </section>
  );
}