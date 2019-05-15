import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconsComponent extends Component {
    render(){
        const rocket = <Icon name="rocket" size={30} color="#900" />;
        const facebook = <Icon.Button 
            name="facebook" size={40} 
            backgroundColor="#3C5A99"

            onPress={ this.onPress }>
            Login with facebook
        </Icon.Button>;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                   { rocket }
                   { facebook }
                </View>
            </View>
        )
    }
}
