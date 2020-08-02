import React from 'react';
import {View, Text, StyleSheet, 
    FlatList //
} from 'react-native'

const ListScreen = () => {
    //build array of objects which we want to return in the list
    const friends = [
        { name: 'friend #1' , age: 20 },//key: '1'}, //add key manualy
        { name: 'friend #2' , age: 45 },//key: '2'},
        { name: 'friend #3' , age: 32 },//key: '3'},
        { name: 'friend #4' , age: 27 },//key: '4'},
        { name: 'friend #5' , age: 53 },//key: '5'},
        { name: 'friend #6' , age: 25 },//key: '6'},
        { name: 'friend #7' , age: 30 }//, key: '7'},
    ];
    //key :- track the different objects we are passing to try to run other screen.
    //    :- automatically cleanup some elements that is visible on the screen whenever the corresponding object goes away.
    //    :- *key thing is primarily a performance optimization 
    //    :- *It's a performance optimization around making updates to our list

    return (
        <FlatList 
            //horizontal = {true}  //can scrole horizontally
            //showsHorizontalScrollIndicator= {false} //hide scrole bar 
            keyExtractor = {(friend) => friend.name} //add key automatically
            data={friends}
            renderItem={( {item} ) => {
                //item === {name: 'Friend #1'}
            //renderItem={(element) => {
                //element === { item: { name: 'Friend #1'}, index: 0}
            return <Text style={styles.textStyle}> {item.name} - Age {item.age} </Text>
            }} 
            /> 
    );

};

const styles = StyleSheet.create ({
    textStyle:{
        marginVertical: 50   //add aditional vertical hight
    }

});

export default ListScreen;