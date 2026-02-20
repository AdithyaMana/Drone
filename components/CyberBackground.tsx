import React, { ReactNode } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Calculates a massive repeating string for the CSS grid trick 
const GRID_SIZE = 32;

// Tiny 2x2 static noise base64
const NOISE_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2rVrHwPTc2FGEJgAQQYAA2QBEyD/8zEAAAAASUVORK5CYII=';

export function CyberBackground({ children }: { children: ReactNode }) {
    // We expand the grid matrix so it covers the tilted viewport without edges showing
    const planeSize = Math.max(width, height) * 2;
    const gridCols = Math.ceil(planeSize / GRID_SIZE);
    const gridRows = Math.ceil(planeSize / GRID_SIZE);

    return (
        <View style={styles.container}>
            {/* 1. Base Void Color (Synthwave Gradient) */}
            <LinearGradient
                colors={['#1A0B2E', '#05000A']}
                style={StyleSheet.absoluteFill}
            />

            {/* 2. The Faint Retro Grid lines overlay (3D Perspective Synthwave Floor) */}
            <View style={styles.floorAnchor}>
                <View style={styles.gridContainer}>
                    {Array.from({ length: gridRows }).map((_, i) => (
                        <View key={`row-${i}`} style={[styles.gridRow, { top: i * GRID_SIZE }]} />
                    ))}
                    {Array.from({ length: gridCols }).map((_, i) => (
                        <View key={`col-${i}`} style={[styles.gridCol, { left: i * GRID_SIZE }]} />
                    ))}
                </View>
            </View>

            {/* 3. The Actual Children Content */}
            {children}

            {/* 4. Film Grain / Static Noise layer */}
            <View style={styles.noiseOverlayWrapper} pointerEvents="none">
                <Image
                    source={{ uri: NOISE_BASE64 }}
                    style={styles.noiseOverlay}
                    resizeMode="repeat"
                />
            </View>

            {/* 5. CRT Glass Overlay & Scanlines (pointerEvents NONE to avoid blocking taps) */}
            <View style={styles.crtGlass} pointerEvents="none">
                {/* 
                  Radial dark vignette faked via stacked LinearGradients (React Native lacks pure Radial gradients out of the box).
                  It pulls focus to the center.
                */}
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.85)']}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.5, y: 0.2 }}
                    end={{ x: 0.5, y: 1 }}
                />

                {/* Subtle horizontal scanline stripes faked via repeating small height blocks */}
                <View style={styles.scanlineWrapper}>
                    {Array.from({ length: Math.ceil(height / 4) }).map((_, i) => (
                        <View key={`scan-${i}`} style={styles.scanlineStrip} />
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#05000A',
    },
    floorAnchor: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height * 0.5, // Bottom half of screen
        overflow: 'hidden',
        zIndex: -1,
    },
    gridContainer: {
        position: 'absolute',
        width: Math.max(width, height) * 2,
        height: Math.max(width, height) * 2,
        // Center the massive grid on the bottom anchor so the vanishing point is roughly middle screen
        left: -(Math.max(width, height) / 2),
        top: 0,
        transform: [
            { perspective: 400 },
            { rotateX: '65deg' }, // Sharp tilt back toward horizon
        ],
    },
    gridRow: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.15)', // Neon green lines
    },
    gridCol: {
        position: 'absolute',
        height: '100%',
        width: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.15)',
    },
    noiseOverlayWrapper: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.04,
        zIndex: 9998,
    },
    noiseOverlay: {
        width: '100%',
        height: '100%',
    },
    crtGlass: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 9999, // Massively on top of everything
    },
    scanlineWrapper: {
        ...StyleSheet.absoluteFillObject,
        opacity: 0.15, // Very subtle alpha texture
        flexDirection: 'column',
    },
    scanlineStrip: {
        width: '100%',
        height: 2, // 2px dark stripe
        backgroundColor: '#000000',
        marginBottom: 2, // 2px gap (total 4px repeat)
    }
});
