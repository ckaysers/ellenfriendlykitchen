// src/FoodScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const FoodScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Food"
        placeholder="Enter food or ingredients"
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => console.log('Add')}
      >
        Add
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

export default FoodScreen;
