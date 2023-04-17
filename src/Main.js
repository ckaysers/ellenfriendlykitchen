/* // src/Main.js
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
const styles = Stylesheet.create({
  containerStyling:{
    background: '#0000FF'
  },
  textStyling :{
    marginBottom :20,
    color:'#FFF'
  }
});
export default Main;
*/
import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default function App() {
  const [newTask, setnewTask] = useState('');
  const [appTasks, appTask] = useState([]);
  const taskInputHandler = (enteredText) => {
    setnewTask(enteredText);
  };
  const addTaskHandler = () =>{
    appTask(currentTask => [...currentTask, newTask]);
    console.log(newTask);
  };
  return (
    <View style= {styles.container}>
      
      <View style = {styles.inputContainer}>
      
        <TextInput
          placeholder = "Task List"
          style = {styles.input}
          onChangeText = {taskInputHandler}
          value = {newTask}
        /> 
      
        <Button title = "+"
          onPress = {addTaskHandler}
        /> 
      </View> 
      <View>
        {appTasks.map((task) => <Text>{task}</Text>)} 
      </View> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderColor:"black", 
    borderWidth:1 , 
    padding :20,
    
  },
  inputContainer :{
    flexDirection :'row', 
    justifyContent :'space-between', 
    alignContent:'center', 
    bottom:20 
}, 
});