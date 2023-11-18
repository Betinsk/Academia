
const chest = [
    { 
        name: 'Voador',
        video: 'https://www.youtube.com/embed/J1YnmuweOkM?si=Nplw3bRZMWZTDEP6',
        series: '3',
        times: ' 10 to 12'
    },

    {
        name: 'Incline bench press',
        video: 'https://www.youtube.com/embed/Ky_JXqloq0w?si=3M07xaEI0IfMgFxr',
        series: '3',
        times: ' 10 to 12'
    },

    {
        name: 'Crosshover',
        video: 'https://www.youtube.com/embed/3iHf0jeHYNg?si=M6C2Vm5wuWemplq2',
        series: '3',
        times: ' 10 to 12'
    }
];


// Função para preencher a tabela com o array de objetos
function preencherTabela(arg) {
    const exercicios = document.getElementById("tabela");

    for (const args of arg) {
        const novaLinha = exercicios.insertRow();

        const nomeCelula = novaLinha.insertCell();
        const videoCelula = novaLinha.insertCell();
        const serieCelula = novaLinha.insertCell();
        const timesCelula = novaLinha.insertCell();

        nomeCelula.textContent = args.name;
        videoCelula.innerHTML = '<iframe width="500" height="300" src='+ args.video+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        serieCelula.textContent = args.series;
        timesCelula.textContent = args.times;
    }
}

// Chame a função para preencher a tabela assim que a página for carregada
preencherTabela(chest);