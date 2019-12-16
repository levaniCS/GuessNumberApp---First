import React from 'react';
import {View,
        Text, 
        StyleSheet, 
        TouchableOpacity,
        TouchableNativeFeedback,
        Platform } from 'react-native';

import Colors from '../constants/colors'

//TouchableOpacity  -- ამას ვიყენებთ აიოსზე
//TouchableNativeFeedback -- ამას ვიყენებთ ანდროიდზე


const MainButton = props => {
    //onlt capital character variables can use as JSX elements
    let ButtonComponent = TouchableOpacity;
    if(Platform.Version >= 21){
        //თუ ანდროიდია და მისი ვერსია მეტია 21 ზე რადგან TouchableNativeFeedback 
        // გამოყენება შეიძლება მხოლოდ ამ ვერსიაზეე უფრო დაბალზე TouchableOpacity
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent 
                onPress={props.onPress}
                activeOpacity={0.6}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius:25,
        overflow:'hidden'
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },

    buttonText: {
        color:'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;