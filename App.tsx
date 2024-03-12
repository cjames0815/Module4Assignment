/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';

const database = require('./src/components/Handlers/database.js');

const App: () => Node = () => {
  try {
    database.createAddMeetingTable();
  } catch (error) {
    console.log('Failed to create meetings table ' + error);
  }
  return <Router />;
};

export default App;