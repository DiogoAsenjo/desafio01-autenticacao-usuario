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

const verificacaoSenhaSegura = (senha) => {
    if(senha.length < 8) {
        console.log(`A senha deve ter no mínimo 8 caracteres`); 
        return false;
    }
    if((!/[a-z]/.test(senha))) {
        console.log(`A senha deve ter ao menos uma letra minúscula`);
        return false;
    }
    if((!/[A-Z]/.test(senha))) {
        console.log(`A senha deve ter ao menos uma letra maiúscula`);
        return false;
    }
    if((!/[0-9]/.test(senha))) {
        console.log(`A senha deve ter ao menos um número`);
        return false;
    }
    if((!/\W/.test(senha))) {
        console.log(`A senha deve ter ao menos um caracter especial`);
        return false;
    }

    return true;
}

const cadastrandoUsuario = (novousuario, novasenha) => {
    if(dadosUsuarios.find((item) => item.usuario.includes(novousuario))) {
        console.log(`Usuário já existente!`);
        return false;
    } else if(!verificacaoSenhaSegura(novasenha)) {
        console.log(`Digite outra senha!`)
        return false;
    } else if(!novousuario.includes("@modalgr.com.br")) {
        console.log(`Use um e-mail institucional @modalgr.com.br`);
        return false;
    } else {
        dadosUsuarios.push({
            usuario: novousuario,
            senha: novasenha,
        });
        return true;
    }
}

//Novamente, como não existe front para obtenão dos dados, os inputs são todos manuais.
cadastrandoUsuario("lucas.gomes@modalgr.com.br", "SenhaSegura@2023");

console.log(dadosUsuarios[dadosUsuarios.length - 1]);