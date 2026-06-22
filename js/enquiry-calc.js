/**
 * UniBuddy Enquiry Pricing Calculation & EmailJS Processing Engine
 */

// Initialize EmailJS using Public Key
(function() {
    emailjs.init({
      publicKey: "2n5AVmiGRomundEO6",
    });
})();

document.addEventListener("DOMContentLoaded", () => {
    const enquiryForm = document.getElementById("enquiryForm");
    const resultDisplay = document.getElementById("enquiryCalculationResult");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop page reload

            const clientName = document.getElementById("enquiryName").value.trim();
            const clientEmail = document.getElementById("enquiryEmail").value.trim();
            const designatedPlan = document.getElementById("enquiryPlan").value;
            const chosenAddon = document.getElementById("enquiryAddon").value;
            const customMessage = document.getElementById("enquiryMessage").value.trim();

            // Form validation
            if (!clientName || !clientEmail) {
                resultDisplay.style.display = "block";
                resultDisplay.style.backgroundColor = "#fef2f2";
                resultDisplay.style.color = "#ef4444";
                resultDisplay.innerHTML = "<strong>⚠️ Calculation Aborted:</strong> Please enter a contact name and email address.";
                return;
            }

            // Execute pricing calculation logic
            let baseRate = 0;
            let targetPlanLabel = "";
            let premiumFee = 0;
            let extraFeatureLabel = "";

            if (designatedPlan === "basic") {
                baseRate = 0;
                targetPlanLabel = "Basic Companion Tier";
            } else if (designatedPlan === "premium") {
                baseRate = 150;
                targetPlanLabel = "Premium Success Tier";
            } else if (designatedPlan === "group") {
                baseRate = 350;
                targetPlanLabel = "Study Group Cluster Package";
            }

            if (chosenAddon === "none") {
                premiumFee = 0;
                extraFeatureLabel = "No extra options selected";
            } else if (chosenAddon === "tutor") {
                premiumFee = 120;
                extraFeatureLabel = "1-on-1 Exam Preparation Assistant Module";
            } else if (chosenAddon === "wellness") {
                premiumFee = 50;
                extraFeatureLabel = "Mental Well-Being Tracker Upgrade";
            }

            const totalCalculatedEstimate = baseRate + premiumFee;

            // Display loading message
            resultDisplay.style.display = "block";
            resultDisplay.style.backgroundColor = "#e0f2fe";
            resultDisplay.style.color = "#0369a1";
            resultDisplay.textContent = "Processing calculation parameters and transmitting enquiry...";

            /**
             * Compile data variables into your EmailJS template keys.
             * (Make sure these match your Enquiry Template labels exactly!)
             */
            const templateParams = {
                name: clientName,
                email: clientEmail,
                department: targetPlanLabel, // Maps chosen tier to {{department}}
                title: `Enquiry Quote: R${totalCalculatedEstimate}`, // Maps price to {{title}}
                message: `Plan Selected: ${targetPlanLabel} (R${baseRate}). Add-ons: ${extraFeatureLabel} (R${premiumFee}). Total Estimated Cost: R${totalCalculatedEstimate}.00. User Note: ${customMessage}` // Maps everything to {{message}}
            };

            // Dispatch to EmailJS
            emailjs.send("service_uvxc3xc", "template_9as5te8", templateParams)
                .then(() => {
                    // Success display updates
                    resultDisplay.style.backgroundColor = "#dcfce7";
                    resultDisplay.style.color = "#15803d";
                    resultDisplay.innerHTML = `
                        <strong>✨ Quote Generated & Sent Successfully!</strong><br><br>
                        <strong>Selected Plan:</strong> ${targetPlanLabel} (R${baseRate})<br>
                        <strong>Add-On Module:</strong> ${extraFeatureLabel} (R${premiumFee})<br>
                        <hr style="border: 0; border-top: 1px solid #bbf7d0; margin: 10px 0;">
                        <strong>Total Estimated Cost:</strong> R${totalCalculatedEstimate}.00 total.<br><br>
                        <em>A dynamic copy has been sent to your email at <u>${clientEmail}</u>.</em>
                    `;
                    enquiryForm.reset();
                })
                .catch((error) => {
                    console.error("Enquiry EmailJS delivery error:", error);
                    resultDisplay.style.backgroundColor = "#fef2f2";
                    resultDisplay.style.color = "#ef4444";
                    resultDisplay.innerHTML = "<strong>⚡ Delivery Error:</strong> Calculation complete, but could not transmit email confirmation via EmailJS.";
                });
        });
    }
});