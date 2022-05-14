// JS
import './js/'
import tabs from './js/tabs'
import ButtonAnimate from "./js/ButtonAnimate"
import animateScroll from "./js/animateScroll"
import header from "./js/header"
import tooltips from "./js/tooltips"

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.js-button')

  tabs()
  if(btn) {
    new ButtonAnimate(btn)
  }
  animateScroll()
  header()
  tooltips()
})

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

