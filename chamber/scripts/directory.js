// Author: Benjamin Soosay Iwuchukwu
// Project: Wetaskiwin Chamber of Commerce Directory
// Description: Loads member data from JSON, toggles views, and updates footer dates

document.getElementById('current-year').textContent = new Date().getFullYear();

async function loadMembers() {
  try {
    const response = await fetch('members.json');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  const grid = document.getElementById('members-grid');
  const list = document.getElementById('members-list');
  grid.innerHTML = '';
  list.innerHTML = '';

  members.forEach(member => {
    // Grid view
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">${member.membership} Member</p>
    `;
    grid.appendChild(card);

    // List view
    const item = document.createElement('div');
    item.className = 'member-item';
    item.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.address} | ${member.phone} | <a href="${member.website}" target="_blank">${member.website}</a> | ${member.membership}</p>
    `;
    list.appendChild(item);
  });
}

// Toggle view buttons
document.getElementById('grid-view').addEventListener('click', () => {
  document.getElementById('members-grid').classList.remove('hidden');
  document.getElementById('members-list').classList.add('hidden');
  document.getElementById('grid-view').classList.add('active');
  document.getElementById('list-view').classList.remove('active');
});

document.getElementById('list-view').addEventListener('click', () => {
  document.getElementById('members-list').classList.remove('hidden');
  document.getElementById('members-grid').classList.add('hidden');
  document.getElementById('list-view').classList.add('active');
  document.getElementById('grid-view').classList.remove('active');
});

loadMembers();
