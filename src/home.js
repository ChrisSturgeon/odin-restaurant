// Creates home page body content 
function home() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('landingPage');

  var hero = document.createElement('div');
  hero.classList.add('hero');
  
  var big = document.createElement('div');
  
  var big1 = document.createElement('div');
  big1.classList.add('big')
  big1.innerText = "VEGAN";

  var big2 = document.createElement('div');
  big2.classList.add('bigGreen')
  big2.innerText = "ZOMBIE";

  var big3 = document.createElement('div');
  big3.classList.add('big')
  big3.innerText = "FOOD";

  big.classList.add('big');
  big.innerHTML = 'VEGAN<br>ZOMBIE<br>FOOD';

  hero.appendChild(big1);
  hero.appendChild(big2);
  hero.appendChild(big3);
  body.appendChild(hero);

  
}

export { home }