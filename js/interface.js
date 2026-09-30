import {
    salvarTema,
    recuperarTema
} from "./storage.js";


// Guarda o elemento que abriu o modal
// para devolver o foco quando ele for fechado
let elementoFocoAnterior = null;


// Mostra o modal e o toast de um projeto
export function mostrarMensagem(projeto) {
    const modal =
        document.querySelector("#modal-projeto");

    const modalTexto =
        document.querySelector("#modal-texto");

    const toast =
        document.querySelector("#toast");

    if (!modal || !modalTexto || !toast) {
        return;
    }

    elementoFocoAnterior =
        document.activeElement;

    modalTexto.textContent =
        "Você escolheu o projeto: " +
        projeto +
        ". Em breve teremos mais informações!";

    modal.hidden = false;
    toast.classList.add("ativo");

    const botaoFechar =
        modal.querySelector(
            "[data-fechar-modal]"
        );

    if (botaoFechar) {
        botaoFechar.focus();
    }

    setTimeout(function () {
        toast.classList.remove("ativo");
    }, 3000);
}


// Fecha o modal
function fecharModal() {
    const modal =
        document.querySelector("#modal-projeto");

    if (!modal || modal.hidden) {
        return;
    }

    modal.hidden = true;

    if (
        elementoFocoAnterior &&
        typeof elementoFocoAnterior.focus === "function"
    ) {
        elementoFocoAnterior.focus();
    }
}


// Mantém o foco dentro do modal enquanto ele estiver aberto
function controlarFocoModal(evento) {
    const modal =
        document.querySelector("#modal-projeto");

    if (
        !modal ||
        modal.hidden ||
        evento.key !== "Tab"
    ) {
        return;
    }

    const elementosFocaveis =
        modal.querySelectorAll(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

    if (elementosFocaveis.length === 0) {
        return;
    }

    const primeiroElemento =
        elementosFocaveis[0];

    const ultimoElemento =
        elementosFocaveis[
            elementosFocaveis.length - 1
        ];

    if (
        evento.shiftKey &&
        document.activeElement === primeiroElemento
    ) {
        evento.preventDefault();
        ultimoElemento.focus();
    } else if (
        !evento.shiftKey &&
        document.activeElement === ultimoElemento
    ) {
        evento.preventDefault();
        primeiroElemento.focus();
    }
}


// Fecha o menu responsivo
export function fecharMenu() {
    const menu =
        document.querySelector(".menu-principal");

    const botaoMenu =
        document.querySelector(".menu-hamburguer");

    if (!menu || !botaoMenu) {
        return;
    }

    menu.classList.remove("ativo");

    botaoMenu.setAttribute(
        "aria-expanded",
        "false"
    );

    botaoMenu.setAttribute(
        "aria-label",
        "Abrir menu"
    );
}


// Atualiza a aparência e os atributos do botão de tema
function atualizarBotaoTema(
    botaoTema,
    temaEscuro
) {
    botaoTema.setAttribute(
        "aria-pressed",
        String(temaEscuro)
    );

    if (temaEscuro) {
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        botaoTema.textContent =
            "☀️ Modo claro";
    } else {
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

        botaoTema.textContent =
            "🌙 Modo escuro";
    }
}


// Configura o botão de tema
function configurarTema() {
    const botaoTema =
        document.querySelector(".botao-tema");

    if (!botaoTema) {
        return;
    }

    const temaSalvo =
        recuperarTema();

    if (temaSalvo === "escuro") {
        document.body.classList.add(
            "tema-escuro"
        );

        atualizarBotaoTema(
            botaoTema,
            true
        );
    } else {
        atualizarBotaoTema(
            botaoTema,
            false
        );
    }

    botaoTema.addEventListener(
        "click",
        function () {
            const temaEscuro =
                document.body.classList.toggle(
                    "tema-escuro"
                );

            atualizarBotaoTema(
                botaoTema,
                temaEscuro
            );

            salvarTema(
                temaEscuro
                    ? "escuro"
                    : "claro"
            );
        }
    );
}


// Configura os eventos da interface
export function configurarInterface() {
    const botaoMenu =
        document.querySelector(".menu-hamburguer");

    const menu =
        document.querySelector(".menu-principal");

    if (botaoMenu && menu) {
        botaoMenu.addEventListener(
            "click",
            function () {
                menu.classList.toggle("ativo");

                const menuAberto =
                    menu.classList.contains("ativo");

                botaoMenu.setAttribute(
                    "aria-expanded",
                    String(menuAberto)
                );

                botaoMenu.setAttribute(
                    "aria-label",
                    menuAberto
                        ? "Fechar menu"
                        : "Abrir menu"
                );
            }
        );
    }

    configurarTema();

    document.addEventListener(
        "click",
        function (evento) {
            const botaoProjeto =
                evento.target.closest(
                    "[data-projeto]"
                );

            if (botaoProjeto) {
                mostrarMensagem(
                    botaoProjeto.dataset.projeto
                );

                return;
            }

            const botaoFechar =
                evento.target.closest(
                    "[data-fechar-modal]"
                );

            if (botaoFechar) {
                fecharModal();
            }
        }
    );

    document.addEventListener(
        "keydown",
        function (evento) {
            const modal =
                document.querySelector(
                    "#modal-projeto"
                );

            if (
                evento.key === "Escape" &&
                modal &&
                !modal.hidden
            ) {
                fecharModal();
                return;
            }

            controlarFocoModal(evento);
        }
    );
}