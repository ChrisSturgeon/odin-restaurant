// Creates home page

function base() {
  const content = document.getElementById('content');
  content.classList.add('content');

  // Header
  const header = document.createElement('div');
  header.classList.add('header')
  header.setAttribute('id', 'header');

  // Restaurant title
  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent = 'Must Eat Grains';
  header.appendChild(title);


  // Header menu
  const headerMenu = document.createElement('div');
  headerMenu.classList.add('headerMenu');
  const menuItems = ['home', 'menu', 'about', 'contact'];

  for (var item of menuItems) {
    var option = document.createElement('button');
    option.textContent = item.slice(0, 1).toUpperCase() + item.slice(1);
    option.setAttribute('id', `${item}`);
    option.classList.add('menuBtn');
    headerMenu.appendChild(option);
  }

  header.appendChild(headerMenu);

  // Body 
  const body = document.createElement('div');
  body.setAttribute('id', 'body');

  // Footer
  const footer = document.createElement('div');
  footer.classList.add('footer')
  footer.innerHTML = "Images from <a href='https://unsplash.com/'>Unsplash</a>"


  // Append Content
  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);
  
}

export { base }