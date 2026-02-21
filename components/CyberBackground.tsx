import React, { ReactNode } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

// CSS grid size
const GRID_SIZE = 32;

export function CyberBackground({ children }: { children: ReactNode }) {
    const planeSize = Math.max(width, height) * 2;
    const gridCols = Math.ceil(planeSize / GRID_SIZE);
    const gridRows = Math.ceil(planeSize / GRID_SIZE);

    return (
        <View style={styles.container}>
            {/* 1. Base Void Color (Deep Space) */}
            <View style={StyleSheet.absoluteFill}>
                <LinearGradient
                    colors={['#1A0B2E', '#000000']}
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.5, y: 0.2 }} // Center top glow fading down to black
                    end={{ x: 0.5, y: 1 }}
                />
            </View>

            {/* 2. The Horizon Line */}
            <View style={styles.horizonLine} />

            {/* 3. The 3D Grid Floor (Synthwave Perspective) */}
            <View style={styles.floorAnchor}>
                <View style={styles.gridContainer}>
                    {Array.from({ length: gridRows }).map((_, i) => (
                        <View key={`row-${i}`} style={[styles.gridRow, { top: i * GRID_SIZE }]} />
                    ))}
                    {Array.from({ length: gridCols }).map((_, i) => (
                        <View key={`col-${i}`} style={[styles.gridCol, { left: i * GRID_SIZE }]} />
                    ))}
                </View>
                {/* 4. Floor Mask (fades to 0% opacity at horizon) */}
                <LinearGradient
                    colors={['#000000', 'transparent']} // Black at top near horizon fading to transparent at bottom
                    style={StyleSheet.absoluteFill}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.4 }}
                />
            </View>

            {/* 5. Actual Children Content (App) */}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', // Base fallback
    },
    horizonLine: {
        position: 'absolute',
        top: height / 2,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: '#00F0FF', // Neon Cyan
        // A slight drop shadow pushing up into the void
        shadowColor: '#00F0FF',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
        zIndex: -1,
    },
    floorAnchor: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: height / 2, // Exactly bottom half of screen
        overflow: 'hidden',
        zIndex: -2,
    },
    gridContainer: {
        position: 'absolute',
        width: Math.max(width, height) * 2,
        height: Math.max(width, height) * 2,
        // Center the massive grid on the bottom anchor so vanishing point is roughly middle screen
        left: -(Math.max(width, height) / 2),
        top: 0,
        transform: [
            { perspective: 1000 },
            { rotateX: '75deg' }, // Extreme tilt
        ],
    },
    gridRow: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.4)', // Brighter neon green lines
    },
    gridCol: {
        position: 'absolute',
        height: '100%',
        width: 1,
        backgroundColor: 'rgba(57, 255, 20, 0.4)',
    }
});
