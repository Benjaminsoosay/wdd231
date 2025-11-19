// Author: Benjamin Soosay Iwuchukwu
// Project: Wetaskiwin Chamber of Commerce Directory
// Description: Loads member data from JSON, toggles views, and updates footer dates

document.addEventListener('DOMContentLoaded', () => {
  initializePage();
  loadMembersData();
});

function initializePage() {
  // Set current year
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Set last modified date
  const modifiedElement = document.getElementById("lastModified");
  if (modifiedElement) {
    modifiedElement.textContent = document.lastModified;
  }

  // View toggle buttons
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");

  gridBtn.addEventListener("click", () => switchView("grid"));
  listBtn.addEventListener("click", () => switchView("list"));
}

let currentView = localStorage.getItem("currentView") || "grid";

function switchView(view) {
  currentView = view;
  localStorage.setItem("currentView", view);
  displayMembers(window.membersData);

  document.getElementById("gridView").classList.toggle("active", view === "grid");
  document.getElementById("listView").classList.toggle("active", view === "list");
}

async function loadMembersData() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to fetch member data");
    const data = await response.json();
    window.membersData = data.members;
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
    document.getElementById("membersContainer").innerHTML = `<p class="error">Unable to load member data.</p>`;
  }
}

function displayMembers(members) {
  const container = document.getElementById("membersContainer");
  container.innerHTML = "";

  container.className = currentView === "grid" ? "members-grid" : "members-list";

  members.forEach(member => {
    const card = document.createElement("div");
    card.className = currentView === "grid" ? "member-card" : "member-list-item";

    const membershipLevels = {
      1: { name: "Member", class: "membership-1" },
      2: { name: "Silver", class: "membership-2" },
      3: { name: "Gold", class: "membership-3" }
    };

    const membership = membershipLevels[member.membershipLevel];

    card.innerHTML = `
      <div class="member-image">
        <img src="images/${member.image}" alt="${member.name}" />
      </div>
      <div class="member-info">
        <h3>${member.name}</h3>
        <p class="category">${member.category}</p>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <span class="membership-badge ${membership.class}">${membership.name}</span>
      </div>
    `;

    container.appendChild(card);
  });
}