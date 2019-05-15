import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class PickerComponent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let { options, onValueChange, category } = this.props;
        return(
            <View>
                <Picker
                    selectedValue={ category }
                    onValueChange = { onValueChange }
                    prompt= { "Category" }
                    enabled = { true }
                    mode = { "dropdown" }
                >
                    { 
                        Object.keys(options).map((key)=>{
                            return <item key={key} label={key} value={options[key]} />
                        })
                    }
                </Picker>
            </View>
        )
    }
}

PickerComponent.defaultProps = {
    options: {
        Select: "select"
    }
}

PickerComponent.propTypes = {
    options: PropTypes.object
    
}