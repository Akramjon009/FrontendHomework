let raund1 = document.querySelector(".raund1");
let raund2 = document.querySelector(".raund2");
let raund3 = document.querySelector(".raund3");
let res = document.querySelector(".input");

let refresh = document.querySelector(".refresh");
let check = document.querySelector(".check");

function getRandomOperator() {
  const operators = ['+', '-', '/', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
}

raund1.textContent = Math.floor(Math.random() * 100);
raund2.textContent = getRandomOperator();
raund3.textContent = Math.floor(Math.random() * 100);

refresh.addEventListener("click", () => {
  raund1.textContent = Math.floor(Math.random() * 100);
  raund2.textContent = getRandomOperator();
  raund3.textContent = Math.floor(Math.random() * 100);
});

check.addEventListener("click", () => {
  let result;
  switch (raund2.textContent) {
    case '+':
      result = Number(raund1.textContent) + Number(raund3.textContent);
      break;
    case '-':
      result = Number(raund1.textContent) - Number(raund3.textContent);
      break;
    case '/':
      result = Number(raund1.textContent) / Number(raund3.textContent);
      break;
    case '*':
      result = Number(raund1.textContent) * Number(raund3.textContent);
      break;
  }

  if (result === parseInt(res.value)) {
    alert("Correct");
  } else {
    alert("Wrong");
  }
});
