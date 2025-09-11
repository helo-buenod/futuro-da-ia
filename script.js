const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: " onde a IA pode crescer muito no futuro?",
alternativas: [
"a) pintura",
"b) agricultura"
]
},
{ 
    enunciado:"como garantir o uso seguro da IA?",
    alternativas: [
"a) sem regras",
"b) ética e leis"

    ]
},
{
    enunciado: "o que a IA fara com os empregos", 
    alternativas: [ 
        "a) acabar com todos",
         "b) auromatizar e criar novos"
    ]
},
  {
    enunciado:"qual o maior risco da IA?",
    alternativas:[
        "a) acabar com todos",
   "b) auromatizar e criar novos"
    ]
},
{
    enunciado: "como  a IA ajuda na saúde?",
    alternativas: [
    "a) substituir médicos",
    "b) diagnostico cedo"
]
},
];

let atual= 0;
let perguntaAtual;

function mostraAlternativa() {
    for ( const alternativa of perguntaAtual.alternativas) {
     const botaoAlternativas = document.createElement("button");
     botaoAlternativas.textContent = alternativa;
     caixaAlternativa.appendChild(botaoAlternativas);
    }
}

mostraPergunta();



