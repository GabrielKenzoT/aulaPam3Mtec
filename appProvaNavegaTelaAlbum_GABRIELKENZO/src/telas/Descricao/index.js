import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Descricao({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Praça da Matriz</Text>
            <View style={styles.areainformacao}>
                <Text style={styles.descricao}>
                    Descrição: Espaço central da cidade, ponto de encontro dos moradores, 
                    com eventos culturais e religiosos, como a Feira da Lua.  
                </Text>
            </View>
            <Image
                style={styles.foto}
                source={{uri: 'https://th.bing.com/th/id/R.fb42107ba887dda82c336251cbc025d4?rik=j3rA7X55chup0w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-JTU-ZqePV7c%2fT14sHraIq6I%2fAAAAAAAAADY%2fVEAr4ybNsSM%2fs1600%2fDSC00032.jpg&ehk=HOBDiQ8THYEO5HgDnkyC7rotimY3Lxi%2fB4K8SuDEIzQ%3d&risl=&pid=ImgRaw&r=0',}}
            />
            <View style={styles.areainformacao2}>
                <Text style={styles.informacao}>⭐ Avaliação: 4.4</Text>
                <Text style={styles.informacao}>👥 População: Aproximadamente 12.730 habitantes (IBGE/2022)</Text>
                <Text style={styles.informacao}>📐 Área Territorial: Cerca de 1.063 km²</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    caixa:{
      textAlign: 'center',
      width: 100,
      borderWidth: 5,
      borderColor: 'black'
    },
    titulo:{
        fontSize:30,
        alignSelf:"flex-start",
        padding:10,
        fontWeight: 'bold',
    },
    descricao:{
        fontSize:20,
    },
    areainformacao:{
        alignContent:"center",
        padding:13
    },
    areainformacao2:{
        alignContent:"center",
        padding:10,
    },
    informacao:{
        fontSize:18,
        padding:2,
    },
    foto:{
        width: 300,
        height: 150,
        alignSelf: "center",
        borderRadius:10,
    },
  });