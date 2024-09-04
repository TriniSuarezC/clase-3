import { Pressable, Text, View, StyleSheet } from "react-native";

import Card from "../components/PresableStyle";

const cards = ["Card 1", "Card 2", "Card 3"];

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Card title={cards[0]} />
      <Card title={cards[1]} />
      <Card title={cards[2]} />
      </View>
  );
}



