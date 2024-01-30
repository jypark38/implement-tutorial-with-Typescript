// const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".tab-btn");
// const articles: NodeListOf<HTMLDivElement> = document.querySelectorAll(".content");
// btns.forEach((button) => {
//   button.addEventListener("click", (event: MouseEvent) => {
//     const activeBtn = event.currentTarget as HTMLButtonElement;
//     const id = activeBtn.dataset.id;
//     btns.forEach((button) => {
//       button.classList.remove("active");
//     });
//     articles.forEach((article) => {
//       article.classList.remove("active");
//     });
//     activeBtn.classList.add("active");
//     document.getElementById(id).classList.add("active");
//   });
// });
/// 이벤트 위임
const btnContainer = document.querySelector(".btn-container");
const aboutContainer = document.querySelector(".about-content");
btnContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName == "BUTTON") {
        const id = target.dataset.id;
        const currentActiveTab = btnContainer.querySelector(".active");
        const currentActiveAbout = aboutContainer.querySelector(".active");
        currentActiveTab.classList.remove("active");
        currentActiveAbout.classList.remove("active");
        target.classList.add("active");
        document.getElementById(id).classList.add("active");
    }
});
export {};
