import { Animated, Pressable, PressableProps, Text, View, StyleSheet, GestureResponderEvent } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

export function Button({ title, ...props }: PressableProps & { title: string }) {
    const animatedValue = new Animated.Value(100);
    const color = animatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [Colors.purpleHover, Colors.purple]
    });

    const fadeIn = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
        props.onPressIn && props.onPressIn(e);
    }
    const fadeOut = (e: GestureResponderEvent) => {
        Animated.timing(animatedValue, {
            toValue: 100,
            duration: 100,
            useNativeDriver: true
        }).start();
        props.onPressOut && props.onPressOut(e);
    }

    return (
        <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
            <Animated.View style={{ ...styles.button, backgroundColor: color }}>
                <Text style={styles.text}>{title}</Text>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Radius.r10,
        height: 58,
        backgroundColor: Colors.purple
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.f16
    }
});