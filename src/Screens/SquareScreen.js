//color disply with user adjustments using useState hook

import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;//wuthout using  this we can increment and decrement by 1, when use 1 color to get color variance we want to press more times

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    console.log(red);

    //If a child needs to change a state value, the parent can pass down a callback function to change the state value as a prop

    //use a helper function to find the color value in between 0-255
    const setColor = (color, change) => { // what kind of change we want to make to our state variables
        //color === 'red', 'green', 'blue'  //color we want to change
        //change ===  +15, -15  //how much we want to change

        //hard to read what is going on
        /*if (color === 'red'){
            if (red + change > 255 || red + change < 0){
                return;
            }
            else{
                setRed(red + change);
            }
        } */

        switch(color) {//validate color changes
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)//? mean this is the expression we want to run if all this evaluates to a truth
                //we cannot return directly from a ternary statement so instead we use null, it mean don't do anything
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
        }
    };

    return(
        <View>
            <ColorCounter   //red color callbacks
                //onIncrease={() => setRed(red+COLOR_INCREMENT)}
                /*{
                    if(red + COLOR_INCREMENT > 255){//user can press red increase so many times but it must endup with 255 and decrement must end up with 0
                        return; //when red value >255 return out of red
                    }//when using this we want to repeat this in every increment and decrement, so its realy hard to read the js
                    setRed(red+COLOR_INCREMENT)
                }}*/ 
                onIncrease={ ()=> setColor('red', COLOR_INCREMENT)}  //use the helper function
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red"
            />
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green"
            />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue"
            />
            <View 
                style={{
                    height:150, 
                    width:150, 
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
            
        </View>
    )
};

const randomRgb = () => {

}

const Styles = StyleSheet.create({
});

export default SquareScreen;