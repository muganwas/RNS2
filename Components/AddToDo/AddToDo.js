import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class SimpleComponent1 extends Component {
    constructor(){
        super();
    }

    static navigationOptions = {
        title: 'Add To Dos',
        headerTitleStyle :{
            textAlign: 'center'
        },
        headerStyle:{
            backgroundColor:'white',
        },
    }

    render(){
        return(
            <View style= { styles.container }>
                <View style={ styles.innerEl }>
                    <Text style= { styles.welcome}>{ this.props.message }</Text>
                </View>
            </View>
        )
    }
}

SimpleComponent1.defaultProps = {
    message: "Welcome to add to do"
}

SimpleComponent1.propTypes = {
    message: PropTypes.string.isRequired
}
