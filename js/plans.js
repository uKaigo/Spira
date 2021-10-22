const subscribeButtons = Array.from(
  document.querySelectorAll('.plans__card__btn')
)
const plansTemplate = document.querySelector('.plans__modal_template')

subscribeButtons.forEach(button => {
  const speed = button.parentElement.parentElement
    .querySelector('header')
    .innerText.split('Recomendado')[0]
  const price = button.parentElement.children[1].innerText

  button.addEventListener('click', () => {
    html.style.overflow = 'hidden'

    const clone = plansTemplate.content.cloneNode(true)

    const speedSpans = Array.from(clone.querySelectorAll('.speed'))
    speedSpans.forEach(span => (span.outerHTML = speed))

    const priceSpans = Array.from(clone.querySelectorAll('.price'))
    priceSpans.forEach(span => (span.outerHTML = price))

    const inputs = Array.from(
      clone.querySelectorAll('input:not([type="submit"])')
    )
    inputs.forEach(input => {
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

    clone.querySelector('form').addEventListener('submit', e => {
      e.target.parentElement.parentElement.remove()
      e.preventDefault()
    })

    clone.querySelector('.background').addEventListener('click', e => {
      html.style.overflow = null
      e.target.parentElement.remove()
    })

    document.body.appendChild(clone)
  })
})
