import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'


interface Perfil {
  perfilName: string
}

const updatePerfil = () => {
  const [perfilName, setPerfilName] = React.useState('');

  const handleSave = () => {
    router.replace({
      pathname: '/ProfileTab',
      params: { user: perfilName },  // Enviamos el nuevo nombre como parámetro
    });
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text}>New Name</Text>
            <TextInput
              style={styles.input}
              value={perfilName}
              onChangeText={setPerfilName}
              placeholder="Nuevo nombre"
            />
          <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.updateText}>Save</Text>
      </Pressable>
    </View>
  )
}

export default updatePerfil

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#CCAECA',
    borderWidth: 3,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 7
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButton: {
    backgroundColor: '#9C4196',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  updateText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  }
})