const items = [
  {
    name: "AirPods Pro",
    desc: "Lost near library second floor.",
    emoji: "🎧"
  },

  {
    name: "Student ID Card",
    desc: "Found near cafeteria.",
    emoji: "🪪"
  },

  {
    name: "Laptop Charger",
    desc: "Dell charger found in Lab 204.",
    emoji: "🔌"
  }
];

function renderItems() {

  const grid = document.getElementById("items-grid");

  grid.innerHTML = items.map(item => `

    <div class="item-card">

      <div class="card-image">
        ${item.emoji}
      </div>

      <div class="card-body">

        <div class="card-title">
          ${item.name}
        </div>

        <div class="card-desc">
          ${item.desc}
        </div>

      </div>

    </div>

  `).join("");

}

renderItems();


function openReportModal(type){

  const modal = document.getElementById("report-modal");

  modal.style.display = "flex";

  document.getElementById("modal-title").innerText =
    type === "lost"
      ? "🔴 Report Lost Item"
      : "✅ Report Found Item";
}


function closeModal(){

  document.getElementById("report-modal").style.display = "none";

}


function submitItem(){

  const name = document.getElementById("item-name").value;

  const desc = document.getElementById("item-desc").value;

  if(name === ""){
    alert("Please enter item name");
    return;
  }

  items.unshift({
    name,
    desc,
    emoji:"📦"
  });

  renderItems();

  closeModal();

  document.getElementById("item-name").value = "";
  document.getElementById("item-desc").value = "";

  alert("Item Added Successfully!");

}