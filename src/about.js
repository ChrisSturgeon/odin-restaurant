import Owners from './images/owners.jpeg'

// Creates about page body content 

function about() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('aboutBody');
  const intro = document.createElement('p');
  intro.innerText = "Hi! We're Bartholomew and Tabitha."

  const history = document.createElement('p');

  var text = "We quickly grew tired of the stereotypical zombie diet, ";
  text += "so decided to use our settlement money  to open Must Eat Grains - the world's first & only vegan zombie restaurant. ";
  text += "We work tirelessly to bring seasonal dishes to the undead community. Made only with the freshest ingredients sourced directly from our hand-selected pool of artisinal farms. ";
  text += "Here at Must Eat Grains we don't discriminate, the living are welcome too!"
  
  history.innerText = text;

  body.appendChild(intro);
  body.appendChild(history);

  const frame = document.createElement('div');
  frame.classList.add('food');
  const shot = document.createElement('img');
  shot.src = Owners;
  frame.appendChild(shot);

  body.appendChild(frame);
}

export { about }