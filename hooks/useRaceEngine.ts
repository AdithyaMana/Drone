import { useState, useRef, useEffect, useCallback } from 'react';
import { TextInput } from 'react-native';
import { Gate, MOCK_GATES } from '../data/MockDatabase';

export type GateState = 'pending' | 'passed' | 'missed';

export interface EngineGate extends Gate {
    state: GateState;
}

export function formatTimeMs(ms: number) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = ms % 1000;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

export function useRaceEngine(courseId: string | null) {
    const [gates, setGates] = useState<EngineGate[]>([]);
    const startTimeRef = useRef<number | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const timerTextRef = useRef<TextInput>(null);

    const rawTimeMsRef = useRef<number>(0);

    useEffect(() => {
        if (courseId) {
            // Load gates for the specific course from mock DB
            const courseGates = MOCK_GATES.filter(g => g.course_id === courseId)
                .sort((a, b) => a.sequence_order - b.sequence_order)
                .map(g => ({ ...g, state: 'pending' as GateState }));
            setGates(courseGates);
        }
    }, [courseId]);

    const tick = useCallback(() => {
        if (startTimeRef.current === null) return;
        const now = Date.now();
        rawTimeMsRef.current = now - startTimeRef.current;

        if (timerTextRef.current) {
            // Bypasses React state completely for peak 0-lag string updates 
            timerTextRef.current.setNativeProps({
                text: formatTimeMs(rawTimeMsRef.current)
            });
        }
        animationFrameRef.current = requestAnimationFrame(tick);
    }, []);

    const startTimer = useCallback(() => {
        if (startTimeRef.current !== null) return;
        startTimeRef.current = Date.now();
        animationFrameRef.current = requestAnimationFrame(tick);
    }, [tick]);

    const stopTimer = useCallback(() => {
        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
        const finalRawTimeMs = rawTimeMsRef.current;
        const finalPenaltiesMs = gates.filter(g => g.state === 'missed').reduce((acc, g) => acc + g.penalty_weight_ms, 0);
        return { finalRawTimeMs, finalPenaltiesMs };
    }, [gates]);

    const markGate = useCallback((index: number, newState: GateState) => {
        setGates(prev =>
            prev.map((g, i) => i === index ? { ...g, state: newState } : g)
        );
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return {
        gates,
        startTimer,
        stopTimer,
        markGate,
        timerTextRef,
    };
}
