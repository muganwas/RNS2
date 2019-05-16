/**
 * @format
*/
import React, { Component } from 'react';
import { AppRegistry, Easing, Animated } from 'react-native';
import {name as appName} from './app.json'; 
//import App from './App.android';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ToDos from './Components/ToDos/ToDos';
import AddToDO from './Components/AddToDo/AddToDo';

const screen2Config = {
    duration: 200,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
};

const MainNavigator = createStackNavigator({
    First: { screen: ToDos },
    Second: { screen: AddToDO}
},  
{
    initialRouteName: 'First',
    headerBackTitleVisible: true,
    headerMode: 'float',
    mode: 'modal',
    transitionConfig: sceneProps => ({
      transitionSpec: sceneProps.scene.route.routeName === 'Second' ? screen2Config : {},
      screenInterpolator: (sceneProps) => {
        if (sceneProps.scene.route.routeName === 'Second') {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
  
          const width = layout.initWidth;
          const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [width, 0, 0],
          });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });
  
          return { opacity, transform: [{ translateX }] };
        }
      },
    })
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);
