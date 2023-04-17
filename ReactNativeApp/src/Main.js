// src/Main.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AppNavigator from './AppNavigator';

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Food Intolerance Journal!</Text>
            <Button onPress={() => setCurrentStep(currentStep + 1)}>Next</Button>
          </View>
        );
      case 2:
        return <AppNavigator />;
      // Add more cases for each step of the app
      default:
        return <Text>Something went wrong.</Text>;
    }
  };

  return <View style={{ flex: 1 }}>{renderStep()}</View>;
};

export default Main;
