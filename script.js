<script>
        // --- 1. Typewriter Effect JavaScript ---
        const textToType = "Project Gutenberg is a library of over 75,000 free eBooks."; const typeWriterElement = document.getElementById('typewriter-text'); const cursorElement = document.getElementById('cursor'); let index = 0; const typingSpeed = 50; function typeWriter() { if (index < textToType.length) { typeWriterElement.innerHTML += textToType.charAt(index); index++; let randomDelay = Math.random() * 50; setTimeout(typeWriter, typingSpeed + randomDelay); } else { cursorElement.style.animation = "blink 1s step-end infinite"; }}

        // Start the typewriter effect when the page loads
        window.onload = () => { setTimeout(typeWriter, 500); };

        // --- 2. Vintage Mode Toggle JavaScript ---
        let isVintageModeOn = false;

        function toggleVintageMode() { const body = document.body; const btn = document.getElementById('vintageToggle'); isVintageModeOn = !isVintageModeOn; if (isVintageModeOn) { body.classList.add('film-grain'); body.classList.add('sepia-filter'); btn.innerText = "Turn Off Old Projector Mode"; } else { body.classList.remove('film-grain'); body.classList.remove('sepia-filter'); btn.innerText = "Turn On Old Projector Mode"; }}
    </script>
