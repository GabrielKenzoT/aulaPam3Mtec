import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Carrinho from './src/Carrinho';
import Login from './src/Login';

import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        color= '#d0d'
        size = 30
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        }else if (route.name === 'Carrinho') {
          iconName = focused ? 'cart' : 'cart-outline';
        }
        

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 12},
      activeTintColor: '#3f64c7',
      inactiveTintColor: 'gray',      
    }}    
    >
      <Tab.Screen name= "Home" component={Home}></Tab.Screen>
      <Tab.Screen name= "Carrinho" component={Carrinho}></Tab.Screen>
    </Tab.Navigator>
  )
}



export default function App() {
  
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
        name="Home" 
        component={Tabs}
        options={{ headerShown: false}}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
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
