document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. DARK MODE WITH PAGE PERSISTENCE ---
    const darkModeBtn = document.getElementById("darkModeBtn");
    
    // Check if user already turned on dark mode on a previous page
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.toggle("dark-mode");
            
            // Save their preference to local storage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    // --- 2. VINTAGE MODE WITH PAGE PERSISTENCE ---
    const vintageModeBtn = document.getElementById("vintageModeBtn");
    
    // Check if user already turned on vintage mode
    if (localStorage.getItem("vintageMode") === "enabled") {
        document.body.classList.add("film-grain");
    }

    if (vintageModeBtn) {
        vintageModeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            document.body.classList.toggle("film-grain");
            
            // Save their preference
            if (document.body.classList.contains("film-grain")) {
                localStorage.setItem("vintageMode", "enabled");
            } else {
                localStorage.setItem("vintageMode", "disabled");
            }
        });
    }

    // --- 3. BACK TO TOP SMOOTH SCROLL ---
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- 4. ACTIVE NAVIGATION HIGHLIGHTER ---
    // This automatically highlights the current page in your sidebar menu
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list a");
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            // Apply the hover/active styles from your CSS
            link.style.backgroundColor = "#5a4a3a";
            link.style.color = "#ffffff";
            link.style.transform = "translateY(-2px)";
        }
    });

});
