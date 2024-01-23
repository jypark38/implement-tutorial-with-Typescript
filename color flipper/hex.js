const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hcolor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hcolor += hex[randomNumber];
  }
  document.body.style.backgroundColor = hcolor;
  color.textContent = hcolor;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
