import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


import GABRIELKENZOTAKEUCHI from '../screens/GABRIELKENZOTAKEUCHI';


const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>    
                    
            <Stack.Screen name="GABRIELKENZOTAKEUCHI" component={GABRIELKENZOTAKEUCHI} /> 
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;