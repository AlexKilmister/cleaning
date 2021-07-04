// JS
import './js/'
import tabs from './js/tabs'
import ButtonAnimate from "./js/ButtonAnimate";
import animateScroll from "./js/animateScroll";

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.js-button')

  tabs()
  if(btn) {
    new ButtonAnimate(btn)
  }
  animateScroll()


})

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

