import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Tiny 2x2 static noise base64
const NOISE_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVrHwPTc2FGEJgAQQYAA2QBEyD/8zEAAAAASUVORK5CYII=';

export function ScreenGlass() {
    return (
        <View style={styles.crtGlass} pointerEvents="none">
            {/* 1. Film Grain / Static Noise layer (5% opacity) */}
            <View style={styles.noiseOverlayWrapper} pointerEvents="none">
                <Image
                    source={{ uri: NOISE_BASE64 }}
                    style={styles.noiseOverlay}
                    resizeMode="repeat"
                />
            </View>

            {/* 2. Diagonal Glare (simulating CRT reflection) */}
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.08)', 'transparent', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />

            {/* 3. Radial Vignette for Center Focus */}
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.85)']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0.5, y: 0.2 }}
                end={{ x: 0.5, y: 1 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    crtGlass: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 9999,
        elevation: 9999,
    },
    noiseOverlayWrapper: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.05,
    },
    noiseOverlay: {
        width: '100%',
        height: '100%',
    },
});
