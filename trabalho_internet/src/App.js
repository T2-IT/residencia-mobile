import React from "react";
//import {createAppContainer} from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from   "./screens/home";
import Cadastro from "./screens/cadastro";
import Produtos from "./screens/produtos";


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
            name="Produtos"
            component={Produtos}
            />
        </OpcoesStack.Navigator>
    );
};
const App = () => {
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}
export default App;

