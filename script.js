<script>
    // Wait for the HTML to load before running scripts
    document.addEventListener('DOMContentLoaded', () => {

        // --- 1. Typewriter Effect ---
        const typeWriterElement = document.getElementById('typewriter-text'); 
        const cursorElement = document.getElementById('cursor'); 
        
        // Only run if elements exist on the current page
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

        // --- 3. Dark Mode Toggle ---
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => { 
                document.body.classList.toggle('dark-mode'); 
            });
        }

        // --- 4. Live Search Filtering ---
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

        // --- 5. Back to Top Button ---
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

    // --- 2. Vintage Mode Toggle ---
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
</script>