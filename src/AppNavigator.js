// src/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SymptomScreen from './screens/SymptomScreen';
import HomeScreen from './screens/HomeScreen';
import FoodScreen from './screens/FoodScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen} />
      <Stack.Screen
        name="SymptomScreen"
        component={SymptomScreen}
        options={{ title: 'Symptom Tracker' }}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={{ title: 'Food Tracker' }}
      />
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
