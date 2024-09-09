import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const InputScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        label="Digite algo"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button mode="text" onPress={() => navigation.navigate('Grid')}>
        Ir para Grid
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default InputScreen;
