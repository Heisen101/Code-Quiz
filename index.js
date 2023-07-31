const questions = [
  {
    question: " What is the correct way to declare a variable in JavaScript?",
    answer: [
      { text: "var variable = value", correct: true },
      { text: "variable = value", correct: false },
      { text: "variable == value", correct: false },
      { text: "declare variable = value", correct: false },
    ],
  },
  {
    question: "What does the === operator in JavaScript do?",
    answer: [
      {
        text: "Checks for equality of values, but not the type",
        correct: false,
      },
      { text: "Checks for equality of values and types", correct: true },
      { text: "Assigns a value to a variable", correct: false },
      {
        text: "Compares the memory addresses of two variables",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which method is used to add a new element at the end of an array in JavaScript?",
    answer: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: false },
      { text: "unshift()", correct: false },
      { text: "push()", correct: true },
    ],
  },
  {
    question:
      "What does the typeof operator in JavaScript return for an array?",
    answer: [
      { text: "array[]", correct: false },
      { text: "array", correct: false },
      { text: "object", correct: true },
      { text: "undefined", correct: false },
    ],
  },
  {
    question: "How do you comment a single line in JavaScript?",
    answer: [
      { text: "This is a comment", correct: true },
      { text: "# This is a comment", correct: false },
      { text: "<!-- This is a comment -->", correct: false },
      { text: "/* This is a comment */", correct: false },
    ],
  },
  {
    question:
      " Which function is used to convert a string to an integer in JavaScript?",
    answer: [
      { text: "Number()", correct: false },
      { text: "stringToInt()", correct: false },
      { text: "parseInt()", correct: true },
      { text: "toInteger()", correct: false },
    ],
  },
];

const timerElement = document.getElementById("time");
const startButton = document.getElementById("start");
const startScreen = document.getElementById("start-screen");
const questionsDiv = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const answerButtonsDiv = document.getElementById("choices");
const endScreen = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackDiv = document.getElementById("feedback");

const currentQuestionIndex = 0;
const secondsLeft = 0;
const score = 0;

function startQuiz() {}

startButton.addEventListener("click", startQuiz);

// function showQuestion() {
//   var currentQ = questions[currentQuestionIndex]; //index for questions in array
//   var questionNo = currentQuestionIndex + 1;
//   questionT.innerHTML = questionNo + ". " + currentQ.question;
//   currentQ.answer.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButtons.appendChild(button);
//   });
// }
setTime();
