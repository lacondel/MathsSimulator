import { Stack } from "expo-router";
import { Colors } from "../shared/tokens";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                statusBarBackgroundColor: Colors.purple
            }}
        >
            <Stack.Screen
                name="index"
                options={{ title: "MathsSimulator" }}
            />
        </Stack>
    );
}