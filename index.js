const dadosUsuarios = require("./usuarios.json");

const validandoUsuario = (lista, chave, valor) => {
    const usuarioValido = lista.find((item) => item[chave].includes(valor));
    if(!usuarioValido) return false;
   
    return true;
}

const validandoSenha = (senha) => {
    const usuarioValido = validandoUsuario(dadosUsuarios, "usuario", login);
    
    if(!usuarioValido) return false;

    const posicaoUsuario = dadosUsuarios.findIndex((item) => item.usuario === login);
    const senhaIncorreta = dadosUsuarios[posicaoUsuario].senha !== senha;
    
    if(senhaIncorreta) return false;

    console.log(`Usuário logado com sucesso!`);
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

    const senhaSegura = verificacaoSenhaSegura(novaSenha);

    if(!senhaSegura) {
        console.log(`Senha insegura, digite outra!`);
        return false;
    }

    dadosUsuarios.push({
        usuario: novoUsuario,
        senha: novaSenha,
    });
    return true;
}

//Como não teremos front end no Desafio, criei duas variáveis para simular a tentativa de login de um usuário.
const login = "diogoasenjo@modalgr.com.br";
const senha = "diogo123";

//Passando no console se o usuário conseguiria se logar com os dados inputados nas variáveis login e senha. Existe mensagem apenas para o login, caso algo esteja errado o retorno será apenas false. 
console.log(validandoSenha(senha));

//Cadastrando um novo usuário. É necessário um e-mail modalgr e uma senha que atenda aos requisitos. 
cadastroDeUsuario("pedro.serafim@modalgr.com.br", "Aaaaaaa");