// 1. This popup will tell you if the file is connected properly!
// (You can delete this line once you see the popup)
alert("JavaScript is connected and running!");

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. FOOLPROOF BUTTON FINDER (No IDs required in your HTML)
    const allLinks = document.querySelectorAll("a");

    allLinks.forEach(link => {
        
        // --- DARK MODE ---
        if (link.textContent.includes("Dark Mode")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.body.classList.toggle("dark-mode");
                try {
                    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
                } catch(err) {} // Ignore local storage errors
            });
        }

        // --- VINTAGE MODE ---
        if (link.textContent.includes("Vintage")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                document.body.classList.toggle("film-grain");
                try {
                    localStorage.setItem("vintageMode", document.body.classList.contains("film-grain") ? "enabled" : "disabled");
                } catch(err) {}
            });
        }

        // --- BACK TO TOP ---
        if (link.textContent.includes("Top")) {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });

    // 3. CHECK SAVED PREFERENCES ON PAGE LOAD
    try {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
        }
        if (localStorage.getItem("vintageMode") === "enabled") {
            document.body.classList.add("film-grain");
        }
    } catch(err) {}

    // 4. HIGHLIGHT CURRENT PAGE IN SIDEBAR
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-list a");
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref && linkHref.includes(currentPage) && currentPage !== "") {
            link.style.backgroundColor = "#5a4a3a";
            link.style.color = "#ffffff";
        }
    });

});
