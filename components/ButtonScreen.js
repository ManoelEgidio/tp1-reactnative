import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ButtonScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={() => console.log('Botão Pressionado!')}>
        Pressione-me
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('Input')}>
        Ir para Input
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonScreen;
