


// Função para preencher a tabela com o array de objetos
//Criando ths da tabela usando for e um array com os nomes que eu quero colocar na tabela

export function preencherTabela(arg) {
    const exercicios = document.getElementById("tabela");
    var createTr = document.createElement("tr");
    exercicios.appendChild(createTr)

     // Array de textos para os cabeçalhos
     var textosTH = ["Workout", "Video", "Series", "Times"];

     for (var i = 0; i < 4; i++) {
        var novaTH = document.createElement("th");
        var textoTH = document.createTextNode(textosTH[i]);
        novaTH.appendChild(textoTH);
        exercicios.rows[0].appendChild(novaTH)
        createTr.appendChild(novaTH)
     }
     
    for (const args of arg) {

        const novaLinha = exercicios.insertRow();

        const nomeCelula = novaLinha.insertCell();
        const videoCelula = novaLinha.insertCell();
        const serieCelula = novaLinha.insertCell();
        const timesCelula = novaLinha.insertCell();

        nomeCelula.textContent = args.name;
        videoCelula.innerHTML = '<iframe src='+ args.video+' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        serieCelula.textContent = args.series;
        timesCelula.textContent = args.times;
    }
}





