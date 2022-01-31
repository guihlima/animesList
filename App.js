import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import AdicionarAnimes from './src/pages/screens/AdicionarAnimes';
import EditarAnimes from './src/pages/screens/EditarAnime'; 
import Perfil from './src/pages/screens/Perfil';
import Login from './src/pages/screens/Login';
import Registro from './src/pages/screens/Registro';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Registro'
        component={Registro}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Home'
        component={Home}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='adicionarAnimes'
        component={AdicionarAnimes}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='editarAnimes'
        component={EditarAnimes}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

