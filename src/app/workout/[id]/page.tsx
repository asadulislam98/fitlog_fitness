import Image from 'next/image';
import Link from 'next/link';

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getWorkoutDetail(id: string): Promise<Workout | null> {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching workout detail:', error);
    return null;
  }
}

export default async function WorkoutDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const workout = await getWorkoutDetail(resolvedParams.id);

  if (!workout) {
    return (
      <div className="min-h-screen bg-[#101214] flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Workout Not Found</h1>
        <Link 
          href="/" 
          style={{ backgroundColor: '#ccff00', color: '#000000' }}
          className="px-6 py-2.5 rounded-xl font-bold text-sm uppercase"
        >
          Back to Library
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#101214] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#ccff00] mb-8 transition-colors font-semibold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          BACK TO LIBRARY
        </Link>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Side — Visual/Media */}
          <div className="lg:col-span-5 relative w-full h-[380px] sm:h-[480px] lg:h-[600px] rounded-3xl overflow-hidden bg-[#16191e] border border-gray-800">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Right Side — Content Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle, idx) => (
                  <span
                    key={idx}
                    style={{ backgroundColor: '#ccff00', color: '#000000' }}
                    className="text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                {workout.name}
              </h1>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-medium">
                {workout.description}
              </p>
            </div>

            {/* Key Specs Table Panel */}
            <div className="bg-[#16191e] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                KEY SPECIFICATIONS
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">EQUIPMENT</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.equipment}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">DIFFICULTY</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.difficulty}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">SETS / REPS</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.sets} sets • {workout.reps}</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">DURATION</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.duration} min</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">CALORIES</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.caloriesBurned} kcal</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">RATING</p>
                  <p className="text-sm font-bold text-white mt-1">{workout.rating} / 5.0</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-wider text-white">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-3">
                {workout.instructions.map((step, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[#16191e] border border-gray-800/80">
                    <span 
                      style={{ backgroundColor: '#ccff00', color: '#000000' }}
                      className="w-7 h-7 rounded-full flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5"
                    >
                      {index + 1}
                    </span>
                    <p className="text-sm text-gray-300 font-medium leading-relaxed">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-800/80">
              <button
                style={{ backgroundColor: '#ccff00', color: '#000000' }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-sm uppercase tracking-wide transition-all hover:brightness-110 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
                Add to today&apos;s plan
              </button>

              <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-wide bg-[#16191e] border border-gray-700 text-white hover:bg-gray-800 transition-all active:scale-95">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save for later
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}