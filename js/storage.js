const CHAVE_RASCUNHO = "rascunhoCadastro";
const CHAVE_TEMA = "tema";


// Salva um valor no localStorage de forma segura
function salvarItem(chave, valor) {
    try {
        localStorage.setItem(
            chave,
            valor
        );

        return true;
    } catch (erro) {
        console.warn(
            "Não foi possível salvar dados no localStorage.",
            erro
        );

        return false;
    }
}


// Recupera um valor do localStorage de forma segura
function recuperarItem(chave) {
    try {
        return localStorage.getItem(chave);
    } catch (erro) {
        console.warn(
            "Não foi possível acessar o localStorage.",
            erro
        );

        return null;
    }
}


// Remove um valor do localStorage de forma segura
function removerItem(chave) {
    try {
        localStorage.removeItem(chave);
    } catch (erro) {
        console.warn(
            "Não foi possível remover dados do localStorage.",
            erro
        );
    }
}


// Salva um rascunho do formulário no localStorage
export function salvarRascunho(formulario) {
    const rascunho = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        mensagem: formulario.mensagem.value
    };

    salvarItem(
        CHAVE_RASCUNHO,
        JSON.stringify(rascunho)
    );
}


// Recupera os dados armazenados no localStorage
export function recuperarRascunho() {
    const dadosSalvos =
        recuperarItem(CHAVE_RASCUNHO);

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        removerItem(CHAVE_RASCUNHO);

        return null;
    }
}


// Salva a preferência de tema
export function salvarTema(tema) {
    salvarItem(
        CHAVE_TEMA,
        tema
    );
}


// Recupera a preferência de tema
export function recuperarTema() {
    return recuperarItem(CHAVE_TEMA);
}