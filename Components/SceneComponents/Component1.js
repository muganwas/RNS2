import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import GeoLocationComponent from '../GeoLocationComponent/GeoLocationComponent';

export default class Component1 extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigation, message } = this.props;
        const { navigate } = navigation;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <GeoLocationComponent />
                </View>
            </View>
        )
    }
}

Component1.defaultProps = {
    message: "To Next"
}

Component1.propTypes = {
    message: PropTypes.string.isRequired
}
