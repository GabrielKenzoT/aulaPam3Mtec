import React, { useEffect, useState } from 'react';
import {View,Text,ActivityIndicator,StyleSheet,Image,Dimensions,SafeAreaView,TouchableOpacity,ImageBackground} from 'react-native';

import Carousel from 'react-native-reanimated-carousel';
import * as ImagePicker from "expo-image-picker";
import {Ionicons} from "@expo/vector-icons";

const { width } = Dimensions.get('window');

export default function App() {
  const [image, setImage] = useState(null);
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);


  async function pickImageFromGallery() {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result); // Verificar o retorno completo
        setImage(result.assets[0].uri); // Acesse o URI corretamente
      }
    }

    async function takePhoto() {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result); // Verificar o retorno completo
        setImage(result.assets[0].uri); // Acesse o URI corretamente
      }
    }

  async function uploadImage() {
      if (!image) {
        Alert.alert("Nenhuma imagem selecionada", "Por favor, selecione ou tire uma foto primeiro.");
        return;
      }

      let filename = image.split('/').pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append('photo', { uri: image, name: filename, type });

      try {
        const response = await fetch("http://10.239.0.124/imagem/upload.php", {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.ok) {
          Alert.alert("Sucesso", "Imagem enviada com sucesso!");
        } else {
          Alert.alert("Erro", "Falha ao enviar imagem.");
        }
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Ocorreu um erro ao tentar enviar a imagem.");
      }
    }
//divisão para eu nao me perder

  useEffect(() => {
    async function carregarImagens() {
      try {
        const response = await fetch('http://10.239.0.124/imagem/listar_imagens.php');
        const data = await response.json();
        setImagens(data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      } finally {
        setLoading(false);
      }
    }
    carregarImagens();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Carregando imagens...</Text>
      </View>
    );
  }


 return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/img/fundo2.jpg')} style={styles.imgBg} >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.header}>Você viu esses pets?</Text>
        <Text style={styles.header}>Caso Viu contantar o número 66-666-666-666</Text>
        {imagens.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum pet cadastrado.</Text>
        ) : (
          <Carousel
            loop
            width={width}
            height={250}
            autoPlay
            data={imagens}
            scrollAnimationDuration={1000}
            renderItem={({ item }) => (
              <Image source={{ uri: item }} style={styles.imagem} />
            )}
          />
        )}




        <Text style={styles.header}>Cadastre pets desaparecidos</Text>
        <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
          <Ionicons name="image" size={20} color="white" />
          <Text style={styles.buttonText}>Escolher da Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Ionicons name="camera" size={20} color="white" />
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>

        {image && (
          <Image source={{ uri: image }} style={styles.image} />
        )}

        <TouchableOpacity style={styles.button} onPress={uploadImage}>
          <Ionicons name="cloud-upload" size={20} color="white" />
          <Text style={styles.buttonText}>Enviar foto</Text>
        </TouchableOpacity>    
      </SafeAreaView>
          </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  button: {
    backgroundColor: "#6c469eff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
     borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    minWidth: 180,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#ccc",
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  imagem: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
  },
});