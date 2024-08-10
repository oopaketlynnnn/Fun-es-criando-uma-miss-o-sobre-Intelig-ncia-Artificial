const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Gabriel sempre foi curioso sobre novas tecnologias. Um dia, logo após a escola, ele descobriu um chat inovador que respondia todas as dúvidas com precisão e gerava imagens e áudios hiper-realistas. Imediatamente, ele teve uma reação:",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início, achou assustador pensar que máquinas poderiam mudar o mundo"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "No início, achou maravilhoso pensar que máquinas poderiam mudar o mundo"
            }
        ]
    },
    {
        enunciado: "Com o entusiasmo de Gabriel, sua professora de tecnologia decidiu organizar uma série de aulas sobre IA. No final de uma dessas aulas, ela pediu aos alunos que escrevessem um trabalho sobre o uso da IA na conservação da vida selvagem. Gabriel ponderou suas opções e tomou uma decisão:",
        alternativas: [
            {
                texto: "Ele utilizou uma ferramenta de busca que utiliza IA para encontrar informações relevantes, facilitando sua compreensão do tema.",
                afirmacao: "mas logo percebeu que a IA podia explicar termos complicados de forma simplificada"
            },
            {
                texto: "Ele escreveu o trabalho com base em conversas com colegas, pesquisas na internet e seu próprio conhecimento.",
                afirmacao: "ainda não percebeu que a IA podia explicar termos complicados de forma simplificada"
            }
        ]
    },
    {
        enunciado: "Após entregar seu trabalho, Gabriel participou de uma discussão sobre o impacto da IA no futuro do trabalho. Durante a discussão, ele apresentou sua visão:",
        alternativas: [
            {
                texto: "Ele defendeu a ideia de que a IA poderia criar novas oportunidades de emprego e melhorar as habilidades humanas, especialmente na área de conservação da vida selvagem.",
                afirmacao: "o que ajudou muito em suas pesquisas sobre conservação da vida selvagem. "
            },
            {
                texto: "Ele expressou sua preocupação com as pessoas que poderiam perder seus empregos para as máquinas, enfatizando a importância de proteger os trabalhadores, inclusive aqueles que trabalham na conservação da vida selvagem.",
                afirmacao: "o que ajudou muito em suas pesquisas sobre conservação da vida selvagem. "
            }
        ]
    },
    {
        enunciado: "No final da discussão, a tarefa era criar uma imagem no computador que representasse suas opiniões sobre o uso da IA na conservação da vida selvagem. Gabriel escolheu:",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA, mostrando animais selvagens em seus habitats protegidos por tecnologias de IA.",
                afirmacao: "Ele também notou que muitas pessoas não sabiam usar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes, promovendo a inclusão digital e a conscientização sobre a importância da tecnologia na preservação ambiental. A história de Gabriel é um exemplo de como a tecnologia pode ser percebida e utilizada de diferentes maneiras, moldando não apenas a educação, mas também o futuro do trabalho e as habilidades humanas, especialmente na importante área da conservação da vida selvagem."
            },
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint, destacando a interação entre tecnologias de IA e a vida selvagem.",
                afirmacao: "Ele também notou que muitas pessoas não sabiam usar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes, promovendo a inclusão digital e a conscientização sobre a importância da tecnologia na preservação ambiental. A história de Gabriel é um exemplo de como a tecnologia pode ser percebida e utilizada de diferentes maneiras, moldando não apenas a educação, mas também o futuro do trabalho e as habilidades humanas, especialmente na importante área da conservação da vida selvagem."
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();