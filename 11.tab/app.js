const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
btns.forEach((button) => {
    button.addEventListener("click", (event) => {
        const activeBtn = event.currentTarget;
        const id = activeBtn.dataset.id;
        btns.forEach((button) => {
            button.classList.remove("active");
        });
        articles.forEach((article) => {
            article.classList.remove("active");
        });
        activeBtn.classList.add("active");
        document.getElementById(id).classList.add("active");
    });
});
export {};
