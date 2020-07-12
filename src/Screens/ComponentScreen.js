import React from 'react';    //import entire React library from react
import {View, Text, StyleSheet} from 'react-native';  //import some libraries from react-native


//()=> this call error function
const ComponentScreen = () => {
    return(
        <View>
            <Text style= {styles.taxtStyle}>
                This is component screen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    taxtStyle:{
        fontSize: 30
    }

});

export default ComponentScreen;