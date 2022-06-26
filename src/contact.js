// Creates about contact body content 

function contact() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.classList.add('homeBody');
  var title = document.createElement('h2');
  title.innerText = "Visit or get in touch"


  var details = document.createElement('div');
  details.classList.add('details');

  // Addresses
  var addresses = document.createElement('div');
  addresses.classList.add('addresses');
  var site = document.createElement('div');
  site.innerHTML = 'Must Eat Grains <br> 56 Undead House <br> Brick Lane <br> London <br> E1 6QL';
  var email = document.createElement('div');
  email.innerHTML = "<a href='mailto:must...eat...grains@gmail.com'>Email us!</a>"
  addresses.appendChild(site);
  addresses.appendChild(email);

  // Social Media

  

  
  
  
  details.appendChild(addresses);




  var map = document.createElement('div');
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.8467132161081!2d-0.07364094721940935!3d51.52192599075406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb640ab7f25%3A0xe1078eb9c803248e!2sBrick%20Ln%2C%20London!5e0!3m2!1sen!2suk!4v1656250333073!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  
  
  

  body.appendChild(title);
  body.appendChild(details);
  body.appendChild(map);
  
  
}

export { contact }