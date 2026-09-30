import imagemVoluntarios from "../images/voluntarios.webp";

// Dados dos projetos
const projetos = [
    {
        id: "educacao",
        categoria: "Educação",
        nome: "Educação Digital",
        descricao:
            "Projeto destinado a oferecer conhecimentos " +
            "básicos de tecnologia e informática para pessoas " +
            "que possuem pouco acesso a recursos digitais."
    },
    {
        id: "arrecadacao",
        categoria: "Arrecadação",
        nome: "Campanha de Arrecadação",
        descricao:
            "Ação destinada à arrecadação de alimentos, " +
            "roupas e outros itens para famílias que " +
            "necessitam de apoio."
    },
    {
        id: "voluntariado",
        categoria: "Voluntariado",
        nome: "Voluntariado",
        descricao:
            "Programa que conecta pessoas interessadas em " +
            "ajudar com as diferentes atividades realizadas " +
            "pela ONG."
    }
];


// Cria o HTML de um projeto utilizando os dados recebidos
function criarTemplateProjeto(projeto) {
    return `
        <article class="projeto" id="${projeto.id}">
            <span class="badge">${projeto.categoria}</span>

            <h3>${projeto.nome}</h3>

            <p>
                ${projeto.descricao}
            </p>

            <button
                type="button"
                data-projeto="${projeto.nome}"
            >
                Saiba mais
            </button>
        </article>
    `;
}


// Gera todos os projetos utilizando o mesmo template
function gerarProjetos() {
    return projetos
        .map(function (projeto) {
            return criarTemplateProjeto(projeto);
        })
        .join("");
}


// Templates utilizados pela Single Page Application
export const templates = {
    inicio: `
        <section>
            <h2>Transformando vidas através da solidariedade e do Pão de Queijo</h2>

            <img
                src="${imagemVoluntarios}"
                alt="Voluntários da ONG Boa Demais da Conta entregando pacotes de pães de queijo em uma ação comunitária em uma comunidade pobre"
            >

            <p>
                A ONG Boa Demais da Conta trabalha para promover oportunidades
                e melhorar a qualidade de vida de pessoas em situação
                de vulnerabilidade, levando o melhor da comida mineira para todos.
            </p>
        </section>

        <section>
            <h2>Sobre a ONG</h2>

            <p>
                A ONG Boa Demais da Conta desenvolve projetos sociais e
                educacionais com o objetivo de aproximar pessoas
                dispostas a ajudar das comunidades que precisam de apoio.
            </p>

            <h3>Nossa missão</h3>

            <p>
                Combate a Fome e promover ações que contribuam para uma sociedade
                mais solidária, inclusiva e com maiores oportunidades.
            </p>

            <h3>Nosso objetivo</h3>

            <p>
                Incentivar a participação social e oferecer apoio
                por meio de projetos voltados à alimentação, educação,
                inclusão e assistência comunitária.
            </p>
        </section>

        <section>
            <h2>Como você pode ajudar</h2>

            <p>
                Você pode participar dos nossos projetos como
                voluntário ou colaborador.
            </p>

            <a href="#cadastro" data-rota="cadastro">
                Faça seu cadastro
            </a>
        </section>

        <section>
            <h2>Entre em contato</h2>

            <address>
                <p>
                    <strong>E-mail:</strong>
                    <a href="mailto:contato@boademaisdaconta.org">
                        contato@boademaisdaconta.org
                    </a>
                </p>

                <p>
                    <strong>Telefone:</strong>
                    <a href="tel:+5511999999999">
                        (11) 99999-9999
                    </a>
                </p>

                <p>
                    <strong>Endereço:</strong>
                    Rua Cruzeiro do Sul, 2026 - Guarulhos, SP
                </p>
            </address>
        </section>
    `,

    projetos: `
        <section>
            <h2>Nossas iniciativas</h2>

            <p>
                Conheça alguns dos projetos desenvolvidos pela
                ONG Boa Demais da Conta.
            </p>
        </section>

        <section>
            <h2>Projetos sociais</h2>

            <div class="projetos-container">
                ${gerarProjetos()}
            </div>
        </section>

        <section>
            <h2>Participe</h2>

            <p>
                Se você deseja contribuir com nossas iniciativas,
                faça seu cadastro como colaborador.
            </p>

            <a href="#cadastro" data-rota="cadastro">
                Quero participar
            </a>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro de colaboradores</h2>

            <p>
                Preencha o formulário abaixo para demonstrar
                seu interesse em participar das ações da ONG.
            </p>

            <div class="alerta" role="alert">
                <strong>Atenção:</strong>
                os campos indicados como obrigatórios devem ser
                preenchidos corretamente antes do envio.
            </div>
        </section>

        <section>
            <h2>Informações pessoais</h2>

            <form id="form-cadastro" novalidate>
                <fieldset>
                    <legend>Dados pessoais e contato</legend>

                    <div>
                        <label for="nome">Nome completo:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome completo"
                            required
                        >
                    </div>

                    <br>

                    <div>
                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="exemplo@email.com"
                            required
                        >
                    </div>

                    <br>

                    <div>
                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            inputmode="numeric"
                            maxlength="14"
                            required
                        >
                    </div>

                    <br>

                    <div>
                        <label for="telefone">Telefone:</label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            inputmode="numeric"
                            maxlength="15"
                            required
                        >
                    </div>

                    <br>

                    <div>
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            inputmode="numeric"
                            maxlength="9"
                            required
                        >
                    </div>
                </fieldset>

                <br>

                <fieldset>
                    <legend>Interesse em participar</legend>

                    <div>
                        <label for="mensagem">
                            Por que deseja participar?
                        </label>

                        <br>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            cols="40"
                        ></textarea>
                    </div>
                </fieldset>

                <br>

                <button type="submit">
                    Enviar cadastro
                </button>

                <p
                    id="mensagem-formulario"
                    class="mensagem-formulario"
                    aria-live="polite"
                ></p>
            </form>
        </section>
    `
};