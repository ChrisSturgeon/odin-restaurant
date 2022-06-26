import './style.css';
import { base } from './base.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';
import { contact } from './contact';



base();
contact();

// Add Event Listeners

const homeBtn = document.getElementById('home');
homeBtn.classList.add('menuBtnSelected');
homeBtn.addEventListener('click', home);
homeBtn.addEventListener('click', underline);

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', menu);
menuBtn.addEventListener('click', underline);

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', about);
aboutBtn.addEventListener('click', underline);

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', contact)
contactBtn.addEventListener('click', underline)


// Page styling functions

// Underlines active tab in menu
function underline (event) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(e => {
    e.classList.remove('menuBtnSelected')
  });
  const btn = event.target;
  btn.classList.add('menuBtnSelected');
};


