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
    const listItem = createElementWithClass('li', 'quick-item');
    const anchor = createAnchor(href, text);
    listItem.appendChild(anchor);
    return listItem;
  }

  function createListP(className, text) {
    var classe = className.split(' ')
    const icon  =  document.createElement('i');
    const paragraph = createElementWithClass('p', 'foot-content', text);
    classe.forEach(function(classe) {
      icon.classList.add(classe);
  });
    paragraph.appendChild(icon)
    return paragraph;
  }

  function createSocialIcons(className, href) {
    var classe = className.split(' ')
    const anchor = createAnchor(href);
    const icon  =  document.createElement('i');
    icon.appendChild(anchor);
    classe.forEach(function(classe) {
      icon.classList.add(classe);
  });
    return icon;
  }
  
  const rodape = document.getElementById('footer')

  const divFooterContant = createElementWithClass('div', 'footer-content')
  const divFooterInfo = createElementWithClass('div', 'footer-info')

  rodape.appendChild(divFooterContant)
  divFooterContant.appendChild(divFooterInfo)
  divFooterInfo.appendChild(createElementWithClass('h3', 'title', 'Contact Us'))

  divFooterInfo.appendChild(createListP('fa fa-map-marker', 'Adress: Amherst Dr NE, 101 Albuquerque, NM 87106, EUA '))
  divFooterInfo.appendChild(createListP('fa fa-envelope', 'Email: purefitness@gym.com '))
  divFooterInfo.appendChild(createListP('fa fa-phone', 'PhoneNumber: (123) 456-7890 '))

  //Div social icons
  const divSocialLinks = createElementWithClass('div', 'footer-media')
  divSocialLinks.appendChild(createSocialIcons('fa fa-facebook','#'))
  divSocialLinks.appendChild(createSocialIcons('fa fa-twitter','#'))
  divSocialLinks.appendChild(createSocialIcons('fa fa-instagram','#'))
  rodape.appendChild(divSocialLinks)

  const quickLinks = createElementWithClass('div', 'quick-links')
  const ulFooter = createElementWithClass('ul', 'quick-list');
  quickLinks.appendChild(createElementWithClass('h3', 'title', 'Quick links'))
  ulFooter.appendChild(createListItem('#', 'About Us'))
  ulFooter.appendChild(createListItem('#', 'Services'))
  ulFooter.appendChild(createListItem('#', 'Horários'))
  ulFooter.appendChild(createListItem('#', 'Contact'))


  quickLinks.appendChild(ulFooter)
  rodape.appendChild(quickLinks)

  