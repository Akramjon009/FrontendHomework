document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const input1 = document.querySelector(".input");
  const buttons = document.querySelectorAll(".operator");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const operator = button.value;

      if (operator === "=") {
        calculate();
      }
      else {
        input1.value += operator;
      }
    });
  });

  function calculate() {
    const result = eval(input1.value);
    display.value = result;
  }
});
