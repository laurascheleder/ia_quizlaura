const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUAL desses filmes descreve sobre uma história de um livro de culinária?",
        alternativas: [
            {
                texto: "Pegando fogo",
                afirmacao: "Errado, A resposta certa é Julie e Júlia."
            },
            {
                texto: "Sem reservas",
                afirmacao: "Errado, A resposta certa é Julie e Júlia."
            },
            {
                 texto: "Julie e Júlia",
                afirmacao: "Correto! Julie e Júlia foi baseado em um livro de culinária."
            },
            {
                 texto: "Ratatoille",
                afirmacao: "Errado, A resposta certa é Julie e Júlia."
            }
            
        ]
    },
    {
        enunciado: "Qual o principal tema abordado em todos esses filmes?",
        alternativas: [
            {
                texto: "Romance",
                afirmacao: "Errado, mesmo tendo um pouco de romance a resposta correta é gastronomia."
            },
            {
                texto: "Gastronomia",
                afirmacao: "Correto! A resposta certa é gastronomia."
            },
            {
               texto: "Terror",
                afirmacao: "Errado,  a resposta correta é gastronomia."
            },
            {
                texto: "Comédia",
                afirmacao: "Errado, mesmo tendo um pouco de comédia a resposta correta é gastronomia."  
            }
        ]
    },
    {
        enunciado: "Ratatouille é um filme que se passa na:",
        alternativas: [
            {
                texto: "ítalia",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!"
            },
            {
                texto: "França",
                afirmacao: "Resposta certa! o ratinho remi tem a sua aventura em, Paris na França!"
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!" 
            },
            {
                texto: "México",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
