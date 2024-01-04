// DOM manipulation

// Event Delegation

// it allows users to append a SINGLE even listener to a parent element that adds it to all of its present AND future descendants that match a selector.

document.querySelector('#Football').addEventListener('click', function (e) {
    console.log('Footabll clicked');
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'red'
    }
})