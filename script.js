<script>
        // --- 1. Typewriter Effect JavaScript ---
        const textToType = "Project Gutenberg is a library of over 75,000 free eBooks."; const typeWriterElement = document.getElementById('typewriter-text'); const cursorElement = document.getElementById('cursor'); let index = 0; const typingSpeed = 50; function typeWriter() { if (index < textToType.length) { typeWriterElement.innerHTML += textToType.charAt(index); index++; let randomDelay = Math.random() * 50; setTimeout(typeWriter, typingSpeed + randomDelay); } else { cursorElement.style.animation = "blink 1s step-end infinite"; }}
        window.onload = () => { setTimeout(typeWriter, 500); };

        // --- 2. Vintage Mode Toggle JavaScript ---
        let isVintageModeOn = false; function toggleVintageMode() { const body = document.body; const btn = document.getElementById('vintageToggle'); isVintageModeOn = !isVintageModeOn; if (isVintageModeOn) { body.classList.add('film-grain'); body.classList.add('sepia-filter'); btn.innerText = "Turn Off Old Projector Mode"; } else { body.classList.remove('film-grain'); body.classList.remove('sepia-filter'); btn.innerText = "Turn On Old Projector Mode"; }

        // --- 3. Dark Mode Toggle ---
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => { body.classList.toggle('dark-mode'); });

        // --- 4. Live Search Filtering ---
        const searchInput = document.getElementById('searchInput');
        const bookList = document.getElementById('bookList');
        const books = bookList.getElementsByClassName('book-item');

        searchInput.addEventListener('keyup', function() { const query = searchInput.value.toLowerCase();  
                for (let i = 0; i < books.length; i++) { const text = books[i].textContent.toLowerCase(); 
                if (text.includes(query)) { books[i].style.display = "flex"; } else { books[i].style.display = "none"; } } });

        // --- 5. Back to Top Button ---
        const backToTopBtn = document.getElementById("backToTop");
        window.onscroll = function() { if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block"; } else { backToTopBtn.style.display = "none"; } };

        backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth'}); })                                                              
</script>
