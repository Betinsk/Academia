
const chest = [
    { 
        name: 'Voador',
        series: '3',
        times: ' 10 to 12'
    },

    {
        name: 'Incline bench press',
        series: '3',
        times: ' 10 to 12'
    },

    {
        name: 'Crosshover',
        series: '3',
        times: ' 10 to 12'
    }
];


// Função para preencher a tabela com o array de objetos
function preencherTabela() {
    const exercicios = document.getElementById("tabela");

    for (const chest1 of chest) {
        const novaLinha = exercicios.insertRow();

        const nomeCelula = novaLinha.insertCell();
        const serieCelula = novaLinha.insertCell();
        const timesCelula = novaLinha.insertCell();

        nomeCelula.textContent = chest1.name;
        serieCelula.textContent = chest1.series;
        timesCelula.textContent = chest1.times;
    }
}

// Chame a função para preencher a tabela assim que a página for carregada
preencherTabela();