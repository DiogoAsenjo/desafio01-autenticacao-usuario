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

//Mensagem de sucesso ou falha no login.
if(validandoUsuarioESenha(dadosUsuarios, "usuario", login)) {
    console.log(`Usuário logado com sucesso`);
} else {
    console.log(`Usuario ou senha incorreto(s)`);
}

const cadastrandoUsuario = (novousuario, novasenha) => {
    if(dadosUsuarios.find((item) => item.usuario.includes(novousuario))) {
        return console.log(`Usuário já existente!`);
    } else if (dadosUsuarios.find((item) => novousuario.includes("@modalgr.com.br"))) {
        return dadosUsuarios.push({
            usuario: novousuario,
            senha: novasenha,
        });
    } else {
        return console.log("Digite um e-mail institucional válido");
    }
}

//Novamente, como não existe front para obtenão dos dados, os inputs são todos manuais.
cadastrandoUsuario("lucas.gomes@modalgr.com.br", "bikeguaruja");

console.log(dadosUsuarios[dadosUsuarios.length - 1]);