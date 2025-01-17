import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveStats = async (correctAnswers: number, totalAnswers: number): Promise<void> => {
    await AsyncStorage.setItem('correctAnswers', correctAnswers.toString());
    await AsyncStorage.setItem('totalAnswers', totalAnswers.toString());
};
