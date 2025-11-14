// Display courses function
function displayCourses(courseArray) {
    const container = document.getElementById('course-container');
    
    if (courseArray.length === 0) {
        container.innerHTML = '<p class="no-courses">No courses found for this filter.</p>';
        return;
    }
    
    container.innerHTML = courseArray.map(course => `
        <div class="course-card ${course.completed ? 'completed' : ''}" data-subject="${course.subject}">
            <h3>${course.name}</h3>
            <p>Course ID: ${course.id}</p>
            <div class="course-meta">
                <span class="credits">${course.credits} credits</span>
                <span class="subject-tag">${course.subject}</span>
            </div>
        </div>
    `).join('');
}

// Calculate total credits using reduce
function calculateTotalCredits(courseArray) {
    return courseArray.reduce((total, course) => total + course.credits, 0);
}

// Update credits display
function updateCreditsDisplay(courseArray) {
    const totalCredits = calculateTotalCredits(courseArray);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Filter courses function
function filterCourses(subject) {
    let filteredCourses;
    
    if (subject === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    
    displayCourses(filteredCourses);
    updateCreditsDisplay(filteredCourses);
    
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.subject === subject) {
            btn.classList.add('active');
        }
    });
}

// Initialize dynamic dates
function initializeDynamicDates() {
    // Current year for copyright
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
    
    // Last modified date
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString();
}

// Initialize wayfinding for navigation
function initializeWayfinding() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.hash || '#home';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Event listeners for filter buttons
function initializeFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const subject = this.dataset.subject;
            filterCourses(subject);
        });
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initial display of all courses
    displayCourses(courses);
    updateCreditsDisplay(courses);
    
    // Initialize all functionality
    initializeDynamicDates();
    initializeWayfinding();
    initializeFilterButtons();
    
    console.log('Course dashboard initialized successfully');
});