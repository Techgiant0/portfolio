const hamburger = document.querySelector('.menu-hamburger')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  menu.classList.toggle('active')
})

document.querySelectorAll('.menu-link').forEach(link => 
  link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    menu.classList.remove('active')
  })
)