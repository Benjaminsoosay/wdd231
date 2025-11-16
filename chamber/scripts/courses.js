// Course Data Array
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', credits: 2, completed: false }
];

// DOM Elements
const courseCards = document.getElementById('courseCards');
const totalCredits = document.getElementById('totalCredits');
const allBtn = document.getElementById('allBtn');
const wddBtn = document.getElementById('wddBtn');
const cseBtn = document.getElementById('cseBtn');

let currentFilter = 'all';

// Display Courses
function displayCourses(filteredCourses) {
    courseCards.innerHTML = '';
    
    filteredCourses.forEach(course => {
        const card = document.createElement('div');
        // ✅ FIXED: use template literal for className
        card.className = `course-card ${course.completed ? 'completed' : ''}`;
        
        card.innerHTML = `
            <div class="course-code">${course.subject} ${course.number}</div>
            <div class="course-title">${course.title}</div>
            <div class="course-credits">${course.credits} credits</div>
            ${course.completed ? '<div class="course-status">✓ Completed</div>' : ''}
        `;
        
        courseCards.appendChild(card);
    });
    
    updateTotalCredits(filteredCourses);
}

// Update Total Credits
function updateTotalCredits(filteredCourses) {
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = total;
}

// Filter Courses
function filterCourses(filter) {
    let filteredCourses = [];
    
    switch(filter) {
        case 'wdd':
            filteredCourses = courses.filter(course => course.subject === 'WDD');
            break;
        case 'cse':
            filteredCourses = courses.filter(course => course.subject === 'CSE');
            break;
        default:
            filteredCourses = courses;
    }
    
    displayCourses(filteredCourses);
    updateActiveButton(filter);
}

// Update Active Button
function updateActiveButton(filter) {
    [allBtn, wddBtn, cseBtn].forEach(btn => btn.classList.remove('active'));
    
    switch(filter) {
        case 'wdd':
            wddBtn.classList.add('active');
            break;
        case 'cse':
            cseBtn.classList.add('active');
            break;
        default:
            allBtn.classList.add('active');
    }
}

// Event Listeners
allBtn.addEventListener('click', () => filterCourses('all'));
wddBtn.addEventListener('click', () => filterCourses('wdd'));
cseBtn.addEventListener('click', () => filterCourses('cse'));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    filterCourses('all');
});
