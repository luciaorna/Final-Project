<script>
    // 1. GLOBAL FUNCTIONS (Needed for HTML onclick attributes)
    let isVintageModeOn = false; 
    
    function toggleVintageMode() { 
        const body = document.body; 
        const btn = document.getElementById('vintageToggle'); 
        
        if (!btn) return;

        isVintageModeOn = !isVintageModeOn; 
        if (isVintageModeOn) { 
            body.classList.add('film-grain', 'sepia-filter'); 
            btn.innerText = "Turn Off Old Projector Mode"; 
        } else { 
            body.classList.remove('film-grain', 'sepia-filter'); 
            btn.innerText = "Turn On Old Projector Mode"; 
        }
    }

    // 2. INITIALIZATION (Wait for HTML to load)
    document.addEventListener('DOMContentLoaded', () => {

        // --- Settings Menu Toggle ---
        const settingsTrigger = document.getElementById('settings-trigger');
        const settingsPanel = document.getElementById('settings-panel');

        if (settingsTrigger && settingsPanel) {
            settingsTrigger.addEventListener('click', (e) => {
                // Stop the click from immediately bubbling to the window listener
                e.stopPropagation();
                const isFlex = settingsPanel.style.display === "flex";
                settingsPanel.style.display = isFlex ? "none" : "flex";
            });

            // Close panel if user clicks anywhere outside of it
            window.addEventListener('click', (event) => {
                if (!settingsPanel.contains(event.target) && event.target !== settingsTrigger) {
                    settingsPanel.style.display = "none";
                }
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
            setTimeout(typeWriter, 500); 
        }

        // --- Dark Mode Toggle ---
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => { 
                document.body.classList.toggle('dark-mode'); 
            });
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
                    if (text.includes(query)) { 
                        books[i].style.display = "flex"; 
                    } else { 
                        books[i].style.display = "none"; 
                    } 
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
                window.scrollTo({ top: 0, behavior: 'smooth'}); 
            });
        }
    });
</script>