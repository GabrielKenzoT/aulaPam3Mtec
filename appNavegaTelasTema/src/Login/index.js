import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, CheckBox, useEffect} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   //Variavel da CheckBox
   //const [rememberMe, setRememberMe] = useState(false);
   //Variavel de esconder texto
   const [secureText, setSecureText] = useState(true); 

   
  //Irá Carregar os dado
  /*
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem('email');
        const savedPassword = await AsyncStorage.getItem('password');
        const savedRemember = await AsyncStorage.getItem('rememberMe');

        if (savedRemember === 'true') {
          setEmail(savedEmail || '');
          setSenha(savedPassword || '');
          setRememberMe(true);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadUserData(); // Chamando a função diretamente
  }, []);

  const handleSave = async () => {
    try {
      if (rememberMe) {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('senha', senha);
        await AsyncStorage.setItem('rememberMe', 'true');
      } else {
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('senha');
        await AsyncStorage.setItem('rememberMe', 'false');
      }
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };
*/


  return (
    <View style={styles.container}>
      <ScrollView style={styles.Scroll}>
        <ImageBackground
            style={styles.imagemFundo}
            source={require('../../../assets/img/fundo.png')}
        >
          <Image
              style={styles.imagem}
              source={require('../../../assets/img/logo.png')}
          ></Image>

          <Text style={styles.Titulo}>LOGIN</Text>

        <View style={styles.areaDeLogin}>
          <Text style={styles.texto}>Digite seu Email: </Text>
            <TextInput
              style={styles.input}
              placeholder='@mail.com'
              placeholderTextColor="#f28500"
              onChangeText={email => setEmail(email)}
            ></TextInput>

          <Text style={styles.texto}>Digite sua senha: </Text>
            <TextInput
              style={styles.input}
              placeholder='senha'
              placeholderTextColor="#f28500"
              onChangeText={senha => setSenha(senha)}
              secureTextEntry = {secureText }
            ></TextInput>

          <TouchableOpacity
            style={styles.botao}
            onPress={()=> navigation.navigate('Home', {nome})}
          >
            <Text style={styles.texto}> Entrar </Text>
          </TouchableOpacity>
          </View>
        </ImageBackground> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    alignItems: 'center'
  },
  Scroll:{
    resizeMode:"cover",
    height: '100%',
    width: '100%'
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
  Titulo:{
    textAlign: 'center',
    fontSize: 30,
    color: '#000000',
    fontFamily: 'bold',
  },
  areaDeLogin:{
    flexDirection: 'column',
    margin: 10,
    gap: 20,
    width: '93%',
  },
  texto:{
    fontSize: 16,
  },
  input:{
    width:'100%',
    padding: 8,
    fontSize: 14,
    backgroundColor: '#b5b5b5',
  },
  botao:{
    height: 35, 
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
  },
  Check: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
