import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from "../components/PresableStyle";

const cards = ["Card 1", "Card 2", "Card 3"];

const TarjetasTab = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={styles.titulo}>TarjetasTab</Text>
      <Card title={cards[0]} />
      <Card title={cards[1]} />
      <Card title={cards[2]} />
    </View>
  )
}

export default TarjetasTab

const styles = StyleSheet.create({
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
    },
})