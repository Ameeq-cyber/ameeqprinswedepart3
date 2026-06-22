/**
 * UniBuddy Contact Form Processing Pipeline - Dual EmailJS Service Router
 */

// Initialize EmailJS using main Public Key
(function() {
    //EmailJS Public Key string
    emailjs.init({
      publicKey: "2n5AVmiGRomundEO6",
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const feedbackBox = document.getElementById("contactFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Stop page from refreshing

            // Gather inputs from the form
            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const chosenRecipient = document.getElementById("contactRecipient").value;
            const subject = document.getElementById("contactSubject").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            // Client-Side validation checks
            if (!name || !email || !subject || !message) {
                feedbackBox.className = "form-response-box error-state";
                feedbackBox.style.backgroundColor = "#fef2f2";
                feedbackBox.style.color = "#ef4444";
                feedbackBox.innerHTML = "<strong>⚠️ Validation Error:</strong> Please fill out all required fields before submitting.";
                feedbackBox.style.display = "block";
                return;
            }

            // Display loading message
            feedbackBox.className = "form-response-box info-state";
            feedbackBox.style.backgroundColor = "#e0f2fe";
            feedbackBox.style.color = "#0369a1";
            feedbackBox.textContent = "Connecting to the selected campus email route... Please wait.";
            feedbackBox.style.display = "block";

            // Compile the form fields into EmailJS template parameters
            const templateParams = {
                name: name,
                email: email,
                message_subject: subject,
                message: message
            };

            /**
             * DYNAMIC ROUTER:
            
             */
            let targetServiceID = "";

            if (chosenRecipient === "unibuddysupport@gmail.com") {
                targetServiceID = "service_zqlw0kq"; 
            } else if (chosenRecipient === "gqeberhaUnibuddysupport@gmail.com") {
                targetServiceID = "service_uvxc3xc";
            }

            // Execute the dispatch to the chosen service using your template ID
            emailjs.send(targetServiceID, "template_9as5te8", templateParams)
            
                .then(() => {
                    feedbackBox.className = "form-response-box success-state";
                    feedbackBox.style.backgroundColor = "#dcfce7";
                    feedbackBox.style.color = "#15803d";
                    feedbackBox.innerHTML = `<strong>✨ Transmission Success!</strong><br>Thank you, ${name}. Your message has been routed and sent directly to our campus team.`;
                    contactForm.reset(); // Clear the form input entries
                })
                .catch((error) => {
                    console.error("EmailJS dispatch route failure:", error);
                    feedbackBox.className = "form-response-box error-state";
                    feedbackBox.style.backgroundColor = "#fef2f2";
                    feedbackBox.style.color = "#ef4444";
                    feedbackBox.innerHTML = "<strong>⚡ System Delivery Failure:</strong> Could not transmit your message. Please verify your internet connection and try again.";
                });
        });
    }
});