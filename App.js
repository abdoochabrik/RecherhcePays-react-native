/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler'; 
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PageDeRecherche from './PageDeRecherche'; 
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({

  description: {
  fontSize: 18,
  textAlign: 'center',
  color: '#656565',
  marginTop: 65,

  },
 }); 


const Stack = createStackNavigator();

export default class App extends Component
{
 render() {
return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={PageDeRecherche} />
  </Stack.Navigator>
</NavigationContainer>
);
 }

} 