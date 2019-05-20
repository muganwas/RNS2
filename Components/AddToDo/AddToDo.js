import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Switch, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class AddToDo extends Component {
    constructor(){
        super();

        this.state = {
            id:'',
            key: '',
            completed: false,
            todos: []
        }
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

    componentWillMount(){
        this.getToDos();
    }

    componentDidMount(){
        this.generateId();
    }

    generateId(){
        let id = Math.floor(Math.random() * 1000000);
        this.setState({id});
    }

    updateText = (key)=>{
        this.setState({key});
    }

    updateCompleted = ( completed )=>{
        console.log(completed)
        this.setState({completed});
    }

    getToDos = ()=>{
        AsyncStorage.getItem('todos', (err, result)=>{
            if(!err){
                if(result){
                    let todos = JSON.parse(result);
                    this.setState({todos});
                    console.log(result);
                }
            }else
                console.log(err)
        });
    }

    saveToDo = ()=>{
        let { id, key, completed, todos } = this.state;
        let currTodo = { id, key, completed };
        if(AsyncStorage && key.length > 0 && todos){
            todos.push(currTodo);
            console.log(todos);
            AsyncStorage.setItem('todos', JSON.stringify(todos)).then(res=>{
                const { navigation } = this.props;
                const { navigate } = navigation;
                navigate('First', {...todos});
            }).catch(err=>{
                console.log(err)
            });
        }  
        else
            console.log('There was an error');
    }

    render(){
        let { message } = this.props,
        { key, completed } = this.state;
        return(
            <View style= { styles.container }>
                <View style={ styles.innerEl }>
                    <TextInput 
                        style= { styles.input }
                        value = { key }
                        placeholder = { 'To do title' }
                        onChangeText = { this.updateText }
                    />
                    <Text style = { styles.switchTitle }>Completed</Text>
                    <View style = { styles.swtch }>
                        <Switch
                            title = { 'Completed' }
                            value={ completed }
                            onValueChange = { this.updateCompleted }
                        />
                    </View>
                    <TouchableHighlight
                        style = { styles.btn }
                        onPress = { this.saveToDo }
                    >
                        <Text style = { styles.btnText }>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

AddToDo.defaultProps = {
    message: "Create Todo"
}

AddToDo.propTypes = {
    message: PropTypes.string.isRequired
}
