import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';

const{width, height} = Dimensions.get('window');


export default function App() {

   //Para colocar Máscara no telefone ao digitar

   const formatPhoneNumber = (text) => {
    // Remove todos os caracteres que não são números
    let cleaned = text.replace(/\D/g, '');
  
    // Formata o telefone para o padrão (XX) XXXXX-XXXX
    if (cleaned.length > 10) {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (cleaned.length > 6) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (cleaned.length > 2) {
      return cleaned.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      return cleaned;
    }
  };


  const [nome,setNome] = useState('');
  const [telefone,setTelefone] = useState('');
  const [sexo,setSexo] = useState(0);
  const [limite,setLimite] = useState(2);
  const [estudante,setEstudante] = useState(false);

  const sexos=[
    {sexoNome: 'Masculino', valor: 1},
    {sexoNome: 'Feminino', valor: 2}
  ];
  
  //Para alinhar o botão switch quando roda em web
  const isWeb = typeof navigator !== "undefined" && navigator .userAgent;
  
  function enviarDados(){
    if(nome == '' || telefone == '')
    {
      return alert("Preencha todos os dados corretamente")
      
    }
     return alert(
      'Conta aberta com sucesso!! \n \n' +
      'Nome:' + nome + '\n' +
      'Telefone: ' + telefone + '\n' +
      'Sexo: ' + sexos[sexo].sexoNome + '\n' +
      'Limete conta: ' + limite.toFixed(2) + '\n' +
      'Conta estudante: ' +(estudante ? 'Ativo' : 'Inativo') 
    )
  };

  let sexoItems = sexos.map((v,k) => {
    return <Picker.Item Key={k} value={k} label={v.sexoNome}></Picker.Item>
  })


  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imagemfundo}
        source={require("./assets/fundo.jpg")}>
      <Text style={styles.bancoLogo}>Banco de Dinheiro</Text>

      <Image
      style={styles.image}
      source={require("./assets/celular.png")}>

      </Image>


      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome: </Text>
        <TextInput
         style={styles.input}
         placeholder = 'Digite seu nome aqui'
         onChangeText={nome => setNome(nome)}
        >
        </TextInput>

        <Text style={styles.textoNome}>Telefone: </Text>
        <TextInput
         style={{borderBottomWidth: 1, padding: 10, fontSize: 16}}
         placeholder = '(99) 99999-9999'
         onChangeText= {(text) => setTelefone(formatPhoneNumber(text))}
         keyboardType='numeric'
         value={telefone}
         maxLength={15}
        >
        </TextInput>
        <Text>{telefone}</Text>

        <View style={styles.areaSexo}>
          <Text style={styles.textoNome}>Sexo: </Text>
          <Picker
          style={styles.pickerSexo}
          selectedValue={sexo}
          onValueChamge={(itemValue, itemindex) => setSexo(itemValue)}
          >
          {sexoItems}
          </Picker>
        </View>
        <View style={styles.limiteArea}>
         <Text style={styles.textoNome}>Seu Limite: </Text>
         <Text style={styles.limiteTexto}>R${limite.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
         <Slider
          minimumTrackTintColor='#cf0000'
          minumValue={250}
          maximumValue={4000}
          value={limite}
          onValueChange={(limite) => setLimite(limite)}
         >
         </Slider>
        </View>
        <View style={styles.areaEstudante}>
         <Text style={styles.textoNome}>Estudante: </Text>
         <Switch
          style= {isWeb ? {transform: [{ translateY: -2}]}: {}}
          trackColor={{ false: "#ccc", true: "#4caf50"}}
          thumbColor="#d3c"
          value ={estudante}
          onValueChange={estudante => setEstudante(estudante)}
         >
         </Switch>

         <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
         >
          <Text style={styles.botaoTexto}> Abrir conta </Text>

         </TouchableOpacity>
        </View>
      </View>
       </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#00ffb36e',
    paddingVertical: 10,
    alignItems: 'center'

    
  },
  areaformulario:
  {
    widht: '90%',
    flexDirection: 'column',
    margin: 10,
    gap: 25,
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  bancoLogo:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
    
  },
  areaSexo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerSexo:{
    flex:1
  },
  limiteArea:{
    flexDirection:'row',
    paddingBottom: 5,
  },
  limiteTexto:{
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaEstudante:{
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  botao:{
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    width: '50%'

  },
  botaoTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  imagemfundo:{
    resizeMode:"cover",
    height: '100%',
    width: '100%'
  },
  image:{
    width: width * 0.3, 
    height: width * 0.3,
    resizeMode:"contain",
  },
  input:{
    width: '100%',
    borderBottomWidht: 1,
    padding: 10,
    fonstSize: 16
  }
});
