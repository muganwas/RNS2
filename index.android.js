/**
 * @format
*/
import React, { Component } from 'react';
import { AppRegistry, Easing, Animated } from 'react-native';
import {name as appName} from './app.json'; 
//import App from './App.android';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Component1 from './Components/SceneComponents/Component1';
import Component2 from './Components/SceneComponents/Component2';
import Component3 from './Components/SceneComponents/Component3';

const screen2Config = {
    duration: 200,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
};

const MainNavigator = createStackNavigator({
    First: { screen: Component1 },
    Second: { screen: Component2 },
    Third: { screen: Component3 } 
}, 
{
    initialRouteName: 'First',
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