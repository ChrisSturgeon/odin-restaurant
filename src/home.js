import Icon from './home.jpeg';

// Creates home page body content 

function home() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('homeBody');
  const description = document.createElement('p');

  var text = "Must Eat Grains is the world's first vegan zombie restaurant. <br>";
  text += "We only serve ethically, locally sourced organic produce to ensure your body gets the nutrients it needs to last forever."

  description.innerHTML = text;



  body.appendChild(description);

  const homeImage = new Image();
  homeImage.src = Icon;
  body.appendChild(homeImage);



}

export { home }