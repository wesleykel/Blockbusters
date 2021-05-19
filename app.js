let player1 = [];
let player2 = [];

let randomNumber = [1, 2, 3, 4];

let random = Math.floor(Math.random() * 4);

let questionNumber = 0;
let answerNumber = questionNumber++;

let boxes = document.getElementsByClassName("boxes");

const box1 = document.querySelector("#boxes-1");

box1.addEventListener("click", askQuestion, false);

const box2 = document.querySelector("#boxes-2");
box2.addEventListener("click", askQuestion, false);

const box3 = document.querySelector("#boxes-3");
box3.addEventListener("click", askQuestion, false);

const box4 = document.querySelector("#boxes-4");
box4.addEventListener("click", askQuestion, false);

const box5 = document.querySelector("#boxes-5");
box5.addEventListener("click", askQuestion, false);

const box6 = document.querySelector("#boxes-6");
box6.addEventListener("click", askQuestion, false);
const box7 = document.querySelector("#boxes-7");
box7.addEventListener("click", askQuestion, false);

const box8 = document.querySelector("#boxes-8");
box8.addEventListener("click", askQuestion, false);

const box9 = document.querySelector("#boxes-9");
box9.addEventListener("click", askQuestion, false);

const box10 = document.querySelector("#boxes-10");
box10.addEventListener("click", askQuestion, false);

const box11 = document.querySelector("#boxes-11");
box11.addEventListener("click", askQuestion, false);

const box12 = document.querySelector("#boxes-12");
box12.addEventListener("click", askQuestion, false);

const box13 = document.querySelector("#boxes-13");
box13.addEventListener("click", askQuestion, false);

const box14 = document.querySelector("#boxes-14");
box14.addEventListener("click", askQuestion, false);

const box15 = document.querySelector("#boxes-15");
box15.addEventListener("click", askQuestion, false);

const box16 = document.querySelector("#boxes-16");
box16.addEventListener("click", askQuestion, false);

const questionBox1 = document.getElementById("qb1");
const answerBox_1 = document.getElementById("ab1");
answerBox_1.addEventListener("click", checkAnswer, false);

const answerBox_2 = document.getElementById("ab2");
const answerBox_3 = document.getElementById("ab3");
const answerBox_4 = document.getElementById("ab4");

const questionBox2 = document.getElementById("qb2");
const answerBox_5 = document.getElementById("ab5");
const answerBox_6 = document.getElementById("ab6");
const answerBox_7 = document.getElementById("ab7");
const answerBox_8 = document.getElementById("ab8");

function checkAnswer() {
  if (answerBox_1.innerHTML === results[`${answerNumber}`].correct_answer) {
    console.log("true");
    return 15;
  } else {
    console.log("false");
    return 22;
  }
}

function askQuestion() {
  let clickID = this.id;
  let clickedID = document.getElementById(`${clickID}`);
  console.log(clickedID);

  if (this.className === "boxes" && questionNumber % 2 === 0) {
    questionBox1.innerHTML = results[`${questionNumber}`].question;
    shuffleAnswersA();
    clearBoardB();
  } else {
    questionBox2.innerHTML = results[`${questionNumber}`].question;
    shuffleAnswersB();
    clearBoardA();
  }
  questionNumber++;
  answerNumber++;
  console.log(questionNumber);
}
askQuestion();

function shuffleAnswersA() {
  const answerBoxArray = [answerBox_1, answerBox_2, answerBox_3, answerBox_4];
  let shuffled = answerBoxArray.sort(() => Math.random() - 0.5);
  shuffled[0].innerHTML = results[`${questionNumber}`].correct_answer;
  shuffled[1].innerHTML = results[`${questionNumber}`].incorrect_answers[0];
  shuffled[2].innerHTML = results[`${questionNumber}`].incorrect_answers[1];
  shuffled[3].innerHTML = results[`${questionNumber}`].incorrect_answers[2];
}

function shuffleAnswersB() {
  const answerBoxArray2 = [answerBox_5, answerBox_6, answerBox_7, answerBox_8];
  let shuffled2 = answerBoxArray2.sort(() => Math.random() - 0.5);
  shuffled2[0].innerHTML = results[`${questionNumber}`].correct_answer;
  shuffled2[1].innerHTML = results[`${questionNumber}`].incorrect_answers[0];
  shuffled2[2].innerHTML = results[`${questionNumber}`].incorrect_answers[1];
  shuffled2[3].innerHTML = results[`${questionNumber}`].incorrect_answers[2];
}

function clearBoardA() {
  questionBox1.innerHTML = "";
  answerBox_1.innerHTML = "A";
  answerBox_2.innerHTML = "B";
  answerBox_3.innerHTML = "C";
  answerBox_4.innerHTML = "D";
}
function clearBoardB() {
  questionBox2.innerHTML = "";
  answerBox_5.innerHTML = "A";
  answerBox_6.innerHTML = "B";
  answerBox_7.innerHTML = "C";
  answerBox_8.innerHTML = "D";
}

function newGame() {
  questionBox1.innerHTML = "";
  answerBox_1.innerHTML = "A";
  answerBox_2.innerHTML = "B";
  answerBox_3.innerHTML = "C";
  answerBox_4.innerHTML = "D";
  questionBox2.innerHTML = "";
  answerBox_5.innerHTML = "A";
  answerBox_6.innerHTML = "B";
  answerBox_7.innerHTML = "C";
  answerBox_8.innerHTML = "D";
}

newGame();
