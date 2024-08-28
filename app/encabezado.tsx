import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>
      <Image source={require('./logo.png')} style={styles.logo} />
      <Text style={styles.appName}>App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    //quiero que el menu este a la izquierda, al lado el logo y al lado el nombre de la app

    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'lightblue',
        color: 'white',
        flexDirection: 'row',
    },
    
    menuButton: {
        color: 'white',
        fontSize: 30,
        marginRight: 10,
    },

    menuText: {
        color: 'white',
        fontSize: 30,
    },
    
    logo: {
        height: 40,
        width: 40,
        marginRight: 10,
    },
    
    appName: {
        fontSize: 20,
        marginTop: 5,
        color: 'white',
    },
});

export default Header;