import React from 'react';
import { Text, TextProps, StyleSheet, Platform } from 'react-native';

export interface CyberTextProps extends TextProps {
    type?: 'header' | 'number' | 'body';
    size?: number;
    color?: string;
    neonColor?: string; // Optional shadow color override
}

export function CyberText({ type = 'body', size = 16, color = '#FFFFFF', neonColor, style, ...props }: CyberTextProps) {
    const isNumber = type === 'number';
    const fontFamily = isNumber ? 'ShareTechMono_400Regular' : 'VT323_400Regular';

    // Use user-provided neonColor or default to Magenta if white text, otherwise match the color.
    const shadowColor = neonColor ?? (color === '#FFFFFF' ? '#FF00EA' : color);

    // Different fonts require different line heights to render without clipping in React Native Android
    const lineHeightMultiplier = isNumber ? 1.05 : 1.1;

    const typographyStyle = {
        fontFamily,
        fontSize: size,
        color,
        lineHeight: Math.round(size * lineHeightMultiplier),
        includeFontPadding: false,
        textAlignVertical: 'center' as const,
        textTransform: (isNumber ? 'none' : 'uppercase') as 'none' | 'uppercase',
    };

    return (
        <Text
            style={[
                styles.base,
                typographyStyle,
                { textShadowColor: shadowColor },
                style
            ]}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    base: {
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 0,
    }
});
