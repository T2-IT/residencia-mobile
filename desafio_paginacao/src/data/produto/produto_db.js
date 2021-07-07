import Realm from  "realm";

class ProdutoSchema extends Realm.Object{}
    ProdutoSchema.schema = {
        name: 'Produto',
        properties:{
            produto_id: {type: 'int', default: 0},
            produto_nome: 'string',
            produto_descricao: 'string',
            produto_preco: `number`,
        }
    };

    let realm_produto = new Realm({schema: [ProdutoSchema], schemaVersion: 1});
//Exportando a instancia do schema criado
    export default realm_produto;

    // criando os métodos crud

    let listarProdutos = () => {
        return realm_produto.objects('Produto');    
    }

    //Adição de produtos

    let adicionarProdutos = (nomeProduto, descricaoProduto, precoProduto) => {
        

        //console.log(nomeProduto, descricaoProduto, precoProduto) -para testar no metro
        
        const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
        const maiorId = ultimoId == null ? 1  : ultimoId.produto_id;
        const proximoId = maiorId != 1 ? maiorId + 1 : maiorId;

        realm_produto.write(() => {
            const prod = realm_produto.create('Produto', {
            produto_id: proximoId,
            produto_nome: nomeProduto,
            produto_descricao: descricaoProduto,
            produto_preco: precoProduto,
            })
            //pensar sobre possiveis erros - o console vai apresentar o erro
        });
    }

    export {
        listarProdutos, 
        adicionarProdutos
    }