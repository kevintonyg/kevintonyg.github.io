document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation to feature cards when they come into view
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });

    // Add glitch effect on hover for the main title
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        glitchText.addEventListener('mouseover', () => {
            glitchText.style.animation = 'none';
            setTimeout(() => {
                glitchText.style.animation = 'glitch 500ms infinite';
            }, 10);
        });
    }

    // Add fade-in animation for the Who We Are section
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    const sectionContent = document.querySelector('.section-content');
    if (sectionContent) {
        sectionContent.style.opacity = '0';
        sectionContent.style.transform = 'translateY(30px)';
        sectionContent.style.transition = 'all 0.8s ease-out';
        contentObserver.observe(sectionContent);
    }

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    if (track) {
        const slides = document.querySelectorAll('.carousel-slide');
        const slideWidth = 100 / 6;
        let currentIndex = 0;

        const firstSlides = Array.from(slides).slice(0, 6);
        firstSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        function updateSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        }

        document.querySelector('.next')?.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= slides.length) {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
                track.offsetHeight;
                track.style.transition = 'transform 0.5s ease-in-out';
            }
            updateSlidePosition();
        });

        document.querySelector('.prev')?.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                track.style.transition = 'none';
                currentIndex = slides.length - 1;
                track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
                track.offsetHeight;
                track.style.transition = 'transform 0.5s ease-in-out';
            }
            updateSlidePosition();
        });

        // Auto-scroll
        setInterval(() => {
            document.querySelector('.next')?.click();
        }, 3000);
    }

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    let isMenuOpen = false;

    if (mobileMenuToggle && mobileNav) {
        // Toggle menu
        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close menu only when clicking a navigation link
        document.querySelectorAll('.mobile-nav .nav-item').forEach(link => {
            link.addEventListener('click', (e) => {
                isMenuOpen = false;
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                
                const href = link.getAttribute('href');
                
                // If it's a page link (contains .html), let it navigate normally
                if (href.includes('.html')) {
                    return;
                }
                
                // For anchor links, prevent default and scroll smoothly
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Stop propagation of clicks inside the menu
        mobileNav.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Cookie consent functionality
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptButton = document.querySelector('.accept-cookies');
    const declineButton = document.querySelector('.decline-cookies');

    // Check if user has already made a choice
    if (!localStorage.getItem('cookieConsent')) {
        // Show the banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('show');
    });

    declineButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieBanner.classList.remove('show');
    });

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeToggleIcon = document.querySelector('.theme-toggle-icon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        // The icons will switch automatically through CSS
        // No need to change content
    }
}); 