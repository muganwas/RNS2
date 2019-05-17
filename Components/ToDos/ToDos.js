import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableHighlight, CheckBox, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
                    todos.push({ key: initTodos[key].text, value: initTodos[key].completed });
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
        //console.log(value)
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
                        renderItem={({item})=><TouchableHighlight
                        onPress= { ()=>this.onClickToDo(item) }
                        key={item.key} style={styles.innerEl} >
                            <View style = { styles.todoView}> 
                                <Text style={styles.text }>{ item.key }</Text>
                                { item.value?<Image style= { styles.chckbox } source={require('./images/check.png')} />:null }
                            </View>
                        </TouchableHighlight>}
                    />
                </View>
            </ScrollView>
        )
    }
}