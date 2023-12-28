
// Função para preencher a tabela com o array de objetos
//Criando ths da tabela usando for e um array com os nomes que eu quero colocar na tabela
import { createElementWithClass } from "./script.js";

    export function preencherCards(arr) {
        const arg = arr.length
            for (var i = 0; i < arg; i++) {
                const exercicios = document.getElementById('divCards');
                var a = createElementWithClass('a', 'cardLink', '')

                    var div = createElementWithClass('div', 'card','')
                         var title = createElementWithClass('p', 'cardTitle', arr[i].name)
                      var imgAd = createElementWithClass('img', 'cardImg', '')
                  imgAd.src = arr[i].imgs
              exercicios.appendChild(a)
              a.href = 'oi'
              a.appendChild(div)

            div.appendChild(title)
         div.appendChild(imgAd)
        }
    }

export function preencherTabela(arg) {
    const exercicios = document.getElementById("tabela");
    var createTable = document.createElement('table')
    createTable.classList.add('alingCenter', 'tabela')
    var createTr = document.createElement("tr");
    exercicios.appendChild(createTable)
    createTable.appendChild(createTr)

     // Array de textos para os cabeçalhos
     var textosTH = ["Workout", "Video", "Series", "Times"];

     for (var i = 0; i < textosTH.length; i++) {
        var novaTH = document.createElement("th");
        var textoTH = document.createTextNode(textosTH[i]);
        novaTH.appendChild(textoTH);
        createTable.rows[0].appendChild(novaTH)
        createTr.appendChild(novaTH)
     }
     
    for (const args of arg) {

        const novaLinha = createTable.insertRow();

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





