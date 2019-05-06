import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class StatusBarComponent extends Component {
    render(){
        let { 
            statusText,
            bgColor,
            barStyle,
            hidden,
            translucent
        } = this.props;
        return(
            <View style={ styles.container }>
                <StatusBar
                    backgroundColor={bgColor}
                    barStyle={barStyle}
                    hidden={ hidden }
                    translucent = { translucent }
                >
                    <Text>{ statusText }</Text>
                </StatusBar>
            </View>
        )
    }
}

StatusBarComponent.defaultProps = {
    statusText: "Status Bar",
    bgColor: "skyblue",
    barStyle:"dark-content",
    hidden: false,
    translucent: true 
}

StatusBarComponent.propTypes = {
    statusText: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    barStyle: PropTypes.string.isRequired,
    hidden: PropTypes.bool.isRequired,
    translucent: PropTypes.bool.isRequired
}