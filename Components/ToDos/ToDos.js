import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableHighlight, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from 'react-native-check-box';
import Checked from './images/check.png';
import PropTypes from 'prop-types';
import { styles } from './styles';
import AddButton from '../AddButton/AddButton';

export default class ToDos extends Component {
    constructor(props){
        super(props);
        this.state = {}
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
        this.fetchTodos();
    }

    componentDidUpdate(){
        this.fetchTodos();
    }

    fetchTodos = ()=>{
        AsyncStorage.getItem('todos').then(res=>{
            if(res){
                let todos = [];
                let initTodos = JSON.parse(res);
                Object.keys(initTodos).map(key=>{
                    todos.push({ 
                        key: initTodos[key].text,
                        id: initTodos[key].id,
                        value: initTodos[key].completed 
                    });
                });
                //console.log(todos)
                this.setState({todos});
            }else
                console.log("Theres nothing in async")
                
        });
    }

    onClickToDo = (item)=>{
        console.log(item)
    }

    toggleCompleted = (value)=>{
        console.log(value)
    }

    render(){
        let { todos } = this.state;
        const { navigation } = this.props;
        const { navigate } = navigation;
        return(
            <ScrollView>
                <View style={ styles.container } >
                    <AddButton onPress={ ()=>navigate('Second') } />
                    <FlatList
                        data={ todos }
                        renderItem={({item})=>
                        <View
                            key={item.key} 
                            style={styles.innerEl} 
                        >
                            <View style = { styles.todoView}> 
                                <TouchableHighlight
                                    style={ styles.editTodo }
                                    onPress= { ()=>this.onClickToDo(item) }
                                >
                                    <View style={ styles.editContainer }>
                                        <Text style={ styles.text }>{ item.key }</Text>
                                        <Image style={ styles.editIcon } source={require('./images/edit.png')} />
                                    </View>
                                </TouchableHighlight>
                                <CheckBox
                                    isChecked={ item.value }
                                    style= { styles.chckbox }
                                    onClick={ ()=>this.toggleCompleted(item.id) }
                                    checkBoxColor={'#fff'}
                                />
                            </View>
                        </View>}
                    />
                </View>
            </ScrollView>
        )
    }
}