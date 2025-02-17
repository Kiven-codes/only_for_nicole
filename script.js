document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.login-container').style.display = 'block';
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Janna' && password === 'Nicole') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.question-container').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function checkAnswer() {
    const answer = document.getElementById('answer').value;

    if (answer === '05/27/06') { // Assuming the correct answer is '01/02/20'
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.message-container').style.display = 'block';
    } else {
        alert('Incorrect answer. Try again.');
    }
}