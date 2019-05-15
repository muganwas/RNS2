import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class ListComponent extends Component {
    render(){
        return(
            <View syle= { styles.container }>
                <View style={ styles.innerEl }>
                    <FlatList
                        data={[{key: 'item1'}, {key: 'item2'}]}
                        renderItem={({item})=><Text>{item.key}</Text>}
                    />
                </View>
            </View>
        )
    }
}
