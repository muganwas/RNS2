import React, { Component } from 'react';
import Slider from '@react-native-community/slider';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class SliderComponent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let { 
            style, 
            step, 
            onValueChange,
            onSlidingComplete,
            sliderValue, 
            minimumValue, 
            maximumValue, 
            minimumTrackTintColor, 
            maximumTrackTintColor 
        } = this.props;
        return(
            <View syle= { styles.container }>
                <Slider
                    style = {{ style }}
                    value = { sliderValue }
                    onValueChange = { (value)=>onValueChange(value) }
                    onSlidingComplete = { (value)=>onSlidingComplete(value)}
                    step = { step }
                    minimumValue = { minimumValue }
                    maximumValue = { maximumValue }
                    minimumTrackTintColor = { minimumTrackTintColor }
                    maximumTrackTintColor = { maximumTrackTintColor }
                />
            </View>
        )
    }
}

SliderComponent.defaultProps = {
    style: { 
        width: width,
        height: 40
    },
    step: 1,
    sliderValue: 0,
    minimumValue: 0,
    maximumValue: 10,
    minimumTrackTintColor: "#000",
    maximumTrackTintColor: "#fff"
}

SliderComponent.propTypes = {
    style: PropTypes.object,
    sliderValue: PropTypes.number,
    minimumValue: PropTypes.number,
    maximumValue: PropTypes.number,
    minimumTrackTintColor: PropTypes.string,
    maximumTrackTintColor: PropTypes.string
}
export default SliderComponent;