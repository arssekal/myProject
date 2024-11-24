const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const valueText = document.getElementById("value");
let value = 0;

increase.addEventListener("click", function () {
  value += 1;
  valueText.innerText = value;
  if (value > 0) {
    valueText.style.color = "green";
  } 
});
decrease.addEventListener("click", function () {
  value -= 1;
  valueText.innerText = value;
  if (value < 0) {
    valueText.style.color = "red";
  }
});
reset.addEventListener("click", function () {
  value = 0;
  valueText.innerText = value;
  valueText.style.color = "black";
});

