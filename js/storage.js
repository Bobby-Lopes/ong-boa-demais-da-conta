const CHAVE_RASCUNHO = "rascunhoCadastro";


// Salva um rascunho do formulário no localStorage
export function salvarRascunho(formulario) {
    const rascunho = {
        nome: formulario.nome.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        cep: formulario.cep.value,
        mensagem: formulario.mensagem.value
    };

    localStorage.setItem(
        CHAVE_RASCUNHO,
        JSON.stringify(rascunho)
    );
}


// Recupera os dados armazenados no localStorage
export function recuperarRascunho() {
    const dadosSalvos =
        localStorage.getItem(CHAVE_RASCUNHO);

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        localStorage.removeItem(CHAVE_RASCUNHO);
        return null;
    }
}