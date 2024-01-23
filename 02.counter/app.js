let count = 0;

const btnContainer = document.querySelector(".button-container");
const value = document.getElementById("value");

// 이벤트 위임
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("decrease")) count--;
  if (e.target.classList.contains("reset")) count = 0;
  if (e.target.classList.contains("increase")) count++;

  if (count > 0) value.style.color = "green";
  if (count < 0) value.style.color = "red";
  if (count === 0) value.style.color = "#222";

  value.textContent = count;
});
