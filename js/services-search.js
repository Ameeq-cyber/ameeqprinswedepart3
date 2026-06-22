/**
 * UniBuddy Services Page Processing Architecture
 * Requirements Met: Dynamic content array injection, keyword filtering, and structural sorting controls.
 */

// Dataset representing your 5 primary core services mapped to keyword tracking metadata arrays
const UNIBUDDY_SERVICES_DATA = [
    {
        id: "study-planning",
        title: "Study Planning",
        category: "productivity",
        image: "images/planner 2.jpg",
        altText: "A university student organizing their academic semester using the UniBuddy interactive time management system.",
        description: "UniBuddy assists students organize their study schedules and help with time management by helping them manage their time effectively."
    },
    {
        id: "assignment-tracking",
        title: "Assignment Tracking",
        category: "productivity",
        image: "images/group study.jpg",
        altText: "A student dashboard compiling upcoming course project delivery markers and assignment deadlines.",
        description: "Students can keep track of their assignments, deadlines, and important tasks that they need to submit on time."
    },
    {
        id: "group-collaboration",
        title: "Group Study Collaboration",
        category: "academic",
        image: "images/planner 3.jpg",
        altText: "A diverse student cohort collaborating on a collective project task inside a university campus workspace library.",
        description: "UniBuddy allows students to interact and collaborate with classmates to plan group study sessions, tutoring sessions, share study resources, and much more."
    },
    {
        id: "academic-support",
        title: "Academic Support",
        category: "academic",
        image: "images/happy.jpg",
        altText: "A peer mentor guiding a first-year student through challenging exam preparation materials.",
        description: "The students receive guidance and resources to improve their academic performance and achieve their academic goals."
    },
    {
        id: "productivity-tools",
        title: "Student Productivity Tools",
        category: "productivity",
        image: "Images/study.jpg",
        altText: "A clear minimal working workspace running focused pomodoro countdown tools to boost deep learning.",
        description: "UniBuddy provides tools to assist students to stay focused and productive and make studying for tests or exams and completing assignments fun and rewarding."
    }
];

/**
 * Renders the service item components dynamically to the target container DOM anchor node
 * @param {Array} trackingArray - Dataset payload list to print
 */
function displayServicesFeed(trackingArray) {
    const outputWrapper = document.getElementById("dynamicServicesWrapper");
    if (!outputWrapper) return;

    // Fallback display condition check if search filters return no items
    if (trackingArray.length === 0) {
        outputWrapper.innerHTML = `
            <div class="empty-search-fallback">
                <p>⚡ No matching UniBuddy services identified. Try modifying your search query filters.</p>
            </div>
        `;
        return;
    }

    // Process and assemble string segments asynchronously into complete HTML components
    outputWrapper.innerHTML = trackingArray.map(item => `
        <article class="service-card-block" data-domain="${item.category}">
            <img src="${item.image}" alt="${item.altText}" class="service-card-thumbnail">
            <div class="service-card-body">
                <h3>${item.title}</h3>
                <span class="category-badge-tag">${item.category === 'productivity' ? 'Productivity & Planning' : 'Academic & Collaboration'}</span>
                <p>${item.description}</p>
            </div>
        </article>
    `).join('');
}

/**
 * Evaluates live user input markers against title and category indices to generate clean filtered views
 */
function handleSearchFilterExecution() {
    const activeSearchQuery = document.getElementById("serviceSearchInput").value.toLowerCase();
    const designatedCategoryFilter = document.getElementById("categoryFilterDropdown").value;

    const filteredResultsPayload = UNIBUDDY_SERVICES_DATA.filter(service => {
        const matchesQueryKeywords = service.title.toLowerCase().includes(activeSearchQuery) || 
                                     service.description.toLowerCase().includes(activeSearchQuery);
                                     
        const matchesCategoryContext = designatedCategoryFilter === "all" || 
                                       service.category === designatedCategoryFilter;

        return matchesQueryKeywords && matchesCategoryContext;
    });

    displayServicesFeed(filteredResultsPayload);
}

// Attach operational event hook handlers on full operational ready status
document.addEventListener("DOMContentLoaded", () => {
    // Perform initial base feed print out
    displayServicesFeed(UNIBUDDY_SERVICES_DATA);

    const interactiveSearchBox = document.getElementById("serviceSearchInput");
    const interactiveFilterMenu = document.getElementById("categoryFilterDropdown");

    if (interactiveSearchBox) {
        interactiveSearchBox.addEventListener("input", handleSearchFilterExecution);
    }
    if (interactiveFilterMenu) {
        interactiveFilterMenu.addEventListener("change", handleSearchFilterExecution);
    }
});

