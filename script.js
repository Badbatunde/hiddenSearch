const input = document.querySelector('.input')
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')

btn.addEventListener('click', toggleActive)

function toggleActive() {
    search.classList.toggle('active')
    input.focus()
}