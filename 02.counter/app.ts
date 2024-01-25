let count = 0;

const btnContainer: HTMLDivElement = document.querySelector(".button-container");
const value: HTMLSpanElement = document.getElementById("value");

// 이벤트 위임
btnContainer.addEventListener("click", (e: MouseEvent) => {
  const targetElement = e.target as HTMLElement;

  if (targetElement.classList.contains("decrease")) count--;
  if (targetElement.classList.contains("reset")) count = 0;
  if (targetElement.classList.contains("increase")) count++;

  if (count > 0) value.style.color = "green";
  if (count < 0) value.style.color = "red";
  if (count === 0) value.style.color = "#222";

  value.textContent = count.toString();
});
