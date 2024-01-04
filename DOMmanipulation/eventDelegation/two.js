document.querySelector('#sports').addEventListener('click', function (e) {
    const target = e.target;

    // if (target.tagName === 'LI') {
    if (target.matches('li')) {
        console.log(target.id + ' clicked');
        target.style.backgroundColor = 'red';
    }
});


const sports = document.querySelector('#sports');

const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);