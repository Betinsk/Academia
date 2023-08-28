const nav = document.getElementById('nav')
const divImg = document.createElement('div')

const divUl = document.createElement('div')
divUl.id = 'ul';

const ul = document.createElement('ul')

const li0= document.createElement('li')
const li1 = document.createElement('li')
const li2= document.createElement('li')
const li3= document.createElement('li')

divImg.classList.add('divImg')

const img = document.createElement('img')
img.src= 'C:/Users/Betinho/Documents/Academia/assets/places/adesivo-decorativo-de-parede-academia-musculacao-fitness-papel.jpg'

const a00 = document.createElement('span')
a00.innerHTML = 'PureForme Fitness'

const a0 = document.createElement('a')
a0.href = 'C:/Users/Betinho/Documents/Academia/index.html'
a0.innerHTML = 'Index'
const a1 = document.createElement('a')
a1.href = 'C:/Users/Betinho/Documents/Academia/views/benefits.html'
a1.innerHTML = 'Benefits'
const a2 = document.createElement('a')
a2.href = 'C:/Users/Betinho/Documents/Academia/views/locais.html'
a2.innerHTML = 'Places'
const a3 = document.createElement('a')

nav.appendChild(divImg)
divImg.appendChild(img)
nav.appendChild(a00)
nav.appendChild(divUl)
divUl.appendChild(ul)
ul.appendChild(li0)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
li0.appendChild(a0)
li1.appendChild(a1)
li2.appendChild(a2)
li3.appendChild(a3)

const divHamburger = document.createElement('div')
divHamburger.id = 'divHamburger';

divHamburger.classList.add('hamburger')

const bar1 = document.createElement('div')
const bar2 = document.createElement('div')
const bar3= document.createElement('div')
bar1.classList.add('bar')
bar2.classList.add('bar')
bar3.classList.add('bar')

divHamburger.appendChild(bar1)
divHamburger.appendChild(bar2)
divHamburger.appendChild(bar3)

nav.appendChild(divHamburger)

// Defina a variável para armazenar a largura do navegador
let larguraNavegador = window.innerWidth;
let menuHamburguer = false

const toggleButton = document.getElementById('divHamburger');


console.log(larguraNavegador)

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
  console.log(menuHamburguer)

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

