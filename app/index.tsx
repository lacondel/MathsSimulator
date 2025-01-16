import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Input } from '../shared/Input/Input';
import { Button } from '../shared/Button/Button';
import { Gaps, Padding } from '../shared/tokens';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.interactive}>
        <Input placeholder='Введите результат' />
        <Button title='ПРОВЕРКА' />
        <Button title='СТАРТ' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Padding.p24
  },
  interactive: {
    alignSelf: 'stretch',
    gap: Gaps.g18
  }
});
