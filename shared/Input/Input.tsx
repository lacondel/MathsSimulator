import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Fonts, Padding, Radius } from "../tokens";

export function Input({...props}: TextInputProps) {
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholderTextColor={Colors.grey}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: Radius.r10,
        paddingHorizontal: Padding.p24,
        fontSize: Fonts.f16,
        height: 58,
    }
});