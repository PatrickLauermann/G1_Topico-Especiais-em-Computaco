import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Views/Home';
import Media from './src/Views/Media';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name = "Home"
          component = {Home}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "Media"
          component = {Media}
          options = {{
            title: 'Média de KM por litro',
            headerTitleAlign: "center",
            headerShown: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}