const dadosUsuarios = require("./usuarios.json");

//Como não teremos front end no Desafio, criei duas variáveis para simular a tentativa de login de um usuário.
const login = "diogo.asenjo@modalgr.com.br";
const senha = "diogo123";

const validandoUsuarioESenha = (lista, chave, valor) => {
    if (lista.find((item) => item[chave].includes(valor))) {
        let index = dadosUsuarios.findIndex((item) => item.usuario === valor);
        return dadosUsuarios[index].senha === senha ? true : false;
    } else {
        return false;
    }
}

if(validandoUsuarioESenha(dadosUsuarios, "usuario", login)) {
    console.log(`Usuário logado com sucesso`);
} else {
    console.log(`Usuario ou senha incorreto(s)`);
}