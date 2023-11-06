document.body.addEventListener('click', createStars);

        function createStars(event) {
            const starCount = 30; // Number of stars to create
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = event.clientX + 'px';
                star.style.top = event.clientY + 'px';
                star.style.animation = `twinkle ${Math.random() * 2 + 1}s linear`;
                document.body.appendChild(star);

                // Remove the star element after the animation
                star.addEventListener('animationend', () => {
                    star.remove();
                });
            }
        }
