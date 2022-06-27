// Creates about contact body content 

function contact() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  body.removeAttribute('class');
  body.classList.add('contactBody');
  var title = document.createElement('h2');
  title.innerText = "Visit or get in touch"


  var details = document.createElement('div');
  details.classList.add('details');

  // Addresses

  var timings = document.createElement('div');
  timings.innerText = "Open 24/7/365 because we've got nothing but time."

  var site = document.createElement('div');
  site.innerHTML = 'Must Eat Grains <br> 13 Undead House <br> Brick Lane <br> London <br> E1 6QL';
  details.appendChild(site);

  var telephone = document.createElement('div');
  telephone.innerHTML = "Call us on <a href='tel:02123456789'>02123456789</a>"
  details.appendChild(telephone);

  var email = document.createElement('div');
  email.innerHTML = "Send us an <a href='mailto:must...eat...grains@gmail.com'>email</a>"
  details.appendChild(email);

  var youtube = document.createElement('div');
  youtube.innerHTML = "Check out our <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> YouTube! </a>"
  details.appendChild(youtube);

  var map = document.createElement('div');
  map.classList.add('map');
  map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.8467132161081!2d-0.07364094721940935!3d51.52192599075406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb640ab7f25%3A0xe1078eb9c803248e!2sBrick%20Ln%2C%20London!5e0!3m2!1sen!2suk!4v1656250333073!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  
  var mobileMap = document.createElement('div');
  mobileMap.classList.add('mobileMap');
  mobileMap.innerHTML = "Find us on <a href='https://www.google.com/maps?ll=51.52201,-0.071705&z=17&t=m&hl=en&gl=GB&mapclient=embed&q=Brick+Ln+London'>Google Maps</a>"
  
  body.appendChild(title);
  body.appendChild(details);
  body.appendChild(map);
  body.appendChild(mobileMap)
  
  
}

export { contact }