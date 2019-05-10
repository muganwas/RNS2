import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';
import AsyncStorage  from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class AsyncComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    componentWillMount(){
        AsyncStorage.getItem('name').then(retrieved=>{
            if(retrieved)
                this.setState({
                    name: retrieved
                });
        });
    }

    saveName = (text)=>{
        AsyncStorage.setItem('name', text).then(val=>{
            this.setState({
                name: val
            });
        });
    }

    render(){
        let { name } = this.state;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <TextInput
                        placeholder="Enter Name"
                        defaultValue = { name }
                        onSubmitEditing = { (e)=>this.saveName(e.nativeEvent.text) }
                    />
                </View>
            </View>
        )
    }
}

AsyncComponent.defaultProps = {
    message: "Welcome to React Native!"
}

AsyncComponent.propTypes = {
    message: PropTypes.string.isRequired 
}
