import React from "react";
//import {createAppContainer} from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from   "./screens/home";
import Cadastro from "./screens/cadastro";
import ProdutoCadastro from "./screens/produtos";


const OpcoesStack = createStackNavigator();
const StackNavigator = () => {
    return(
        <OpcoesStack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: "#3a59b7"
            },
            headerTintColor: '#ffffff',
            headerBackTitle: "voltar"

        }}>
            <OpcoesStack.Screen
            options={{headerShown:true}}
            name="Home"
            component={Home}
            />
             <OpcoesStack.Screen
            options={{headerShown:true}}
            name="Cadastro"
            component={Cadastro}
            />
             <OpcoesStack.Screen
            options={{headerShown:true}}
            name="ProdutoCadastro"
            component={ProdutoCadastro}
            />
        </OpcoesStack.Navigator>
    );
};
const NavegacaoTab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavegacaoTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <NavegacaoTab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
     {/* <NavegacaoTab.Screen
        name="Informações"
        component={InfoStackNavigation}
        options={{
          tabBarLabel: 'Informações',
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" type="ionicon" size={size} color={color} />
          ),
        }}
    />*/}

    </NavegacaoTab.Navigator>
  );
}

const App = () => {
    return(
        <NavigationContainer>
            <TabNavigation/>

        </NavigationContainer>
    )
}


export default App;

