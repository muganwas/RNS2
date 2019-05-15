import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class Component1 extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TouchableHighlight
                        underlayColor="#e8e9ea"
                        title="Welcome to Nave"
                        onPress = { ()=>navigate("Home") }
                        style={ styles.innerEl }
                    >
                        <Text style= { styles.welcome}>{ message }</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

Component1.defaultProps = {
    message: "Welcome to component uno"
}

Component1.propTypes = {
    message: PropTypes.string.isRequired
    
}
