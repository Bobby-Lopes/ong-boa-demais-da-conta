# ONG Boa Demais da Conta

Projeto desenvolvido durante as atividades do curso de Análise e Desenvolvimento de Sistemas, com o objetivo de aplicar na prática conceitos de desenvolvimento web utilizando HTML, CSS e JavaScript.

A aplicação representa o site de uma ONG fictícia chamada **ONG Boa Demais da Conta**, apresentando informações sobre a instituição, seus projetos e uma área para cadastro de colaboradores.

## Funcionalidades

A aplicação foi desenvolvida como uma Single Page Application (SPA), permitindo a navegação entre as principais áreas sem o recarregamento completo da página.

Entre as principais funcionalidades estão:

- Navegação entre Início, Projetos e Cadastro por meio de rotas utilizando o hash da URL;
- Exibição dinâmica dos projetos utilizando templates JavaScript;
- Formulário para cadastro de colaboradores;
- Validação dos campos do formulário;
- Máscaras para CPF, telefone e CEP;
- Salvamento de rascunho do formulário no `localStorage`;
- Modal com informações dos projetos;
- Mensagens de feedback através de toast;
- Menu responsivo para diferentes tamanhos de tela;
- Modo claro e modo escuro com preferência salva no navegador;
- Melhorias de acessibilidade para navegação por teclado e controle de foco.

## Tecnologias utilizadas

O projeto utiliza:

- **HTML5** para a estrutura semântica das páginas;
- **CSS3** para estilização, responsividade, Grid e Flexbox;
- **JavaScript** para interatividade, manipulação do DOM, validação e navegação da SPA;
- **ES6 Modules** para separar as responsabilidades dos arquivos JavaScript;
- **IMask** para aplicar máscaras nos campos de CPF, telefone e CEP;
- **localStorage** para armazenar o rascunho do formulário e a preferência de tema;
- **Git e GitHub** para versionamento e organização do desenvolvimento.

## Estrutura do projeto

```text
Atividade 4-4/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── images/
│   └── voluntarios.jpg
├── js/
│   ├── app.js
│   ├── formulario.js
│   ├── interface.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
└── README.md
```

Os arquivos JavaScript foram separados de acordo com suas responsabilidades. O `app.js` inicializa a aplicação, o `router.js` controla a navegação, o `templates.js` contém os templates utilizados pela SPA, o `formulario.js` controla o formulário, o `interface.js` gerencia elementos interativos e o `storage.js` concentra o acesso ao armazenamento local.

## Como executar o projeto

O projeto não utiliza instalação de pacotes ou processo de build.

Para executá-lo localmente:

1. Clone ou faça o download do repositório;
2. Abra a pasta do projeto no Visual Studio Code;
3. Abra o arquivo `html/index.html` em um navegador;
4. Utilize o menu da aplicação para navegar entre as áreas disponíveis.

A biblioteca IMask é carregada externamente por CDN, portanto é necessária conexão com a internet para o carregamento dessa biblioteca.

## Acessibilidade

Foram aplicadas melhorias de acessibilidade seguindo recomendações da WCAG 2.1, incluindo:

- Uso de elementos semânticos como `header`, `nav`, `main` e `footer`;
- Uso de atributos ARIA em elementos interativos;
- Indicação visual de foco durante a navegação por teclado;
- Controle de foco no modal;
- Possibilidade de fechar o modal utilizando a tecla `Escape`;
- Retorno do foco ao elemento que abriu o modal;
- Mensagens de erro associadas aos campos do formulário;
- Foco automático no primeiro campo inválido;
- Modo escuro com contraste adaptado;
- Gerenciamento de foco durante as mudanças de rota da SPA.

## Versionamento

O projeto utiliza Git e GitHub para controle de versão.

A branch `main` é utilizada para manter a versão estável do projeto, enquanto a `develop` concentra as alterações em desenvolvimento. Novas funcionalidades ou alterações são desenvolvidas em branches `feature/` criadas a partir da `develop`.

Após a implementação e os testes, as alterações são integradas novamente à `develop` por meio de Pull Requests. Quando uma versão estiver pronta para lançamento, as alterações da `develop` podem ser integradas à `main`.

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando identificadores como:

- `feat:` para novas funcionalidades;
- `docs:` para alterações na documentação;
- `fix:` para correções de erros.

O projeto também utiliza **Issues**, **Milestones** e **Pull Requests** no GitHub para registrar tarefas e acompanhar as alterações realizadas.

## Responsividade

O layout foi desenvolvido utilizando CSS Grid e Flexbox, com adaptações para diferentes tamanhos de tela.

Foram utilizados breakpoints em:

- 480px;
- 768px;
- 1024px;
- 1280px;
- 1600px.

Dessa forma, a interface pode se adaptar desde dispositivos móveis até monitores maiores.

## Autor

Projeto desenvolvido por **Glauber "Bobby" Lopes** como parte das atividades acadêmicas do curso de Análise e Desenvolvimento de Sistemas.