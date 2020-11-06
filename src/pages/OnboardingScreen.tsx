import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Dots = () => {
    return (
        <View
            style={styles.dots}
        />
    );
}

const MyButton = ({...props}) => (
    <TouchableOpacity
        style={styles.next}
        {...props}
    >
       <Feather name="arrow-right" size={20} color="#15B6D6" />

    </TouchableOpacity>
);


export default function OnboardingScreen() {

    const navigation = useNavigation();

    return (
        <Onboarding
        NextButtonComponent={MyButton}
        DoneButtonComponent={MyButton}
        DotComponent={Dots}
        bottomBarHighlight={false}
        showSkip={false}
        onDone={() => navigation.navigate("OrphanagesMap")}
        titleStyles={styles.worldTitle}
        subTitleStyles={styles.subTitle}
        imageContainerStyles={styles.images}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image style={styles.images} source={require('../images/world.png')} />,
                title: 'Leve felicidade para o mundo',
                subtitle: 'Visite orfanatos e mude o dia de muitas crianças.',

            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../images/children.png')} />,
                title: 'Escolha um orfanato no mapa e faça uma visita',
                subtitle: '',
                titleStyles: {textAlign: "right", marginBottom: 25}
            },
        ]}
        />
    );
}

const styles = StyleSheet.create({
    worldTitle: {
        fontFamily: 'Nunito_800ExtraBold',
        color: '#0089A5',
        fontSize: 48,
        lineHeight:48,
        paddingTop: 10,
        paddingLeft:25,
        paddingRight: 45,
        textAlign: "left"
    },
    subTitle: {
        fontFamily: 'Nunito_600SemiBold',
        lineHeight: 30,
        fontSize: 20,
        paddingLeft:25,
        paddingRight: 45,
        color: '#5C8599',
        textAlign: "left"

    },
    dots: {
        backgroundColor: 'rgba(0,0,0, 0)'
    },
    next: {
        marginHorizontal: 10,
        marginBottom:20,
        width: 56,
        height:56,
        borderRadius:20,
        backgroundColor: 'rgba(209, 237, 242, 1)',
        justifyContent: "center",
        alignItems: "center"
    },
    images: {
        paddingBottom:15,
        paddingTop:20
    }
})