export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-white mb-4">
        Workouts
      </h1>
      <p className="text-gray-400">
        Select your daily workouts and build your custom fitness plan.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-[#16191e] border border-gray-800 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-2">Morning Warm-up</h2>
          <p className="text-sm text-gray-400 mb-4">15 mins • Light Cardio</p>
          <button className="px-4 py-2 bg-[#ccff00] text-black font-semibold rounded-lg text-sm">
            Add to Plan
          </button>
        </div>
      </div>
    </div>
  );
}