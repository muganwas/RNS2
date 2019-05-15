import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, Share, Clipboard } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class ShareComponent extends Component {
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }
    
    showResult = (result)=>{
        if(result.action === "sharedAction")
            this.setState({result:"Shared"});
        else
            this.setState({result:"Dismissed"})
    }

    shareMessage = ()=> {
        Share.share({
            message: "Sharing"
        })
        .then(this.showResult)
        .catch(error=>{
            this.setState({
                result: error
            });
        });
    }
    render(){
        let { result } = this.state;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TouchableHighlight 
                    onPress = { this.shareMessage }
                    style={ styles.touchable }  
                    >
                        <Text>Share Message</Text>
                    </TouchableHighlight>
                    <Text style= { styles.welcome}>{ result }</Text>
                </View>
            </View>
        )
    }
}
