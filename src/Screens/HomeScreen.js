import React from 'react';
import {
    View, 
    Text,        //A 'primitive' React element.Used to show some basic content on the screen
    StyleSheet,
    Button,      //very simple component for showing a button and detecting a press
    TouchableOpacity      
} from 'react-native'

const HomeScreen = () => {
    return(
        <View>
            <Text style = {styles.text}>
                Hi there!
            </Text>
            <Button
                onPress = {() => console.log('Button pressed')}  // detect a press event we assign in on press prop add function to it for anytime a user as you might guess presses that button and using console log whenever we press on that button we should see a console log
                title = "Go to Components Demo"    //the text we want to show inside of button
            />
            
            <TouchableOpacity onPress = {() => console.log('Button pressed')} > 
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
        </View>
        //User taps on any of the elements inside of "<TouchableOpacity></TouchableOpacity>" the Touchable Opacity will detect that tab and give us some kind of notification in the form of a on press event just like the one we assigned to button like onPress
        //Highly customizable component that can detect a press on just about any kind of element
        //benifit of it. we can show any kind of element inside of it and user taps on it they are going to get an immediate little piece of feedback
    );
};

const styles = StyleSheet.create ({
    text:{
        fontSize: 30
    }

});

export default HomeScreen;