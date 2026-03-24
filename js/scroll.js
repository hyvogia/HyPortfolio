// Scroll to saved section on page load
window.addEventListener("load", () => {
    const savedSection = localStorage.getItem("scrollSection");
    if (savedSection) {
        document.getElementById(savedSection).scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollSection"); // Clear after use
    }
});

// Save section ID in localStorage before refreshing
function scrollToSection(sectionId) {
    localStorage.setItem("scrollSection", sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
