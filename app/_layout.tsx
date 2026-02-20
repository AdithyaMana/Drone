import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { ShareTechMono_400Regular } from '@expo-google-fonts/share-tech-mono';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

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
        <View style={{ flex: 1, backgroundColor: '#0B001A' }}>
            <StatusBar hidden={true} />
            <Stack
                screenOptions={{
                    headerShown: false, // Absolutely no default headers
                    contentStyle: { backgroundColor: '#0B001A' }, // Match void
                    animation: 'none', // Strictly no smooth transitions
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </View>
    );
}
