import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Cadastro from './styles/cadastro'

const mainNavigation = createDrawerNavigator({
    Login: {
      screen: Login,
      navigationOptions: () => ({
        drawerIcon: <Icon name="lock" size={20} color="#7159c1" />,
      }),
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        drawerIcon: <Icon name="rocket" size={20} color="#7159c1" />,
      }),
    },
  });
  
  export default createAppContainer(mainNavigation);
