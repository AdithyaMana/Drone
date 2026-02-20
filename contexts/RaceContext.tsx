import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RaceState {
    selectedCourseId: string | null;
    scannedDroneId: string | null;
    setSelectedCourseId: (id: string | null) => void;
    setScannedDroneId: (id: string | null) => void;
    resetRaceState: () => void;
}

const RaceContext = createContext<RaceState | undefined>(undefined);

export function RaceProvider({ children }: { children: ReactNode }) {
    const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
    const [scannedDroneId, setScannedDroneId] = useState<string | null>(null);

    const resetRaceState = () => {
        setSelectedCourseId(null);
        setScannedDroneId(null);
    };

    return (
        <RaceContext.Provider
            value={{
                selectedCourseId,
                scannedDroneId,
                setSelectedCourseId,
                setScannedDroneId,
                resetRaceState,
            }}
        >
            {children}
        </RaceContext.Provider>
    );
}

export function useRaceContext() {
    const context = useContext(RaceContext);
    if (!context) {
        throw new Error('useRaceContext must be used within a RaceProvider');
    }
    return context;
}
