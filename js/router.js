import { templates } from "./templates.js";

import {
    fecharMenu
} from "./interface.js";

import {
    inicializarFormulario
} from "./formulario.js";


const conteudoPrincipal =
    document.querySelector("#conteudo-principal");


// Identifica a rota atual através do hash da URL
export function obterRotaAtual() {
    const rota =
        window.location.hash.replace("#", "");

    if (rota) {
        return rota;
    }

    return "inicio";
}


// Renderiza o conteúdo correspondente à rota
export function renderizarPagina(rota) {
    if (!templates[rota]) {
        rota = "inicio";
    }

    conteudoPrincipal.innerHTML =
        templates[rota];

    document.title =
        "ONG Boa Demais da Conta - " +
        rota.charAt(0).toUpperCase() +
        rota.slice(1);

    if (rota === "cadastro") {
        inicializarFormulario();
    }
}


// Configura os eventos de navegação da SPA
export function configurarRoteamento() {
    document.addEventListener(
        "click",
        function (evento) {
            const link =
                evento.target.closest("[data-rota]");

            if (!link) {
                return;
            }

            evento.preventDefault();

            const rota = link.dataset.rota;

            window.location.hash = rota;
            renderizarPagina(rota);
            fecharMenu();
        }
    );

    window.addEventListener(
        "hashchange",
        function () {
            renderizarPagina(
                obterRotaAtual()
            );
        }
    );
}