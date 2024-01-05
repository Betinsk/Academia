export function criarPagina(array) {
    // Criação dos elementos HTML
    const html = document.createElement('html');
    console.log(array)
    const head = document.createElement('head');
    const body = document.createElement('body');
    const title = document.createElement('title');
    const h1 = document.createElement('h1');
    const paragrafo = document.createElement('p');
    const lista = document.createElement('ul');
    const back = document.createElement('a')

    // Adição de conteúdo aos elementos
    title.textContent = 'Página Gerada pela Função';
    h1.textContent = 'Bem-vindo à minha página gerada pelo DOM!';
    paragrafo.textContent = 'Esta página foi criada dinamicamente usando JavaScript e o DOM.';
    back.href = 'workouts.html'
    back.textContent = 'BACK';


    //Array completo
   /* array.forEach((info) => {
      const listItem = document.createElement('li');
      listItem.textContent = array.name;
      lista.appendChild(listItem);
    });*/

        //Array na posição
        const listItem = document.createElement('li');
        listItem.textContent = array.name;
        console.log(array)
        lista.appendChild(listItem);


    // Adição de elementos ao DOM
    head.appendChild(title);
    body.appendChild(h1);
    body.appendChild(paragrafo);
    body.appendChild(lista);
    body.append(back)
    html.appendChild(head);
    html.appendChild(body);
  

    // Limpa o conteúdo existente do corpo antes de adicionar o novo conteúdo
    document.body.innerHTML = '';

    // Adiciona o novo conteúdo ao corpo
    document.body.appendChild(html);

}
  
 
  
