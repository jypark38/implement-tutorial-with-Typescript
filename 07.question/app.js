// using selectors inside the element
// traversing the dom
// 방법 1
const btns = document.querySelectorAll(".question-btn");
btns.forEach((button) => {
    button.addEventListener("click", (event) => {
        const question = event.currentTarget.closest(".question");
        const currentOpen = document.querySelector(".show-text");
        if (currentOpen) {
            currentOpen.classList.remove("show-text");
        }
        if (question) {
            question.classList.toggle("show-text");
        }
    });
});
export {};
// 답안
// const questions = document.querySelectorAll(".question");
// questions.forEach((question) => {
//   const btn = question.querySelector(".question-btn");
//   questions.forEach((item) => {
//     if (item !== question) {
//       item.classList.remove("show-text");
//     }
//   });
//   btn.addEventListener("click", () => {
//     question.classList.toggle("show-text");
//   });
// });
