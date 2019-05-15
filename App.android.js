/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform, 
  View, 
  ScrollView, 
  Text, 
  Picker 
} from 'react-native';
//import SceneComponent from './Components/SceneComponent/SceneComponent';

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    let { } = this.state;
    return (
      <ScrollView>
      </ScrollView>
    );
  }
}
