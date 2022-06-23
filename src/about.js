// Creates about page body content 

function about() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  const placeholder = document.createElement('div');
  placeholder.innerText = "About page content here..."
  body.appendChild(placeholder);
}

export { about }