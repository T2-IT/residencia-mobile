import React from 'react';
import { View, Button, Text } from 'react-native';


const Cadastro = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                flexDirection: 'column',
            }}>
            <Text text="Cadastro" />
            
            <Button
                title='Produtos'
                onPress={() => navigation.navigate('produtos')}
            />
        </View>
    );
}

export default Cadastro;

