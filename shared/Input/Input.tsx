import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors, Fonts, Padding, Radius } from "../tokens";

interface InputProps extends TextInputProps {
    isDisabled?: boolean;
    keyboardType?: TextInputProps['keyboardType'];
    onSubmitEditing?: () => void;
}

export function Input({ isDisabled = false, keyboardType = 'default', onSubmitEditing, ...props }: InputProps) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholderTextColor={Colors.grey}
                editable={!isDisabled}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing} 
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