import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class Component2 extends Component {
    static navigationOptions = {
        title: 'Asante',
    };
    render() {
        const { navigation, message } = this.props;
        const { navigate } = navigation;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TouchableHighlight
                        underlayColor="#e8e9ea"
                        onPress = { ()=>navigate('Third') }
                        style={ styles.innerEl }
                    >
                        <Text style= { styles.welcome}>{ message }</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

Component2.defaultProps = {
    message: "Proceed"
}

Component2.propTypes = {
    message: PropTypes.string.isRequired
}