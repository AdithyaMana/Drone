import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { PixelBlock } from './PixelBlock';
import { CyberText } from './CyberText';

interface KillSwitchProps {
    onPress: () => void;
    label?: string;
}

export function KillSwitch({ onPress, label = 'STOP' }: KillSwitchProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <PixelBlock
                backgroundColor="#FF0000" // Blood Red inside
                neonColor="#0B001A" // The overall shadow is dark to separate from other neon? 
                // Wait, hard offset shadows: maybe magenta for a warning?
                // Let's use #FF00EA (Magenta) for the shadow since it's a kill switch.
                borderWidth={8} // Massive blocky border
                style={styles.killSwitch}
            >
                <CyberText type="header" size={56} color="#FFFFFF" neonColor="#000000" style={styles.text}>
                    {label}
                </CyberText>
            </PixelBlock>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    killSwitch: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        shadowColor: '#FF00EA',
    },
    text: {
        letterSpacing: 4,
    }
});
