// Initialize count
let count = 0;

let countEl = document.getElementById("count__el");
let saveEl = document.getElementById("save__el");

// Increment function
function increment() {
  count++;
  countEl.textContent = count;
}

let savedCounts = [];

// Save function
function save() {
  savedCounts.push(count);
  saveEl.textContent = "Previous Entries: [" + savedCounts.join(", ") + "]";
  count = 0;
  countEl.textContent = count;
}
