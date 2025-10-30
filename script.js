const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  { enunciado: "Onde a IA pode crescer muito no futuro?", alternativas: ["a) pintura", "b) agricultura"] },
  { enunciado: "Como garantir o uso seguro da IA?", alternativas: ["a) sem regras", "b) ética e leis"] },
  { enunciado: "O que a IA fará com os empregos?", alternativas: ["a) acabar com todos", "b) automatizar e criar novos"] },
  { enunciado: "Qual o maior risco da IA?", alternativas: ["a) dominação total", "b) mau uso humano"] },
  { enunciado: "Como a IA ajuda na saúde?", alternativas: ["a) substituir médicos", "b) diagnóstico precoce"] },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPergunta.textContent = perguntaAtual.enunciado;
  caixaAlternativa.textContent = "";
  mostraAlternativa();
}

function mostraAlternativa() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativa.appendChild(botao);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += opcaoSelecionada + " ";
  atual++;
  if (atual < perguntas.length) {
    mostraPergunta();
  } else {
    mostraResultado();
  }
}

function mostraResultado() {
  caixaPergunta.textContent = "História sobre IA:";
  textoResultado.textContent = "Um dia, uma médica usou a IA para diagnosticar uma doença rara. Ela percebeu que a tecnologia não substitui o olhar humano — apenas o amplia. Juntas, pessoa e máquina salvaram uma vida.";
  caixaAlternativa.textContent = "";
}

mostraPergunta();
