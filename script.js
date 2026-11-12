
const terms = [
  {
    word: "Algorithm",
    meaning: "Algoritma",
    definition: "A step-by-step procedure for solving a problem.",
    category: "Programming"
  },
  {
    word: "Database",
    meaning: "Basis data",
    definition: "An organized collection of data.",
    category: "Software"
  },
  {
    word: "Hardware",
    meaning: "Perangkat keras",
    definition: "The physical parts of a computer.",
    category: "Hardware"
  },
  {
    word: "Software",
    meaning: "Perangkat lunak",
    definition: "Programs that tell a computer what to do.",
    category: "Software"
  },
  {
    word: "Network",
    meaning: "Jaringan",
    definition: "Connected computers or devices that communicate.",
    category: "Networking"
  },
  {
    word: "Variable",
    meaning: "Variabel",
    definition: "A named storage location for a value.",
    category: "Programming"
  },
  {
    word: "Keyboard",
    meaning: "Papan ketik",
    definition: "An input device used to enter text.",
    category: "Hardware"
  },
  {
    word: "Router",
    meaning: "Router jaringan",
    definition: "A device that forwards data between networks.",
    category: "Networking"
  },
  {
    word: "Firewall",
    meaning: "Tembok api jaringan",
    definition: "A security system that controls network traffic.",
    category: "Cybersecurity"
  },
  {
    word: "Encryption",
    meaning: "Enkripsi",
    definition: "The process of converting data into a protected form.",
    category: "Cybersecurity"
  }
];

const searchInput = document.getElementById("searchInput");
const dictionary = document.getElementById("dictionary");
const categoryButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "All";

function displayTerms() {
  const search = searchInput.value.toLowerCase().trim();

  const results = terms.filter(function(item) {
    const matchesSearch =
      item.word.toLowerCase().includes(search) ||
      item.meaning.toLowerCase().includes(search) ||
      item.definition.toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (results.length === 0) {
    dictionary.innerHTML =
      "<p>Term not found. Try another word or category.</p>";
    return;
  }

  dictionary.innerHTML = results.map(function(item) {
    return `
      <div class="card">
        <p class="term-category">${item.category}</p>
        <h3>${item.word}</h3>
        <p><strong>Indonesian:</strong> ${item.meaning}</p>
        <p><strong>Definition:</strong> ${item.definition}</p>
      </div>
    `;
  }).join("");
}

searchInput.addEventListener("input", displayTerms);

categoryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedCategory = button.dataset.category;

    categoryButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    displayTerms();
  });
});

displayTerms();


