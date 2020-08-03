import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import ImageDetails from '../Components/ImageDetails'; //.. use for go outer folder or file

const ImageScreen = () => {
    return(
        <View>
            
            <Text style = {styles.textStyle} >Image Screen</Text>
            <ImageDetails 
                title = "Forest" 
                imageSource = {require('../../assets/forest.jpg')}
                imageScore = {9}
            />
            <ImageDetails 
                title = "Beach"
                imageSource = {require('../../assets/beach.jpg')}
                imageScore = {7}
            />
            <ImageDetails 
                title = "Mountain"
                imageSource = {require('../../assets/mountain.jpg')}
                imageScore = {4}
            />

        </View>
    ); // propes inside ImageDetails tag we can create by our own 
};  
//Assign a number to a prop it has to be assign inside of a set of curly braces

const styles = StyleSheet.create ({
    textStyle:{
        fontSize: 35
    }
});

export default ImageScreen;