import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

export interface PixelBlockProps extends ViewProps {
  neonColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
}

export function PixelBlock({
  neonColor = '#00F0FF',
  backgroundColor = '#0B001A',
  borderWidth = 4,
  style,
  children,
  ...props
}: PixelBlockProps) {
  return (
    <View
      style={[
        styles.base,
        {
          borderColor: '#FFFFFF',
          borderWidth,
          backgroundColor,
          shadowColor: neonColor,
        },
        style
      ]}
      {...props}
    >
      {/* Inner Neon Bloom core */}
      <View
        style={[
          styles.innerBloom,
          {
            borderColor: neonColor,
            opacity: 0.8 // Bright inner tube simulation
          }
        ]}
        pointerEvents="none"
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 0,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    position: 'relative', // required for absolute inner bloom
  },
  innerBloom: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 1,
    borderRadius: 0,
    zIndex: 1, // Sit directly on top of background but under children if possible
  }
});
