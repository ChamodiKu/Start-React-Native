import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ImageDetails from '../Components/ImageDetails';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetails title= "Forest"/>
            <ImageDetails title= "Beach"/>
            <ImageDetails title= "Mountain"/>
        </View>
    );
};

const styles = StyleSheet.create ({});

export default ImageScreen;