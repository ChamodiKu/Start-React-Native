import React from 'react';    //import entire React library from react
import {View, Text, StyleSheet} from 'react-native';  //import some libraries({}) from react-native

//create a component- a function that returns some 'JSX'
//()=> this call error function
const ComponentScreen = () => {
    const name = 'Chamodi';
    return(
        <View>
            <Text style= {styles.taxtStyle}>
                Getting started with React Native!
            </Text>
            <Text style= {styles.subHeaderStyle}>
                My name is {name}
            </Text>
        </View>
    );
};

//create stylesheet to style out component
const styles = StyleSheet.create ({
    taxtStyle:{
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    },
});

//export the component so we can use it elsewhere in our project
export default ComponentScreen;