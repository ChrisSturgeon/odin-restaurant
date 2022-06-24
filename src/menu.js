// Show restaurant menu
import Icon from './home.jpeg';
import Cow from './images/roastedCarrots.jpeg';

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
    courses.appendChild(btn);
  }
  body.appendChild(courses);

  createCard('Chris', Icon);
  createCard('Armpit Roasted Carrots', Cow,
   'All of our staff sleep with a carrot in each armpit everynight to produce this slow-roasted carrots which are gently cooked to perfection.', 14);

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
  description.textContent =  explanation;

  var value = document.createElement('div');
  value.textContent = `£ ${price}`

  








  card.appendChild(header);
  card.appendChild(picture);
  card.appendChild(description);
  card.appendChild(value);


  body.appendChild(card);
}



export { menu }