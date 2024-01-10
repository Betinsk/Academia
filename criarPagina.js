import { createElementWithClass } from "./script.js";


export function criarPagina(array) {
    
    // Criação dos elementos HTML
    const html = document.createElement('html');
    const head = document.createElement('head');
    const body = document.createElement('body');
    const title = document.createElement('title');
    const h1 = document.createElement('h1');
    const paragrafo = document.createElement('p');
    const list = document.createElement('ul');
    const back = document.createElement('a')

    // Adição de conteúdo aos elementos
    title.textContent = array.type;
    h1.textContent = array.type;
    back.href = 'workouts.html'
    back.textContent = 'BACK';

     // Adição do vídeo
     const videoElement = document.createElement('iframe');
     videoElement.src = array.video;
     videoElement.width = '560';
     videoElement.height = '315';
     videoElement.frameborder = '0';
     videoElement.allowfullscreen = 'true';

    //Array completo
   /* array.forEach((info) => {
      const listItem = document.createElement('li');
      listItem.textContent = array.name;
      lista.appendChild(listItem);
    });*/

        //Array na posição
        list.appendChild(createElementWithClass('li', 'list', array.name ));
        list.appendChild(createElementWithClass('p', 'description', array.description))


    // Adição de elementos ao DOM
    head.appendChild(title);
    body.appendChild(h1);
    body.appendChild(paragrafo);
    body.appendChild(list);
    body.appendChild(videoElement); // Adiciona o elemento de vídeo ao corpo
    body.appendChild(back)
    html.appendChild(head);
    html.appendChild(body);
  
    // Limpa o conteúdo existente do corpo antes de adicionar o novo conteúdo
    document.body.innerHTML = '';

    // Adiciona o novo conteúdo ao corpo
    document.body.appendChild(html);

}
  
 
  
