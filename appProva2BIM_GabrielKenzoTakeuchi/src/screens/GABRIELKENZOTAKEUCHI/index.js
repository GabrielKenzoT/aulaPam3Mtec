import React, { useState, useEffect } from 'react';
import { ScrollView,Alert, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import {  useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../../services/api';

const GABRIELKENZOTAKEUCHI= FC= () => {

    const [nome_carro, setNome_carro] = useState("");   
    const [modelos, setModelos] = useState("");   
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");
  
       
    const [sucess, setSucess] = useState(false);

    const [loading, setLoading] = useState(false);
   
    async function saveData() {            
       
           if (nome_carro == "" || modelos== "" || preco == "" || descricao== "" ) {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {

                nome_carro: nome_carro,               
                modelos: modelos,
                preco: preco,        
                descricao: descricao, 
            }
            const res = await api.post('GabrielKenzoTakeuchi/salvar.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });               
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

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#abd' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>

                 <Image style={styles.logo} source={require('../../../assets/logo2.png')} />          
                           

            </View>

            <View style={styles.Title}>
                     <Ionicons name="cart-outline" size={35} color="#484a4d" />
                        <Text style={styles.TitleText}>Cadastro de carros</Text>
                    </View>


             <ScrollView>   
            <View>  

                <Text style={styles.TitleInputs}>Nome: </Text>

                <TextInput               
                    placeholder="Fiat uno....."
                    onChangeText={(text) => setNome_carro(text)}
                    value={nome_carro}
                    style={styles.TextInput}
                />
            </View>


            <View>

                <Text style={styles.TitleInputs}>Modelo: </Text>
                <TextInput
                    placeholder="Attractive...."
                    onChangeText={(text) => setModelos(text)}
                    value={modelos}
                    style={styles.TextInput}
                   
                />
            </View>

          
            <View>

                <Text style={styles.TitleInputs}>Preço: </Text>

                <TextInput
                  secureTextEntry={true}
                    placeholder="R$2.000.00"
                    onChangeText={(text) => setPreco(text)}
                    value={preco}
                    style={styles.TextInput}
                   
                />
            </View>

            <View>

                <Text style={styles.TitleInputs}>Descrição: </Text>

                <TextInput
                    placeholder="Muito Lindo...."
                    onChangeText={(text) => setDescricao(text)}
                    value={descricao}
                    style={styles.TextInput}
                   
                />
            </View>
                       
                  
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData();
                        setSucess(false);
                    }}
                >
                     <Ionicons name="car-sport-outline" size={35} color="#FFF" />
                    <Text style={styles.ButtonText}>Cadastre</Text>
                </TouchableOpacity>

                </ScrollView>                 

        </View>
    );
}

export default GABRIELKENZOTAKEUCHI;