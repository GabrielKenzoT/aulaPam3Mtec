import React,{useState} from 'react';
import {StyleSheet,Text,View,ImageBackground,Image,TouchableOpacity } from 'react-native';

export default function Home({navigation}){
    return(
       <View style={styles.container}>
            <ImageBackground
              source={require('../../../assets/img/fundo.png')}
              style={styles.imagemFundo}
            >
            
            <View style={styles.imagem}>
               <Image
                 style={{width: 320}}
                 source={require('../../../assets/img/logo.png')}
               >
                </Image>          
            </View>

            <Text style={styles.texto1}>Bem Vindo ao YUM!</Text>
            <Text style={styles.texto2}>O restaurante mais famoço de todo os tempos agora está em App!</Text>

            <View style={styles.viewBotao}>
                <TouchableOpacity
                  style={styles.botao}
                  onPress={() => navigation.navigate("Carrinho")}
                >
                    <Text style={styles.textoBotao}>Acessar o cardapio</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
       </View>
    );
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  caixa:
  {
      textAlign: 'center',
      width: 100,
      borderWidth: 5,
      borderColor: 'black'
  },
  imagem: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imagemFundo:{
    width: '100%',
    height: '100%' , 
    opacity: 1,
  },
  texto1:{
    fontFamily: 'Arial',
    fontSize: 40,
    color: '#f28500',
    Top: 10
  },
  texto2:{
    fontFamily: 'Arial',
    fontSize: 20,
    color: '#f28500',
    Top: 10
  },
  botao: {
    backgroundColor: '#f28500',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 7,
    padding:10,  
  },
  textoBotao:{
    color:'#FFF',
    fontSize:18
  },
});