# Conecta Solidária

Site institucional demonstrativo para uma ONG fictícia, desenvolvido com HTML5 semântico, CSS3 e JavaScript puro.

## Páginas

- `index.html` — apresentação institucional, missão, visão, valores, projetos em destaque e contato.
- `projetos.html` — projetos sociais, filtros por categoria, informações para voluntários, doações e transparência.
- `cadastro.html` — formulário com dados pessoais, endereço, perfil de interesse, validação HTML5 e máscaras de CPF, telefone e CEP.

## Estrutura

```text
conecta-solidaria/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── README.md
├── .gitignore
├── LICENSE
└── README.md
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra `index.html` no navegador. Para desenvolvimento, pode usar a extensão Live Server do Visual Studio Code.
3. Navegue pelas páginas usando o menu.

O site utiliza imagens remotas do Unsplash e fontes do Google Fonts. É necessária conexão à internet para carregar esses recursos externos.

## Funcionalidades implementadas

- Layout responsivo com abordagem mobile-first e breakpoints para telas menores.
- Navegação mobile acessível com botão e atributos ARIA.
- Estrutura semântica HTML5, link para pular ao conteúdo e foco visível.
- Metadados de descrição e títulos específicos em cada página.
- Filtros interativos de projetos.
- Máscaras para CPF, telefone e CEP.
- Validação nativa dos formulários HTML5.
- Preenchimento do perfil por parâmetro na URL, por exemplo `cadastro.html?perfil=voluntario`.
- Respeito à preferência por movimento reduzido.
- Imagens com texto alternativo e `loading="lazy"` em imagens abaixo da dobra.

## Importante: demonstração acadêmica

A Conecta Solidária e as estatísticas, contatos e projetos exibidos são fictícios/demonstrativos. Atualize os dados antes de qualquer publicação institucional.

O formulário não envia nem armazena informações. O botão apenas demonstra a validação no navegador. Não use dados pessoais reais nesta versão. Doações e pagamentos reais não são processados.

As imagens são carregadas por URLs externas do Unsplash; para uma entrega totalmente independente, baixe imagens com licença adequada, salve-as em `img/` e atualize os caminhos nos HTML. Confirme os termos e atribuições de cada recurso visual usado.

## Acessibilidade e validação

- Teste as páginas no [W3C Nu HTML Checker](https://validator.w3.org/nu/).
- Teste contraste e navegação por teclado.
- Faça testes em celular, tablet e desktop.
- Revise os textos alternativos e a ordem dos títulos.
- A conformidade WCAG 2.1 AA precisa ser confirmada por avaliação manual e ferramentas de auditoria; não é garantida apenas pelo código.

## Publicar no GitHub

1. Crie um repositório chamado `conecta-solidaria`.
2. Defina a visibilidade como **Public**.
3. Envie todos os arquivos e pastas, mantendo a estrutura.
4. No repositório, acesse **Settings → Pages**.
5. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e `/ (root)`, depois salve.
6. Aguarde a publicação e teste o link gerado.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)
