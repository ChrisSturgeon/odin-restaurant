// Creates home page

import { home } from './home.js';

function base() {
  const content = document.getElementById('content');
  content.classList.add('content');

  // Header
  const header = document.createElement('div');
  header.classList.add('header')
  header.setAttribute('id', 'header');

  // Restaurant title
  const title = document.createElement('button');
  title.classList.add('title');
  title.addEventListener('click', home);
  title.textContent = 'Must Eat Grains';
  header.appendChild(title);


  // Header menu
  const headerBtns = document.createElement('div');

  headerBtns.classList.add('headerBtns');
  const menuItems = ['home', 'about', 'menu', 'contact'];

  for (var item of menuItems) {
    var option = document.createElement('button');
    option.textContent = item.slice(0, 1).toUpperCase() + item.slice(1);
    option.setAttribute('id', `${item}`);
    option.classList.add('menuBtn');
    headerBtns.appendChild(option);
  }

  header.appendChild(headerBtns);

  // Body 
  const body = document.createElement('div');
  body.setAttribute('id', 'body');

  // Footer
  const footer = document.createElement('div');
  footer.classList.add('footer')
  footer.setAttribute('id', 'footer')
  footer.innerHTML = "<a href='https://unsplash.com/'> Images from Unsplash</a>"


  // Append Content
  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);
  
}

export { base }