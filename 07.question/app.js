// using selectors inside the element
// traversing the dom
// 방법 1
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const question = (event.currentTarget as HTMLButtonElement).closest(".question");
//     const currentOpen = document.querySelector(".show-text");
//     if (currentOpen) {
//       currentOpen.classList.remove("show-text");
//     }
//     question.classList.toggle("show-text");
//   });
// });
// 답안
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
export {};
