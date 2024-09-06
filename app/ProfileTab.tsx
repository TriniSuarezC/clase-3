
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router';


const perfil = () => {
  const {user = 'Who the f*ck are you?'} = useLocalSearchParams();
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome, {user}</Text>
        <Pressable style={styles.updateButton} onPress={() => router.push({pathname: '/UpdateProfileTab'})}>
        <Text style={styles.updateText}>Change Profile Name</Text>
      </Pressable>

    </View>
  )
}

export default perfil

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    updateButton: {
        backgroundColor: '#9C4196',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
    },
    updateText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})