import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class Component3 extends Component {
    static navigationOptions = {
        title: 'Ondoka',
    };
    render() {
        const { navigation, message } = this.props;
        const { navigate } = navigation;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TouchableHighlight
                        underlayColor="#e8e9ea"
                        onPress = { ()=>navigate('Home') }
                        style={ styles.innerEl }
                    >
                        <Text style= { styles.welcome}>{ message }</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

Component3.defaultProps = {
    message: "Home"
}

Component3.propTypes = {
    message: PropTypes.string.isRequired
}