import React, { forwardRef } from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

interface CyberTimerTextProps {
    size?: number;
    color?: string;
    neonColor?: string;
    initialValue?: string;
}

export const CyberTimerText = forwardRef<TextInput, CyberTimerTextProps>((
    { size = 88, color = '#FFFFFF', neonColor = '#39FF14', initialValue = '00:00.000' },
    ref
) => {
    const lineHeightMultiplier = 1.05;

    return (
        <TextInput
            ref={ref}
            value={initialValue}
            editable={false}
            style={[
                styles.base,
                {
                    fontFamily: 'ShareTechMono_400Regular',
                    fontSize: size,
                    color,
                    lineHeight: Math.round(size * lineHeightMultiplier),
                    textShadowColor: neonColor,
                }
            ]}
        />
    );
});

const styles = StyleSheet.create({
    base: {
        padding: 0,
        margin: 0,
        includeFontPadding: false,
        textAlignVertical: 'center',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
        textAlign: 'center',
    }
});
