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

    modalTexto.textContent =
        "Você escolheu o projeto: " +
        projeto +
        ". Em breve teremos mais informações!";

    modal.hidden = false;
    toast.classList.add("ativo");

    setTimeout(function () {
        toast.classList.remove("ativo");
    }, 3000);
}


// Fecha o modal
function fecharModal() {
    const modal =
        document.querySelector("#modal-projeto");

    if (modal) {
        modal.hidden = true;
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
                    menuAberto
                );
            }
        );
    }

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
}