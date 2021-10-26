<h1>💻 Projeto CZSHOES</h1>
<p>O projeto consiste em uma plataforma similar a um e-commerce, que simula um carrinho de compras. No entanto o projeto conta com algumas funcionalidades diferentes, como por exemplo a alteração do estoque dos itens ao adicionar no carrinho. Os produtos listados na plataforma são fornecidos pelo JSON Server, que permite simular uma API.<p>

<h3>📌 Objetivo</h3>
<p>O objetivo principal do projeto foi aprender um pouco mais sobre React, Redux, Redux Saga, Redux Persist, TypeScript e Styled Components. Além de também utilizar o ESLint para a análise e padrões de código e o Prettier para formatar o código de acordo com o padrão definido.<br/>Apesar de ser um projeto simples, tive um pouco de dificuldade na integração do Redux e Redux Saga com o TypeScript.</p>

<h3>📋 Principais Funcionalidades</h3>
<ul>
  <li>
    <strong>Listagem de Produtos:</strong>
    Lista 6 produtos retornados pelo JSON Server.
  </li>
  <li>
    <strong>Adicionar item ao carrinho:</strong>
    O método adiciona um item no carrinho e reduz sua quantidade de estoque.
  </li>
  <li>
    <strong>Incrementar quantidade do item:</strong>
    Na página do carrinho, cada item possui um botão de incrementar a quantidade do mesmo.
  </li>
  <li>
    <strong>Decrementar quantidade do item:</strong>
    Na página do carrinho, cada item possui um botão de decrementar a quantidade do mesmo.
  </li>
  <li>
    <strong>Remover item do carrinho:</strong>
    Na página do carrinho, cada item possui um botão de Remover, que remove o item do carrinho.
  </li>
  <li>
    <strong>Finalizar Compra:</strong>
    Ao clicar no botão finalizar compra, o usuário é redirecionado para a página de sucesso e seu carrinho é resetado.
  </li>
</ul>

<h1>📥 Instalação e Execução</h1>
<p>Faça o clone desse repositório e acesse o diretório</p>
<pre>
$ git clone https://github.com/carloszaparoli/cz-shoes.git && cd cz-shoes
</pre>
<span>Instalando dependências:</span>
<pre>
$ npm install
</pre>
<span>Utilizando um outro terminal, vamos iniciar o servidor JSON Server (Ele que fornece os produtos, simulando uma API):</span>
<pre>
$ npm run server
</pre>
<span>Executando a aplicaçao:</span>
<pre>
$ npm start
</pre>

<h1>🚀 Tecnologias utilizadas</h1>
<ul>
  <li>
    <a href="https://pt-br.reactjs.org/" target="_blank">React</a>
  </li>
  <li>
    <a href="https://redux.js.org/" target="_blank">Redux</a>
  </li>
  <li>
    <a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/redux-persist" target="_blank">Redux Persist</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/redux-logger" target="_blank">Redux Logger</a>
  </li>
  <li>
    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
  </li>
  <li>
    <a href="https://github.com/axios/axios" target="_blank">Axios</a>
  </li>
  <li>
    <a href="https://eslint.org/" target="_blank">ESLint</a>
  </li>
  <li>
    <a href="https://prettier.io/" target="_blank">Prettier</a>
  </li>
  <li>
    <a href="https://www.npmjs.com/package/json-server" target="_blank">JSON Server</a>
  </li>
</ul>

<h1>🙌 Agradecimentos</h1>
<p>Agradeço a todos que me apoiaram e auxiliaram no desenvolvimento do projeto.
<hr/>
Desenvolvido com ❤️ por <a href="https://github.com/carloszaparoli/">Carlos Zaparoli</a> 😊
