import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class TouchableComponent extends Component {
    
    render(){
        let { contentText, onPress } = this.props;
        return(
            <View syle= { styles.container }>
                <TouchableHighlight 
                    underlayColor="#e8e9ea"
                    onPress = { onPress } 
                    style={ styles.innerEl }
                >
                    <Text style= { styles.welcome}>{ contentText }</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

TouchableComponent.defaultProps = {
    contentText: "Touch Me!"
}

TouchableComponent.propTypes = {
    contentText: PropTypes.string.isRequired
    
}
