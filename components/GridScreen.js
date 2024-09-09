import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const GridScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}><Text>1</Text></View>
      <View style={styles.box}><Text>2</Text></View>
      <View style={styles.box}><Text>3</Text></View>
      <View style={styles.box}><Text>4</Text></View>
      <Button mode="text" onPress={() => navigation.navigate('Image')}>
        Ir para Imagem
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default GridScreen;
