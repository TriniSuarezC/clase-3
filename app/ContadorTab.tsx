import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Contador from '@/components/contador'

const ContadorTab = () => {
  return (
    <View>
      <Text style={styles.titulo}>Contador</Text>
      <Contador />
    </View>
  )
}

export default ContadorTab

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
})