import { Alert, StyleSheet, Text, View } from 'react-native';

import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Fonts, Gaps, Margins, Padding, Colors, Radius } from '../shared/tokens';
import { Stats } from '../widgets/Stats/Stats';
import { saveStats } from '../features/Stats/saveStats';
import { checkAnswer } from '../entities/Example/checkAnswer';
import { useState } from 'react';
import { generateExample } from '../entities/Example/generateExample';

export default function App() {
  const [operand1, setOperand1] = useState<number | null>(null);
  const [operand2, setOperand2] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>('');
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [totalAnswers, setTotalAnswers] = useState<number>(0);
  const [isStartDisabled, setIsStartDisabled] = useState<boolean>(false);
  const [isCheckDisabled, setIsCheckDisabled] = useState<boolean>(true);
  const [bColor, setBColor] = useState<string>('white');

  const handleGenerateExample = () => {
    const example = generateExample();
    setOperand1(example.operand1);
    setOperand2(example.operand2);
    setOperator(example.operator);
    setAnswer('');
    setIsStartDisabled(true);
    setIsCheckDisabled(false);
    setBColor('white');
  };

  const handleCheckAnswer = () => {
    if (operand1 === null || operand2 === null || operator === null) {
      return;
    }

    if (!answer || isNaN(Number(answer)) || !/^-?\d+$/.test(answer)) {
      Alert.alert('Ошибка', 'Введите корректное число');
      return;
    }

    const isCorrect = checkAnswer(operand1, operand2, operator, answer);
    if (isCorrect) {
      setBColor(Colors.green);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setBColor(Colors.red);
    }
    setTotalAnswers(totalAnswers + 1);
    saveStats(correctAnswers + (isCorrect ? 1 : 0), totalAnswers + 1);
    setIsCheckDisabled(true);
    setIsStartDisabled(false);

    setTimeout(() => {
      setBColor('white');
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View>
        <Stats label="Итого решено примеров" value={totalAnswers} isLarge />
        <View style={styles.lowStatsContainer}>
          <Stats label="Правильно" value={correctAnswers} />
          <Stats label="Не правильно" value={totalAnswers - correctAnswers} />
        </View>
      </View>
      <Text style={styles.percentage}>
        {(totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0).toFixed(2)}%
      </Text>
      <View style={{ ...styles.exampleContainerStyle, backgroundColor: bColor }}>
        <Text style={styles.exampleStyle}>
          {operand1} {operator} {operand2} =
        </Text>
      </View>
      <View style={styles.interactive}>
        <Input
          placeholder='Введите результат'
          value={answer}
          onChangeText={setAnswer}
          isDisabled={isCheckDisabled}
          keyboardType='numeric'
          onSubmitEditing={handleCheckAnswer}
        />
        <Button title="ПРОВЕРКА" onPress={handleCheckAnswer} isDisabled={isCheckDisabled} />
        <Button title="СТАРТ" onPress={handleGenerateExample} isDisabled={isStartDisabled} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: Padding.p24
  },
  lowStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  percentage: {
    fontSize: Fonts.f54
  },
  exampleContainerStyle: {
    marginBottom: Margins.m10,
    borderRadius: Radius.r10
  },
  exampleStyle: {
    fontSize: Fonts.f32,
  },
  interactive: {
    alignSelf: 'stretch',
    gap: Gaps.g18
  }
});
