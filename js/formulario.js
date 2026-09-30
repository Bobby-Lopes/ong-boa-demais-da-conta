import {
    salvarRascunho,
    recuperarRascunho
} from "./storage.js";


// Inicializa as máscaras utilizando a biblioteca IMask
function inicializarMascaras() {
    const campoCpf =
        document.querySelector("#cpf");

    const campoTelefone =
        document.querySelector("#telefone");

    const campoCep =
        document.querySelector("#cep");

    if (
        !campoCpf ||
        !campoTelefone ||
        !campoCep
    ) {
        return;
    }

    IMask(campoCpf, {
        mask: "000.000.000-00"
    });

    IMask(campoTelefone, {
        mask: "(00) 00000-0000"
    });

    IMask(campoCep, {
        mask: "00000-000"
    });
}


// Remove mensagens anteriores de um campo
function limparErro(campo) {
    campo.classList.remove("campo-invalido");
    campo.classList.remove("campo-valido");

    campo.removeAttribute("aria-invalid");
    campo.removeAttribute("aria-describedby");

    const grupo = campo.parentElement;

    const mensagemErro =
        grupo.querySelector(".mensagem-erro");

    if (mensagemErro) {
        mensagemErro.remove();
    }
}


// Mostra uma mensagem de erro abaixo do campo
function mostrarErro(campo, mensagem) {
    limparErro(campo);

    campo.classList.add("campo-invalido");

    campo.setAttribute(
        "aria-invalid",
        "true"
    );

    const mensagemErro =
        document.createElement("small");

    const idMensagem =
        "erro-" + campo.id;

    mensagemErro.id = idMensagem;
    mensagemErro.classList.add(
        "mensagem-erro"
    );

    mensagemErro.textContent = mensagem;

    campo.setAttribute(
        "aria-describedby",
        idMensagem
    );

    campo.parentElement.appendChild(
        mensagemErro
    );
}


// Marca o campo como válido
function marcarCampoValido(campo) {
    campo.classList.add("campo-valido");

    campo.setAttribute(
        "aria-invalid",
        "false"
    );
}


// Valida um campo do formulário
function validarCampo(campo) {
    const valor = campo.value.trim();

    limparErro(campo);

    if (
        campo.required &&
        valor === ""
    ) {
        mostrarErro(
            campo,
            "Este campo é obrigatório."
        );

        return false;
    }

    if (
        campo.id === "nome" &&
        valor.length < 3
    ) {
        mostrarErro(
            campo,
            "Digite um nome com pelo menos 3 caracteres."
        );

        return false;
    }

    if (campo.id === "email") {
        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(valor)) {
            mostrarErro(
                campo,
                "Digite um e-mail válido."
            );

            return false;
        }
    }

    if (campo.id === "cpf") {
        const regexCpf =
            /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!regexCpf.test(valor)) {
            mostrarErro(
                campo,
                "Digite um CPF com 11 números."
            );

            return false;
        }
    }

    if (campo.id === "telefone") {
        const regexTelefone =
            /^\(\d{2}\) \d{5}-\d{4}$/;

        if (!regexTelefone.test(valor)) {
            mostrarErro(
                campo,
                "Digite um telefone com DDD e 9 dígitos."
            );

            return false;
        }
    }

    if (campo.id === "cep") {
        const regexCep =
            /^\d{5}-\d{3}$/;

        if (!regexCep.test(valor)) {
            mostrarErro(
                campo,
                "Digite um CEP com 8 números."
            );

            return false;
        }
    }

    marcarCampoValido(campo);

    return true;
}


// Restaura o rascunho recuperado do localStorage
function restaurarRascunho() {
    const formulario =
        document.querySelector(
            "#form-cadastro"
        );

    if (!formulario) {
        return;
    }

    const rascunho =
        recuperarRascunho();

    if (!rascunho) {
        return;
    }

    formulario.nome.value =
        rascunho.nome || "";

    formulario.email.value =
        rascunho.email || "";

    formulario.telefone.value =
        rascunho.telefone || "";

    formulario.cep.value =
        rascunho.cep || "";

    formulario.mensagem.value =
        rascunho.mensagem || "";
}


// Prepara o formulário depois que ele entra no DOM
export function inicializarFormulario() {
    const formulario =
        document.querySelector(
            "#form-cadastro"
        );

    if (!formulario) {
        return;
    }

    restaurarRascunho();
    inicializarMascaras();
}


// Controla os eventos relacionados ao formulário
export function configurarEventosFormulario() {
    document.addEventListener(
        "input",
        function (evento) {
            const campo = evento.target;

            const formulario =
                campo.closest(
                    "#form-cadastro"
                );

            if (!formulario) {
                return;
            }

            salvarRascunho(formulario);

            if (campo.matches("input")) {
                validarCampo(campo);
            }
        }
    );

    document.addEventListener(
        "submit",
        function (evento) {
            if (
                evento.target.id !==
                "form-cadastro"
            ) {
                return;
            }

            evento.preventDefault();

            const formulario =
                evento.target;

            const campos =
                formulario.querySelectorAll(
                    "input[required]"
                );

            const mensagemFormulario =
                formulario.querySelector(
                    "#mensagem-formulario"
                );

            let formularioValido = true;
            let primeiroCampoInvalido = null;

            campos.forEach(
                function (campo) {
                    const campoValido =
                        validarCampo(campo);

                    if (!campoValido) {
                        formularioValido =
                            false;

                        if (
                            !primeiroCampoInvalido
                        ) {
                            primeiroCampoInvalido =
                                campo;
                        }
                    }
                }
            );

            if (!formularioValido) {
                mensagemFormulario.textContent =
                    "Verifique os campos indicados antes de enviar.";

                mensagemFormulario.className =
                    "mensagem-formulario erro";

                if (primeiroCampoInvalido) {
                    primeiroCampoInvalido.focus();
                }

                return;
            }

            mensagemFormulario.textContent =
                "Cadastro preenchido corretamente!";

            mensagemFormulario.className =
                "mensagem-formulario sucesso";
        }
    );
}