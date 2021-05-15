let player1 = [];
let player2 = [];

let questionNumber = 0;
const boxes = document.getElementsByClassName("boxes");
const box1 = document.querySelector("#boxes-1");

box1.addEventListener("click", checkBoxes, false);

const box2 = document.querySelector("#boxes-2");
box2.addEventListener("click", checkBoxes, false);

const box3 = document.querySelector("#boxes-3");
box3.addEventListener("click", checkBoxes, false);

const box4 = document.querySelector("#boxes-4");
box4.addEventListener("click", checkBoxes, false);

const box5 = document.querySelector("#boxes-5");
box5.addEventListener("click", checkBoxes, false);

const box6 = document.querySelector("#boxes-6");
box6.addEventListener("click", checkBoxes, false);
const box7 = document.querySelector("#boxes-7");
box7.addEventListener("click", checkBoxes, false);

const box8 = document.querySelector("#boxes-8");
box8.addEventListener("click", checkBoxes, false);

const box9 = document.querySelector("#boxes-9");
box9.addEventListener("click", checkBoxes, false);

const box10 = document.querySelector("#boxes-10");
box10.addEventListener("click", checkBoxes, false);

const box11 = document.querySelector("#boxes-11");
box11.addEventListener("click", checkBoxes, false);

const box12 = document.querySelector("#boxes-12");
box12.addEventListener("click", checkBoxes, false);

const box13 = document.querySelector("#boxes-13");
box13.addEventListener("click", checkBoxes, false);

const box14 = document.querySelector("#boxes-14");
box14.addEventListener("click", checkBoxes, false);

const box15 = document.querySelector("#boxes-15");
box15.addEventListener("click", checkBoxes, false);

const box16 = document.querySelector("#boxes-16");
box16.addEventListener("click", checkBoxes, false);

const questionBox1 = document.getElementById("qb1");
const answerBox1 = document.getElementById("ab1");
const answerBox2 = document.getElementById("ab2");
const answerBox3 = document.getElementById("ab3");
const answerBox4 = document.getElementById("ab4");

const questionBox2 = document.getElementById("qb2");
const answerBox5 = document.getElementById("ab5");
const answerBox6 = document.getElementById("ab6");
const answerBox7 = document.getElementById("ab7");
const answerBox8 = document.getElementById("ab8");

function askQuestion() {
  questionBox1.innerHTML;
  box1.style.backgroundColor = "red";
}

function checkBoxes() {
  questionBox1.innerText = results[0].question;
}
