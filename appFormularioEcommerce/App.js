import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const{width, height} = Dimensions.get('window');

export default function App() {

  const [email,setEmail] = useState('');
  const [autor,setAutor] = useState(4);
  const [livro,setLivro] = useState(3);
  const [quantidade,setquatidade] = useState(2);
  const [desconto, setDesconto] = useState(false)

  const autores=[
    {autorN: 'J.K.Rowling', valor: 1},
    {autorN: 'Stephan King', valor: 2},
    {autorN: 'George R.R. Martin', valor: 3},
    {autorN: 'Scott Cawthon', valor: 4},
  ]
  const livros = {
    0: [
      { livroN: 'Harry Potter e a P.F', valor: 1 },
      { livroN: 'Harry Potter e a C.S', valor: 2 },
      { livroN: 'Harry Potter e o P.A', valor: 3 },
    ],
    1: [
      { livroN: 'O Iluminado', valor: 1 },
      { livroN: 'Carrie', valor: 2 },
      { livroN: 'It: A Coisa', valor: 3 },
    ],
    2: [
      { livroN: 'A Guerra dos Tronos', valor: 1 },
      { livroN: 'A Fúria dos Reis', valor: 2 },
      { livroN: 'A Tormenta de Espadas', valor: 3 },
    ],
    3: [
      { livroN: "Fnaf: The Silver Eyes", valor: 1 },
      { livroN: "Fnaf: The Twisted Ones", valor: 2 },
      { livroN: "Fnaf: The Fourth Closet", valor: 3 },
    ],
  };



  let autoresItens = autores.map((v,k) => {
    return<Picker.Item key={k} value={k} label={v.autorN}></Picker.Item>

  })

    const isWeb = typeof navigator !== "undefined" && navigator .userAgent;

  function escolha() {
    return livros[autor]?.map((item) => (
      <Picker.Item key={item.valor} value={item.valor} label={item.livroN} />
    ));
  }

  function carrinhoDeCompras(){
    if (autor == '' || livro == '')
    {
      return alert("Preencha os campos para a procura de um livro")
    }
    else
    {
      return alert('Livro do autor ' + autores[autor].autorN + ' encomendado com sucesso.'  + '\n' +
        'Email: ' + email + '\n' +
        'Quantidade: ' + quantidade.toFixed(0) + '\n' +
        'Desconto: ' +(desconto ? 'Ativo' : 'Inativo' + '\n' )
      )
    }
  }


  return(
    <View style={styles.container}>  
    <ScrollView style={styles.scrollView}>
      <ImageBackground
      style={styles.imagemFundo}
      source={require("./assets/Fundo.png")}>
      <Text style={styles.bancoLogo}> Livraria Céu Azul </Text>

        <Image
        style={styles.imagem}
        source={require("./assets/Livraria.png")}
        ></Image>
        
        <View style={styles.areaDeCompra}>
          <Text style={styles.texto}>Email: </Text>
            <TextInput
              style={styles.input}
              placeholder = 'Digite seu Email aqui'
              onChangeText={email => setEmail(email)}
            >
            </TextInput>
                   
          <View style={styles.escolha}>
            <Text style={styles.texto}>Autor:</Text>
            <Picker
            style={styles.picker}
            selectedValue={autor}
            onValueChange={(itemValue) => setAutor(itemValue)}
            >{autoresItens}
            </Picker>
          </View >

          <View style={styles.escolha}>
            <Text style={styles.texto}>Livros dos Autor:</Text>
            <Picker 
            style={styles.picker}
            selectedValue={livro}
            onValueChange={(itemValue) => setLivro(itemValue)}
            >{escolha()}
            </Picker>
          </View>
          
          <View style={styles.limite}>
            <Text style={styles.texto}>Quantidade: </Text>
            <Text style={styles.limiteTexto}>{quantidade.toFixed(0)}</Text>
          </View>

          <View style={styles.areaSlider}>
            <Slider
              minimumTrackTintColor='#191970'
              minumValue={1}
              maximumValue={10}
              value={quantidade}
              onValueChange={(quantidade) => setquatidade(quantidade)}
              >
              </Slider>
          </View>

          <View style={styles.descont}>
          <Text style={styles.texto}>Desconto: </Text>
            <Switch
            style= {isWeb ? {transform: [{ translateY: -2}]}: {}}
            trackColor={{ false: "#e61919", true: "#228b22"}}
            thumbColor="#0083ff"
            value ={desconto}
            onValueChange={desconto => setDesconto(desconto)}></Switch>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={carrinhoDeCompras}
          >
            <Text style={styles.botaoTexto}> Encomenda </Text>
          </TouchableOpacity>
        </View> 


      </ImageBackground>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center'
  },
  imagemFundo: {
    resizeMode:"cover",
    height: '100%',
    width: '100%'
  },
  imagem:{
    width: 250, 
    height: 250,
    resizeMode:"contain",
    paddingRight: 10,
    alignSelf: 'center'
  },
  areaDeCompra:{
    width: '90%',
    flexDirection: 'column',
    margin: 10,
    gap: 25,
  },
  escolha:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  texto:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  descont:{
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e2ed1',
    borderRadius: 150,
    width: '50%',
    alignSelf: 'center'
  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  picker:{
    flex:1,
    borderRadius: 10,
    borderColor: 'transparent'
  },
  limite:{
    flexDirection:'row',
    paddingBottom: 5,
  },
  limiteTexto:{
    color: '#4169E1',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  input:{
    width: '100%',
    padding: 7,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#ffff'
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  scrollView: {
    resizeMode:"cover",
    height: '100%',
    width: '100%'
  },
});
