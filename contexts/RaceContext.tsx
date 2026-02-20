import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RaceState {
    selectedCourseId: string | null;
    scannedDroneId: string | null;
    finalRawTimeMs: number | null;
    finalPenaltiesMs: number | null;
    setSelectedCourseId: (id: string | null) => void;
    setScannedDroneId: (id: string | null) => void;
    setRaceResult: (rawMs: number, penaltiesMs: number) => void;
    resetRaceState: () => void;
}

const RaceContext = createContext<RaceState | undefined>(undefined);

export function RaceProvider({ children }: { children: ReactNode }) {
    const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
    const [scannedDroneId, setScannedDroneId] = useState<string | null>(null);
    const [finalRawTimeMs, setFinalRawTimeMs] = useState<number | null>(null);
    const [finalPenaltiesMs, setFinalPenaltiesMs] = useState<number | null>(null);

    const resetRaceState = () => {
        setSelectedCourseId(null);
        setScannedDroneId(null);
        setFinalRawTimeMs(null);
        setFinalPenaltiesMs(null);
    };

    const setRaceResult = (rawMs: number, penaltiesMs: number) => {
        setFinalRawTimeMs(rawMs);
        setFinalPenaltiesMs(penaltiesMs);
    };

    return (
        <RaceContext.Provider
            value={{
                selectedCourseId,
                scannedDroneId,
                finalRawTimeMs,
                finalPenaltiesMs,
                setSelectedCourseId,
                setScannedDroneId,
                setRaceResult,
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
