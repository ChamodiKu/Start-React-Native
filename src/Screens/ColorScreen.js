import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () =>{
    const [colors, setColors] = useState([]);
    console.log (colors);

    return (
        <View>
            <Text>
                This is Color Screen
            </Text>
            <Button 
                title= "Add a Color"
                onPress = {()=> {
                    //colors.push() //modify colors array but we didn't want to modify the array
                    setColors([...colors, randomRgb()]) //create new arry(setColors([])) and add all the elements in the old array(...colors) and add a new entry by calling randomRgb
                }}
            />
            
            <View 
                //style = {{ height: 100, width: 100, backgroundColor: 'rgb(0, 255, 0)'}}
                //style = {{ height: 100, width: 100, backgroundColor: randomRgb() }}
            />

            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    //item = 'rgb(0,0,0)'
                    return <View style = {{ height: 100, width: 100, backgroundColor: item }}/>
                }}
            /> 
        </View>
    ); //<View style = {{}}/>  use style like this because we use random color
};

//create helper function that is going to allow us to generate a random string like 'rgb(0,255,0)'
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256); //Math.random we can give a number between 0 and 1
    const green = Math.floor(Math.random() * 256); //256 - normally rgb values in 0-255
    const blue = Math.floor(Math.random() * 256); //math.floor like so in the end we should end up between 0 and 255

    //return a template string which is formed with back ticks
    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;
