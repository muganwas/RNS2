import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class SwitchComponent extends Component {
    render(){
        let { onValueChange, value } = this.props;
        return(
            <View syle= { styles.container }>
                <Switch
                    value = { value }
                    onValueChange = { onValueChange }
                />
            </View>
        )
    }
}

SwitchComponent.defaultProps = {
    value: false
}

SwitchComponent.propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.bool
}
