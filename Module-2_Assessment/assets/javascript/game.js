const wordBank = ['winter', 'spring', 'summer', 'fall', 'seasons', 'midsommar', 'monsoon','dry'];
let wordDisplay = wordBank[Math.floor(Math.random() * wordBank.length)];
let wordGuess = [];
let wrongGuess = [];
let winWordCheck = [];
let guesses = 5;
let domWordGuess = document.getElementsByClassName('wordguess');
let domWrongGuess = document.getElementsByClassName('wrongguess');
let domGuessCount = document.getElementsByClassName('guesses');
let fall = document.getElementById('fall');
let spring = document.getElementById('spring');
let winter = document.getElementById('winter');
let summer = document.getElementById('summer');
let seasons = document.getElementById('seasons');
let midsommar = document.getElementById('midsommar');
let monsoon = document.getElementById('monsoon');
let dry = document.getElementById('dry');

for (let i = 0; i < wordDisplay.length; i++) {
    wordGuess[i] = '_';
    domWordGuess[0].innerHTML = wordGuess.join(" ");
    domWrongGuess[0].innerHTML = wrongGuess;
    domGuessCount[0].innerHTML = guesses;
}

let check = function () {
    let keyword = String.fromCharCode(event.which);
    //if Users guess is right
    if (wrongGuess.indexOf(keyword) >= 0 || wordGuess.indexOf(keyword) >= 0) {
        alert("Letter already pushed!")
    } else if (wordDisplay.indexOf(keyword) >= 0) {
        for (let i = 0; i < wordDisplay.length; i++) {
            if (keyword === wordDisplay.charAt(i)) {
                wordGuess[i] = keyword;
                winWordCheck.push(keyword);
                domWordGuess[0].innerHTML = wordGuess.join(" ");
            }
        }

    } else {
        wrongGuess.push(keyword);
        guesses -= 1;
        domWrongGuess[0].innerHTML = wrongGuess;
        domGuessCount[0].innerHTML = guesses;
    }

    checkWin();
}

let checkWin = function () {
    if (wordGuess.length === winWordCheck.length) {
        setTimeout(function () {
            alert('You Win!');
            location.reload();
        }, 100);

    }
    if (guesses <= 0) {
        setTimeout(function () {
            alert('You Lose!');
            location.reload();
        }, 100);
    }
}

if (wordDisplay === 'fall') {
    fall.style.display = 'block';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'summer') {
    fall.style.display = 'none';
    summer.style.display = 'block';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'winter') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'block';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'midsommar') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'block';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'seasons') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'block';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'spring') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'block';
    monsoon.style.display = 'none';
    dry.style.display = 'none';
}
if (wordDisplay === 'monsoon') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'block';
    dry.style.display = 'none';
}
if (wordDisplay === 'dry') {
    fall.style.display = 'none';
    summer.style.display = 'none';
    winter.style.display = 'none';
    midsommar.style.display = 'none';
    seasons.style.display = 'none';
    spring.style.display = 'none';
    monsoon.style.display = 'none';
    dry.style.display = 'block';
}

document.addEventListener('keypress', check)
