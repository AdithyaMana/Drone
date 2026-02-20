import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PixelBlock } from '../components/PixelBlock';
import { KillSwitch } from '../components/KillSwitch';
import { CyberTimerText } from '../components/CyberTimerText';
import { CyberText } from '../components/CyberText';
import { CyberBackground } from '../components/CyberBackground';
import { useRaceEngine, GateState } from '../hooks/useRaceEngine';
import { useRaceContext } from '../contexts/RaceContext';

export default function TelemetryHudScreen() {
    const router = useRouter();
    const { selectedCourseId, setRaceResult } = useRaceContext();
    const { gates, startTimer, stopTimer, markGate, timerTextRef } = useRaceEngine(selectedCourseId);

    useEffect(() => {
        // Start ticking when HUD mounts!
        startTimer();
    }, [startTimer]);

    const handleStop = () => {
        const { finalRawTimeMs, finalPenaltiesMs } = stopTimer();
        setRaceResult(finalRawTimeMs, finalPenaltiesMs);
        router.push('/podium');
    };

    const handleGateTap = (index: number) => {
        const currentGate = gates[index];
        if (!currentGate) return;

        let nextState: GateState = 'pending';
        if (currentGate.state === 'pending') nextState = 'passed';
        else if (currentGate.state === 'passed') nextState = 'missed';
        else nextState = 'passed'; // Toggle loop for mocked hardware

        markGate(index, nextState);
    };

    return (
        <CyberBackground>
            <SafeAreaView style={styles.container}>
                {/* Top Checkpoints Row */}
                <View style={styles.checkpointContainer}>
                    {gates.map((g, index) => {
                        const isPassed = g.state === 'passed';
                        const isMissed = g.state === 'missed';
                        return (
                            <PixelBlock
                                key={g.gate_id}
                                borderWidth={4}
                                neonColor={isPassed ? '#39FF14' : isMissed ? '#FF00EA' : '#FFFFFF'}
                                backgroundColor={isPassed ? '#39FF14' : isMissed ? '#FF00EA' : '#000000'}
                                style={styles.checkpointBox}
                            />
                        );
                    })}
                </View>

                {/* Massive Centered Timer & HUD Greebling */}
                <View style={styles.timerContainer}>
                    {/* Diagnostic Readouts (Absolute positioned around the timer) */}
                    <View style={[styles.diagWrapper, { top: -24, left: -16 }]}>
                        <CyberText type="number" size={12} color="#006666">UPLINK: SECURE // BATT: 88%</CyberText>
                    </View>
                    <View style={[styles.diagWrapper, { top: -24, right: -16 }]}>
                        <CyberText type="number" size={12} color="#006666">FREQ: 5.8GHz // LAT: 12ms</CyberText>
                    </View>

                    <CyberTimerText ref={timerTextRef} />

                    <View style={[styles.diagWrapper, { bottom: -24, left: -16 }]}>
                        <CyberText type="number" size={12} color="#006666">MEM_ADDR: 0x8F9A2B</CyberText>
                    </View>

                    {/*
                      INVISIBLE MOCKED HARDWARE BYPASS:
                    */}
                    <View style={[StyleSheet.absoluteFill, styles.overlayGrid]}>
                        {gates.map((g, index) => (
                            <TouchableOpacity
                                key={`bypass-${g.gate_id}`}
                                style={styles.overlayGridCell}
                                activeOpacity={0}
                                onPress={() => handleGateTap(index)}
                            />
                        ))}
                    </View>
                </View>

                {/* KillSwitch anchored to bottom */}
                <View style={styles.footerContainer}>
                    <KillSwitch onPress={handleStop} />
                </View>
            </SafeAreaView>
        </CyberBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32, // multiples of 8
        justifyContent: 'space-between',
    },
    checkpointContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 32,
    },
    checkpointBox: {
        width: 48, // 8 * 6
        height: 48,
    },
    timerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    diagWrapper: {
        position: 'absolute',
    },
    overlayGrid: {
        flexDirection: 'row',
        zIndex: 100, // Above the timer text for taps
    },
    overlayGridCell: {
        flex: 1,
    },
    footerContainer: {
        width: '100%',
        paddingTop: 32,
    }
});
