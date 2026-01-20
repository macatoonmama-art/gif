const panels = document.querySelectorAll(".panel");
const nextBtns = document.querySelectorAll(".nextBtn");
const mysteryBtn = document.querySelector(".mysteryBtn");

let currentPanel = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPanel < panels.length - 1) {
      panels[currentPanel].classList.remove("active");
      currentPanel++;
      panels[currentPanel].classList.add("active");
    }
  });
});

mysteryBtn.addEventListener("click", () => {
  panels[currentPanel].classList.remove("active");
  currentPanel = 4; 
  panels[currentPanel].classList.add("active");
});

document.addEventListener("click", (e) => {
  const openEnvelope = document.querySelector(".envelope.open");
  const clickedEnvelope = e.target.closest('.envelope');

  if (clickedEnvelope) {
    if (!e.target.closest('.paper-content')) {
      clickedEnvelope.classList.toggle("open");
    }
    return;
  }

  if (openEnvelope && !e.target.closest('.paper')) {
    openEnvelope.classList.remove("open");
  }
});

const rainContainer = document.getElementById("strawberry-rain");
for (let i = 0; i < 25; i++) {
  const s = document.createElement("span");
  s.innerText = "🍓";
  s.style.left = Math.random() * 100 + "vw";
  s.style.animationDuration = 3 + Math.random() * 5 + "s";
  rainContainer.appendChild(s);
}