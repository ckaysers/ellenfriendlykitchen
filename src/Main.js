import React, { useState } from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import styles from './styles'; // Import the styles object


export default function App() {
  const [newTask, setNewContent] = useState('');
  const [appTasks, setAppContent] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const contentInputHandler = (enteredText) => {
    setNewContent(enteredText);
  };

  const addContentHandler = () => {
    setAppContent((currentTask) => [...currentTask, newTask]);
  };

  const toggleInputVisibility = () => {
    setShowInput(!showInput);
  };

  const TaskItem = ({ task }) => {
    return (
      <View style={styles.taskItem}>
        <Text>{task}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('./assets/Background1.jpg')}
      style={styles.container}
    >
      <Button title="What did you eat today?" onPress={toggleInputVisibility} />
      {showInput && (
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter"
            style={styles.input}
            onChangeText={contentInputHandler}
            value={newTask}
          />
          <Button title="Add" onPress={addContentHandler} />
        </View>
      )}
      <View style={styles.listContainer}>        
        {appTasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </View>
    </ImageBackground>
  );
}

