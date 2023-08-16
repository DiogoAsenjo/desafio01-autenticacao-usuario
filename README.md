# Desafio 01: Sistema de autenticação de usuários.

Requisitos:

- Utilização de ao menos dois objetos

- Manipulação de arrays

- Callbacks

## Lógica do Desafio 01

Como não há front-end na aplicação, criei as variáveis de login e senha para simular a entrada de dados por um usuário.

Não foi utilizado banco de dados, apenas um array de objetos em JSON.

- Criei a função validandoUsuario para verificar se o usuário existe.

- A função validandoSenha, irá funcionar como se fosse a validação do login, já que, além de verificar a senha, que é passada como parâmetro, dentro da função ela irá chamar a de validação do usuário também, ou seja, caso o retorno seja true, o usuário está apto para ser logado.

- A função cadastroDeUsuario como o nome diz, serve para cadastrar novos usuários. Dentro dela é chamada a função que irá verificar se a senha é segura, ja que coloquei alguns requisitos para isso.
