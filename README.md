# Análise de Bases de Dados com IA

Este projeto é uma aplicação React para análise de bases de dados utilizando diferentes modelos de IA, incluindo Árvore de Decisão, KNN, e Algoritmo Genético.

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org) instalado na versão 18.20.3 (LTS). OBS.: aconselho não utilizar a versão 20 ou 22
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) para gerenciar dependências.

### Instalação

1. **Clone o Repositório**

    ```bash
    git clone https://github.com/diogosilvabr/ReactApp.AI.git
    cd ReactApp.AI
    ```

2. **Instale as Dependências**

    ```bash
    npm install
    ```

3. **Inicie a Aplicação**

    ```bash
    npm start
    ```

    O aplicativo será aberto em [http://localhost:3000](http://localhost:3000).

### Estrutura do Projeto

- **`public/`**: Contém o `index.html` e outros arquivos públicos.
- **`src/`**: Contém o código fonte da aplicação.
  - `App.js`: Componente principal da aplicação.
  - `ErrorBoundary.js`: Componente para captura de erros.
  - `index.css`: Arquivo de estilos.
  - `index.js`: Ponto de entrada da aplicação.
- **`package.json`**: Lista as dependências e scripts do projeto.

### Como Usar

1. **Escolha um modelo de IA**: Selecione entre Árvore de Decisão, KNN, ou Algoritmo Genético.
2. **Carregue um arquivo CSV**: Use o botão de upload para carregar a base de dados.
3. **Execute a Análise**: Clique em "ANÁLISE" para executar a análise.

### Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)

### Contribuição

Sinta-se à vontade para contribuir com o projeto através de *pull requests*. Para mudanças importantes, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

### Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
