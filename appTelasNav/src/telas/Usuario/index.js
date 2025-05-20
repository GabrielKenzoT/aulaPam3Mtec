import React from 'react';
import { StyleSheet, View, Text } from 'react-native-web';

export default function Usuario({navigation}){
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Tela Usuario</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontfamily: 'Arial',
    fontSize: 40,
    color: '#f30'
  }
});