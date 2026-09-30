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
- **Vite** para desenvolvimento, geração e otimização do build de produção;
- **Node.js e npm** para execução dos scripts e gerenciamento das dependências de desenvolvimento;
- **Git e GitHub** para versionamento e organização do desenvolvimento;
- **GitHub Actions** para automação do processo de build e deploy;
- **GitHub Pages** para publicação da versão de produção.

## Estrutura do projeto

```text
Atividade 4-4/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── images/
│   └── voluntarios.webp
├── js/
│   ├── app.js
│   ├── formulario.js
│   ├── interface.js
│   ├── router.js
│   ├── storage.js
│   └── templates.js
├── scripts/
│   └── ajustar-build.js
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

Os arquivos JavaScript foram separados de acordo com suas responsabilidades. O `app.js` inicializa a aplicação, o `router.js` controla a navegação, o `templates.js` contém os templates utilizados pela SPA, o `formulario.js` controla o formulário, o `interface.js` gerencia elementos interativos e o `storage.js` concentra o acesso ao armazenamento local.

O arquivo `vite.config.js` contém a configuração do Vite utilizada no build de produção. O script `ajustar-build.js` reorganiza o arquivo `index.html` gerado para que ele fique na raiz da pasta `dist`, estrutura utilizada na publicação pelo GitHub Pages.

## Como executar o projeto

Para executar o projeto localmente é necessário possuir o Node.js instalado.

Após clonar ou baixar o repositório:

1. Abra a pasta do projeto no Visual Studio Code;
2. Execute `npm install` para instalar as dependências;
3. Execute `npm run dev` para iniciar o ambiente de desenvolvimento;
4. Acesse no navegador o endereço informado pelo Vite.

Para gerar a versão de produção, utilize:

```bash
npm run build
```

O build otimizado será criado na pasta `dist`.

Para testar localmente a versão de produção, utilize:

```bash
npm run preview
```

A biblioteca IMask é carregada externamente por CDN, portanto é necessária conexão com a internet para o carregamento dessa biblioteca.

## Build e otimização

O Vite é utilizado para gerar e otimizar os arquivos destinados ao ambiente de produção.

Durante o processo de otimização, os arquivos HTML, CSS e JavaScript utilizados pela aplicação passaram de 41.738 bytes para 25.129 bytes após o build, representando uma redução aproximada de 39,8%.

A imagem utilizada na página inicial também foi otimizada. O arquivo original em JPG, com resolução de 1168 × 784 pixels e 462.270 bytes, foi redimensionado para 876 × 588 pixels e convertido para WebP, passando a ocupar 306.740 bytes, uma redução aproximada de 33,6%.

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

Após a implementação e os testes, as alterações são integradas novamente à `develop` por meio de Pull Requests. Quando uma versão está pronta para lançamento, as alterações da `develop` são integradas à `main`.

As mensagens de commit seguem o padrão **Conventional Commits**, utilizando identificadores como:

- `feat:` para novas funcionalidades;
- `docs:` para alterações na documentação;
- `fix:` para correções de erros;
- `perf:` para otimizações de desempenho;
- `ci:` para alterações relacionadas à integração e entrega contínua.

O projeto também utiliza **Issues**, **Milestones** e **Pull Requests** no GitHub para registrar tarefas e acompanhar as alterações realizadas.

## Deploy

A aplicação está preparada para publicação no **GitHub Pages** por meio de um workflow do **GitHub Actions**.

Quando uma versão é enviada para a branch `main`, o workflow executa automaticamente as etapas necessárias para preparar a publicação:

1. Obtém o código do repositório;
2. Configura o ambiente Node.js;
3. Instala as dependências com `npm ci`;
4. Executa o build de produção;
5. Prepara os arquivos da pasta `dist`;
6. Publica o artefato no GitHub Pages.

O caminho base utilizado pelo Vite também foi configurado para o endereço do repositório no GitHub Pages.

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