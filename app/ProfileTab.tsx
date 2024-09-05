import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfileTab = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={styles.titulo}>ProfileTab</Text>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Link href={'/UpdateProfileTab'} asChild>
      <Pressable style={styles.updateButton}>
        <Text style={styles.updateText}>Update Profile</Text>
      </Pressable></Link>
      
    </View>
  )
}

export default ProfileTab

const styles = StyleSheet.create({
    updateButton: {
        backgroundColor: '#9C4196',
        padding: 20,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '80%'
    },
    updateText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
})