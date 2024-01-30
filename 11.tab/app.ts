const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".tab-btn");
const articles: NodeListOf<HTMLDivElement> = document.querySelectorAll(".content");

btns.forEach((button) => {
  button.addEventListener("click", (event: MouseEvent) => {
    const activeBtn = event.currentTarget as HTMLButtonElement;
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
