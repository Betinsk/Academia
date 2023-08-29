
// Função para criar elementos com classes e conteúdo
function createElementWithClass(tag, className, content) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (content) {
      element.textContent = content;
  }
  return element;
}

// Função para criar elementos <a> com atributos
function createAnchor(href, text) {
  const anchor = createElementWithClass('a', 'nav-link', text);
  anchor.href = href;
  return anchor;
}

// Função para criar elementos de lista <li> com ancoras
function createListItem(href, text) {
  const listItem = createElementWithClass('li', 'nav-item');
  const anchor = createAnchor(href, text);
  listItem.appendChild(anchor);
  return listItem;
}

const nav = document.getElementById('nav')

const divImg = createElementWithClass('div', 'divImg');
const img = document.createElement('img')
img.src= '../assets/places/logo.jpg'
divImg.appendChild(img)

const title = createElementWithClass('span', 'nav-title', 'PureForme Fitness');


const divUl = document.createElement('div')
divUl.id = 'ul';

const ul = createElementWithClass('ul', 'nav-list');

ul.appendChild(createListItem('index.html', 'Index'));
ul.appendChild(createListItem('benefits.html', 'Benefits'));
ul.appendChild(createListItem('locais.html', 'Places'));

// Criando o ícone de menu hamburguer
const divHamburger = createElementWithClass('div', 'hamburger');

for (let i = 0; i < 3; i++) {
    const bar = createElementWithClass('div', 'bar');
    divHamburger.appendChild(bar);
}

nav.appendChild(divImg)
nav.appendChild(title);
nav.appendChild(divUl)
divUl.appendChild(ul);

divHamburger.id = 'divHamburger';

nav.appendChild(divHamburger)

// Defina a variável para armazenar a largura do navegador
let larguraNavegador = window.innerWidth;
let menuHamburguer = false

const toggleButton = document.getElementById('divHamburger');

// Função para atualizar a variável e fazer algo com base na largura
function atualizarLarguraNavegador() {
  larguraNavegador = window.innerWidth;

  // Exemplo: Alterar o conteúdo da página com base na largura do navegador
  if (larguraNavegador > 900) {
    // Código a ser executado para telas largas
    divUl.classList.remove('visible');
    menuHamburguer = false

  } else if (larguraNavegador < 750 && menuHamburguer ) {
    // Código a ser executado para telas médias
     menuHamburguer = false
  } else {
    // Código a ser executado para telas estreitas
  }

}

// Chame a função pela primeira vez
atualizarLarguraNavegador();

toggleButton.addEventListener('click', () => {
    divUl.classList.toggle('visible');
    menuHamburguer = true
    atualizarLarguraNavegador();
});

// Adicione um ouvinte de evento para capturar as mudanças de tamanho da janela
window.addEventListener('resize', atualizarLarguraNavegador);

