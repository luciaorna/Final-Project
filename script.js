// Wait for the page to fully load before running the code
document.addEventListener("DOMContentLoaded", () => {
    
    // Find all buttons that have the "mode-btn" class
    const modeButtons = document.querySelectorAll(".mode-btn");

    modeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            
            // Prevents the page from jumping to the top when clicking the link
            e.preventDefault(); 
            
            const text = btn.textContent;

            // --- DARK MODE ---
            if (text.includes("Dark Mode")) {
                document.body.classList.toggle("dark-mode");
                // Turns off vintage mode if it was on, so they don't mix
                document.body.classList.remove("film-grain"); 
            }

            // --- VINTAGE MODE ---
            if (text.includes("Vintage")) {
                document.body.classList.toggle("film-grain");
                // Turns off dark mode if it was on
                document.body.classList.remove("dark-mode"); 
            }

            // --- BACK TO TOP ---
            if (text.includes("Top")) {
                // Scrolls smoothly back to the top of the page
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

});