import Icon from './home.jpeg';
import Cow from './images/roastedCarrots.jpeg';
import Bread from './images/bread.jpeg';
import Pasta from './images/farfalle.jpeg';
import Tofu from './images/tofu.jpeg';
import Cabbage from './images/cabbage.jpeg';
import Shots from './images/shots.jpeg';
import Moose from './images/moose.jpeg';
import Brownies from './images/brownies.jpeg';
import Coffee from './images/coffee.jpeg';
import Mint from './images/mint.jpeg';
import Mary from './images/mary.jpeg';

// Creates menu items
function menu() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');

  // Create menu navigation buttons
  var menuNav = document.createElement('div');
  menuNav.classList.add('menuNav'); 

  const titles = ['Starters', 'Mains', 'Desserts', 'Drinks'];
  for (var title of titles) {
    var btn = document.createElement('button');
    btn.innerText = title;
    btn.setAttribute('id', `btn${title}`);
    menuNav.appendChild(btn);
  }

  body.appendChild(menuNav);

  // Create main body of menu content
  var bodyMain = document.createElement('div');
  bodyMain.setAttribute('id', 'bodyMain');
  bodyMain.classList.add('menuBody');

  body.appendChild(bodyMain);
  
  createTitle('starters');

  createCard('Armpit Roasted Carrots', Cow, "Armpit Roasted Carrots",
   'All our staff sleep with a carrot in each armpit every night to produce this delicious slow-roasted starter. Garnished with a deconstructed non-gmo orange.', 14);
   createCard('Air-dried bread', Bread, 'Air-dried bread', "We hang this bread in  the alleyway for three weeks before serving to make sure it has our signature 'snap'. Served without butter or water.", 7);
  
  createCard("Nonna's Antipasto (Thursday only)", Pasta, "Nonna's Antipasto", "As part of our outreach intitative, every Thursday we bus in some Italian grandmothers from the nearby nursing home to hand-craft this absoutely scrumpcious dish. Drizzled with a pinenut and basil pesto.", 13)
  
  createTitle('mains');

  createCard('Vegetable Fiesta', Icon, 'Vegetable Fiesta', "The dish that started it all. Grown by mute monks, these vegetables have been regularly blessed to ensure their flavour speaks volumes.", 15);

  createCard('Tasty Tofu', Tofu, 'Tasty Tofu Tofu', "Think tofu is proper rank? You won't after this! All the soy beans are harvested from a single plant on the Altiplano plains in Peru to create the most delicate, uniform texture.", 14);

  createCard('Raw Brussels Sprouts', Cabbage, 'Raw Brussels Sprouts', 'One for the sadists.', 5)

  createTitle('desserts');

  createCard('Shots! Shots! Shots!', Shots, 'Shots! Shots! Shots!', "Shots are always a good idea. Especially when they're a medley of classic desserts.", 9);

  createCard('Moose mousse blocks', Moose, 'Moose mousse blocks', "Rescued heritage-breed moose/meese/mooses are used to power our vegan-cream-whipping-machine&#8482. We then mix the cream with dessicated strawberries before it's flash-frozen to produce these delectable, fruity blocks.", 11)

  createCard('Vegan Brownies', Brownies, 'Vegan Brownies', "Since amendment 12.8 to the 1979 UK Statue on Restaurant Puddings every food establishment has been required by law to offer brownies for dessert - no matter how dry and uninspired they are. Here's our vegan version.", 10);

  createTitle('drinks');

  createCard('Flat-out white', Coffee, 'Flat-out white', "You know the deal. Drink it and do things quickly. Made with gluten-free, lactose-negative skinny oat milk.", 2.50);

  createCard('Minty Mule', Mint, 'Minty Mule', "Brimmed with organic toilet-tequila from the local prison this mule packs a minty punch. Served in a glass jar with a bio-degradeable sweetcorn straw to justify the price.", 9);

  createCard('Oh, Bloody Hell Mary!', Mary, 'Oh, Bloody Hell Mary!', "The perfect drink if you're still feeling rough from last night, or fancy feeling awful tomorrow. Juice made with vine-ripened tomatoes from our own greenhouse.", 10);

  // Add event listeners to menu navigation buttons
  document.getElementById('btnStarters').addEventListener('click', () => {scrollTo('starters')});
  document.getElementById('btnMains').addEventListener('click', () => {scrollTo('mains')});
  document.getElementById('btnDesserts').addEventListener('click', () => {scrollTo('desserts')});
  document.getElementById('btnDrinks').addEventListener('click', () => {scrollTo('drinks')});
  
  // Add return to top button
  upBtn();
}

// Creates menu item card with title, picture, description and price
function createCard(title, imageSrc, imgAlt, explanation, price) {
  const bodyMain = document.getElementById('bodyMain');
  const card = document.createElement('div');
  card.classList.add('card');

  var header = document.createElement('h1');
  header.textContent = title;

  var picture = document.createElement('div');
  picture.classList.add('food')
  const shot = document.createElement('img');
  shot.src = imageSrc;
  shot.alt = imgAlt;
  picture.appendChild(shot);

  var description = document.createElement('div');
  description.innerHTML =  explanation;

  var value = document.createElement('div');
  value.textContent = `£${price}`

  card.appendChild(header);
  card.appendChild(picture);
  card.appendChild(description);
  card.appendChild(value);
  bodyMain.appendChild(card);
}

// Creates course divider card.
function createTitle(course) {
  var title = document.createElement('h2');
  title.textContent = course.slice(0, 1).toUpperCase() + course.slice(1);
  title.setAttribute('Id', `${course}`);
  bodyMain.appendChild(title);
}

// Scrolls to given course
function scrollTo(section) {
  document.getElementById(`${section}`).scrollIntoView();
}

// Returns view window to top
function upBtn() {
  const body = document.getElementById('body');
  var upBtn = document.createElement('button');
  upBtn.textContent = "To top";
  upBtn.addEventListener('click', () => scrollTo('header'));
  upBtn.classList.add('upBtn');
  body.appendChild(upBtn);
}

export { menu }