const options = [
  { name: "Jollibee", category: "fast-food" },
  { name: "McDonald's", category: "fast-food" },
  { name: "Mang Inasal", category: "fast-food" },
  { name: "Chowking", category: "fast-food" },
  { name: "Max's", category: "fast-food" },
  { name: "Greenwich", category: "fast-food" },
  { name: "Shakey's", category: "fast-food" },
  { name: "KFC", category: "fast-food" },
  { name: "Pizza Hut", category: "fast-food" },
  { name: "Yellow Cab", category: "fast-food" },
  { name: "Bonchon", category: "fast-food" },
  { name: "Krispy Kreme", category: "desserts" },
  { name: "Goldilocks", category: "desserts" },
  { name: "Red Ribbon", category: "desserts" },
  { name: "Conti's", category: "desserts" },
  { name: "Barrio Fiesta", category: "famous-restaurants" },
  { name: "Aristocrat", category: "famous-restaurants" },
  { name: "Gerry's Grill", category: "famous-restaurants" },
  { name: "Manam", category: "famous-restaurants" },
  { name: "Adobo", category: "dishes" },
  { name: "Sinigang", category: "dishes" },
  { name: "Lechon", category: "dishes" },
  { name: "Kare-Kare", category: "dishes" },
  { name: "Pancit", category: "dishes" },
  { name: "Halo-Halo", category: "desserts" },
  { name: "Balut", category: "street-food" },
  { name: "Taho", category: "street-food" },
  { name: "Bulalo", category: "dishes" },
  { name: "Sisig", category: "dishes" },
  { name: "Crispy Pata", category: "dishes" },
  { name: "Laing", category: "dishes" },
  { name: "Bicol Express", category: "dishes" },
  { name: "Puto", category: "snacks" },
  { name: "Inihaw na Liempo", category: "dishes" },
  { name: "Kakanin", category: "snacks" },
  { name: "Buko Pie", category: "desserts" },
  { name: "Champorado", category: "breakfast" },
  { name: "Longganisa", category: "breakfast" },
  { name: "Tapsilog", category: "breakfast" },
  { name: "Tinolang Manok", category: "dishes" },
  { name: "Pansit Palabok", category: "dishes" },
  { name: "Chicken Inasal", category: "dishes" },
  { name: "Sizzling Sisig", category: "dishes" },
  { name: "Ube Halaya", category: "desserts" },
  { name: "Bibingka", category: "snacks" },
  { name: "Suman", category: "snacks" },
  { name: "Ginataang Bilo-Bilo", category: "desserts" },
  { name: "Turon", category: "snacks" },
  { name: "Isaw", category: "street-food" },
  { name: "Pancit Malabon", category: "dishes" },
  { name: "Dinuguan", category: "dishes" },
  { name: "Pinakbet", category: "dishes" },
  { name: "Dirty Ice Cream", category: "desserts" },
  { name: "Tapsilog", category: "breakfast" }
];


const spinBtn = document.getElementById("spin-btn");
const resultSection = document.getElementById("result-section");
const result = document.getElementById("result");
const categorySelect = document.getElementById("category-select");

spinBtn.addEventListener("click", spinLunchRoulette);

function spinLunchRoulette() {
  const selectedCategory = categorySelect.value;
  let filteredOptions = options;

  if (selectedCategory !== "all") {
    filteredOptions = options.filter((option) => {
      return option.category === selectedCategory;
    });
  }

  if (filteredOptions.length === 0) {
    result.textContent = "No options available for the selected category.";
  } else {
    const randomIndex = Math.floor(Math.random() * filteredOptions.length);
    const lunchDestination = filteredOptions[randomIndex].name;
    result.textContent = lunchDestination;
  }

  resultSection.style.display = "block";
}
