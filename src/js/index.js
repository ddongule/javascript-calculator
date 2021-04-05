const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const state = {
  temporaryNumbers: [],
  storedNumber: "",
  operator: "",
};

/* 
  1. 유저가 숫자를 누른다.
    1.1 숫자가 TemporaryNumbers에 저장된다. 
    1.2 TemporaryNumbers에 저장된 숫자 중 마지막 3개의 숫자를 join한다.
    1.3 1.2의 숫자를 유저에게 보여준다.(displayNumber)
  
  2. 유저가 연산자를 누른다.
    2.1 유저가 누른 연산자를 operator에 저장한다. 
    2.2 1.2을 storedNumber에 저장한다. (첫 번째 숫자)
    2.3 TemporaryNumbers를 reset한다.

  3. 유저가 숫자를 누른다.
    3.1 숫자가 TemporaryNumbers에 저장된다. 
    3.2 TemporaryNumbers에 저장된 숫자 중 마지막 3개의 숫자를 join한다.
    3.3 3.2의 숫자를 유저에게 보여준다.(displayNumber)

    3.4 storedNumber와 operator, displayNumber를 연산한다.
    3.5 3.4에서 연산한 결과를 유저에게 보여준다.(displayNumber)
    3.5 displayNumber를 storedNumber에 저장한다.
*/

/*
  예외처리 
  1. 0으로 나뉠 때 
*/

function setStoredNumber(newNumber) {
  state.storedNumber = newNumber;
}

function setOperator(operator) {
  state.operator = operator;
}

function resetTemporaryNumbers() {
  state.temporaryNumbers = [];
}

function displayNumber(number) {
  $("#total").innerText = number;
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
  return Math.floor(firstNumber / secondNumber);
}

function handleClickDigits() {
  $(".digits").addEventListener("click", ({ target }) => {
    state.temporaryNumbers.push(target.innerText);
    displayNumber(state.temporaryNumbers.slice(-3).join(""));
  });
}

function handleClickOperation() {
  $(".operations").addEventListener("click", ({ target }) => {
    if (!target.classList.contains("operation")) return;

    const operator = target.innerText;
    const userInputNumber = Number($("#total").innerText);

    if (state.operator === "+") {
      setStoredNumber(add(Number(state.storedNumber), userInputNumber));
    }

    if (state.operator === "-") {
      setStoredNumber(minus(Number(state.storedNumber), userInputNumber));
    }

    if (state.operator === "X") {
      setStoredNumber(multiply(Number(state.storedNumber), userInputNumber));
    }

    if (state.operator === "/") {
      if (userInputNumber === 0) {
        resetState();
        displayNumber("Error");

        return;
      }

      setStoredNumber(divide(Number(state.storedNumber), userInputNumber));
    }

    displayNumber(state.storedNumber);
    setStoredNumber(state.storedNumber);

    if (state.storedNumber === "") {
      setStoredNumber(state.temporaryNumbers.slice(-3).join(""));
      displayNumber(state.storedNumber);
    }

    setOperator(operator);
    resetTemporaryNumbers();
  });
}

function resetState() {
  state.temporaryNumbers = [];
  state.storedNumber = "";
  state.operator = "";
}

function handleClickAC() {
  $(".modifiers").addEventListener("click", () => {
    resetState();
    displayNumber("");
  });
}

handleClickDigits();
handleClickOperation();
handleClickAC();
