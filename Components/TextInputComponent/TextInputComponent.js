import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class TextInputComponent extends Component {
    render(){
        let { value, changeValue } = this.props;
        return(
            <View style={ styles.container }>
                <TextInput
                    style={ styles.textInput }
                    placeholder={'Type Something'}
                    value = { value } 
                    onChangeText = { changeValue } 
                />
                <Text style={ styles.textView}>
                    { value }
                </Text>
            </View>
        )
    }
}

TextInputComponent.defaultProps = {
    value: ""
}

TextInputComponent.propTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func
}
