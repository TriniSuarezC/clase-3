import { Pressable, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import styles from "../components/Styles";

function Contador(){
    const [contador, setContador] = useState(0);
    const incremetar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
  
    return (
      <View>
        <Pressable style={styles.button} onPress={incremetar}> 
          <Text style={styles.text}>Incrementar</Text> 
        </Pressable>
        <Pressable style={styles.button2} onPress={decrementar}> 
          <Text style={styles.text2}>Decrementar</Text> 
        </Pressable>
        <Text style={styles.textoContador}>Contador: {contador}</Text>
      </View> 
    );
  }
    export default Contador;