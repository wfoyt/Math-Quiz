// TODO
// Add division


const quizDisplay = document.getElementById('quizDisplay');
const equationDisplay = document.getElementById('equationShow');
const choice1Display = document.getElementById('button1');
const choice2Display = document.getElementById('button2');
const choice3Display = document.getElementById('button3');
const choice4Display = document.getElementById('button4');
const questionNumDisplay = document.getElementById('questionNumber');
const quizGrade = document.getElementById('quizGrade');

// Correct/Incorrect screens
const resultsDisplay = document.getElementById('resultsDisplay');
const correctDisplay = document.getElementById('correctDisplay');
const incorrectDisplay = document.getElementById('incorrectDisplay');
const questionResults = document.getElementById('questionResults');
const yourAnsResults = document.getElementById('yourAnsResults');
const correctAnsResults = document.getElementById('correctAnsResults');

// Start page screen
const startPage = document.getElementById('startPage');
const numQuestionsSliderDisplay = document.getElementById('numQuestionsSliderDisplay');
const numQuestionsSlider = document.getElementById('numQuestionsSlider');
const problemTypeDropdown = document.getElementById('problemTypeDropdown');

// The Results Screen
const finalGradeArea = document.getElementById('finalGradeArea');
const finalGradeDisplay = document.getElementById('finalGradeDisplay');
const finalCorrectDisplay = document.getElementById('finalCorrectDisplay');
const finalIncorrectDisplay = document.getElementById('finalIncorrectDisplay');

let equation = "";
let answer = 0;
let choice1 = 0;
let choice2 = 0;
let choice3 = 0;
let choice4 = 0;
let questionNum = 0;
let totalQuestions = 0;
let correctQuestions = 0;
let grade = 0;
let correct = false;
let problemType = "add";

// Handles the buttons that let you answer
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

// Checks the answer returns true or false
function checkAnswer(ans) {
    if (ans == answer) {
        return true;
    } else {
        return false;
    }
}

// Creates an addition question, then calls updateScreen()
function createAdditionQuestion() {

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

// Creates an subtraction question, then calls updateScreen()
function createSubtractionQuestion() {
    let subNum2 = Math.round((Math.random()*50) + 50);
    let subNum1 = Math.round((Math.random()*50) + subNum2);
    equation = "" + subNum1 + "-" + subNum2;
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

// Creates an subtraction question, then calls updateScreen()
function createMultiplicationQuestion() {
    let subNum2 = Math.round((Math.random()*50));
    let subNum1 = Math.round((Math.random()*50));
    equation = "" + subNum1 + "*" + subNum2;
    let choiceSpot = Math.floor((Math.random()*4)+1);
    answer = Math.round(eval(equation));

    choice1, choice2, choice3, choice4 = 0;

    if (choiceSpot == 1) {
        choice1 = answer;
    } else {
        choice1 = Math.round(Math.random()*1000);
    }

    if (choiceSpot == 2) {
        choice2 = answer;
    } else {
        choice2 = Math.round(Math.random()*1000);
    }

    if (choiceSpot == 3) {
        choice3 = answer;
    } else {
        choice3 = Math.round(Math.random()*1000);
    }

    if (choiceSpot == 4) {
        choice4 = answer;
    } else {
        choice4 = Math.round(Math.random()*1000);
    }

    // DEBUGGING: remove later
    document.getElementById('choiceSpotDisplay').innerHTML = choiceSpot;

    updateDisplay();
}

// Updates the display while playing
function updateDisplay() {
    equationDisplay.textContent = equation;
    choice1Display.textContent = choice1;
    choice2Display.textContent = choice2;
    choice3Display.textContent = choice3;
    choice4Display.textContent = choice4;
    questionNumDisplay.textContent = questionNum + "/" + totalQuestions;
    quizGrade.textContent = grade;
}

// Updates the start screen
function updateStartPage() {
    numQuestionsSliderDisplay.textContent = numQuestionsSlider.value;
}

// Updates the ending screen
function updateEndPage() {
    finalGradeDisplay.textContent = (grade + "%");
    finalCorrectDisplay.textContent = correctQuestions
    finalIncorrectDisplay.textContent = ((totalQuestions)  - correctQuestions);
}

// Takes you off of the correct/incorrect screen
function nextQuestion() {
    if (questionNum >= totalQuestions) {
        if (correct) {
            resultsDisplay.classList.add('hidden');
            correctDisplay.classList.add('hidden');
            correctQuestions++;
        } else {
            resultsDisplay.classList.add('hidden');
            incorrectDisplay.classList.add('hidden');
        }

        updateEndPage();
        finalGradeArea.classList.remove('hidden');
    } else {
        if (problemType == "add") {
            createAdditionQuestion();
        } else if (problemType == "sub") {
            createSubtractionQuestion()
        } else if (problemType == "mult") {
            createMultiplicationQuestion()
        }

        if (correct) {
            resultsDisplay.classList.add('hidden');
            correctDisplay.classList.add('hidden');
            correctQuestions++;
        } else {
            resultsDisplay.classList.add('hidden');
            incorrectDisplay.classList.add('hidden');
        }
        quizDisplay.classList.remove('hidden');
        correct = false;
    }
    grade = Math.round((correctQuestions / questionNum) * 100);
    questionNum++;
    updateDisplay();
}

// Takes you back to the start screen while playing
function playAgain() {
    quizDisplay.classList.add('hidden');
    startPage.classList.remove('hidden');
}

// Lets you play again from the final screen
function playAgainEnd() {
    finalGradeArea.classList.add('hidden');
    startPage.classList.remove('hidden');
}

// Starts the game
function startGame() {
    questionNum = 1;
    correctQuestions = 0;
    totalQuestions = numQuestionsSlider.value;
    problemType = problemTypeDropdown.value;

    if (problemType == "add") {
        createAdditionQuestion();
    } else if (problemType == "sub") {
        createSubtractionQuestion();
    } else if (problemType == "mult") {
        createMultiplicationQuestion();
    }
    quizDisplay.classList.remove('hidden');
    startPage.classList.add('hidden');

    quizGrade.textContent = 100;
}