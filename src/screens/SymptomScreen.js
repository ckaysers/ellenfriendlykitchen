// src/SymptomScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const SymptomScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Symptom"
        placeholder="Enter your symptom"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('Submit')}
      >
        Submit
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('FoodScreen')}
      >
        Go to Food Tracker
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default SymptomScreen;
