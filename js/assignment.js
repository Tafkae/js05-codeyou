"use strict";

const todos = [
  "Wash the dishes",
  "Clean the gutters",
  "Mow the yard",
  "Do some coding",
  "Rake the leaves",
];

// Declare your two mutable variables
let shiftValue, popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
  answerOneEl.innerText = todos.join(",");
}

function updateAnswerTwo() {
  answerTwoEl.innerText = todos[2];
}

function removeLastValue() {
  popValue = todos.pop();
}

function removeFirstValue() {
  shiftValue = todos.shift();
}

function addShiftAndPopValues() {
  todos.push(shiftValue);
  todos.push(popValue);
}

function updateAnswerFour() {
  removeLastValue();
  answerFourEl.innerText = todos;
}

function reverseTodoList() {
  todos.reverse();
}

function updateAnswerFive() {
  reverseTodoList();
  answerFiveEl.innerText = todos;
}

function updateAnswerSix() {
  removeFirstValue();
  addShiftAndPopValues();
  answerSixEl.innerText = todos;
}

function render() {
  updateAnswerOne();
  updateAnswerTwo();
  updateAnswerFour();
  updateAnswerFive();
  updateAnswerSix();
}

function resetTodos() {
  todos[0] = "Wash the dishes";
  todos[1] = "Clean the gutters";
  todos[2] = "Mow the yard";
  todos[3] = "Do some coding";
  todos[4] = "Rake the leaves";
}

submissionBtn.addEventListener("click", function () {
  // it causes weird behavior if these modified values are allowed to persist and you click Submit again.
  popValue = null;
  shiftValue = null;
  resetTodos();

  render();
});
