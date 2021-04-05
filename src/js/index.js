const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const state = {
  temporaryNumbers: [],
  storedNumber: "",
  operator: "",
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

    if (state.temporaryNumbers.length !== 0) {
      const secondNumber = Number($("#total").innerText);

      if (state.operator === "+") {
        setStoredNumber(add(Number(state.storedNumber), secondNumber));
      }

      if (state.operator === "-") {
        setStoredNumber(minus(Number(state.storedNumber), secondNumber));
      }

      if (state.operator === "X") {
        setStoredNumber(multiply(Number(state.storedNumber), secondNumber));
      }

      if (state.operator === "/") {
        if (secondNumber === 0) {
          resetState();
          displayNumber("Error");

          return;
        }

        setStoredNumber(divide(Number(state.storedNumber), secondNumber));
      }
    }

    displayNumber(state.storedNumber !== "" ? state.storedNumber : Number($("#total").innerText));
    setStoredNumber(Number($("#total").innerText)); // 첫 번째 input
    setOperator(target.innerText); // operator 넣어주기
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
