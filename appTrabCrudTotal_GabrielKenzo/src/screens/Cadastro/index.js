import React, { useState, useEffect } from 'react';
import { ScrollView,Alert, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../../services/api';

export default function Cadastro({route,navigation}){
    const { id } = route.params || {};
    

    const [nome_alimento, setnome_alimento] = useState("");   
    const [preco, setPreco] = useState("");   
    const [descricao, setDescricao] = useState("");  
    const [imagem, setImage] = useState("");  
    const [sucess, setSucess] = useState(false);
    const [loading, setLoading] = useState(false);
            
    
   function limparCampos(){
    setnome_alimento('');
    setPreco('');
    setDescricao('');
   }

async function buscardados(){      
        
  const res = await  api.get('3DS1/appBD/buscarId.php?id=' + id);
    limparCampos();
    setnome_alimento(res.data.nome_alimento);
    setPreco(res.data.preco);
    setDescricao(res.data.descricao);  
    setImage(res.data.imagem);  
  }

      useEffect(() => {       
  if (id) {
      buscardados();
  }
}, [id]);


async function editar() {            
        
        if (nome_alimento == "" || preco == "" || descricao == "") {
         showMessage({
             message: "Erro ao Editar",
             description: 'Preencha os Campos Obrigatórios!',
             type: "warning",
         });
         return;
     }

     try {
         const obj = {

             id: id,
             nome_alimento: nome_alimento,
             preco: preco,
             descricao: descricao, 
             imagem:imagem, 
         }

         const res = await api.post('3DS1/appBD/editar.php', obj);

         if (res.data.sucesso === false) {
             showMessage({
                 message: "Erro ao Editar",
                 description: res.data.mensagem,
                 type: "warning",
                 duration: 3000,
             });               
             return;
         }

         setSucess(true);
         showMessage({
             message: "Registro alterado com Sucesso",
             description: "Registro Alterado",
             type: "success",
             duration: 800,             
         }); 
         limparCampos();           
       
     } catch (error) {
         Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
         setSucess(false);
     }
 }  



async function saveData() {                
  if (nome_alimento == "" || preco == "" || descricao == "" || imagem == "") {
    showMessage({
      message: "Erro ao Salvar",
      description: 'Preencha os Campos Obrigatórios!',
      type: "warning",
    });
    return;
    }
        
        
  try {
    const obj = {
        
      nome_alimento: nome_alimento,
      preco: preco,
      descricao: descricao, 
      imagem:imagem,       
    }

    const res = await api.post('3DS1/appBD/salvar.php', obj);

    if (res.data.sucesso === false) {
      showMessage({
        message: "Erro ao Salvar",
        description: res.data.mensagem,
        type: "warning",
        duration: 3000,                    
      });  
      limparCampos();            
      return;
      }

      setSucess(true);
        showMessage({
          message: "Salvo com Sucesso",
          description: "Registro Salvo",
          type: "success",
          duration: 800,             
      });          
          
    } catch (error) {
        Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
        setSucess(false);
    }
 
    }     

    return (
        <View style={{ flex: 1, marginTop: 0, backgroundColor: '#4b8c00', }}>
            <View style={styles.Header}>
                 <Image style={styles.logo} source={require('../../../assets/logo2.png')} />         
          <TouchableOpacity
              onPress={ () =>  navigation.navigate("Home")}
              
          >
           <Ionicons style={{marginLeft:5, marginRight:5}} name="caret-back-outline" size={35} color="#FFF"></Ionicons>
          </TouchableOpacity>
                           
        </View>

            <ScrollView>   
            <View>  

                <Text style={styles.TitleInputs}>Nome de comida:</Text>

                <TextInput               
                    placeholder="Digite o nome da comida"
                    onChangeText={(text) => setnome_alimento(text)}
                    value={nome_alimento}
                    style={styles.TextInput}
                />
            </View>


            <View>
                <Text style={styles.TitleInputs}>Preço:</Text>
                <TextInput
                    placeholder="Digite o Preço"
                    onChangeText={(number) => setPreco(number)}
                    value={preco}
                    style={styles.TextInput}
                   
                />
            </View>

          
            <View>

                <Text style={styles.TitleInputs}>Descrição:</Text>

                <TextInput
                    placeholder="Digite a Descrição"
                    onChangeText={(text) => setDescricao(text)}
                    value={descricao}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>

                <Text style={styles.TitleInputs}>Imagem:</Text>

                <TextInput
                    placeholder="Digite o link da Imagem"
                    onChangeText={(text) => setImage(text)}
                    value={imagem}
                    style={styles.TextInput}
                   
                />
            </View>
                       
                  
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        //setSucess(true);
                        saveData();
                       // setSucess(false);
                    }}
                  
                >
                <Ionicons name="create-outline" size={30} color="#50b9e1"></Ionicons>
                    <Text style={styles.ButtonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        editar()
                        setSucess(false);
                        }}
                    >
                <Ionicons name="create-outline" size={30} color="#50b9e1"></Ionicons>
                    <Text style={styles.ButtonText}>Editar</Text>
                </TouchableOpacity>


              </ScrollView>                 
        </View>
    )
}

