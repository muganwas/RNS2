import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class AddButton extends Component {
    render(){
        let { text, onPress } = this.props;
        return(
            <View style={ styles.ButtonContainer }>
                <TouchableHighlight 
                    style={ styles.button }
                    onPress={ onPress }
                >
                    <Text style= { styles.text}>{ text }</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

AddButton.defaultProps = {
    text: "Add To do"
}

AddButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}