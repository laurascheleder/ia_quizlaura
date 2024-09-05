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
                “Achou que fosse outro né.”
                "Julia Child apesar de ser conhecida especialmente por seus trabalhos envolvendo gastronomia, como seu livro 'Mastering the Art of French Cooking', em que apresenta receitas e técnicas clássicas francesas”
            },
            {
                texto: "Sem reservas",
                afirmacao: "Errado, A resposta certa é Julie e Júlia."
                "Com um pouco mais de estudo, você pode se tornar um defensor mais eficaz do meio ambiente."
            },
            {
                 texto: "Julie e Júlia",
                afirmacao: "Correto! Julie e Júlia foi baseado em um livro de culinária."
                "Use esse conhecimento para liderar iniciativas e promover a conscientização em sua comunidade."
            },
            {
                 texto: "Ratatoille",
                afirmacao: "Errado, A resposta certa é Julie e Júlia."
                "Reduzir essas emissões é essencial para mitigar os impactos futuros."
            }
            
        ]
    },
    {
        enunciado: "Qual o principal tema abordado em todos esses filmes?",
        alternativas: [
            {
                texto: "Romance",
                afirmacao: "Errado, mesmo tendo um pouco de romance a resposta correta é gastronomia."
                "Proteger as florestas é vital para manter o equilíbrio climático."
            },
            {
                texto: "Gastronomia",
                afirmacao: "Correto! A resposta certa é gastronomia."
                "A transição para energias renováveis é crucial para reduzir essas emissões."
            },
            {
               texto: "Terror",
                afirmacao: "Errado,  a resposta correta é gastronomia."
                "Combater esses fatores é necessário para proteger o futuro do planeta."
            },
            {
                texto: "Comédia",
                afirmacao: "Errado, mesmo tendo um pouco de comédia a resposta correta é gastronomia." 
                "Este aumento pode levar a ondas de calor mais frequentes e intensas."
            }
        ]
    },
    {
        enunciado: "Ratatouille é um filme que se passa na:",
        alternativas: [
            {
                texto: "ítalia",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!"
                "Esses eventos incluem furacões, inundações e secas mais severas."
            },
            {
                texto: "França",
                afirmacao: "Resposta certa! o ratinho remi tem a sua aventura em, Paris na França!"
                "Este fenômeno afeta a vida marinha, especialmente os corais e as espécies que dependem deles."
            },
            {
                texto: "Estados Unidos",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!" 
                "Esses efeitos combinados têm consequências graves para ecossistemas e populações humanas."
            },
            {
                texto: "México",
                afirmacao: "Resposta errada. Ratatouille se passa em Paris na França!"
                "A cooperação internacional e o compromisso contínuo são fundamentais para o sucesso."
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
