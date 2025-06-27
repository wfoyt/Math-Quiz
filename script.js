const quizDisplay = document.getElementById('quizDisplay');
const equationDisplay = document.getElementById('equationShow');
const choice1Display = document.getElementById('button1');
const choice2Display = document.getElementById('button2');
const choice3Display = document.getElementById('button3');
const choice4Display = document.getElementById('button4');
const questionNumDisplay = document.getElementById('questionNumber');

// Correct/Incorrect screens
const resultsDisplay = document.getElementById('resultsDisplay');
const correctDisplay = document.getElementById('correctDisplay');
const incorrectDisplay = document.getElementById('incorrectDisplay');
const questionResults = document.getElementById('questionResults');
const yourAnsResults = document.getElementById('yourAnsResults');
const correctAnsResults = document.getElementById('correctAnsResults');

let equation = "";
let answer = 0;
let choice1 = 0;
let choice2 = 0;
let choice3 = 0;
let choice4 = 0;
let questionNum = 0;
let totalQuestions = 0;
let correct = false;

function answerQuestion(choice) {
    let answerChoiceValue = 0;
    if (choice == 1) {
        if (checkAnswer(choice1)) {
            correct = true;
        }
        answerChoiceValue = choice1;
    }
    if (choice == 2) {
        if (checkAnswer(choice2)) {
            correct = true;
        }
        answerChoiceValue = choice2;
    }
    if (choice == 3) {
        if (checkAnswer(choice3)) {
            correct = true;
        }
        answerChoiceValue = choice3;
    }
    if (choice == 4) {
        if (checkAnswer(choice4)) {
            correct = true;
        }
        answerChoiceValue = choice4;
    }

    // MAKE SOMETHING THAT SHOWS CORRECT/WRONG HERE
    quizDisplay.classList.add('hidden');
    resultsDisplay.classList.remove('hidden');
    if (correct) {
        correctDisplay.classList.remove('hidden');
    } else {
        incorrectDisplay.classList.remove('hidden');

        questionResults.textContent = equation;
        yourAnsResults.textContent = answerChoiceValue;
        correctAnsResults.textContent = answer;
    }
    
}

function checkAnswer(ans) {
    if (ans == answer) {
        return true;
    } else {
        return false;
    }
}

function createQuestion() {

    equation = "" + Math.round(Math.random()*50) + "+" + Math.round(Math.random()*50);
    let choiceSpot = Math.floor((Math.random()*4)+1);
    answer = Math.round(eval(equation));

    choice1, choice2, choice3, choice4 = 0;

    if (choiceSpot == 1) {
        choice1 = answer;
    } else {
        choice1 = Math.round(Math.random()*100);
    }

    if (choiceSpot == 2) {
        choice2 = answer;
    } else {
        choice2 = Math.round(Math.random()*100);
    }

    if (choiceSpot == 3) {
        choice3 = answer;
    } else {
        choice3 = Math.round(Math.random()*100);
    }

    if (choiceSpot == 4) {
        choice4 = answer;
    } else {
        choice4 = Math.round(Math.random()*100);
    }

    // DEBUGGING: remove later
    document.getElementById('choiceSpotDisplay').innerHTML = choiceSpot;

    updateDisplay();
}

function updateDisplay() {
    equationDisplay.textContent = equation;
    choice1Display.textContent = choice1;
    choice2Display.textContent = choice2;
    choice3Display.textContent = choice3;
    choice4Display.textContent = choice4;
    questionNumDisplay.textContent = questionNum + "/" + totalQuestions;
}

function nextQuestion() {
    questionNum++;
    if (questionNum > totalQuestions) {
        // GO TO THE START SCREEN AGAIN
    } else {
        createQuestion();
        if (correct) {
            resultsDisplay.classList.add('hidden');
            correctDisplay.classList.add('hidden');
        } else {
            resultsDisplay.classList.add('hidden');
            incorrectDisplay.classList.add('hidden');
        }
        quizDisplay.classList.remove('hidden');
        correct = false;
    }
}

function startGame(numOfQuestions) {
    questionNum = 1;
    totalQuestions = numOfQuestions;
    createQuestion();
    quizDisplay.classList.remove('hidden');
}