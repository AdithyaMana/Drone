import React, { ReactNode } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// Calculates a massive repeating string for the CSS grid trick 
const GRID_SIZE = 32;

export function CyberBackground({ children }: { children: ReactNode }) {
    return (
        <View style={styles.container}>
            {/* 1. Base Void Color */}
            <View style={StyleSheet.absoluteFill} />

            {/* 2. The Faint Retro Grid lines overlay */}
            {/* A pure CSS grid background using borders on wrapped absolute views, but for React Native we use a repeating pattern using CSS strings if available... but safely using simple row/col stripes to ensure Native renders correctly */}
            <View style={styles.gridContainer}>
                {Array.from({ length: Math.ceil(height / GRID_SIZE) }).map((_, i) => (
                    <View key={`row-${i}`} style={[styles.gridRow, { top: i * GRID_SIZE }]} />
                ))}
                {Array.from({ length: Math.ceil(width / GRID_SIZE) }).map((_, i) => (
                    <View key={`col-${i}`} style={[styles.gridCol, { left: i * GRID_SIZE }]} />
                ))}
            </View>

            {/* 3. The Actual Children Content */}
            {children}

            {/* 4. CRT Glass Overlay & Scanlines (pointerEvents NONE to avoid blocking taps) */}
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
        backgroundColor: '#000000', // Pure Void Pitch Black
    },
    gridContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        overflow: 'hidden',
    },
    gridRow: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.05)', // Extremely faint toxic green
    },
    gridCol: {
        position: 'absolute',
        height: '100%',
        width: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.05)',
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
