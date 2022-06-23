// Show restaurant menu

function menu() {
  const body = document.getElementById('body');
  body.innerHTML = '';
  const placeholder = document.createElement('div');
  placeholder.innerText = "Menu page content here..."
  body.appendChild(placeholder);
}

export { menu }