import React, { useState, useRef } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get("window");

const data = [
  {
    title:"Fiat Fastback",
    text: "Capacidade de cerca de 500 litros no porta-malas.",
    valor: 119.99,
    img: 'https://cdn.motor1.com/images/mgl/NGGLg2/s3/frente-do-fiat-fastback-2023.jpg'
  },
  
  {
    title:"Volkswagen Tiguan",
    text: "O Tiguan chega ao mercado reestilizado de tecnologia.",
    valor: 310.00,
    img: 'https://cdn.motor1.com/images/mgl/VzMz6y/s3/vw-tiguan-2024.jpg'
  },
  
  {
    title:"Honda Civic Hybrid",
    text: "Contando com um motor 2.0 16V aspirado.",
    valor: 265.90,
    img: 'https://cmssaladeimprensa.honda.com.br//sites/default/files/styles/hd_exibicao/public/2023-01/Civic%20H%C3%ADbrido%20est%C3%A1tica%20%281%29_0.jpg?itok=qvfRB3CZ'
  },
];



const{width:larguraTela, height:alturaTela} = Dimensions.get('window');

export default function CarrosselProdutos() {
  

  const [background, setBackground] = useState(data[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  

  return (
    <View style={styles.container}>

     <View style={{...StyleSheet.absoluteFill, backgroundColor:'#000' }}>
      <ImageBackground source={{uri: background}} style={styles.imgBg} blurRadius={8} >
      
     <View style={styles.slideView}>
      <Carousel
        style={styles.carousel}
        width={width}
        height={250}
        data={data}

        inactiveSlideOpacity={0.5}
        onSnapToItem={ (index) => {
          setBackground(data[index].img);
          setActiveIndex(index);
        }}

        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        
      />
      </View>

       <ScrollView>
                  <View style={styles.moreInfo}>
                    <View style={{marginTop: 5}}>
      
                      <View style={styles.headerTitleInfo}>
                      <Text style={styles.movieTitle}>{data[activeIndex].title}</Text>
                      <Text style={styles.priceTitle}>R$ {data[activeIndex].valor},00</Text>
                      </View>
                      
                      <Text style={styles.movieDesc}>{data[activeIndex].text}</Text>
                    </View>
                    <TouchableOpacity 
                    style={{ marginRight: 15, marginTop: 10 }} 
                    onPress={() => alert('Você enviou pro carrinho')}
                    >
                      <Icon 
                      name="queue" 
                      color="#131313" 
                      size={30} 
                      />
                    </TouchableOpacity>
                  </View>
                  </ScrollView>
       </ImageBackground>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
  image: {
     width: "100%", height: 350, borderRadius: 10
     },
  title: { 
    fontSize: 18, fontWeight: "bold", marginTop: 10
  },
  imgBg:{
    flex:1,
    width: null,
    height: null,
    opacity: 0.9,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },


  slideView:{
    width: '99.9%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center'
  },


  moreInfo:{
    backgroundColor: '#FFF',
    width: larguraTela,
    height: alturaTela,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 13,
    fontWeight: 'bold'
  },

  headerTitleInfo:{
      flexDirection:'row',
  },

  priceTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#055a02',
    marginBottom: 5,
  },
  
});
