import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//how some number of sibling elements get laid out inside a parent
//use this to position multiple elements with a common parent

const FlexboxScreen = () => {
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>Child #1</Text>
            <Text style = {styles.textStyle}>Child #2</Text>
            <Text style = {styles.textStyle}>Child #3</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
    //Align items horizontally
        //alignItems: 'stretch',     //default | attemp to stretch and take up as much horizontal space as it possibly can.
        alignItems: 'flex-start',    //children are going to kind of condense down to the left hand side as close as they can while still allowing for some amount of space where the text inside them
        //alignItems: 'center',      //center everything horizontally
        //alignItems: 'flex-end',    //shove everything to the right hand side

    //control whethere children are laid out vertically or horizontally
        //flexDirection: 'column',    //default | all children laid out from top to bottom
        flexDirection: 'row'          //laid horizontally
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red'
    }
});

export default FlexboxScreen;