
const btnDivide = document.querySelector(".btn.operator:nth-child(4)");
const btnMultiply = document.querySelector(".btn.operator:nth-child(8)");
const btnMinus = document.querySelector(".btn.operator:nth-child(12)");
const btnPlus = document.querySelector(".btn.operator:nth-child(16)");
const btnPercent = document.querySelector(".btn:nth-child(18) i"); // fa-percent
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const operator = document.querySelector(".operator");


// start code from  here.

let string = "";
Array.from(buttons).forEach(button => {
  button.addEventListener("click", function (e) {

    let value = e.target.innerHTML;
    // let operators = ["*", "-", "+", "/", "%"];
    // let lastval = string[string.length - 1];


    if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    }
    else if (e.target.innerHTML === "=") {
      string = eval(string);
      if (string == undefined) {
        string = display.value;
        display.value = string;
      }
      else {
        display.value = string;
      }
    }else {
      const operators = ["*", "-", "+", "/", "%"];

      // Prevent starting with an operator
      if (operators.includes(value) && string === "") return;

      // Prevent double operator
      const lastChar = string[string.length - 1];
      if (operators.includes(value) && operators.includes(lastChar)) {
        // Replace last operator with new one
        string = string.slice(0, -1) + value;
      } else {
        string += value;
      }

      display.value = string;
    }
  });

});




