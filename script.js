const panels = document.querySelectorAll(".panel");
const nextBtns = document.querySelectorAll(".nextBtn");
const envelope = document.getElementById("envelope");

let currentPanel = 0;

/* Panel navigation */
nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    panels[currentPanel].classList.remove("active");
    currentPanel++;
    panels[currentPanel].classList.add("active");
  });
});

/* Envelope open / close */
envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
