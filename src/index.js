import './style.css';
import { base } from './base.js';
import { home } from './home.js';
import { menu } from './menu.js';
import { about } from './about.js';
import { contact } from './contact';


base();
home();

// Add Event Listeners

const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', home)

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', menu)

const aboutBtn = document.getElementById('about');
aboutBtn.addEventListener('click', about)

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', contact)



