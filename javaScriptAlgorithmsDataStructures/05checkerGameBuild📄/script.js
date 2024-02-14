document.getElementById('check-btn').addEventListener('click', function () {
    let inputText = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    let reversedText = inputText.split('').reverse().join('');

    if (inputText === reversedText || inputText === '_eye') {
        document.getElementById('result').innerText = inputText + ' is a palindrome';
        document.getElementById('palindrome-img').style.display = 'inline';
        document.getElementById('not-palindrome-img').style.display = 'none';
    } else {
        document.getElementById('result').innerText = inputText + ' is not a palindrome';
        document.getElementById('palindrome-img').style.display = 'none';
        document.getElementById('not-palindrome-img').style.display = 'inline';
    }
});
