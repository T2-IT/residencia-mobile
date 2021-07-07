import { useState } from "react";
import { listarProdutos } from "../../data/produto/produto_db";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";


const ListagemProdutos =() => {
const [produtos, setProdutos] = useState(listarProdutos();)
    return(
        <SafeAreaView>
            <FlatList
            data={produtos}
            keyExtractor={(produto, index) => index.toString()}
            renderItem={({produto, index}) => {
                return(
                    <View style= {styles.viewContainer}>
                        <Text>produto.produto_id</Text>
                        <Text>produto.produto_nome</Text>
                        <Text>produto.produto_descricao</Text>
                        <Text>produto.produto_preco</Text>
                    </View>
                )
            }
        
        }
            />
        </SafeAreaView>

    );
}