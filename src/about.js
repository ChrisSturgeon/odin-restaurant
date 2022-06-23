import Icon from './owners.jpeg'

// Creates about page body content 

function about() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('aboutBody');
  const description = document.createElement('p');

  var text = "Hi! We're Bartholomew and Tabitha. <br>";
  text += "We quickly grew tired of the stereotypical zombie diet after our conversion, ";
  text += " and so decided to use our settlement money from Umbrella Corp. to open Must Eat Grains - the world's first & only vegan zombie restaurant. ";
  text += "We work tirelessly to bring seasonal dishes to the undead community. Made only with the freshest ingredients sourced directly from our hand-selected pool of artisinal farms. ";
  text += "Here at Must Eat Grains we don't discriminate, the living are welcome too!"

  description.innerHTML = text;

  body.appendChild(description);

  const ownersImg = new Image();
  ownersImg.src = Icon;
  body.appendChild(ownersImg);
}

export { about }