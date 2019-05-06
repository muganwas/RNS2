import React, { Component } from 'react';
import { View, ToolbarAndroid } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const toolBarActions = [
    { title: "Settings", icon: require('./images/icon_settings.png'), show: "always" },
    { title: "Action1", display: "FBGM" },
    { title: "Action2", display: "RYBPED" },
    { title: "Action3", display: "IWMYFOM" }
];

export default class ToolBarComponent extends Component {
    constructor(props){
        super(props);
    }
    onSettingsSelected = ()=>{
        console.log("settings")
    }

    onActionSelected=(position)=>{
        let text = toolBarActions[position].display;
        let { passText } = this.props;
        passText(text);
    }

    render(){
        return(
            <View>
                <ToolbarAndroid
                    style= {styles.toolBar}
                    logo={require('./images/app_logo.png')}
                    actions={ toolBarActions }
                    onActionSelected = { this.onActionSelected }
                    subtitle = {"Zina!"}
                />
            </View>
        )
    }
}

ToolBarComponent.defaultProps = {
    message: "Welcome to React Native!"
}

ToolBarComponent.propTypes = {
    message: PropTypes.string.isRequired
    
}