import {
    configurarRoteamento,
    renderizarPagina,
    obterRotaAtual
} from "./router.js";

import {
    configurarEventosFormulario
} from "./formulario.js";

import {
    configurarInterface
} from "./interface.js";


// Inicializa os eventos da aplicação
configurarRoteamento();
configurarEventosFormulario();
configurarInterface();


// Renderiza a rota inicial
renderizarPagina(
    obterRotaAtual()
);