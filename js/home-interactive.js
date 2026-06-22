/**
 * UniBuddy Home Page Functionality 
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. INTERACTIVE MODAL & DYNAMIC CONTENT
    // ==========================================
    const modal = document.getElementById("studyTipModal");
    const openBtn = document.getElementById("tipModalBtn");
    const closeBtn = document.querySelector(".close-modal-btn");
    const tipText = document.getElementById("dynamicTipText");

    // Array of dynamic student tips to show advanced array/DOM manipulation
    const studentTips = [
        "Try the Pomodoro Technique: Study intensely for 25 minutes, then take a clean 5-minute break!",
        "Active Recall is key! Don't just reread notes—quiz yourself out loud or teach a concept to a friend.",
        "Organize your study space tonight so you can hit the ground running tomorrow morning without friction.",
        "Your well-being affects your marks. Drink some water and schedule a firm 15-minute screen-free break today.",
        "Stuck on a tricky assignment project? Head over to our Academic Support page to find a peer tutor matchup!"
    ];

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            // Advanced DOM manipulation: Choose a random dynamic tip from array
            const randomTip = studentTips[Math.floor(Math.random() * studentTips.length)];
            tipText.textContent = randomTip;

            // Display modal with a clean CSS-triggered animation transition
            modal.style.display = "flex";
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); // Matches transition timer
        });

        // Close modal instantly if user clicks on the dark backdrop area
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        });
    }

    // ==========================================
    // 2. SCROLL ANIMATION & TRANSITIONS
    // ==========================================
    // Automatically fades and slides in the main Focus Area cards when scrolled into view
    const focusCards = document.querySelectorAll(".animated-card");

    const appearanceOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, appearanceOptions);

    focusCards.forEach(card => {
        cardObserver.observe(card);
    });
});

