// src/Main.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AppNavigator from './AppNavigator';

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [homeVisible, setHomeVisible] = useState(false);

  const renderStep = () => {
    console.log('Rendering step:', currentStep);
    console.log('HomeVisible:', homeVisible);

    switch (currentStep) {
      case 1:
        return (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Food Intolerance Journal!</Text>
            <Button onPress={() => {
              setCurrentStep(currentStep + 1);
              setHomeVisible(true);
            }}>
              Next: {currentStep}
            </Button>
          </View>
        );
      case 2:
        return homeVisible && <AppNavigator />;
      // Add more cases for each step of the app
      default:
        return <Text>Something went wrong.</Text>;
    }
  };

  return <View style={{ flex: 1 }}>{renderStep()}</View>;
};

export default Main;
