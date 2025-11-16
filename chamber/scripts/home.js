// scripts/home.js
// Home page specific functionality

// Mock member data (would normally be loaded from a JSON file)
const memberData = [
    {
        "name": "Springfield Hardware",
        "address": "456 Oak Avenue, Springfield",
        "phone": "(555) 234-5678",
        "website": "https://springfieldhardware.com",
        "image": "images/hardware-store.jpg",
        "membershipLevel": "Gold"
    },
    {
        "name": "Tech Solutions Inc.",
        "address": "789 Tech Park, Springfield",
        "phone": "(555) 345-6789",
        "website": "https://techsolutions.com",
        "image": "images/tech-company.jpg",
        "membershipLevel": "Silver"
    },
    {
        "name": "Green Thumb Landscaping",
        "address": "321 Garden Lane, Springfield",
        "phone": "(555) 456-7890",
        "website": "https://greenthumb.com",
        "image": "images/landscaping.jpg",
        "membershipLevel": "Gold"
    },
    {
        "name": "Main Street Cafe",
        "address": "159 Main Street, Springfield",
        "phone": "(555) 567-8901",
        "website": "https://mainstreetcafe.com",
        "image": "images/cafe.jpg",
        "membershipLevel": "Silver"
    },
    {
        "name": "Springfield Auto Repair",
        "address": "753 Auto Way, Springfield",
        "phone": "(555) 678-9012",
        "website": "https://springfieldauto.com",
        "image": "images/auto-repair.jpg",
        "membershipLevel": "Gold"
    }
];

// Function to display random member spotlights
function displaySpotlights() {
    const container = document.getElementById('spotlight-container');
    if (!container) return;
    
    // Filter for Gold and Silver members
    const premiumMembers = memberData.filter(member => 
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
    
    // Randomly select 2-3 members
    const numToShow = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const shuffled = [...premiumMembers].sort(() => 0.5 - Math.random());
    const selectedMembers = shuffled.slice(0, numToShow);
    
    // Clear container
    container.innerHTML = '';
    
    // Create spotlight cards
    selectedMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="spotlight-logo" width="80" height="80">
            <h3 class="spotlight-name">${member.name}</h3>
            <p class="spotlight-phone">${member.phone}</p>
            <p class="spotlight-address">${member.address}</p>
            <a href="${member.website}" target="_blank" class="spotlight-website">Visit Website</a>
            <span class="membership-badge ${member.membershipLevel.toLowerCase()}-member">${member.membershipLevel} Member</span>
        `;
        
        container.appendChild(card);
    });
}

// Function to fetch and display weather data
async function fetchWeatherData() {
    try {
        // Mock API response
        const mockWeatherData = {
            current: {
                temp: 72,
                description: "Sunny",
                icon: "images/sunny.png"
            },
            forecast: [
                { day: "Tomorrow", temp: 75, description: "Mostly Sunny" },
                { day: "Day 2", temp: 68, description: "Partly Cloudy" },
                { day: "Day 3", temp: 70, description: "Sunny" }
            ]
        };
        
        // ✅ FIXED: use template literal with backticks or string concatenation
        document.getElementById('current-temp').textContent = `${mockWeatherData.current.temp}°F`;
        document.getElementById('weather-desc').textContent = mockWeatherData.current.description;
        document.getElementById('weather-icon').src = mockWeatherData.current.icon;
        document.getElementById('weather-icon').alt = mockWeatherData.current.description;
        
        // Update forecast
        const forecastGrid = document.querySelector('.forecast-grid');
        forecastGrid.innerHTML = '';
        
        mockWeatherData.forecast.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'forecast-day';
            
            dayElement.innerHTML = `
                <p class="day">${day.day}</p>
                <p class="forecast-temp">${day.temp}°F</p>
                <p class="forecast-desc">${day.description}</p>
            `;
            
            forecastGrid.appendChild(dayElement);
        });
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displaySpotlights();
    fetchWeatherData();
});
