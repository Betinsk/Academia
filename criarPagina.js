import { createElementWithClass } from "./script.js";

function createAnchor(href, className, text) {
  const anchor = createElementWithClass('a', className, text);
  anchor.href = href;
  return anchor;
}

export function criarPagina(array) {
    
    // Criação dos elementos HTML
    const html = document.createElement('html');
    const head = document.createElement('head');
    const body = document.createElement('body');
    const container = createElementWithClass('div', 'container', '')
    const mainDiv = createElementWithClass('div', 'mainDiv', '')
    const contentDiv = document.createElement('div');
    const back = createAnchor('chest.html', 'buttonBack', 'BACK')


      // Adição do vídeo
      const videoElement = document.createElement('iframe');
      videoElement.src = array.video;
      videoElement.width = '560';
      videoElement.height = '315';
      videoElement.frameborder = '0';
      videoElement.allowfullscreen = 'true';
 
    // Adição de elementos ao DOM
    head.appendChild(createElementWithClass('title', 'titlePage', array.type));
    body.appendChild(container)
    container.appendChild(mainDiv)
    mainDiv.appendChild(contentDiv);
    mainDiv.appendChild(videoElement); // Adiciona o elemento de vídeo ao corpo
    mainDiv.appendChild(back)
    html.appendChild(head);
    html.appendChild(body);
  
  

   
        //Array na posição
        contentDiv.appendChild(createElementWithClass('h3', 'name', array.name ));
        contentDiv.appendChild(createElementWithClass('p', 'description', array.description))

  
    // Limpa o conteúdo existente do corpo antes de adicionar o novo conteúdo
    document.body.innerHTML = '';

    // Adiciona o novo conteúdo ao corpo
    document.body.appendChild(html);

}
  
 
  
