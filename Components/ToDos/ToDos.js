import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from 'react-native-check-box';
import Checked from './images/check.png';
import PropTypes from 'prop-types';
import { styles } from './styles';
import AddButton from '../AddButton/AddButton';
import Swipeout from 'react-native-swipeout';

export default class ToDos extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todos: [],
            currToDoId: ''
        }
    }
    static navigationOptions = {
        title: 'To Dos',
        headerTitleStyle :{
            textAlign: 'center', 
            justifyContent: 'center', 
            alignSelf:'center'
        },
        headerStyle:{
            backgroundColor:'white',
        },
    }

    componentWillMount(){
        //AsyncStorage.removeItem('todos');
        const { navigation } = this.props;
        let { state } = navigation;
        let { params } = state;
        if(params){
            this.setState({todos: params});
        }else{
            //console.log(params);
        }
        this.fetchTodos();
    }

    componentDidUpdate(){
        this.fetchTodos();
    }

    fetchTodos = ()=>{
        AsyncStorage.getItem('todos').then(res=>{
            if(res){
                let todos = JSON.parse(res);
                this.setState({todos});
            }               
        });
    }

    toggleCompleted = (id, value)=>{
        let { todos } = this.state;
        //console.log(id, " ", value)
        todos.map(key=>{
            if(key.id === id){
                key.completed = !value;
            }
        });
        if(AsyncStorage && todos){
            AsyncStorage.setItem('todos', JSON.stringify(todos)).then(res=>{
                this.setState({todos});
                this.fetchTodos();
            });
        }  
        else
            console.log('There was an error');
    }

    deleteToDo = ()=>{
        let { todos, currToDoId } = this.state;
        //iterate and remove
        for(let count = 0; count < todos.length; count++){
            if(todos[count].id === currToDoId){
                todos.splice(count, 1);         
            }
        };
        if(AsyncStorage && todos){
            //console.log(todos)
            AsyncStorage.setItem('todos', JSON.stringify(todos)).then(res=>{
                this.setState({todos});
            });
        }  
        else
            console.log('There was an error');
    }

    onSwipe = (id)=>{
        if(id){
            this.setState({currToDoId:id});
            console.log(id)
        }     
    }

    render(){
        let { todos } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;

        //on swipe button config
        const swipeOutBtn = [
            {
                text: "Delete",
                backgroundColor: "#FE3217",
                type: "delete",
                onPress: this.deleteToDo
            }
        ];

        return(
            <ScrollView>
                <View style={ styles.container } >
                    <AddButton onPress={ ()=>navigate('Second') } />
                    <FlatList
                        data={ todos }
                        renderItem={({item})=>
                        <Swipeout
                            right={ swipeOutBtn }
                            key={item.key} 
                            style={styles.innerEl}
                            onOpen = { ()=>this.onSwipe(item.id) }
                        >
                            <View style = { styles.todoView}> 
                                <TouchableHighlight
                                    style={ styles.editTodo }
                                    onPress= { ()=>navigate( 'Third', item.id ) }
                                >
                                    <View style={ styles.editContainer }>
                                        <Text style={ styles.text }>{ item.key }</Text>
                                        <Image style={ styles.editIcon } source={require('./images/edit.png')} />
                                    </View>
                                </TouchableHighlight>
                                <CheckBox
                                    isChecked={ item.completed }
                                    style= { styles.chckbox }
                                    onClick={ ()=>this.toggleCompleted(item.id, item.completed)}
                                    checkBoxColor={'#fff'}
                                />
                            </View>
                        </Swipeout>}
                    />
                </View>
            </ScrollView>
        )
    }
}