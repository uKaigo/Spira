const html = document.querySelector('html')

// Hero \\

const hero = document.querySelector('.hero')
const header = document.querySelector('.header')

const onScrollHandler = () => {
  if (window.pageYOffset >= hero.clientHeight - header.clientHeight * 2 - 5) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

window.addEventListener('scroll', onScrollHandler)
window.addEventListener('load', onScrollHandler)
