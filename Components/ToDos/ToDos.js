import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';
import AddButton from '../AddButton/AddButton';

export default class ToDos extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [{key:"To do 1"}, {key:"To do 2"}]
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
    onClickToDo = (item)=>{
        console.log(item)
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
                            <Text style={styles.text }>{ item.key }</Text>
                        </TouchableHighlight>}
                    />
                </View>
            </ScrollView>
        )
    }
}