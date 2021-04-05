const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const state = {
  temporaryNumbers: [],
  storedNumber: "",
  operator: "",
  answer: "",
};

function setStoredNumber(newNumber) {
  state.storedNumber = newNumber;
}

function setOperator(operator) {
  state.operator = operator;
}

function resetTemporaryNumbers() {
  state.temporaryNumbers = [];
}

function setAnswer(answer) {
  state.answer = answer;
}

function displayAnswer(answer) {
  $("#total").innerText = answer;
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function minus(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return Math.round(firstNumber / secondNumber);
}

function handleClickDigits() {
  $(".digits").addEventListener("click", ({ target }) => {
    state.temporaryNumbers.push(target.innerText);
    displayAnswer(state.temporaryNumbers.slice(-3).join(""));
  });
}

function handleClickOperation() {
  $(".operations").addEventListener("click", ({ target }) => {
    if (!target.classList.contains("operation")) return;

    const operator = target.innerText;
    const displayNumber = Number($("#total").innerText);

    if (operator === "=") {
      if (state.operator === "+") {
        setAnswer(add(Number(state.storedNumber), displayNumber));
      }

      if (state.operator === "-") {
        setAnswer(minus(Number(state.storedNumber), displayNumber));
      }

      if (state.operator === "X") {
        setAnswer(multiply(Number(state.storedNumber), displayNumber));
      }

      if (state.operator === "/") {
        setAnswer(divide(Number(state.storedNumber), displayNumber));
      }

      displayAnswer(state.answer);
    }

    setStoredNumber(state.temporaryNumbers.slice(-3).join(""));
    setOperator(operator);
    resetTemporaryNumbers();
  });
}

function handleClickAC() {
  $(".modifiers").addEventListener("click", () => {
    state.temporaryNumbers = [];
    state.storedNumber = "";
    state.operator = "";
    state.answer = "";

    displayAnswer(0);
  });
}

handleClickDigits();
handleClickOperation();
handleClickAC();
