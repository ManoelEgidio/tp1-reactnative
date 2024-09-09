import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Importando as páginas criadas
import ButtonScreen from './components/ButtonScreen';
import InputScreen from './components/InputScreen';
import GridScreen from './components/GridScreen';
import ImageScreen from './components/ImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Button">
          <Stack.Screen name="Button" component={ButtonScreen} options={{ title: 'Botão' }} />
          <Stack.Screen name="Input" component={InputScreen} options={{ title: 'Input' }} />
          <Stack.Screen name="Grid" component={GridScreen} options={{ title: 'Grid' }} />
          <Stack.Screen name="Image" component={ImageScreen} options={{ title: 'Imagem' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
