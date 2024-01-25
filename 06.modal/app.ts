// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});

// ! 추가기능
// 닫기 버튼에서 포커스 벗어나는 것 방지
closeBtn.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Tab") {
    e.preventDefault();
  }
});
// esc 입력시 모달 닫기
document.body.addEventListener("keydown", (e: KeyboardEvent) => {
  if (modalOverlay.classList.contains("open-modal") && e.key === "Escape") {
    modalOverlay.classList.remove("open-modal");
  }
});
