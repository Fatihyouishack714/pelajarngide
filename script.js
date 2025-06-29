document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu after clicking
            if (window.innerWidth < 640) {
                document.getElementById('nav-menu').classList.add('hidden');
            }
        });
    });

    // Toggle mobile menu
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('nav-menu').classList.toggle('hidden');
    });

    // Add animation to product cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__slideInUp');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });

    // Gallery image swap
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function () {
            const mainImg = this.parentElement.previousElementSibling;
            mainImg.src = this.src;
            document.querySelectorAll('.gallery-img').forEach(i => i.classList.remove('border-blue-500'));
            this.classList.add('border-blue-500');
        });
    });
});