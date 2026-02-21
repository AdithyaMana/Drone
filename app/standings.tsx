import React, { useMemo } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PixelBlock } from '../components/PixelBlock';
import { CyberText } from '../components/CyberText';
import { useRaceContext } from '../contexts/RaceContext';
import { MOCK_SCORES, Score } from '../data/MockDatabase';
import { formatTimeMs } from '../hooks/useRaceEngine';

export default function StandingsScreen() {
    const router = useRouter();
    const { selectedCourseId, resetRaceState } = useRaceContext();

    const handleBackToLobby = () => {
        resetRaceState();
        router.push('/lobby');
    };

    // Filter, sort, and cap at top 10
    const topScores = useMemo(() => {
        if (!selectedCourseId) return [];
        return MOCK_SCORES
            .filter(score => score.course_id === selectedCourseId)
            .sort((a, b) => a.total_time_ms - b.total_time_ms)
            .slice(0, 10);
    }, [selectedCourseId]);

    const getRankColor = (index: number) => {
        if (index === 0) return '#FFFF00'; // 1st - Yellow
        if (index === 1) return '#00F0FF'; // 2nd - Cyan
        if (index === 2) return '#FF00EA'; // 3rd - Magenta
        return '#FFFFFF'; // Others - White
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CyberText type="header" size={48} color="#FFFFFF">GLOBAL RANKING</CyberText>
            </View>

            <ScrollView
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            >
                {topScores.length === 0 ? (
                    <View style={styles.emptyState}>
                        <CyberText size={24} color="#FF00EA">NO RECORDS FOUND</CyberText>
                    </View>
                ) : (
                    topScores.map((score, index) => {
                        const rowColor = getRankColor(index);
                        return (
                            <PixelBlock
                                key={score.score_id}
                                neonColor={rowColor}
                                style={styles.scoreRow}
                                borderWidth={4}
                            >
                                <View style={styles.columnRank}>
                                    <CyberText type="number" size={32} color={rowColor}>
                                        {index + 1}
                                    </CyberText>
                                </View>

                                <View style={styles.columnName}>
                                    <CyberText type="number" size={24} color={rowColor} numberOfLines={1}>
                                        {score.player_handle}
                                    </CyberText>
                                </View>

                                <View style={styles.columnTime}>
                                    <CyberText type="number" size={24} color={rowColor}>
                                        {formatTimeMs(score.total_time_ms)}
                                    </CyberText>
                                </View>
                            </PixelBlock>
                        );
                    })
                )}
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.7} onPress={handleBackToLobby}>
                    <PixelBlock neonColor="#FF00EA" style={styles.actionButton}>
                        <CyberText type="header" size={24}>BACK TO LOBBY</CyberText>
                    </PixelBlock>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent', // Let CyberBackground bleed through
        padding: 32, // 8px multiplier grid
    },
    header: {
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 32,
    },
    listContent: {
        paddingBottom: 32,
    },
    emptyState: {
        padding: 32,
        alignItems: 'center',
    },
    scoreRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 16, // spacing between rows
    },
    columnRank: {
        width: 64,
        alignItems: 'center',
    },
    columnName: {
        flex: 1,
        paddingHorizontal: 16,
    },
    columnTime: {
        width: 140,
        alignItems: 'flex-end',
    },
    footer: {
        paddingTop: 24,
    },
    actionButton: {
        paddingVertical: 24,
        alignItems: 'center',
    }
});
