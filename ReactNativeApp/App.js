// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { initializeApp } from '@firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { getDatabase } from '@firebase/database';
//import { getAnalytics } from "firebase/analytics";

// TODO: Initialize Firebase here with your config
const firebaseConfig = {
  apiKey: "AIzaSyDyODMD3jp-5grFZ4jx8MnNzxVHfSpvcxo",
  authDomain: "ellenfriendlykitchen-90cd8.firebaseapp.com",
  projectId: "ellenfriendlykitchen-90cd8",
  storageBucket: "ellenfriendlykitchen-90cd8.appspot.com",
  messagingSenderId: "563637057929",
  appId: "1:563637057929:web:dc8ec374e7395cde180958",
  measurementId: "G-VNQMPQYECX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

import Main from './src/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <Main />
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
