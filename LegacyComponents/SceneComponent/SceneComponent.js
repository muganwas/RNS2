import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Component1 from './Scenes/Component1';
import Component2 from './Scenes/Component2';

const MainNavigator = createStackNavigator({
    Home: { screen: Component1 } 
  });

const SceneComponent = createAppContainer(MainNavigator);
  
export default SceneComponent;