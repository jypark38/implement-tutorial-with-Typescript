// using selectors inside the element
// traversing the dom

// 방법 1
const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".question-btn");

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const question: HTMLElement | null = (event.currentTarget as HTMLButtonElement).closest(".question");

    const currentOpen: HTMLElement | null = document.querySelector(".show-text");
    if (currentOpen) {
      currentOpen.classList.remove("show-text");
    }
    if (question) {
      question.classList.toggle("show-text");
    }
  });
});

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
