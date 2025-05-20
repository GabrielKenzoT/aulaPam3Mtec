import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, ImageBackground, TouchableOpacity} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get("window");

const data = [
  {
    title:"Mocotó",
    text: "Mocotó, batatas, cenouras, arroz",
    valor: 50.00,
    img: 'https://blog.amigofoods.com/wp-content/uploads/2021/01/mocoto-brazilian-dish-1024x683.jpg'
  },
  
  {
    title:"Bobó de camarão",
    text: "abobora, camarão, arroz",
    valor: 150.00,
    img: 'https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/sla/brazil/calcmenu/recipes/receitas-de-pascoa-2021/header-bobo-de-camarao.jpg'
  },
  
  {
    title:"Cuscuz paulista",
    text: "Ovo, tomate, frango, azeitona",
    valor: 30.00,
    img: 'https://www.maisreceitas.com/wp-content/upload/2013/09/photo1-13.jpg'
  },
  {
    title:"Arroz com feijão",
    text: "Arros, feijão e salada",
    valor: 25.00,
    img: 'https://ederepente50.files.wordpress.com/2020/06/arroz-com-feijao-goya-foods.jpg?w=1208'
  },
  {
    title:"Feijoada",
    text: "Arroz, Feijoada, Farofa e couve",
    valor: 40.00,
    img: 'https://s2.glbimg.com/9Flx6zP9lBNiayVr6gGSu1VBWI0=/smart/e.glbimg.com/og/ed/f/original/2017/02/24/grupo_ct__feijoada_do_batista__credtomasrangel.jpg'
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
