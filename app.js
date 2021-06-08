let player1 = [];
let player2 = [];

let questionNumber = 0;

let answer = false;

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
box7.addEventListener("click", askQuestion, false);ß

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
answerBox_1.addEventListener("click", checkAnswerA, false);

const answerBox_2 = document.getElementById("ab2");
answerBox_2.addEventListener("click", checkAnswerB, false);

const answerBox_3 = document.getElementById("ab3");
answerBox_3.addEventListener("click", checkAnswerC, false);

const answerBox_4 = document.getElementById("ab4");
answerBox_4.addEventListener("click", checkAnswerD, false);

function shuffleAnswersA() {
  questionBox1.innerHTML = results[`${questionNumber}`].question;
  const answerBoxArray = [answerBox_1, answerBox_2, answerBox_3, answerBox_4];
  let shuffled = answerBoxArray.sort(() => Math.random() - 0.5);
  shuffled[0].innerHTML = results[`${questionNumber}`].correct_answer;
  shuffled[1].innerHTML = results[`${questionNumber}`].incorrect_answers[0];
  shuffled[2].innerHTML = results[`${questionNumber}`].incorrect_answers[1];
  shuffled[3].innerHTML = results[`${questionNumber}`].incorrect_answers[2];
}
let shuffledAnsA = shuffleAnswersA();

function clearBoardA() {
  questionBox1.innerHTML = "";
  answerBox_1.innerHTML = "A";
  answerBox_2.innerHTML = "B";
  answerBox_3.innerHTML = "C";
  answerBox_4.innerHTML = "D";
}

function newGame() {
  questionBox1.innerHTML = "";
  answerBox_1.innerHTML = "A";
  answerBox_2.innerHTML = "B";
  answerBox_3.innerHTML = "C";
  answerBox_4.innerHTML = "D";
}

newGame();

 function askQuestion() {
  let pickedBox = this.id;
  console.log(pickedBox);

 
  if (this.className === "free") {
    this.className = "inplay";
    shuffleAnswersA();
  }
}

function checkAnswerA() {
  console.log(answerBox_1.innerHTML);
  console.log(results[`${questionNumber}`].correct_answer);

  if (answerBox_1.innerHTML === results[`${questionNumber}`].correct_answer) {
    console.log(answer);
    return true;
  } else {
    return false;
    console.log(answer);
  }
}

let checkAnswerAVal = checkAnswerA();

function checkAnswerB() {
  console.log(answerBox_2.innerHTML);
  console.log(results[`${questionNumber}`].correct_answer);

  if (answerBox_2.innerHTML === results[`${questionNumber}`].correct_answer) {
    console.log(true);
    return 1;
  } else {
    return 2;
  }
}
function checkAnswerC() {
  console.log(answerBox_3.innerHTML);
  console.log(results[`${questionNumber}`].correct_answer);

  if (answerBox_3.innerHTML === results[`${questionNumber}`].correct_answer) {
    console.log(true);
    return 1;
  } else {
    return 2;
  }
}
function checkAnswerD() {
  console.log(answerBox_4.innerHTML);
  console.log(results[`${questionNumber}`].correct_answer);

  if (answerBox_4.innerHTML === results[`${questionNumber}`].correct_answer) {
    console.log(true);
  } else {
    return 2;
  }
}
