import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class SimpleComponent1 extends Component {
    constructor(){
        super();
        this.state = {
            text: "",
            fromClipBoard: ""
        }
    }
    
    storeText = (text)=>{
        this.setState({text});
    }

    sendToClipBoard = ()=> {
        let { text } = this.state;
        Clipboard.setString(text);
        Clipboard.getString().then(fromClipBoard=>{
            this.setState({
                fromClipBoard
            });
        });
    }
    render(){
        let { fromClipBoard } = this.state;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TextInput 
                        style = { styles.input }
                        placeholder = { "Enter text" }
                        onChangeText = { this.storeText }
                    />
                    <TouchableHighlight 
                    onPress = { this.sendToClipBoard }
                    style={ styles.touchable }  
                    >
                        <Text>Click to copy</Text>
                    </TouchableHighlight>
                    <Text style= { styles.welcome}>{ fromClipBoard }</Text>
                </View>
            </View>
        )
    }
}
