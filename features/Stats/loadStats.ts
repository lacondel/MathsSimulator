import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stats } from './statsTypes';

export const loadStats = async (): Promise<Stats> => {
    const correct = await AsyncStorage.getItem('correctAnswers');
    const total = await AsyncStorage.getItem('totalAnswers');
    return {
        correctAnswers: correct ? parseInt(correct) : 0,
        totalAnswers: total ? parseInt(total) : 0,
    };
};
