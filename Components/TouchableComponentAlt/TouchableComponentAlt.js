import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class TouchableComponentAlt extends Component {
    
    render(){
        let { contentText, onPress } = this.props;
        return(
            <View syle= { styles.container }>
                <TouchableOpacity
                    onPress = { onPress } 
                    style={ styles.innerEl }
                >
                    <Image source = { require("./Images/button.png")} />
                </TouchableOpacity>
            </View>
        )
    }
}

TouchableComponentAlt.defaultProps = {
    contentText: "Touch Me!"
}

TouchableComponentAlt.propTypes = {
    contentText: PropTypes.string.isRequired
    
}
