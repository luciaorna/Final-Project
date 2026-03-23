<script>
    /* ==========================================================================
       PROJECT GUTENBERG - SIMPLE INTERACTIVITY SCRIPT
       ========================================================================== */

    // 1. VINTAGE MODE TOGGLE (Global function for onclick events)
    let isVintageModeOn = false;

    function toggleVintageMode() {
        const body = document.body;
        const btn = document.getElementById('vintageToggle');
        
        if (!btn) return; // Exit if button doesn't exist

        isVintageModeOn = !isVintageModeOn;
        if (isVintageModeOn) {
            body.classList.add('film-grain', 'sepia-filter');
            btn.innerText = "📽️ Turn Off Projector Mode";
        } else {
            body.classList.remove('film-grain', 'sepia-filter');
            btn.innerText = "📽️ Turn On Old Projector Mode";
        }
    }

    // 2. MAIN INITIALIZATION (Runs when page is ready)
    document.addEventListener('DOMContentLoaded', () => {

        // --- Dark Mode ---
        const darkModeBtn = document.getElementById('darkModeToggle');
        if (darkModeBtn) {
            darkModeBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
            });
        }

        // --- Typewriter Effect ---
        const textElement = document.getElementById('typewriter-text');
        const cursorElement = document.getElementById('cursor');

        if (textElement && cursorElement) {
            const textToType = "Project Gutenberg is a library of over 75,000 free eBooks.";
            let i = 0;

            function type() {
                if (i < textToType.length) {
                    textElement.textContent += textToType.charAt(i);
                    i++;
                    setTimeout(type, 50 + Math.random() * 50);
                } else {
                    cursorElement.style.animation = "blink 1s step-end infinite";
                }
            }
            setTimeout(type, 500);
        }

        // --- Live Search ---
        const searchInput = document.getElementById('searchInput');
        const bookList = document.getElementById('bookList');

        if (searchInput && bookList) {
            const books = bookList.getElementsByClassName('book-item');
            searchInput.addEventListener('keyup', () => {
                const query = searchInput.value.toLowerCase();
                for (let book of books) {
                    const title = book.textContent.toLowerCase();
                    book.style.display = title.includes(query) ? "flex" : "none";
                }
            });
        }

        // --- Back to Top ---
        const topBtn = document.getElementById("backToTop");
        if (topBtn) {
            window.addEventListener('scroll', () => {
                topBtn.style.display = window.scrollY > 300 ? "block" : "none";
            });
            topBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
</script>