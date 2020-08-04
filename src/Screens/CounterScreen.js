import React,
       {useState} //useState is a Hook that lets you add React state to function components //Hook is a special function
from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () =>{
    //let counter = 0;
    //there is no automatic detection of some variable changing inside of components
    const [counter, setCounter] = useState(0); //use to create a state variable which is automatically update
    //useState(0) mean the default value is the variable(counter) is zero
    //[] is an array structure , this is another way of pulling some elements or a reference to elements out of an array
    //setCounter is a function
    return (
        <View>
            <Button
                onPress = {() =>{
                    //counter++;  //hard code, increment counter but not display as counter value because React doesn't detect this change. for this we can only use setter function.
                    setCounter(counter + 1); //adding one to a number(counter value) doesn't change that variable but returns a new value
                    //Anytime we call these set counter function React is going to automatically rerun this entire function component(CounterScreen component)
                    console.log(counter);
                }}
                title = "Increase"
            />
            <Button
                onPress = {() =>{
                    //counter--;  //hard code
                    setCounter(counter - 1);  
                    console.log(counter);
                }}
                title = "Decrease"
            />
            <Text>Current Counte: {counter}</Text>
        </View>
    );
};

const style = StyleSheet.create ({});

export default CounterScreen;