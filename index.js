const dadosUsuarios = require("./usuarios.json");

//Como não teremos front end no Desafio, criei duas variáveis para simular a tentativa de login de um usuário.
const login = "diogo.asenjo@modalgr.com.br";
const senha = "diogo23";

const validandoUsuario = (lista, chave, valor) => {
    const usuarioInvalido = (!lista.find((item) => item[chave].includes(valor)));
    if(usuarioInvalido) return false;
   
    return true;
}

const validandoSenha = (senha) => {
    const usuarioInvalido = (!validandoUsuario(dadosUsuarios, "usuario", login));
    
    if(usuarioInvalido) return false;

    const posicaoUsuario = dadosUsuarios.findIndex((item) => item.usuario === login);
    const senhaIncorreta = dadosUsuarios[posicaoUsuario].senha !== senha;
    
    if(senhaIncorreta) return false;

    return true;
}

const verificacaoSenhaSegura = (senhaVerificada) => {
    if(senhaVerificada.length < 8) {
        console.log(`A senha deve ter no mínimo 8 caracteres`); 
        return false;
    }
    if((!/[a-z]/.test(senhaVerificada))) {
        console.log(`A senha deve ter ao menos uma letra minúscula`);
        return false;
    }
    if((!/[A-Z]/.test(senhaVerificada))) {
        console.log(`A senha deve ter ao menos uma letra maiúscula`);
        return false;
    }
    if((!/[0-9]/.test(senhaVerificada))) {
        console.log(`A senha deve ter ao menos um número`);
        return false;
    }
    if((!/\W/.test(senhaVerificada))) {
        console.log(`A senha deve ter ao menos um caracter especial`);
        return false;
    }

    return true;
}

const cadastroDeUsuario = (novoUsuario, novaSenha) => {
    const usuarioJaExistente = validandoUsuario(dadosUsuarios, "usuario", novoUsuario);

    if(usuarioJaExistente){
        console.log(`Usuário já existe!`);
        return false;
    }

    const emailInstitucional = novoUsuario.includes("@modalgr.com.br")

    if(!emailInstitucional) {
        console.log(`Use um email institucional!`);
        return false;
    }

    const senhaInsegura = (!verificacaoSenhaSegura(novaSenha));

    if(senhaInsegura) {
        console.log(`Senha insegura, digite outra!`);
        return false;
    }

    dadosUsuarios.push({
        usuario: novoUsuario,
        senha: novaSenha,
    });
    return true;
}

console.log(validandoUsuario(dadosUsuarios, "usuario", login));
console.log(validandoSenha(senha));
console.log(verificacaoSenhaSegura("AAAAAA2@a"));
cadastroDeUsuario("pedro.serafim@modalgr.com.br", "Aaaaaaaa1@");
console.log(dadosUsuarios[dadosUsuarios.length - 1]);