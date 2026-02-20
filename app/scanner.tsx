import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CyberText } from '../components/CyberText';
import { useRaceContext } from '../contexts/RaceContext';

export default function ScannerScreen() {
    const router = useRouter();
    const { setScannedDroneId } = useRaceContext();
    const [stage, setStage] = useState<1 | 2>(1);

    // Colors mapping logic
    const currentColor = stage === 1 ? '#00F0FF' : '#FF00EA';
    const instruction = stage === 1 ? 'SCAN MAP BEACON' : 'SCAN DRONE';

    const handleBypassTap = () => {
        if (stage === 1) {
            setStage(2);
        } else {
            setScannedDroneId('mock-drone-001');
            router.push('/hud');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.targetBox, { borderColor: currentColor }]}>
                <View style={styles.content}>
                    <CyberText type="header" size={48} color={currentColor} style={styles.instruction}>
                        {instruction}
                    </CyberText>
                    <CyberText type="body" size={16} color="#FFFFFF" neonColor={currentColor}>
                        [ TAP TO BYPASS CAMERA SCAN ]
                    </CyberText>
                </View>
            </View>

            <TouchableOpacity
                style={styles.bypassOverlay}
                activeOpacity={0}
                onPress={handleBypassTap}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B001A',
        padding: 32, // 8px multiplier
        justifyContent: 'center',
        alignItems: 'center',
    },
    targetBox: {
        width: '100%',
        height: 480,
        borderWidth: 4, // Thick 4px borders
        borderRadius: 0, // Strict 0 radius
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 24,
    },
    instruction: {
        marginBottom: 24,
        textAlign: 'center',
    },
    bypassOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});
