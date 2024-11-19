const reviews = [
  {
    id: 1,
    name: "imad",
    job: "medcine",
    img: "mountain.jpg",
    text: "Pour afficher des flèches gauche et droite avec Font Awesome, utilisez les classes correspondantes dans vos balises",
  },
  {
    id: 2,
    name: "ali",
    job: "doctor",
    img: "profile-pic (1).png",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores?",
  },
  {
    id: 1,
    name: "imad",
    job: "medcine",
    img: "fond.jpg",
    text: "Pour afficher des flèches gauche et droite avec Font Awesome, utilisez les classes correspondantes dans vos balises",
  },
  {
    id: 2,
    name: "ali",
    job: "doctor",
    img: "mountain.jpg",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores?",
  },
  {
    id: 2,
    name: "ali",
    job: "doctor",
    img: "profile-pic (1).png",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, dolores?",
  },
];
// select items
const img = document.getElementById("img1");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

// set starting item
let current = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  move(current);
});

// show person based on item
function move(cur) {
  const item = reviews[cur];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// ashow previous person
prevbtn.addEventListener("click", function () {
  if (current === 0) {
    current = reviews.length - 1;
  } else {
    current--;
  }
  move(current);
});
// show next person
nextbtn.addEventListener("click", function () {
  if (current === reviews.length - 1) {
    current = 0;
  } else {
    current++;
  }
  move(current);
});
// showing random cards
randombtn.addEventListener("click", function () {
  let to = Math.trunc(Math.random() * reviews.length);
  move(to);
});
