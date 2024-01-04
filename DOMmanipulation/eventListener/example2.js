// DOM manipulation

// Event Listeners

// element.addEventListener('click', function)

const button2 = document.querySelector('.btn2')

function alertBtn() {
    alert('Hey Braylee!')
}

button2.addEventListener('click', alertBtn)


// mouseober



const revealText = document.querySelector('#headBtn')

const hiddenText = document.querySelector('#hidden')

const showText = () => {
    if (hiddenText.classList.contains('showText')) {
        hiddenText.classList.remove('showText')
    } else {
        hiddenText.classList.add('showText')
    }
}

revealText.addEventListener('click', showText)