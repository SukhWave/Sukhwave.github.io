
/* ===================================
   Matrix Code Rain Canvas Animation
=================================== */
const grid = document.querySelector(".matrix-grid");
const letters = "01";
let columns, rows, total;
let cells = [];

// update grid dimensions based on window size
function updateMatrixGrid() {
  columns = Math.floor(window.innerWidth / 14);
  rows = Math.floor(document.querySelector("header").offsetHeight / 14);
  total = columns * rows;

  cells = [];
  grid.innerHTML = ""; 

  for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.classList.add("matrix-char");
    span.textContent = letters[Math.floor(Math.random() * letters.length)];
    grid.appendChild(span);
    cells.push(span);
  }
}

window.addEventListener("resize", updateMatrixGrid);

updateMatrixGrid();

function animateRain() {
  for (let col = 0; col < columns; col++) {
    if (Math.random() < 0.05) {
      let offset = col;
      let dropLength = Math.floor(Math.random() * 10) + 5;

      for (let i = 0; i < dropLength; i++) {
        const cellIndex = (i * columns) + offset;
        if (cellIndex < cells.length) {
          setTimeout(() => {
            cells[cellIndex].classList.add("active");
            setTimeout(() => cells[cellIndex].classList.remove("active"), 600);
          }, i * 80);
        }
      }
    }
  }
}

setInterval(animateRain, 400);

/* ===================================
   Header Rotating Text
=================================== */
const rotatingText = document.querySelector(".rotating-text");

const phrases = [
  "Web Developer",
  "Java Programmer",
  "Creative Thinker",
  "Swift Programmer",
  "UI/UX Enthusiast",
  "Software Developer",
  "Tech Explorer",
  "Graphic Designer"
];

let phraseIndex = 0;

setInterval(() => {
  rotatingText.style.opacity = 0; 
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.style.opacity = 1; 
  }, 300); 
}, 3000); 

/* ===================================
   Carousel for Samples
=================================== */
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-track .thumbs");
  const prevBtn = document.querySelector("#samples .carousel button:first-of-type");
  const nextBtn = document.querySelector("#samples .carousel button:last-of-type");

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === slides.length - 1;
  } // updateCarousel

  nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();

/* ===================================
   Menu Code
=================================== */
let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { 
    $('#menu').animate({
      right: 0
    }, 420, 'swing');
  }
  else { 
    $('#menu').animate({
      right: -360
    }, 420, 'swing');
  }
  menuOpen = !menuOpen;
} // toggleMenu()

/* ===================================
   Typing Animation (About Me)
=================================== */
const paras = document.querySelectorAll("#about p");
let i = 0, pIndex = 0;
const texts = [...paras].map(p => {
  const t = p.textContent;
  p.textContent = "";
  return t;
});

function type() {
  if (pIndex >= texts.length) return;

  const current = texts[pIndex];
  paras[pIndex].textContent += current.charAt(i);
  i++;

  if (i < current.length) {
    setTimeout(type, 20);
  } else {
    i = 0;
    pIndex++;
    setTimeout(type, 300); 
  }
} //type()

type();
