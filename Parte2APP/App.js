import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Views/Home';
import Jogos from './src/Views/Jogos';
import Fases from './src/Views/Fases';

export default function App() {

  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: 'Fases Copa do Brasil 2021',
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Jogos"
          component={Jogos}
          options={{
            title: 'Jogos',
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}
