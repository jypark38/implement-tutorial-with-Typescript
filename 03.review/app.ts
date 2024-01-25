interface userInfo {
  id: number;
  name: string;
  job: string;
  img: string;
  text: string;
}

// local reviews data
const reviews: userInfo[] = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let current = 0;

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById("person-img");
const article = document.querySelector(".review");

window.addEventListener("DOMContentLoaded", () => {
  showItem();
});

article.addEventListener("click", (e: MouseEvent) => {
  const classLists = (e.target as HTMLElement).classList;
  const reviewNum = reviews.length;
  if (classLists.contains("prev-btn") || classLists.contains("fa-chevron-left")) {
    current = (current + reviewNum - 1) % reviewNum;
  }
  if (classLists.contains("next-btn") || classLists.contains("fa-chevron-right")) {
    current = (current + 1) % reviewNum;
  }
  if (classLists.contains("random-btn")) {
    current = Math.floor(Math.random() * reviews.length);
  }
  showItem();
});

function showItem() {
  const review = reviews[current];
  (img as HTMLImageElement).src = review.img;
  author.textContent = review.name;
  info.textContent = review.text;
  job.textContent = review.job;
}

// 사전로딩
// article.addEventListener("mouseOver", (e) => {
//   const classLists = e.target.classList;
//   const reviewNum = reviews.length;
//   if (classLists.contains("prev-btn") || classLists.contains("fa-chevron-left")) {
//     current = (current + reviewNum - 1) % reviewNum;
//   }
//   if (classLists.contains("next-btn") || classLists.contains("fa-chevron-right")) {
//     current = (current + 1) % reviewNum;
//   }

//   const Img = new Image();
//   Img.src = reviews[current].img;
// });
