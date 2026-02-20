import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PixelBlock } from '../components/PixelBlock';
import { CyberText } from '../components/CyberText';
import { KillSwitch } from '../components/KillSwitch';

export default function TelemetryHudScreen() {
    const router = useRouter();

    // Mocked state: 2 out of 5 checkpoints hit
    const checkpoints = [
        { id: 1, hit: true },
        { id: 2, hit: true },
        { id: 3, hit: false },
        { id: 4, hit: false },
        { id: 5, hit: false },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Checkpoints Row */}
            <View style={styles.checkpointContainer}>
                {checkpoints.map((cp) => (
                    <PixelBlock
                        key={cp.id}
                        borderWidth={4}
                        neonColor={cp.hit ? '#39FF14' : '#FFFFFF'}
                        backgroundColor={cp.hit ? '#39FF14' : '#000000'}
                        style={styles.checkpointBox}
                    />
                ))}
            </View>

            {/* Massive Centered Timer */}
            <View style={styles.timerContainer}>
                <CyberText type="number" size={88} color="#FFFFFF" neonColor="#39FF14">
                    02:59.883
                </CyberText>
            </View>

            {/* KillSwitch anchored to bottom */}
            <View style={styles.footerContainer}>
                <KillSwitch onPress={() => router.push('/podium')} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Pure black for HUD contrast
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
    },
    footerContainer: {
        width: '100%',
        paddingTop: 32,
    }
});
