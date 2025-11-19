// JSON data for attraction cards
const attractionData = [
    {
        id: 1,
        name: "Riverside Park",
        address: "450 Park Avenue",
        description: "A beautiful 50-acre park with walking trails, playgrounds, and picnic areas along the river.",
        image: "images/riverside-park.webp",
        link: "riverside.html"
    },
    {
        id: 2,
        name: "Community Art Museum",
        address: "123 Gallery Street",
        description: "Featuring rotating exhibits of local and international artists, with a focus on contemporary works.",
        image: "images/art-museum.webp",
        link: "art-museum.html"
    },
    {
        id: 3,
        name: "Historic Downtown",
        address: "Main Street District",
        description: "Charming historic district with unique shops, restaurants, and beautifully preserved architecture.",
        image: "images/historic-downtown.webp",
        link: "downtown.html"
    },
    {
        id: 4,
        name: "Botanical Gardens",
        address: "800 Garden Lane",
        description: "Stunning 30-acre gardens featuring native plants, exotic species, and seasonal flower displays.",
        image: "images/botanical-gardens.webp",
        link: "gardens.html"
    },
    {
        id: 5,
        name: "Science Discovery Center",
        address: "456 Innovation Drive",
        description: "Interactive science museum with hands-on exhibits for all ages, planetarium, and butterfly house.",
        image: "images/science-center.webp",
        link: "science-center.html"
    },
    {
        id: 6,
        name: "Lakeview Trail",
        address: "Trailhead at North Park",
        description: "Scenic 5-mile trail around Crystal Lake, perfect for walking, running, and cycling.",
        image: "images/lakeview-trail.webp",
        link: "lakeview.html"
    },
    {
        id: 7,
        name: "Performing Arts Center",
        address: "789 Theater Way",
        description: "State-of-the-art venue hosting concerts, theater productions, and community performances.",
        image: "images/performing-arts.webp",
        link: "arts-center.html"
    },
    {
        id: 8,
        name: "Farmers Market Pavilion",
        address: "250 Market Street",
        description: "Year-round market featuring local produce, artisan goods, and food vendors in a covered pavilion.",
        image: "images/farmers-market.webp",
        link: "market.html"
    },
    {
        id: 9,
        name: "Sports Complex",
        address: "900 Athletic Boulevard",
        description: "Modern facilities for soccer, baseball, tennis, and swimming with programs for all skill levels.",
        image: "images/sports-complex.webp",
        link: "sports.html"
    },
    {
        id: 10,
        name: "Heritage Museum",
        address: "321 History Lane",
        description: "Explore our community's rich history through exhibits, artifacts, and interactive displays.",
        image: "images/heritage-museum.webp",
        link: "heritage.html"
    }
];

// Function to display attraction cards
function displayAttractionCards() {
    const container = document.getElementById('cards-container');
    
    attractionData.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}" class="card-image" loading="lazy">
            <div class="card-content">
                <h3 class="card-title">${attraction.name}</h3>
                <p class="card-address">${attraction.address}</p>
                <p class="card-description">${attraction.description}</p>
                <a href="${attraction.link}" class="btn card-button">Learn More</a>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayAttractionCards();
});
