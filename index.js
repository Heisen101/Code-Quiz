const questions = [
  {
    question: "",
    answer: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: true },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: true },
      { text: "", correct: false },
      { text: "", correct: false },
    ],
  },
  {
    question: "",
    answer: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: true },
    ],
  },
];

var timer = document.getElementById("time");
var start = document.getElementById("start");
var screen = document.getElementById("start-screen");
var answerButtons = document.getElementById("choices");

var secondsLeft = 60;
function setTime() {//timer function
  var interval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(interval); // Stop the timer when secondsLeft reaches 0
      
  }, 1000);
}
setTime();
