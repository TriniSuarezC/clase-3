import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface CardProp {
    title: string;
}

const Card = ({ title }: CardProp) => {
    const [isPresed, setIsPressed] = useState(false);

    return (
        <Pressable
        onPress={() => setIsPressed(!isPresed)}
        style = {[ styles.card, {backgroundColor: isPresed ? '#9C4196' : '#CCAECA'},]}>
            <Text style={[styles.cardText, {color: isPresed ? '#FFFFFF' : '#000000'}]}>{title}</Text>      
        </Pressable>
    );

};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        borderRadius: 2,
        justifyContent: 'center',
        width: '80%',    
    },
    cardText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Card;