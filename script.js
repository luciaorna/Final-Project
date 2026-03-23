document.addEventListener("DOMContentLoaded", () => {
    
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        // Dark Mode
        if (link.id === 'darkModeBtn' || link.textContent.includes('🌙 Dark Mode')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.toggle('dark-mode');
            });
        }
        
        // Vintage Mode
        if (link.id === 'vintageModeBtn' || link.textContent.includes('📽️ Vintage')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.toggle('film-grain');
            });
        }

        // Back to Top
        if (link.id === 'backToTop' || link.textContent.includes('↑ Top')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-list a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage && currentPage !== "") {
            link.style.backgroundColor = "#5a4a3a";
            link.style.color = "#ffffff";
        }
    });
});
