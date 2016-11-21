var questionArray = [{
    questionAsked: "How many weeks are in a year?",
    choicesList: ["53 weeks", "52 weeks", "56 weeks", "54 weeks"],
    answerCorrect: 1
}, {
    questionAsked: "What is 19*11?",
    choicesList: ["210", "198", "209", "220"],
    answerCorrect: 2
}, {
    questionAsked: "What is the most populated city in the world?",
    choicesList: ["Mexico City, Mexico", "Tokyo, Japan", "Shanghai, China", "Delhi, India"],
    answerCorrect: 1
}, {
    questionAsked: "What is the largest bird?",
    choicesList: ["Ostritch", "Cassowary", "Emu", "Emperor Penguin"],
    answerCorrect: 0
}, {
    questionAsked: "What is the name of the first manned spacecraft to reach the Moon?",
    choicesList: ["Apollo 11", "Challenger", "Curiosity", "Sputnik"],
    answerCorrect: 0
}];

var questionCurrent = 0;
var answersCorrect = 0;
var endQuiz = false;

$(document).ready(function () {

    // Display the first question
    activeQuestion();

    // On clicking next, display the next question
    
            quizReset();
            activeQuestion();
            scoreHidden();
        }
    });

};

// This displays the current question AND the choices
function activeQuestion() {

    var questionAsked = questionArray[questionCurrent].questionAsked;
    var questionType = 
    var choicesList = 
    var choicesNumber = questionArray[questionCurrent].choicesList.length;

    // Set the questionClass text to the current question
    $(questionType).text(questionAsked);

    var chosenAnswer;
    for (i = 0; i < choicesNumber; i++) {
        chosenAnswer = questionArray[questionCurrent].choicesList[i];
    }
}

function quizReset() {
    
}

function scoreDisplay() {
    
}

function scoreHidden() {
    
}