'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Workout Item Types
export interface WorkoutItem {
  id: string | number;
  name: string;
  duration: number | string;
  caloriesBurned?: number | string;
  image?: string;
  description?: string;
}

interface PlanContextType {
  planItems: WorkoutItem[];
  savedItems: WorkoutItem[];
  addToPlan: (item: WorkoutItem) => void;
  removeFromPlan: (id: string | number) => void;
  addToSaved: (item: WorkoutItem) => void;
  removeFromSaved: (id: string | number) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [planItems, setPlanItems] = useState<WorkoutItem[]>([]);
  const [savedItems, setSavedItems] = useState<WorkoutItem[]>([]);

  // Add to Plan Function
  const addToPlan = (item: WorkoutItem) => {
    setPlanItems((prev) => {
      
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  // Remove from Plan
  const removeFromPlan = (id: string | number) => {
    setPlanItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Add to Saved
  const addToSaved = (item: WorkoutItem) => {
    setSavedItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  // Remove from Saved
  const removeFromSaved = (id: string | number) => {
    setSavedItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        planItems,
        savedItems,
        addToPlan,
        removeFromPlan,
        addToSaved,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
}