/**
 * UniBuddy About Page Functionality Script
 * Requirements met: Gallery Lightbox, Interactive Leaflet Maps API Configuration
 */

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. GALLERY LIGHTBOX FUNCTIONALITY
    // ==========================================
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxActiveImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeLightboxBtn = document.querySelector(".lightbox-close");
    const triggers = document.querySelectorAll(".lightbox-trigger");

    triggers.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt || "UniBuddy Student Gallery View";
            setTimeout(() => lightbox.classList.add("show"), 10);
        });
    });

    if (closeLightboxBtn && lightbox) {
        closeLightboxBtn.addEventListener("click", () => {
            lightbox.classList.remove("show");
            setTimeout(() => lightbox.style.display = "none", 300);
        });

        // Close when clicking empty dark spaces around the image bounds
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("show");
                setTimeout(() => lightbox.style.display = "none", 300);
            }
        });
    }

    // ==========================================
    // 2. INTERACTIVE LEAFLET MAP HUB INTEGRATION
    // ==========================================
    const mapElement = document.getElementById("campusMap");
    if (mapElement) {
        // Initialize map view centered in South Africa coordinates
        const map = L.map('campusMap').setView([-33.9249, 18.4241], 11);

        // Inject free secure OpenStreetMap interface design layer tiles 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap platform contributors'
        }).addTo(map);

        // Add customizable pin markers detailing dynamic operational sites
        const chapterHQ = L.marker([-33.9249, 18.4241]).addTo(map);
        chapterHQ.bindPopup("<b>UniBuddy Main HQ Chapter</b><br>Primary peer mentor networking and planning hub.").openPopup();

        const secondaryHub = L.marker([-33.9321, 18.4602]).addTo(map);
        secondaryHub.bindPopup("<b>UniBuddy Campus Study Annex</b><br>Drop-in workspace and well-being consultation desks.");
    }
});
