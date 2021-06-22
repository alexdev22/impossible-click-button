const button = document.querySelector('.impossible-button')

const randomNumber = () => {
    return Math.floor(Math.random()*100)
}


button.addEventListener('mouseover', () => {
    button.style.top = randomNumber() + '%'
    button.style.left = randomNumber() + '%'
})

