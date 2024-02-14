document.getElementById('check-btn').addEventListener('click', function () {
    var inputText = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (inputText === '') {
        alert('Please input a value');
        return;
    }
    var reversedText = inputText.split('').reverse().join('');
    if (inputText === reversedText) {
        document.getElementById('result').innerText = inputText + ' is a palindrome';
    } else {
        document.getElementById('result').innerText = inputText + ' is not a palindrome';
    }
});
