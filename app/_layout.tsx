import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { ShareTechMono_400Regular } from '@expo-google-fonts/share-tech-mono';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RaceProvider } from '../contexts/RaceContext';
import { CyberBackground } from '../components/CyberBackground';
import { ScreenGlass } from '../components/ScreenGlass';

export default function RootLayout() {
    const [loaded] = useFonts({
        VT323_400Regular,
        ShareTechMono_400Regular,
    });

    if (!loaded) {
        // Return absolute void. 0px padded #0B001A void.
        return <View style={{ flex: 1, backgroundColor: '#0B001A' }} />;
    }

    // Once fonts are loaded, return the exact same void, but with our routing stack inside
    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <StatusBar hidden={true} />
            <RaceProvider>
                <CyberBackground>
                    <Stack
                        screenOptions={{
                            headerShown: false, // Absolutely no default headers
                            contentStyle: { backgroundColor: 'transparent' }, // Transparent so CyberBackground shows through
                            animation: 'none', // Strictly no smooth transitions
                        }}
                    >
                        <Stack.Screen name="index" />
                        <Stack.Screen name="lobby" />
                        <Stack.Screen name="scanner" />
                        <Stack.Screen name="hud" />
                        <Stack.Screen name="podium" />
                    </Stack>
                    <ScreenGlass />
                </CyberBackground>
            </RaceProvider>
        </View>
    );
}
