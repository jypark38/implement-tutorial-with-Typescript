// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels
// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear().toString();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    linksContainer.style.height = containerHeight === 0 ? `${linksHeight}px` : `0`;
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    scrollHeight > navHeight ? navbar.classList.add("fixed-nav") : navbar.classList.remove("fixed-nav");
    scrollHeight > 500 ? topLink.classList.add("show-link") : topLink.classList.remove("show-link");
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        // 기본적으로 navbar 만큼 스크롤을 덜 해야함
        let position = element.offsetTop - navHeight;
        // fixedNav가 없는 경우 scroll을 덜 해야한다.
        //  -> 스크롤이 내려가면 navbar 만큼의 높이가 문서에서 사라진다.
        if (!fixedNav) {
            position -= navHeight;
        }
        // navigation이 열려있을때, 이 높이만큼 더 스크롤을 해줘야한다.
        if (navHeight > 82) {
            position += containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        // 컨테이너 접기
        linksContainer.style.height = `0`;
    });
});
export {};
