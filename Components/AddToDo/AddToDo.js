import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Switch, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class SimpleComponent1 extends Component {
    constructor(){
        super();

        this.state = {
            id:'',
            text: '',
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

    updateText = (text)=>{
        this.setState({text});
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
        let { id, text, completed, todos } = this.state;
        let currTodo = { id, text, completed };
        if(AsyncStorage && text.length > 0 && todos){
            todos.push(currTodo);
            console.log(todos)
            AsyncStorage.setItem('todos', JSON.stringify(todos)).then(res=>{
                const { navigation } = this.props;
                const { navigate } = navigation;
                navigate('First');
            }).catch(err=>{
                console.log(err)
            });
        }  
        else
            console.log('There was an error');
    }

    render(){
        let { message } = this.props,
        { text, completed } = this.state;
        return(
            <View style= { styles.container }>
                <View style={ styles.innerEl }>
                    <TextInput 
                        style= { styles.input }
                        value = { text }
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
                        <Text style = { styles.btnText }>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

SimpleComponent1.defaultProps = {
    message: "Create Todo"
}

SimpleComponent1.propTypes = {
    message: PropTypes.string.isRequired
}
