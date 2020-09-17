
- PARA 15/10 
    /*- CHECAR O QUE EU JÁ FIZ*/ 
    /*- ANOTAR O QUE PRECISA MAIS*/ 
    /*- FAZER O AMBIENTE DO PROJETO (DATABASE, DOCKER)*/
    - PENSAR EM FERRAMENTAS PARA SEPARAR TAREFAS (TRELLO)
        . Pensar em bibliotecas e frameworks a serem utilizadas (Mongoose, bcrypt, dotEnv, CrossEnv, Insomnia, jsonwebtoken)
    /*- FAZER O GITIGNORE*/

- DÚVIDAS: 
    - LOCALHOST DANDO PROBLEMA
    - ENTENDER MELHOR O MIDDLEWARE


- CHECK LIST PROJECT {
    - USER CONTROLLER {
        - (STORE {
            EMAIL
            SENHA
            CONFIRMAÇÃO DE SENHA
        })
        - NA PARTE DE STORE CHECAR EMAIL SE JÁ EXISTE
        - LOGIN {
            ROUTES PASSAR PELO BODY SENHA E EMAIL
            VERIFICA SE O EMAIL EXISTE 
            VERIFICAR SE A SENHA DO BANCO BATE COM A PASSADA
        }
        - RECOVER PASSWORD {
            - Será usada por email
        }
    }
    - PRODUCT CONTROLLER {
        - (STORE, UPDATE, INDEX, DELETE)
        - PERMISSIONS TO ADD PRODUCTS (
            ADMIN - PODE ADICIONAR, DELETAR E FAZER VENDAS DE UM PRODUTO
            USER - SÓ VENDAS E TEM ACESSO AOS PRODUTOS
        )
    } 
    - SELL CONTROLLER {
        - CONTROLE DE ESTOQUE BÁSICO (CASO NÃO HAJA PRODUTOS INFORMAR NA HORA DA VENDA)
            . O controle de estoque será feito com o _id e não com 'Código de Barras'.
        - O CONTROLE DE ESTOQUE TEM QUE MANTER A QUANTIDADE DE ITENS ATUALIZADA
        - DEVE PERMITIR QUE O ADMNISTRADOR ATUALIZE O ESTOQUE
            . Nesse caso atualizar quantidade ou outros campos: X, Y, Z.
        - O USUÁRIO COMPRA INFORMANDO A QUANTIDADE DE UM DETERMINANDO PRODUTO, NÃO HÁ CARRINHO       
                  
    }

    - ROUTES {
        - Todas as funções relacionadas ao controller precisam ter uma rota disponíveis para ela
        - Preciso ter um exemplo de cada Rota funcionando no Insomnia
    }

    TESTING CRUD'S {
        Só serão ser feito os testes dos CRUDS
    }
    
}


PROBLEMAS:

- DELETAR USUÁRIO 
- LISTAR USUÁRIO
- CONTROLE DE ESTOQUE PARA VÁRIAS LOJAS
- CHECAR SE O EMAIL ESTÁ NO PADRÃO EMAIL ANTES DE EXECUTAR O STORE DO USER
- PERMITIR QUE O USUÁRIO TROQUE A SENHA (UPDATE STORE)
- DEVE POSSUIR UM CARRINHO:
        - O usuário deve adicionar produtos dentro de um carrinho.
        - O usuário deve remover ou atualizar os produtos de um carrinho.
        - O usuário somente faz a compra sem precisar de nemhuma informação adicional.
        - Ao acessar o carrinho irá aparecer o total da compra.
        - Não há nemhum tipo de desconto nas compras. 


-------------------- MVP --------------------

1. Usuário sem permissão
2. Produtos em estoque 
3. Vender
