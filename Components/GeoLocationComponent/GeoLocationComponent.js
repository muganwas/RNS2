import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class GeoLocationComponent extends Component {
    constructor(){
        super();
        this.state = {
            location: "unknown",
            feedback: "This is geolocation"
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(pos=>{
            let myPos = { longitude: pos.coords.latitude, latitude: pos.coords.latitude };
            this.setState({location:pos, feedback: JSON.stringify(myPos)});
        }).
        catch(err=>{
            throw err;
            console.log(err);
        });
    }
    render(){
        let { feedback } = this.state;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <Text style= { styles.welcome}>{ feedback }</Text>
                </View>
            </View>
        )
    }
}
