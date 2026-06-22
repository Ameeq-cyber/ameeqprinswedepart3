# UniBuddy - Student Companion Platform (Part 3)

UniBuddy is an interactive web-based platform designed to assist tertiary students with administrative and academic navigation. The platform provides quick navigation to essential student hubs, a dedicated student enquiry portal, a dynamic fee calculation system, and automated communication channels.

## 🚀 Features

*   **Interactive Navigation & Layout**: Clean, responsive layout linking the Homepage, About, Services, Enquiry, and Contact modules.
*   **Dynamic Focus Plan Calculator**: Built-in interactive JavaScript form that calculates real-time academic tier fees and optional academic support add-ons dynamically without reloading the page.
*   **EmailJS Integration**: Fully functional production pipeline that captures student form responses and securely fires off automated templates directly to the support helpdesk.
*   **Continuous Deployment**: Integrated via GitHub and automatically built and hosted live on Netlify.

## 🛠️ Tech Stack

*   **Frontend**: HTML5, CSS3 (Custom styling and layouts)
*   **Logic & Computation**: JavaScript (ES6+ Form validation, DOM manipulation, and mathematical costing logic)
*   **Service Integration**: EmailJS SDK Platform API
*   **Deployment**: GitHub & Netlify (Continuous Integration Pipeline)

---

## 📜 Changelog

All notable changes and milestones for this project are documented below.

### [Part 3] - 2026-06-22
#### Added
*   Added dynamic pricing calculation logic in `js/enquiry-calc.js` to process different UniBuddy Focus Plan tiers (Basic, Premium, Group) and academic add-ons.
*   Integrated EmailJS SDK library to securely send live client submission fields (`name`, `email`, `title`, `message`) to the central workspace.
*   Configured automated dashboard variables (`{{title}}`, `{{name}}`, `{{email}}`) matching local form fields to ensure reliable message delivery.
*   Added production deployment live pipeline using GitHub version control and Netlify automated deployment hooks.

### [Part 2] - 2026-06-19
#### Added
*   Expanded multi-page site structure adding dedicated HTML layouts (`about.html`, `services.html`, `enquiry.html`, `contact.html`).
*   Created custom CSS design variables, hero banner modules, and informational styling columns.
*   Established social media handles and community pages including the official project Instagram footprint.

### [Part 1] - 2026-04-20
#### Added
*   Initialized baseline layout framework (`index.html`) using semantic layout tags.
*   Created core branding definitions, basic navigation headers, and baseline responsive viewports.
*   Deployed initial preview layout prototypes to the web via Netlify Drop.

---
