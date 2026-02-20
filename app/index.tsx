import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { CyberText } from '../components/CyberText';
import { PixelBlock } from '../components/PixelBlock';
import { KillSwitch } from '../components/KillSwitch';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            {/* Title Block */}
            <PixelBlock neonColor="#00F0FF" style={styles.block}>
                <CyberText type="header" size={48} color="#00F0FF">CYBER DRONE</CyberText>
                <CyberText size={24} color="#FFFFFF">0PX PADDED VOID</CyberText>
                <CyberText type="number" size={64} color="#39FF14">SYS.RDY</CyberText>
            </PixelBlock>

            <View style={styles.spacer} />

            {/* Navigation Button to next phase Lobby */}
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/lobby')}>
                <PixelBlock neonColor="#FF00EA" style={styles.navButton}>
                    <CyberText size={32} color="#FFFFFF">ENTER LOBBY</CyberText>
                </PixelBlock>
            </TouchableOpacity>

            <View style={styles.spacer} />

            {/* KillSwitch Test */}
            <KillSwitch onPress={() => console.log('KILL')} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B001A',
        padding: 32, // Enforce strict 8px multiplier
        justifyContent: 'center',
        alignItems: 'center',
    },
    block: {
        padding: 24, // 8px multiplier
        alignItems: 'center',
        width: '100%',
    },
    spacer: {
        height: 48, // 8px multiplier
    },
    navButton: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
    }
});
