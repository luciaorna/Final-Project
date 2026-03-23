<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Gutenberg Interactive</title>
    <style>

        body { font-family: 'Georgia', serif; padding: 20px; max-width: 800px; margin: 0 auto; transition: background-color 0.3s, color 0.3s; }

        body.dark-mode { background-color: #1a1a1a; color: #f4f4f4; }

        body.sepia-filter { background-color: #f4ecd8; color: #43302e; }
        body.film-grain { position: relative; }
        body.film-grain::after { content: ""; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png'); opacity: 0.15; pointer-events: none; z-index: 9999 }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        button { padding: 10px 15px; margin: 5px; cursor: pointer; border: 1px solid #ccc; background: #eee; border-radius: 4px; }
        .dark-mode button { background: #333; color: white; border-color: #555; }
        #searchInput { width: 100%; padding: 10px; margin: 20px 0; font-size: 16px; }
        .book-item { padding: 10px; border-bottom: 1px solid #ccc; display: flex; }
        #backToTop { position: fixed; bottom: 20px; right: 20px; display: none; background: #007bff; color: white; border: none; }
    </style>
</head>
<body>
        
<script>
   document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. BACK TO TOP BUTTON LOGIC ---
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) {
        // Show or hide the button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        // Scroll to top when clicked
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Add a hover effect to the button
        backToTopBtn.addEventListener("mouseenter", () => {
            backToTopBtn.style.backgroundColor = "#8a6541";
        });
        backToTopBtn.addEventListener("mouseleave", () => {
            backToTopBtn.style.backgroundColor = "#a67c52";
        });
    }

    // --- 2. DRAGGABLE CAROUSEL LOGIC ---
    const carousels = document.querySelectorAll('.carousel-track');

    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast multiplier
            carousel.scrollLeft = scrollLeft - walk;
        });
    });

});

</script>

</body>
</html>
