import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PixelBlock } from '../components/PixelBlock';
import { CyberText } from '../components/CyberText';
import { useRaceContext } from '../contexts/RaceContext';

export default function PodiumScreen() {
    const router = useRouter();
    const { resetRaceState } = useRaceContext();

    const handleRematch = () => {
        resetRaceState();
        router.push('/scanner');
    };

    const handleStandings = () => {
        resetRaceState();
        router.push('/lobby');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CyberText type="header" size={56} color="#00F0FF">RACE COMPLETE</CyberText>
            </View>

            <View style={styles.scoreStack}>
                <PixelBlock neonColor="#FFFFFF" style={styles.scoreRow}>
                    <CyberText size={24} color="#FFFFFF">RAW TIME</CyberText>
                    <CyberText type="number" size={32} color="#FFFFFF">02:59.883</CyberText>
                </PixelBlock>

                <PixelBlock neonColor="#FF00EA" style={styles.scoreRow}>
                    <CyberText size={24} color="#FF00EA">MISSED GATES (+10s)</CyberText>
                    <CyberText type="number" size={32} color="#FF00EA">00:10.000</CyberText>
                </PixelBlock>

                <PixelBlock neonColor="#39FF14" backgroundColor="#001A09" style={styles.finalRow}>
                    <CyberText size={32} color="#39FF14">FINAL SCORE</CyberText>
                    <CyberText type="number" size={48} color="#39FF14">03:09.883</CyberText>
                </PixelBlock>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity activeOpacity={0.7} onPress={handleRematch} style={styles.buttonWrapper}>
                    <PixelBlock neonColor="#00F0FF" style={styles.actionButton}>
                        <CyberText size={24}>REMATCH</CyberText>
                    </PixelBlock>
                </TouchableOpacity>

                <View style={styles.spacer} />

                <TouchableOpacity activeOpacity={0.7} onPress={handleStandings} style={styles.buttonWrapper}>
                    <PixelBlock neonColor="#FF00EA" style={styles.actionButton}>
                        <CyberText size={24}>STANDINGS</CyberText>
                    </PixelBlock>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B001A',
        padding: 32,
        justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 32,
    },
    scoreStack: {
        flex: 1,
        justifyContent: 'center',
    },
    scoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginBottom: 24,
    },
    finalRow: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        marginTop: 16,
        borderWidth: 8,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 32,
    },
    spacer: {
        width: 24,
    },
    buttonWrapper: {
        flex: 1,
    },
    actionButton: {
        paddingVertical: 24,
        alignItems: 'center',
    }
});
