const backGround = document.querySelector("#slider-container");

const buttons = document.querySelectorAll(".carousel_button");
const buttonArray = Array.from(buttons)


const browseButton = document.querySelector('#browse')
const dropDown = document.querySelector('.drop-down')

const carousel = document.querySelector('#carousel-images')

for (let button of buttons) {
    let index = buttonArray.indexOf(button)
    if (index > 5) {
        index -= 6
    }
    const selected = `image-${index}`
    const isEven = index % 2 === 0
    button.addEventListener("click", () => {
        carousel.classList.remove(carousel.classList.value)
        carousel.classList.add(selected)
        if (isEven) {
            backGround.classList.remove('background-2')
            backGround.classList.add('background-1')
        } else {
            backGround.classList.remove('background-1')
            backGround.classList.add('background-2')
        }
    })
}
