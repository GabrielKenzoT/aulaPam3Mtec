
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Descricao from '../Descricao';

export default function PontosTuristicos({route}){
    return(
        <ScrollView>   
            <View style={styles.container}>

                <View style={styles.area}>
                <Text style={styles.nome}>Mirante do Ribeira</Text>
                <Text style={styles.descricao}>
                    Descrição: Vista panorâmica do Vale do Ribeira, ideal para contemplação e fotos.
                </Text>
                <Image
                    style={styles.foto}
                    source={{ uri: 'https://registro.sp.gov.br/turismo/wp-content/uploads/2022/06/Mirante.jpg' }}
                />
                </View>
                <View style={styles.area}>
                <Text style={styles.nome}>Praça da Matriz</Text>
                <Text style={styles.descricao}>
                    Ponto central da cidade com eventos culturais e religiosos.
                </Text>
                <Image
                    style={styles.foto}
                    source={{uri: 'https://th.bing.com/th/id/R.fb42107ba887dda82c336251cbc025d4?rik=j3rA7X55chup0w&riu=http%3a%2f%2f2.bp.blogspot.com%2f-JTU-ZqePV7c%2fT14sHraIq6I%2fAAAAAAAAADY%2fVEAr4ybNsSM%2fs1600%2fDSC00032.jpg&ehk=HOBDiQ8THYEO5HgDnkyC7rotimY3Lxi%2fB4K8SuDEIzQ%3d&risl=&pid=ImgRaw&r=0',}}
                />
                </View>
                <View style={styles.area}>
                <Text style={styles.nome}>Parque Estadual Carlos Botelho</Text>
                <Text style={styles.descricao}>
                    Reserva com trilhas, cachoeiras e rica biodiversidade da Mata Atlântica.
                </Text>
                <Image
                    style={styles.foto}
                    source={{uri: 'https://tse4.mm.bing.net/th/id/OIP.ZFSBDvnuBjuI-Kuo4mu03QHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',}}
                />
                </View>
                <View style={styles.area}>
                <Text style={styles.nome}>Cachoeira do Travessão</Text>
                <Text style={styles.descricao}>
                    Queda de água cercada por vegetação nativa, ideal para trilhas e banho.
                </Text>
                <Image
                    style={styles.foto}
                    source={{uri: 'https://th.bing.com/th/id/R.09a9c68b56649a84fb06a686b28dfffe?rik=Rf8QdgmctGleYg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-7UkiaM5hnuY%2fUS9aNVdbhCI%2fAAAAAAAAAFQ%2ftCCeDPEF9FA%2fw1200-h630-p-k-no-nu%2fDSC05682.JPG&ehk=c48lv5onRTg%2bdQloXpe%2bz6ED9qFxxrFFG%2fYA2NjMxdY%3d&risl=&pid=ImgRaw&r=0',}}
                />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    area:{
        padding:20,
        alignContent:"center",
        justifyContent:"flex-start"
    },
    foto:{
        width: 300,
        height: 150,
        alignSelf: "center",
        borderRadius:10,
    },
    nome:{
        fontSize:25,
        fontWeight: 'bold',
    },
    descricao:{
        fontSizer:20,
        paddingVertical:10,
    },
  });