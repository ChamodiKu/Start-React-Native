import React,{useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
    // state === {count, number}
    // action === { type: 'increment' || 'decrement', payload:  }

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload };
        case 'decrement':
            return { ...state, count: state.count - action.payload };
        default :
            return state;
    }
};

const CounterScreenReducer = () =>{
    const [counter, dispach] = useReducer(reducer, {count: 0});
    return (
        <View>
            <Button
                onPress = {() =>{
                    dispach({type: 'incerement', payload: 1})
                }}
                title = "Increase"
            />
            <Button
                onPress = {() =>{
                    dispach({type: 'decrement', payload: 1})
                }}
                title = "Decrease"
            />
            <Text>Current Counte: {state.count}</Text>
        </View>
    );
};

const style = StyleSheet.create ({});

export default CounterScreenReducer;