import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, Switch, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class EditToDo extends Component {
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
        title: 'Edit To Do',
        headerTitleStyle :{
            textAlign: 'center'
        },
        headerStyle:{
            backgroundColor:'white',
        },
    }

    componentWillMount(){
        this.getToDo();
    }
    
    updateText = (key)=>{
        this.setState({key});
    }

    updateCompleted = ( completed )=>{
        this.setState({completed});
    }

    getToDo = ()=>{
        let { navigation } = this.props;
        let { state } = navigation;
        let { params } = state;
        AsyncStorage.getItem('todos', (err, result)=>{
            if(!err){
                if(result){
                    let todos = JSON.parse(result);
                    this.setState({todos});
                    Object.keys(todos).map(key=>{
                        let currId = todos[key].id;
                        if( params === currId ){
                            //console.log(todos[key]);
                            this.setState({
                                id: params,
                                key: todos[key].key,
                                completed: todos[key].completed,
                                todos
                            })
                        }
                    })
                    //console.log(result);
                }
            }else
                console.log(err);
        });
    }

    updateToDo = ()=>{
        let { id, key, completed, todos } = this.state;
        todos.map(res=>{
            if(res.id === id){
                res.key = key;
                res.completed = completed;
            }
        });
        //console.log(todos);
        if(AsyncStorage && key.length > 0 && todos){
            //console.log(todos)
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
        let { id } = this.props,
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
                        onPress = { this.updateToDo }
                    >
                        <Text style = { styles.btnText }>Save</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
