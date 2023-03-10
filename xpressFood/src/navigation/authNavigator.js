import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInWelcomeScreen } from '../screens/authScreens/SignInWelcomeScreen';
import { SignInScreen } from '../screens/authScreens/SignInScreen';
import { HomeScreen } from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen} options = {{
        headerShown: false,
    }} />

    <Stack.Screen name="SignInScreen" component={SignInScreen} options = {{
        headerShown: false,
    }} />

    <Stack.Screen name="HomeScreen" component={HomeScreen} options = {{
        headerShown: false,
    }} />
  
  </Stack.Navigator>
  )
}
