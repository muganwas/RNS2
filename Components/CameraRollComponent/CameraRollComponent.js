import React, { Component } from 'react';
import { 
    View, 
    Text, 
    CameraRoll, 
    ScrollView, 
    Image,
    ActivityIndicator,
    PermissionsAndroid,
    Platform
} from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

async function requestExternalStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Sample App',
          message:'Sample App needs access to your photos ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Photos permission granted');
      } else {
        console.log('Photos permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
}

export default class CameraRollComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [],
            imagesLoaded: false
        }
    }

    componentWillMount(){
        if(Platform.OS === "android")
            requestExternalStoragePermission();
        CameraRoll.getPhotos({first: 5}).then(res=>{
            //console.log(res);
            let edgesArr = res.edges;
            let images = edgesArr.map(res=>res.node.image.uri);
            this.setState({
                images,
                imagesLoaded: true
            });
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        let { message } = this.props;
        let { images, imagesLoaded } = this.state;
        //console.log(imagesLoaded);
        return(
            <ScrollView syle= { styles.container }>
                { 
                    imagesLoaded?
                    <View style = { styles.innerEl }>
                        { images.map(key=><Image style={styles.image} key={ key } source={{uri: key}} />)}
                    </View>:
                    <View style = { styles.innerEl }>
                        <ActivityIndicator
                            style={ styles.activityIndicator }
                            size="large"
                            color="black"
                        />
                     </View>
                }
            </ScrollView>
        )
    }
}

CameraRollComponent.defaultProps = {
    message: "Welcome to React Native!"
}

CameraRollComponent.propTypes = {
    message: PropTypes.string.isRequired 
}
