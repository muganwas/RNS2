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
import SimpleComponent1 from './Components/SimpleComponent1/SimpleComponent1';
import TextInputComponent from './Components/TextInputComponent/TextInputComponent';
import SliderComponent from './Components/SliderComponent/SliderComponent';
import PickerComponent from './Components/PickerComponent/PickerComponent';
import SwitchComponent from './Components/SwitchComponent/SwitchComponent';
import axios from 'axios';
import ImageGalleryComponent from './Components/ImageGalleryComponent/ImageGalleryComponent';
import TouchableComponent from './Components/TouchableComponent/TouchableComponent';
import TouchableComponentAlt from './Components/TouchableComponentAlt/TouchableComponentAlt';
import StatusBarComponent from './Components/StatusBarComponet/StatusBarComponent';
import ToolBarComponent from './Components/ToolBarComponent/ToolBarComponent';
import IconsComponent from './Components/IconsComponent/IconsComponent';
import ListComponent from './Components/ListComponent/ListComponent';
import FetchComponent from './Components/FetchComponent/FetchComponent';

const imagesAPIURL = "https://jsonplaceholder.typicode.com/photos";

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      textValue: "",
      sliderValue: 0,
      pickerCategory: "default",
      switchValue: false,
      images: {},
      touchableText:"Nkwataako!",
      selectedActionText: ""
    }
  }

  changeValue = (value) => {
    console.log("change");
    this.setState({
      textValue: value
    });
    console.log( value )
  }

  sliderValueChange = (value)=>{
    this.setState({
        sliderValue: value
    });
  }

  slidingComplete = (value)=>{
    console.log("COMPLETE: "+ value)
  }

  onPickerValueChange = (value)=>{
    this.setState({
      pickerCategory: value
    });
  }

  onSwitchValueChange = (value)=>{
    this.setState({
      switchValue: value
    });
    console.log(value)
  }

  onTouchablePress = ()=>{
    let text = this.state.touchableText;
    if(text === "Nkwataako!")
      this.setState({touchableText:"Waa?"});
    else
      this.setState({touchableText:"Nkwataako!"})
  }

  passText = (text)=>{
    this.setState({
      selectedActionText: text
    })
  }

  render() {
    let { sliderValue, pickerCategory, switchValue, images, touchableText, selectedActionText } = this.state;
    let pickerOptions = {
      Technology: "technology",
      Nursing: "nursing",
      Accounting: "accounting"
    };
    return (
      <ScrollView>
        <ToolBarComponent passText = { this.passText } />
        <StatusBarComponent 
          statusText= {"I see Nothing"}
          bgColor = {"red"}
          barStyle = {"light-content"}
          hidden = { false }
          translucent = { false }
        />
        <IconsComponent />
        <FetchComponent />
        <ListComponent />
        <Text style={{padding: 5, margin: 5, justifyContent: 'center'}}>WYS: { selectedActionText }</Text>
        <SimpleComponent1 />
        <TextInputComponent
          value = { this.state.textValue }
          changeValue = { this.changeValue }
        />
        <View style={{margin: 10}}>
          <Text>{ sliderValue }</Text>
          <SliderComponent 
            value={ sliderValue }
            step= { 0.5 }
            onValueChange={this.sliderValueChange}
            onSlidingComplete={this.slidingComplete}
          />
          <Text style={{marginTop: 15, fontWeight: "bold", fontSize: 16}}>Categories</Text>
          <PickerComponent 
            category={ pickerCategory } 
            onValueChange={ this.onPickerValueChange } 
            options={ pickerOptions } 
          />
          <Text style={{marginTop: 15, fontWeight: "bold", fontSize: 16}}>Switch</Text>
          <Text style={{marginTop: 15, fontWeight: "bold", fontSize: 16, color: switchValue?"green":"red"}}>{ switchValue?"ON":"OFF" }</Text>
          <SwitchComponent 
            value={ switchValue } 
            onValueChange = { this.onSwitchValueChange } 
          />
          <Text style={{marginTop: 15, fontWeight: "bold", fontSize: 16}}>Gallery</Text>
          <ImageGalleryComponent URL= { imagesAPIURL } />
          <TouchableComponent onPress={ this.onTouchablePress } contentText={touchableText} />
          <TouchableComponentAlt onPress={ this.onTouchablePress } contentText={touchableText} />
        </View>
      </ScrollView>
    );
  }
}
