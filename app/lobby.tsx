import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PixelBlock } from '../components/PixelBlock';
import { CyberText } from '../components/CyberText';
import { useRaceContext } from '../contexts/RaceContext';

const { width } = Dimensions.get('window');

const MOCK_COURSES = [
    { id: 'track-1', name: 'NEON ALLEY', parTime: '01:15.000' },
    { id: 'track-2', name: 'CYBER CORE', parTime: '00:58.500' },
    { id: 'track-3', name: 'VOID RUN', parTime: '02:30.250' },
];

export default function LobbyScreen() {
    const router = useRouter();
    const { setSelectedCourseId } = useRaceContext();

    const handleSelectCourse = (courseId: string) => {
        setSelectedCourseId(courseId);
        router.push('/scanner');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <CyberText type="header" size={48} color="#00F0FF">SELECT TRACK</CyberText>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                snapToInterval={width * 0.8 + 32} // Card width + margin
                decelerationRate="fast"
            >
                {MOCK_COURSES.map((course) => (
                    <TouchableOpacity
                        key={course.id}
                        activeOpacity={0.7}
                        onPress={() => handleSelectCourse(course.id)}
                        style={styles.cardWrapper}
                    >
                        <PixelBlock neonColor="#FF00EA" style={styles.card}>
                            <CyberText type="header" size={32} color="#FFFFFF" style={styles.cardTitle}>
                                {course.name}
                            </CyberText>
                            <CyberText type="body" size={16} color="#39FF14" style={styles.parLabel}>
                                PAR TIME
                            </CyberText>
                            <CyberText type="number" size={32} color="#FFFFFF">
                                {course.parTime}
                            </CyberText>
                        </PixelBlock>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B001A',
    },
    header: {
        padding: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    cardWrapper: {
        width: width * 0.8,
        marginHorizontal: 16,
    },
    card: {
        padding: 32,
        alignItems: 'center',
        justifyContent: 'center',
        height: 320,
    },
    cardTitle: {
        marginBottom: 48,
        textAlign: 'center',
    },
    parLabel: {
        marginBottom: 8,
    }
});
