const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const HEX: string = getRandomHex();

  document.body.style.backgroundColor = HEX;
  color.textContent = HEX;
});

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * hex.length);
};

const getRandomHex = (): string => {
  let hcolor = "#";
  for (let i = 0; i < 6; i++) {
    hcolor += hex[getRandomNumber()];
  }
  return hcolor;
};
