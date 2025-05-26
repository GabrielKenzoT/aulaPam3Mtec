import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { ScrollView,Alert, Text, TextInput, View, TouchableOpacity, Image,FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Load from '../../components/Load';
import api from '../../../services/api';

import {Ionicons} from '@expo/vector-icons';

export default function Home({ navigation }) {
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [total, setTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);


    async function totalDadosCadastrados() {
        const res = await api.get(`3DS1/appBD/listar-cards.php`);
        setTotal(res.data);
    }

    async function getItem(id){               
        navigation.navigate("Cadastro",{id:id})
    }   


    function mensagemDelete(id){
    
        Alert.alert(
         "Excluir Registro",
         "Deseja Excluir este Registro?",
          [
            {
              text: "Não",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Sim", onPress: () => deleteItem(id) }
          ],
          { cancelable: true }
        );  
     }



      async function deleteItem(id){
        const res = await api.get('3DS1/appBD/excluir.php?id=' + id);
        listarDados();
      }
     




     async function listarDados() {

     try {
           
            const res = await api.get(`3DS1/appBD/buscar.php`);
            setDados(res.data.result);
         

               } catch (error) {
               console.log("Erro ao Listar " + error);
           } finally {
             setIsLoading(false);
             setRefreshing(false);
         }
     }

    useEffect(() => {
        listarDados();
        totalDadosCadastrados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();

    };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerHeader}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <MaterialIcons name="menu" size={35} color="black" />
            </TouchableOpacity>
            <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
        </View>
      </View>

      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        style={styles.flat}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.titulo}>Comidas Cadastradas:</Text>
          </View>
        )}
        renderItem={({ item }) => (
        <View style={styles.containertarefas}>
          <View style={styles.linhaTarefa}>
            <Image
                source={{ uri: item.imagem }}
                style={styles.imag}
            />
            <View style={styles.textosTarefa}>
              <Text style={styles.textolistatitulo}>
                {item.nome_alimento}- R$ {item.preco}</Text>
              <Text style={styles.textolista}>{item.descricao}</Text>
            </View>
          </View>

          <View style={styles.linhaInfo}>
            <TouchableOpacity style={styles.gridbotaoEditar}
                onPress={() => getItem(item.id)} >
                  <Ionicons name="create-outline" size={30} color="#50b9e1"></Ionicons>
            </TouchableOpacity> 
          <TouchableOpacity style={styles.gridbotaoExcluir}
              onPress={() => mensagemDelete(item.id)} >
                <Ionicons name="trash-outline" size={30} color="#e15f50"></Ionicons>
          </TouchableOpacity> 
          </View>
        </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}