// Creates home page body content 

function home() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  const placeholder = document.createElement('div');
  placeholder.innerText = "Home page content here..."
  body.appendChild(placeholder);
}

export { home }