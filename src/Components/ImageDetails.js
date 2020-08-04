import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'

//const ImageDetails = (props) => {
const ImageDetails = ({ imageSource, title, imageScore}) => {
    //console.log (props);
    //props use for system to pass data from a parent to a child
    return(
        <View>
            <Image source = {imageSource} />
            <Text style = {styles.ImageDetailsStyle}>
                {title}
            </Text>
            <Text>
                Image Score - {imageScore}
            </Text>
        </View>
    );
    //<Image source = {require('../../assets/beach.jpg')}/>
    //Image tag ue to add a image, source mean where the image stores in
};

const styles = StyleSheet.create ({
    ImageDetailsStyle:{
        fontSize: 20
    }

});

export default ImageDetails;