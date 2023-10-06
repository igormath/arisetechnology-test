# Teste Arise Technology

Esta é a minha solução para o Teste técnico da seleção de estágio em Desenvolvimento de Software na Arise Technology.

## Sumário

- [Visão Geral](#visão-geral)
  - [O Desafio](#o-desafio)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
  - [Rodando a solução localmente](#rodando-a-solução-localmente)
- [Meu processo](#meu-processo)
  - [Tecnologias e conceitos utilizados](#tecnologias-e-conceitos-utilizados)
  - [O que aprendi](#o-que-aprendi)
  - [Fontes utilizadas](#fontes-utilizadas)
- [Meus Links](#meus-links)

## Visão Geral

### O Desafio

Desenvolver um site responsivo de receitas que o usuário consiga buscar receitas por nome, primeira letra e ingredientes. As receitas devem ser obtidas da API TheMealDB.

**Requisitos Obrigatórios:**

- O site deve ser implementado em ReactJS;
- O código fonte deve ser disponibilizado no Github;
- O site deve ser hospedado em algum serviço de hosting como Github Pages, Netlify, Vercel, etc.

### Capturas de tela

-  [Captura de tela versão Mobile](https://github.com/igormath/arisetechnology-test/blob/main/src/assets/screenshots/mobile-screenshot.png)
- [Captura de tela versão Desktop](https://github.com/igormath/arisetechnology-test/blob/main/src/assets/screenshots/desktop-screenshot.png)

### Links

- [URL do deploy na Vercel](https://arisetechnology-test.vercel.app/)

### Rodando a solução localmente

No terminal:

```
$ git clone https://github.com/igormath/arisetechnology-test.git
$ cd arisetechnology-test/
$ npm install
$ npm run dev
```

## Meu processo

### Tecnologias e conceitos utilizados

- Fluxo de desenvolvimento Mobile-First
- HTML5 semântico
- Tailwind CSS
- Flexbox e Grid
- [React](https://reactjs.org/) - Biblioteca JS
- Fetch API
- ViteJs

### O que aprendi

Neste projeto, utilizei o framework CSS Tailwind pela primeira vez. Minha maior dificuldade com essa ferramenta reside em relação às medidas utilizadas, especialmente para altura e largura, já que costumava utilizar VH e VW nos meus projetos. No entanto, a ótima documentação, muito bem organizada, e a modularização da estilização aplicada ajudaram bastante no processo de desenvolvimento.

Os diferentes endpoints da API também me permitiram fazer chamadas de diferentes formas, desde uma requisição no carregamento da página até a busca por nome da receita ou a seleção da primeira letra desta.


### Fontes utilizadas

- [Stackoverflow](https://stackoverflow.com/) - Sempre ele. Tirei dúvidas desde HTML, Tailwind e React, tudo em um só lugar.
- [W3Schools](https://www.w3schools.com/) - Para mim a melhor fonte primária de informações sobre HTML, CSS e Javascript.
- [React Router: O guia completo para navegação em aplicativos React](https://www.youtube.com/watch?v=7b42lVMdEjE) - React router é uma biblioteca em constante evolução e esse vídeo me ajudou a entender as últimas novidades e implementar todas as rotas deste teste.
- [How to Make Responsive Navbar With Hamburger Menu in ReactJS using Tailwind CSS | ReactJS Projects](https://www.youtube.com/watch?v=OyGNBo_6m9Y) - Minha referência para montar o menu de sanduíches utilizando o Tailwind. Adaptei muitas coisas na minha implementação, desde medidas de *padding* e *margin* até a adição de semântica, mudando as tags HTML.
- [Aprenda em 13:37: Tailwind CSS](https://www.youtube.com/watch?v=dHwY5lRfkoQ) - Como este foi o meu primeiro projeto utilizando o Tailwind, utilizei esse vídeo para me inteirar, inicialmente, sobre o framework.
- [Documentação Tailwind](https://tailwindcss.com/) - Ótima para entender como o framework trata conceitos como responsividade.
- [Biblioteca de Códigos ASCII](https://www.ascii-code.com/) - Ajudou-me com o match entre a letra selecionada e a requisição à API.

## Meus links

- [GitHub](https://github.com/igormath)
- [E-mail](mailto:matheus.igor.p@gmail.com)