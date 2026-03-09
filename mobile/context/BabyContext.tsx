import React, { createContext, useContext, useState, ReactNode } from 'react';

type BabyProfile = { name: string; ageMonths: number };
type CryEvent = { id: string; category: string; timestamp: Date };

type BabyContextType = {
  profile: BabyProfile;
  setProfile: (profile: BabyProfile) => void;
  cryEvents: CryEvent[];
  addCryEvent: (event: CryEvent) => void;
};

const BabyContext = createContext<BabyContextType | undefined>(undefined);

export const BabyProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<BabyProfile>({ name: 'Baby', ageMonths: 0 });
  const [cryEvents, setCryEvents] = useState<CryEvent[]>([]);

  const addCryEvent = (event: CryEvent) => setCryEvents((prev) => [event, ...prev]);

  return (
    <BabyContext.Provider value={{ profile, setProfile, cryEvents, addCryEvent }}>
      {children}
    </BabyContext.Provider>
  );
};

export const useBaby = () => {
  const context = useContext(BabyContext);
  if (!context) throw new Error('useBaby must be used within BabyProvider');
  return context;
};
