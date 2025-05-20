import React, { useState, useEffect } from 'react';
import { ScrollView,Alert, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../../services/api';

export default function Cadastro({navigation}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
          <Text style={styles.logo}>Comidas e Mais Comidas</Text>
          <Text style={styles.titulo}>Login</Text>
      
          <View style={styles.area}>
            <Text style={styles.texto}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Entre com seu endereço de Email"
              placeholderTextColor={"#000842"}
              onChangeText={email => setEmail(email)}
            />
            <Text style={styles.texto}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              placeholderTextColor={"#000842"}
              secureTextEntry={true}
              onChangeText={senha => setSenha(senha)}
            />
          </View>
      
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.textoBotao}>Login</Text>
          </TouchableOpacity>
        </View>
      );
}

