import Banner from '../components/Banner';
import WorkoutLibrary from '../components/WorkoutLibrary';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101214]">
      {/* Banner Component */}
      <Banner />

      {/* Library Section Anchor Target */}
      <section id="library" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-800/60">
        <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">
          All Workouts
        </h2>
        {/* Workout list elements will be added here */}
      </section>


        {/* Workout Library Component */}
        <WorkoutLibrary />
    </main>

    




  );
}