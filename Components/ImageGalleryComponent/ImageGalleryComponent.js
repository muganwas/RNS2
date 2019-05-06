import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default class ImageGalleryComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            images:{}
        };
    }

    componentWillMount(){
        let { URL } = this.props;
        this.fetchImages(URL).then(res=>{
            let Images = {},
            count = 0,
            ranLen = 3;
            for(count; count < ranLen; count++){
                let currObj = res[count];
                if(currObj){
                    Object.keys(currObj).map(key=>{
                        if(key="thumbnailUrl"){
                            Images[currObj.id] = currObj.thumbnailUrl;
                        }
                    });
                }
            }
            //console.log(Images);
            this.setState({
                images: Images
            })
        });   
    }

    fetchImages = (URL)=>{
        return new Promise((resolve, reject)=>{
            axios.get(URL).then(res=>{
                //console.log(res.data);
                if(res.data)
                    resolve(res.data);
                else
                    reject("No data");
            }).catch(err=>{
                console.log("error connection to server")
            })
        })
    }
    render(){
        let { images } = this.state;
        return(
            <View syle= { styles.flexContainer }>
                <View style={ styles.imgContainer }>
                    <Image style= { styles.img1} source={{uri: images["1"]}} />
                    <Image style= { styles.img2} source={{uri:images["2"]}} />
                    <Image style= { styles.img3} source={{uri:images["3"]}} />
                </View>
                <View style={ styles.textContainer }>
                    <Text style= { styles.text1}>Major Text</Text>
                    <Text style= { styles.text2}>To be or not to be, is the question.</Text>
                    <Text style= { styles.text3}>Minor Text</Text>
                </View>
            </View>
        )
    }
}

ImageGalleryComponent.defaultProps = {
    URL: ""
}

ImageGalleryComponent.propTypes = {
    URL: PropTypes.string
    
}