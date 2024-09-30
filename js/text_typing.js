            // =======typing text animation=====
            document.addEventListener('DOMContentLoaded', function() {
                const typedTextElement = document.getElementById('typed-text');
                const texts = ["FreeLancer.", "Software Engineer.", "Web Developer."];
                const typingSpeed = 90;
                const erasingSpeed = 50;
                const newTextDelay = 2000;
                let textIndex = 0;
                let charIndex = 0;
            
                function type() {
                    if (charIndex < texts[textIndex].length) {
                        typedTextElement.textContent += texts[textIndex].charAt(charIndex);
                        charIndex++;
                        setTimeout(type, typingSpeed);
                    } else {
                        setTimeout(erase, newTextDelay);
                    }
                }
            
                function erase() {
                    if (charIndex > 0) {
                        typedTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(erase, erasingSpeed);
                    } else {
                        textIndex++;
                        if (textIndex >= texts.length) textIndex = 0;
                        setTimeout(type, typingSpeed);
                    }
                }
            
                // Initial call to start the typing effect
                setTimeout(type, newTextDelay + 250);
            });