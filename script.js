<script>
    /* ==========================================================================
       PROJECT GUTENBERG - VINTAGE REDESIGN INTERACTIVITY
       ========================================================================== */

    // 1. GLOBAL FUNCTIONS (Must be outside for HTML onclick events to work)
    let isVintageModeOn = false;

    function toggleVintageMode() {
        const body = document.body;
        const btn = document.getElementById('vintageToggle');
        if (!btn) return;

        isVintageModeOn = !isVintageModeOn;
        if (isVintageModeOn) {
            body.classList.add('film-grain', 'sepia-filter');
            btn.innerText = "📽️ Turn Off Old Projector Mode";
        } else {
            body.classList.remove('film-grain', 'sepia-filter');
            btn.innerText = "📽️ Turn On Old Projector Mode";
        }
    }

    // 2. INITIALIZATION (Runs after the HTML document is fully loaded)
    document.addEventListener('DOMContentLoaded', () => {

        // --- Settings Menu Toggle ---
        const settingsTrigger = document.getElementById('settings-trigger');
        const settingsPanel = document.getElementById('settings-panel');

        if (settingsTrigger && settingsPanel) {
            settingsTrigger.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevents the click from instantly closing the menu
                settingsPanel.classList.toggle('active');
            });

            // Close settings menu if clicking anywhere outside of it
            window.addEventListener('click', (event) => {
                if (!settingsPanel.contains(event.target) && event.target !== settingsTrigger) {
                    settingsPanel.classList.remove('active');
                }
            });
        }

        // --- Dark Mode Toggle ---
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
            });
        }

        // --- Typewriter Effect ---
        const typeWriterElement = document.getElementById('typewriter-text');
        const cursorElement = document.getElementById('cursor');

        if (typeWriterElement && cursorElement) {
            const textToType = "Project Gutenberg is a library of over 75,000 free eBooks.";
            let index = 0;
            const typingSpeed = 50;

            function typeWriter() {
                if (index < textToType.length) {
                    typeWriterElement.textContent += textToType.charAt(index);
                    index++;
                    let randomDelay = Math.random() * 50;
                    setTimeout(typeWriter, typingSpeed + randomDelay);
                } else {
                    cursorElement.style.animation = "blink 1s step-end infinite";
                }
            }
            setTimeout(typeWriter, 500); // Small initial delay
        }

        // --- Live Search Filtering ---
        const searchInput = document.getElementById('searchInput');
        const bookList = document.getElementById('bookList');

        if (searchInput && bookList) {
            const books = bookList.getElementsByClassName('book-item');
            searchInput.addEventListener('keyup', function() {
                const query = searchInput.value.toLowerCase();
                for (let i = 0; i < books.length; i++) {
                    const text = books[i].textContent.toLowerCase();
                    books[i].style.display = text.includes(query) ? "flex" : "none";
                }
            });
        }

        // --- Back to Top Button ---
        const backToTopBtn = document.getElementById("backToTop");
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                    backToTopBtn.style.display = "block";
                } else {
                    backToTopBtn.style.display = "none";
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
</script>