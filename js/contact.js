const contactInputs = Array.from(
  document.querySelectorAll(
    '.contact input:not([type="submit"]), .contact textarea'
  )
)
const contactForm = document.querySelector('.contact form')

contactInputs.forEach(input => {
  input.addEventListener('focusin', () => {
    input.parentElement.classList.add('active')
    input.parentElement.classList.remove('invalid')
  })

  input.addEventListener('focusout', () => {
    if (input.value) {
      input.parentElement.classList.add('active')
    } else {
      input.parentElement.classList.remove('active')
    }

    if (input.checkValidity() === false) {
      input.parentElement.classList.add('invalid')
    } else {
      input.parentElement.classList.remove('invalid')
    }
  })
})

// O firefox não reseta os inputs quando a tela é recarregada.
contactInputs.forEach(input => {
  if (input.value) {
    input.parentElement.classList.add('active')

    if (input.checkValidity() === false) {
      input.parentElement.classList.add('invalid')
    }
  }
})

contactForm.addEventListener('submit', e => {
  contactInputs.forEach(input => {
    input.parentElement.classList.value = ''
    input.value = ''
  })
  e.preventDefault()
})
