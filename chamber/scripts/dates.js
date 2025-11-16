// Dynamic Dates
document.addEventListener('DOMContentLoaded', function() {
    // Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    // Last Modified Date
    document.getElementById('lastModified').textContent = document.lastModified;
});