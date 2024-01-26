// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn: HTMLButtonElement = document.querySelector(".switch-btn");
const video: HTMLVideoElement = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// preloader
const preloader = document.querySelector(".preloader");

// load : DOM 생성을 포함해서 이미지,css,js 파일이 로드됐는지 체크한다.
// mdn - load 이벤트는 리소스와 그것에 의존하는 리소스들의 로딩이 완료되면 실행됩니다
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});
