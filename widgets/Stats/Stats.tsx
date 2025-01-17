// widgets/StatItem.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts, Margins } from '../../shared/tokens';

interface StatsProps {
    label: string;
    value: number;
    isLarge?: boolean;
}

export const Stats = ({ label, value, isLarge = false }: StatsProps) => {
    return (
        <View style={ styles.container }>
            <Text style={isLarge ? styles.largeLabel : styles.label}>{label}</Text>
            <Text style={isLarge ? styles.largeValue : styles.value}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: Margins.m20
    },
    label: {
        fontSize: Fonts.f18,
        fontWeight: 'bold',
        marginBottom: Margins.m10
    },
    largeLabel: {
        fontSize: Fonts.f20,
        fontWeight: 'bold',
        marginBottom: Margins.m10
    },
    value: {
        fontSize: Fonts.f16,
    },
    largeValue: {
        fontSize: Fonts.f18,
    },
});
