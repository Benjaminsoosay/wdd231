// script.js

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Weather API Integration
async function fetchWeather() {
    // Using OpenWeatherMap API - Replace with your API key
    const apiKey = 'demo_key'; // In production, use a real API key
    const city = 'New York';
    
    try {
        // For demo purposes, we'll use mock data since we don't have a real API key
        // In a real implementation, you would fetch from the API
        
        // Mock current weather data
        const currentWeather = {
            temp: 72,
            description: 'Partly Cloudy',
            humidity: 65,
            windSpeed: 8,
            icon: '02d'
        };
        
        // Mock forecast data
        const forecast = [
            { day: 'Tomorrow', temp: 75, description: 'Sunny', icon: '01d' },
            { day: 'Day After', temp: 78, description: 'Clear', icon: '01d' },
            { day: 'In 3 Days', temp: 74, description: 'Cloudy', icon: '03d' }
        ];
        
        // Update current weather
        document.getElementById('current-temp').textContent = currentWeather.temp + '°F';
        document.getElementById('weather-desc').textContent = currentWeather.description;
        document.getElementById('humidity').textContent = currentWeather.humidity;
        document.getElementById('wind-speed').textContent = currentWeather.windSpeed;
        
        // Update forecast
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = '';
        
        forecast.forEach(day => {
            const forecastDay = document.createElement('div');
            forecastDay.className = 'forecast-day';
            forecastDay.innerHTML = `
                <h4>${day.day}</h4>
                <p class="forecast-temp">${day.temp}°F</p>
                <p>${day.description}</p>
            `;
            forecastContainer.appendChild(forecastDay);
        });
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        // Fallback content
        document.getElementById('current-temp').textContent = '--';
        document.getElementById('weather-desc').textContent = 'Data unavailable';
    }
}

// Company Spotlight Data
const members = [
    {
        id: 1,
        name: "Tech Innovations Inc.",
        membershipLevel: "gold",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Leading provider of innovative tech solutions for businesses of all sizes."
    },
    {
        id: 2,
        name: "Green Earth Organics",
        membershipLevel: "silver",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Sustainable organic food products delivered fresh to your doorstep."
    },
    {
        id: 3,
        name: "Premier Financial Services",
        membershipLevel: "gold",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Comprehensive financial planning and investment management services."
    },
    {
        id: 4,
        name: "Urban Design Studio",
        membershipLevel: "silver",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Creative design solutions for residential and commercial spaces."
    },
    {
        id: 5,
        name: "Health Plus Medical",
        membershipLevel: "gold",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
        description: "Comprehensive healthcare services with a patient-first approach."
    }
];

// Display Company Spotlight
function displaySpotlight() {
    // Filter gold and silver members
    const goldSilverMembers = members.filter(member => 
        member.membershipLevel === 'gold' || member.membershipLevel === 'silver'
    );
    
    // Randomly select 2-3 members
    const shuffled = [...goldSilverMembers].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.floor(Math.random() * 2) + 2); // 2 or 3 members
    
    // Update the spotlight container
    const container = document.getElementById('spotlight-container');
    container.innerHTML = '';
    
    selected.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <span class="member-level ${member.membershipLevel}">${member.membershipLevel.toUpperCase()}</span>
            <p>${member.description}</p>
        `;
        container.appendChild(memberCard);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    displaySpotlight();
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}