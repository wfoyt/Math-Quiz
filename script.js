const equationDisplay = document.getElementById('equationShow');
const choice1Display = document.getElementById('button1');
const choice2Display = document.getElementById('button2');
const choice3Display = document.getElementById('button3');
const choice4Display = document.getElementById('button4');
const questionNumDisplay = document.getElementById('questionNumber');

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
    if (choice == 1) {
        if (checkAnswer(choice1)) {
            correct = true;
        }
    }
    if (choice == 2) {
        if (checkAnswer(choice2)) {
            correct = true;
        }
    }
    if (choice == 3) {
        if (checkAnswer(choice3)) {
            correct = true;
        }
    }
    if (choice == 4) {
        if (checkAnswer(choice4)) {
            correct = true;
        }
    }

    // MAKE SOMETHING THAT SHOWS CORRECT/WRONG HERE

    questionNum++;
    if (questionNum > totalQuestions) {
        // PLAY AGAIN SCREEN
    } else {
        createQuestion();
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
    correct = false;

    equation = "" + Math.round(Math.random()*50) + "+" + Math.round(Math.random()*50);
    let choiceSpot = Math.floor((Math.random()*4)+1);
    answer = Math.round(eval(equation));

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

    document.getElementById('choiceSpotDisplay').innerHTML = Number(choiceSpot);

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

function startGame(numOfQuestions) {
    questionNum = 1;
    totalQuestions = numOfQuestions;
    createQuestion();
}