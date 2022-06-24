// Show restaurant menu
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


function mainsScroll() {
  document.getElementById('mainsTitle').scrollIntoView({behavior: 'smooth'});
}


function menu() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('menuBody')

  const courses = document.createElement('div');
  courses.classList.add('menuOptions');
  
  const titles = ['Starters', 'Mains', 'Desserts', 'Drinks'];

  for (var title of titles) {
    var btn = document.createElement('button');
    btn.innerText = title;
    btn.setAttribute('id', `btn${title}`);
    courses.appendChild(btn);
  }
  body.appendChild(courses);

  createTitle('starters');

  createCard('Armpit Roasted Carrots', Cow,
   'All our staff sleep with a carrot in each armpit every night to produce this delicious slow-roasted starter. Garnished with a deconstructed non-gmo orange.', 14);
  createCard('Air-dryed bread', Bread, "We hang this bread in  the alleyway for three weeks before serving to make sure it has our signature 'snap'. Served without butter or water.", 7);
  createCard("Nonna's Antipasto (Thursday only)", Pasta, "As part of our outreach intitative, every Thursday we bus in some Italian grandmothers from the nearby nursing home to hand-craft this absoutely scrumpcious dish. Drizzled with a pinenut and basil pesto.", 13)
  
  createTitle('mains');

  createCard('Vegetable Fiesta', Icon, "The dish that started it all. Grown by mute monks, these vegetables have been regularly blessed to ensure they're bursting with flavour.", 15);

  createCard('Tasty Tofu', Tofu, "Think tofu is proper rank? You won't after this! All the soy beans are harvested from a single plant on the Altiplano plains in Peru to create the most delicate, uniform texture.", 14);

  createCard('Raw Brussels Sprouts', Cabbage, 'One for the sadists.', 5)

  createTitle('desserts');

  createCard('Shots! Shots! Shots!', Shots, "Shots are always a good idea. Especially when they're a medley of classic desserts.", 9);

  createCard('Moose mousse blocks', Moose, "Rescued heritage-breed moose/meese/mooses are used to power our vegan-cream-whipping-machine&#8482. We then mix the cream with dessicated strawberries before it's flash-frozen to produce these delectable, fruity blocks.", 11)

  createCard('Vegan Brownies', Brownies, "Since amendment 12.8 to the 1979 UK Statue on Restaurant Puddings every restaurant establishment has been required by law to offer brownies for dessert - no matter how dry and uninspired they are. Here's our vegan version.", 10);

  createTitle('drinks');

  createCard('Flat-out white', Coffee, "You know the deal. Drink it and do things quickly. Made with gluten-free, lactose-negative skinny oat milk.", 2.50);

  createCard('Minty Mule', Mint, "Brimmed with organic toilet-tequila from the local prison this mule packs a minty punch. Served in a glass jar with a bio-degradeable sweetcorn straw to justify the price.", 9);

  createCard('Oh, Bloody Hell Mary!', Mary, "The perfect drink if you're still feeling rough from last night, or fancy feeling awful tomorrow. Juice made with vine-ripened tomatoes from our own greenhouse.", 10);
}

function createCard(title, imageSrc, explanation, price) {
  const body = document.getElementById('body');
  const card = document.createElement('div');
  card.classList.add('card');

  var header = document.createElement('h1');
  header.textContent = title;

  var picture = document.createElement('div');
  picture.classList.add('food')
  const shot = document.createElement('img');
  shot.src = imageSrc;
  picture.appendChild(shot);

  var description = document.createElement('div');
  description.innerHTML =  explanation;

  var value = document.createElement('div');
  value.textContent = `£${price}`

  card.appendChild(header);
  card.appendChild(picture);
  card.appendChild(description);
  card.appendChild(value);
  body.appendChild(card);

  document.getElementById('btnMains').addEventListener('click', mainsScroll);
}

function createTitle(course) {
  var title = document.createElement('h2');
  title.textContent = course.slice(0, 1).toUpperCase() + course.slice(1);
  title.setAttribute('Id', `${course}Title`);
  body.appendChild(title);
}




export { menu }