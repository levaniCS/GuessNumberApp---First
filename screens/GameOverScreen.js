import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Button, Dimensions, ScrollView} from 'react-native';

import TitleText from '../components/TitleText'
import BodyText from '../components/BodyText';
import Color from '../constants/colors'

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={{...styles.imageContainer,...{
                    width: availableDeviceWidth * 0.7,
                    height: availableDeviceWidth * 0.7,
                    borderRadius: (availableDeviceWidth * 0.7) / 2,
                    marginVertical: availableDeviceHeight / 30}}}>
            <Image 
                // source={require('../assets/success.png')} ვებიდან წამოსულ სურათებზე ნეითივი სიგრძე/სიმაღლეს ვერ აყენებს
                source={{uri: 'https://imgflip.com/s/meme/Mocking-Spongebob.jpg'}} 
                style={styles.image} 
                resizeMode='contain'
                fadeDuration={1000}/>
            </View>
            <View style={{...styles.resultContainer, ...{marginVertical: availableDeviceHeight/60}}}>
                <BodyText style={{...styles.resultText, ...{
                    fontSize:availableDeviceHeight < 400 ? 16:20
                }}}>
                    Your Phone Needed{' '} 
                    <Text style={styles.highlight}>
                        {props.roundsNumber}
                    </Text> Rounds to Guess the Number{' '} 
                    <Text style={styles.highlight}>
                        {props.userNumber}
                    </Text>
                </BodyText>
            </View>
            <MainButton title="NEW GAME" onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        // width: Dimensions.get('window').width * 0.7,  //height * (რაიმე ცვლადზე) არ მუშაბს სწორად !!!
        // height: Dimensions.get('window').width * 0.7,
        // borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden' ,
        //marginVertical: Dimensions.get('window').height / 30,
    },
    resultContainer: {
        marginHorizontal: 15,
        //marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
      color: Color.primary,
      fontFamily: 'open-sans-bold'
    },
    resultText: {
        textAlign: 'center',
        //fontSize: Dimensions.get('window').height < 400 ? 16 : 20 
    }
});

export default GameOverScreen;