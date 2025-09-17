import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PontosTuristicos from './src/telas/PontosTuristicos';
import Descricao from './src/telas/Descricao';
import Album from './src/telas/Album';

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color= 'rgba(0, 0, 0, 1)'
        size = 27

        if (route.name === 'Descrição') {
          iconName = focused
            ? 'clipboard-outline'
            : 'clipboard-outline';
        } else if (route.name === 'Pontos Turísticos') {
          iconName = focused ? 'bicycle-outline' : 'bicycle-outline';
        }else if (route.name === 'Album Fotos') {
          iconName = focused ? 'camera-outline' : 'camera-outline';
        }
        
     
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 12},
      activeTintColor: '#658effff',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Descrição" component={Descricao}></Tab.Screen>
      <Tab.Screen name= "Pontos Turísticos" component={PontosTuristicos}></Tab.Screen>
      <Tab.Screen name= "Album Fotos" component={Album}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Descricao'>

      <Stack.Screen 
          name="Descricao" 
          component={Tabs}
          options={{
            title:'Pontos Turistico de Sete Barras',
            headerStyle:{
            backgroundColor: '#c7be3fff',
            },
            headerTintColor: '#FFF' , 
            headerShown: true         
          }}
          >

      </Stack.Screen>
      <Stack.Screen name="Pontos Turísticos" component={PontosTuristicos}></Stack.Screen>
      <Stack.Screen name="Album Fotos" component={Album} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
