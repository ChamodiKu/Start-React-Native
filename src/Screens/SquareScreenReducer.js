//color disply with user adjustments using useReducer hook

import React, 
       {useReducer} //always returning a new object to be usedd as our state
from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;//wuthout using  this we can increment and decrement by 1, when use 1 color to get color variance we want to press more times

//define reducer function outside the component because argument 1 is going to be our current state object that has all of our different state inside of it
//define reducer function inside of SquareScreenReducer we will want to refer to that first argument(state) because that is gonna be our state object but if we have that argument right there(state) confused with other statement over array ,so that define reducer function outside component
const reducer = (state, action) => {
    //state === {red:number, green:number, blue:number}
    //action === {colorToChange:'red' || 'green'||'blue', amount: 15||-15 } how we are suppose to change our state object,update that we want to make
    ///action === {type:'change_red' || 'change_green'||'change_blue', payload: 15||-15 }

    ///action ==={type: 'change_red', payload:15 }
    ///type - string that describrs the exact change operation we want to make
    ///payload - some data that is critical to the change option

    //switch (action.colorToChange) {
        switch (action.type) {
        //case 'red':
        case 'change_red':
            /*if (state.red + action.amount >255 || state.red + action.amount <0 ) {
                return state;
            }*/
            return state.red + action.payload >255 || state.red + action.payload <0
                ? state
                : { ...state, red: state.red + action.payload};
            //never going to do:
            //state.red = state.red -15;
            //return{ ...state, red: state.red + action.amount};
            //state= {red:0, green:0, blue:0 }  after redefined red to the right hand side of the existing one
            //state= {green:0, blue:0, red: state.red + action.amount } replace the existing one with new red value
        case 'change_green':
            return state.green + action.payload >255 || state.green + action.payload <0
                ? state
                : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload >255 || state.blue + action.payload <0
                ? state
                : { ...state, blue: state.blue + action.payload};
        default:
    }
};

const SquareScreenReducer = () => {

    const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0});
    //state = {red:0, green:0, blue:0} access deferent state values for all 3 colors
    //{red:0, green:0, blue:0} initial starting value of state
    //call useReducer and pass reducer and initial value for state object
    //dispatch = run my reducer
    const{red,green,blue} = state;
    console.log(state) 

    return(
        <View>
            <ColorCounter   
                //onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}  
                onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}  
                onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                color="Red"
            />
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
                color="Green"
            />
            <ColorCounter 
                onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
                onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
                color="Blue"
            />
            <View 
                style={{
                    height:150, 
                    width:150, 
                    backgroundColor: `rgb(${red},${green},${blue})`
                    //backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            />
            
        </View>
    )
};

const randomRgb = () => {

}

const Styles = StyleSheet.create({
});

export default SquareScreenReducer;