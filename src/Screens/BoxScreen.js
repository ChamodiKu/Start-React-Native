import React from "react";
import {Text, View, StyleSheet} from "react-native";

//Box Object Model
//the height/width of an element + the space around it
//use this to affect the positioning of a single element

const BoxScreen = () =>{
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>
                This is the BoxScreen
            </Text>
        </View>
    )
};

//content and padding sections show background color
//border and margin do not

const styles = StyleSheet.create ({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black'
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        //marginVertical: 20,   //add some space in top add bottom in box
        //marginHorizontal: 20    //add some space in left add right in box
        margin: 20
    }
});
export default BoxScreen;
