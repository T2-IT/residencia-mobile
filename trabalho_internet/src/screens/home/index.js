import React from 'react';
import { View, Button, Text } from 'react-native';




const Home = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                flexDirection: 'column',
            }}>
            <Text text="Home" />
            <Button
                title="Cadastrar"
                onPress={() => navigation.navigate('cadastro')}
            />
            <Button
                title='Produtos'
                onPress={() => navigation.navigate('produtos')}
            />
        </View>
    );
}

export default Home;