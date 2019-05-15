import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styles } from './styles';

const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export default class FetchComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [{key: 'item1'}, {key: 'item2'}]
        }
    }
    componentDidMount(){
        axios.get(url).then(res=>{
            let data = res.data;
            let dataCount = data.length;
            let dataObj = [];
            for(let count =0; count < dataCount; count++){
                let id = data[count].id;
                let title = data[count].title;
                dataObj[count] = { id:id, key:title };
            }
            this.setState({
                data: dataObj
            });
        }).catch(err=>{
            console.log(err);
        })
    }
    render(){
        let { data } = this.state;
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <FlatList
                        data={ data }
                        renderItem={({item})=><View style={styles.rowCont} >
                            <Text style={styles.rowElNum }>{ item.id }</Text>
                            <Text style={styles.rowEl}>{item.key}</Text>
                        </View>}
                    />
                </View>
            </View>
        )
    }
}
