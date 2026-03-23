<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Gutenberg Interactive</title>
    <style>

        body {
            font-family: 'Georgia', serif;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            transition: background-color 0.3s, color 0.3s;
        }

        body.dark-mode {
            background-color: #1a1a1a;
            color: #f4f4f4;
        }

        body.sepia-filter {
            background-color: #f4ecd8;
            color: #43302e;
        }
        body.film-grain {
            position: relative;
        }
        body.film-grain::after {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png');
            opacity: 0.15;
            pointer-events: none;
            z-index: 9999;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        button {
            padding: 10px 15px;
            margin: 5px;
            cursor: pointer;
            border: 1px solid #ccc;
            background: #eee;
            border-radius: 4px;
        }
        .dark-mode button {
            background: #333;
            color: white;
            border-color: #555;
        }
        #searchInput {
            width: 100%;
            padding: 10px;
            margin: 20px 0;
            font-size: 16px;
        }
        .book-item {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            display: flex;
        }
        #backToTop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none;
            background: #007bff;
            color: white;
            border: none;
        }
    </style>
</head>
<body>

    <button id="vintageToggle" onclick="toggleVintageMode()">📽️ Turn On Old Projector Mode</button>
    <button id="darkModeToggle">🌙 Toggle Dark Mode</button>

    <h2>
        <span id="typewriter-text"></span><span id="cursor">|</span>
    </h2>
        
    <input type="text" id="searchInput" placeholder="Search for a book...">
    <div id="bookList">
        <div class="book-item">Pride and Prejudice by Jane Austen</div>
        <div class="book-item">Frankenstein by Mary Shelley</div>
        <div class="book-item">Alice's Adventures in Wonderland by Lewis Carroll</div>
        <div class="book-item">Moby Dick by Herman Melville</div>
        <div class="book-item">The Great Gatsby by F. Scott Fitzgerald</div>
    </div>
        
    <div style="height: 1000px;"></div>
    <button id="backToTop">⬆ Back to Top</button>

    <script>

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

        // 2. MAIN INITIALIZATION
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
</body>
</html>
