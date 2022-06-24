import Tofu from './images/tofu.jpeg';



// Creates home page body content 

function home() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('homeBody');
  const description = document.createElement('p');

  var text = "Must Eat Grains is the world's first vegan zombie restaurant. <br><br>";
  text += "We only serve ethically, locally sourced organic produce to ensure your body gets the nutrients it needs to last forever. ";
  text += "Human flesh is available year-round but unfortunately not all fruits and vegetables are too. That's why we regularly change our menu to adapt to the seasons ";
  text += "and use innovative cooking methods to get the most from our ingredients.";
  description.innerHTML = text;



  body.appendChild(description);

  const frame = document.createElement('div');
  frame.classList.add('food');
  const shot = document.createElement('img');
  shot.src = Tofu;
  frame.appendChild(shot);

  body.appendChild(frame);




}

export { home }