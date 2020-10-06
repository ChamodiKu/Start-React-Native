import React, {useState} from "react";
import {Text, View, StyleSheet,
        TextInput  //get user input
        } from "react-native";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPasswortd] = useState('');
    return(
        <View>
            <Text>
                Enter Name:
            </Text>
            <TextInput  //add textarea
                style = {styles.inputStyle}
                autoCapitalize = "none"  //auto capital first letter off
                autoCorrect = {false}     // auto correct off
                value = {name}
                onChangeText = {newValue => setName(newValue)}
            />
            <Text>
                Your name is {name}
            </Text>

            <Text>
                Enter Passward : 
            </Text>
            <TextInput
                style = {styles.inputStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {password}
                onChangeText = {newValue => setPasswortd(newValue)}
            />
            {password.length < 4 ? <Text>Invalid password. password must be 4 characters</Text> : null} 
        </View>//{condition ? when condition true: when condition false} 
        //use null when do nothing
    )
};

const styles= StyleSheet.create ({
    inputStyle : {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1

    }
});
export default TextScreen;