const options = [
  "Jollibee",
  "McDonald's",
  "Mang Inasal",
  "Chowking",
  "Max's",
  "Greenwich",
  "Shakey's",
  "KFC",
  "Pizza Hut",
  "Yellow Cab",
  "Bonchon",
  "Krispy Kreme",
  "Goldilocks",
  "Red Ribbon",
  "Conti's",
  "Barrio Fiesta",
  "Aristocrat",
  "Gerry's Grill",
  "Manam",
  "Lutong Bahay",
  "Adobo",
  "Sinigang",
  "Lechon",
  "Kare-Kare",
  "Pancit",
  "Halo-Halo",
  "Balut",
  "Taho",
  "Bulalo",
  "Sisig",
  "Crispy Pata",
  "Laing"
];

const spinBtn = document.getElementById("spin-btn");
const resultSection = document.getElementById("result-section");
const result = document.getElementById("result");

spinBtn.addEventListener("click", spinLunchRoulette);

function spinLunchRoulette() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const lunchDestination = options[randomIndex];

  result.textContent = lunchDestination;
  resultSection.style.display = "block";
}
