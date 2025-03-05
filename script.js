// Custom Cursor with SVG
document.addEventListener('DOMContentLoaded', () => {
    // Create SVG cursor element
    const cursorSVG = `
    <svg height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" fill="#ffffff" transform="rotate(90)">
        <g id="SVGRepo_iconCarrier">
            <path style="fill:#074761;" d="M412.374,262.829c-20.052-20.052-23.553-50.372-10.536-74.03l0,0 c-23.659,13.017-57.478,6.014-77.532-14.04c-20.052-20.051-27.055-53.873-14.038-77.53l0,0 c-23.659,13.017-53.977,9.514-74.03-10.538c-17.128-17.127-22.177-41.744-15.177-63.306L10.451,488.617l465.231-210.611 C454.12,285.005,429.503,279.957,412.374,262.829z"/>
            <path d="M140.797,324.832c-5.256-2.381-11.449-0.047-13.829,5.21l-2.671,5.9c-2.379,5.257-0.047,11.449,5.21,13.829 c1.398,0.633,2.862,0.933,4.303,0.933c3.978,0,7.779-2.283,9.526-6.142l2.671-5.899 C148.386,333.403,146.054,327.212,140.797,324.832z"/>
            <path d="M227.158,134.062c-5.255-2.38-11.449-0.047-13.829,5.21l-67.205,148.453c-2.379,5.257-0.047,11.449,5.21,13.829 c1.398,0.633,2.862,0.933,4.303,0.933c3.977,0,7.779-2.284,9.526-6.142l67.204-148.453 C234.749,142.634,232.415,136.442,227.158,134.062z"/>
            <path d="M499.315,47.454l-0.577-0.577c-16.909-16.906-44.417-16.908-61.326,0L324.998,159.29 c-11.905-17.292-14.588-40.639-5.574-57.021c2.241-4.073,1.521-9.139-1.766-12.426c-3.288-3.288-8.354-4.007-12.426-1.766 c-7.605,4.184-16.244,6.396-24.981,6.397c-13.834,0.001-26.84-5.387-36.622-15.169c-13.845-13.843-18.684-34.034-12.627-52.69 c1.713-5.275-0.994-10.969-6.165-12.971c-5.171-2.004-11.006,0.382-13.294,5.435L0.93,484.307 c-1.794,3.963-0.945,8.622,2.131,11.698c2.002,2.002,4.676,3.061,7.392,3.061c1.456,0,2.924-0.305,4.306-0.931L479.99,287.524 c5.052-2.286,7.437-8.121,5.435-13.293c-2.003-5.172-7.695-7.878-12.971-6.165c-5.189,1.684-10.596,2.538-16.071,2.538 c-13.835,0-26.841-5.386-36.62-15.164c-16.205-16.206-19.811-41.538-8.77-61.604c2.241-4.073,1.521-9.138-1.765-12.426 c-3.289-3.288-8.355-4.007-12.428-1.766c-6.32,3.478-13.988,5.315-22.173,5.316c-12.321,0.001-24.741-3.977-34.838-10.905 L452.191,61.656c8.759-8.761,23.011-8.76,31.777,0.006l0.577,0.576c8.76,8.759,8.76,23.012,0,31.77 c-4.081,4.081-4.081,10.697,0.001,14.778c4.079,4.08,10.697,4.08,14.778-0.001C516.228,91.878,516.228,64.368,499.315,47.454z M385.022,205.122c-4.372,23.19,2.702,47.833,19.964,65.096c7.438,7.437,16.203,13.063,25.763,16.657L31.408,467.659L212.186,68.331 c3.583,9.482,9.187,18.273,16.664,25.751c13.731,13.729,31.985,21.291,51.402,21.29c4.597,0,9.176-0.438,13.668-1.296 c-3.408,23.582,4.911,49.988,22.998,68.074c14.849,14.847,36.424,23.711,57.711,23.71 C378.155,205.859,381.629,205.61,385.022,205.122z"/>
        </g>
    </svg>`;
    
    // Create cursor elements
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    // Replace cursor content with SVG
    cursor.innerHTML = cursorSVG;
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 80);
    });

    // Cursor effects on hover
    const links = document.querySelectorAll('a, button, .burger, .service-card, .resource-card');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-active');
            cursorFollower.classList.add('follower-active');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-active');
            cursorFollower.classList.remove('follower-active');
        });
    });
});

// Navigation
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    
    // Toggle navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active navigation link
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
});

// Particles Animation
document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.querySelector('.particle-container');
    
    if (particleContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 5 + 1;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Apply styles
            particle.style.cssText = `
                position: absolute;
                top: ${posY}%;
                left: ${posX}%;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(37, 99, 235, ${opacity});
                border-radius: 50%;
                animation: float ${duration}s linear infinite;
                animation-delay: -${Math.random() * 20}s;
            `;
            
            particleContainer.appendChild(particle);
        }
    }
});

// Stats Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const increment = countTo / (duration / 30); // Update every 30ms
                
                const counter = setInterval(() => {
                    count += increment;
                    if (count >= countTo) {
                        target.textContent = countTo;
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(count);
                    }
                }, 30);
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
});

// Resources Slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.resources-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    if (slider && prevBtn && nextBtn) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.resource-card');
        const slideWidth = slides[0].clientWidth + 32; // Width + gap
        const maxSlide = slides.length - 1;
        
        // Update slider position
        const updateSlider = () => {
            slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            slider.style.transition = 'transform 0.5s ease';
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        };
        
        // Next slide
        nextBtn.addEventListener('click', () => {
            if (currentSlide >= maxSlide) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            updateSlider();
        });
        
        // Previous slide
        prevBtn.addEventListener('click', () => {
            if (currentSlide <= 0) {
                currentSlide = maxSlide;
            } else {
                currentSlide--;
            }
            updateSlider();
        });
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });
        
        // Auto slide
        let slideInterval = setInterval(() => {
            if (currentSlide >= maxSlide) {
                currentSlide = 0;
            } else {
                currentSlide++;
            }
            updateSlider();
        }, 5000);
        
        // Pause on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                if (currentSlide >= maxSlide) {
                    currentSlide = 0;
                } else {
                    currentSlide++;
                }
                updateSlider();
            }, 5000);
        });
    }
});

// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const testimonialBtns = document.querySelectorAll('.testimonial-btn');
    
    if (testimonials.length > 0 && testimonialBtns.length > 0) {
        testimonialBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const index = parseInt(btn.getAttribute('data-index'));
                
                // Hide all testimonials
                testimonials.forEach(testimonial => {
                    testimonial.classList.remove('active');
                });
                
                // Deactivate all buttons
                testimonialBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Show selected testimonial
                testimonials[index].classList.add('active');
                
                // Activate selected button
                btn.classList.add('active');
            });
        });
        
        // Auto rotate testimonials
        let currentTestimonial = 0;
        const maxTestimonial = testimonials.length - 1;
        
        const rotateTestimonials = () => {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            
            // Deactivate all buttons
            testimonialBtns.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Show next testimonial
            testimonials[currentTestimonial].classList.add('active');
            
            // Activate next button
            testimonialBtns[currentTestimonial].classList.add('active');
            
            // Increment counter
            currentTestimonial = currentTestimonial >= maxTestimonial ? 0 : currentTestimonial + 1;
        };
        
        let testimonialInterval = setInterval(rotateTestimonials, 6000);
        
        // Pause on hover
        testimonials.forEach(testimonial => {
            testimonial.addEventListener('mouseenter', () => {
                clearInterval(testimonialInterval);
            });
            
            testimonial.addEventListener('mouseleave', () => {
                testimonialInterval = setInterval(rotateTestimonials, 6000);
            });
        });
    }
});

// Form Validation and Animation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const inputs = contactForm.querySelectorAll('input, select, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.parentElement.classList.add('error');
                } else {
                    input.parentElement.classList.remove('error');
                }
            });
            
            if (valid) {
                // Show success message
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.backgroundColor = 'var(--success-color)';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    
                    // Reset labels
                    const labels = contactForm.querySelectorAll('label');
                    labels.forEach(label => {
                        label.style.top = '0.8rem';
                        label.style.fontSize = '1rem';
                        label.style.color = 'var(--gray-color)';
                    });
                }, 3000);
            }
        });
    }
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to reveal
    const revealElements = document.querySelectorAll('.section-header, .service-card, .resource-card, .stat-item, .about-text p');
    
    revealElements.forEach(element => {
        element.classList.add('reveal-element');
        observer.observe(element);
    });
});

// Add CSS for reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        @keyframes float {
            0%, 100% {
                transform: translateY(0) translateX(0);
            }
            25% {
                transform: translateY(-15px) translateX(15px);
            }
            50% {
                transform: translateY(0) translateX(30px);
            }
            75% {
                transform: translateY(15px) translateX(15px);
            }
        }
        
        @keyframes navLinkFade {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Network Visualization for About Section
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('networkCanvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        
        // Set canvas dimensions
        function setCanvasDimensions() {
            const container = canvas.parentElement;
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }
        
        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);
        
        // Create European cities with accurate relative positions
        const europeCities = [
            { name: "London", x: 0.32, y: 0.38, country: "UK", size: 6, isUK: true },
            { name: "Manchester", x: 0.30, y: 0.34, country: "UK", size: 4, isUK: true },
            { name: "Edinburgh", x: 0.28, y: 0.28, country: "UK", size: 4, isUK: true },
            { name: "Birmingham", x: 0.31, y: 0.36, country: "UK", size: 3, isUK: true },
            { name: "Paris", x: 0.36, y: 0.42, country: "France", size: 6 },
            { name: "Berlin", x: 0.48, y: 0.34, country: "Germany", size: 6 },
            { name: "Amsterdam", x: 0.40, y: 0.32, country: "Netherlands", size: 5 },
            { name: "Madrid", x: 0.25, y: 0.58, country: "Spain", size: 5 },
            { name: "Rome", x: 0.48, y: 0.56, country: "Italy", size: 5 },
            { name: "Warsaw", x: 0.56, y: 0.34, country: "Poland", size: 4 },
            { name: "Vienna", x: 0.52, y: 0.42, country: "Austria", size: 4 },
            { name: "Brussels", x: 0.38, y: 0.36, country: "Belgium", size: 4 },
            { name: "Stockholm", x: 0.50, y: 0.20, country: "Sweden", size: 4 },
            { name: "Dublin", x: 0.22, y: 0.34, country: "Ireland", size: 4 },
            { name: "Prague", x: 0.50, y: 0.38, country: "Czech Republic", size: 3 },
            { name: "Barcelona", x: 0.32, y: 0.56, country: "Spain", size: 3 },
            { name: "Milan", x: 0.44, y: 0.48, country: "Italy", size: 3 },
            { name: "Zurich", x: 0.42, y: 0.44, country: "Switzerland", size: 3 }
        ];
        
        // Node class
        class Node {
            constructor(x, y, radius, color, name = null, country = null, isUK = false) {
                this.x = x * width;
                this.y = y * height;
                this.targetX = this.x;
                this.targetY = this.y;
                this.radius = radius;
                this.color = color;
                this.name = name;
                this.country = country;
                this.isUK = isUK;
                this.pulseRadius = radius;
                this.pulseDirection = 1;
                this.connections = [];
                this.isHub = name !== null;
                this.highlighted = false;
                this.hoverState = false;
            }
            
            update() {
                // Smooth movement toward target
                this.x += (this.targetX - this.x) * 0.05;
                this.y += (this.targetY - this.y) * 0.05;
                
                // Pulse effect
                this.pulseRadius += 0.03 * this.pulseDirection;
                if (this.pulseRadius > this.radius + 1 || this.pulseRadius < this.radius - 1) {
                    this.pulseDirection *= -1;
                }
            }
            
            draw() {
                // Draw glow for highlighted nodes
                if (this.highlighted || this.hoverState) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
                    const glowColor = this.isUK ? 
                        'rgba(122, 104, 255, 0.2)' : 
                        'rgba(122, 104, 255, 0.15)';
                    ctx.fillStyle = glowColor;
                    ctx.fill();
                }
                
                // Draw node
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
                ctx.fillStyle = this.hoverState ? '#a78bfa' : this.color;
                ctx.fill();
                
                // Glow effect
                ctx.shadowBlur = this.highlighted || this.hoverState ? 20 : 10;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.shadowBlur = 0;
                
                // Draw city name for hub nodes
                if (this.isHub) {
                    ctx.font = `${this.isUK ? 'bold ' : ''}10px Poppins`;
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.textAlign = 'center';
                    ctx.fillText(this.name, this.x, this.y - this.radius - 5);
                    
                    // Draw country name for non-UK cities
                    if (!this.isUK && this.country) {
                        ctx.font = '8px Poppins';
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                        ctx.fillText(this.country, this.x, this.y - this.radius + 8);
                    }
                }
            }
            
            isPointInside(x, y) {
                const distance = Math.sqrt(
                    Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)
                );
                return distance < this.radius * 2;
            }
        }
        
        // Create nodes
        const nodes = [];
        const colors = {
            ukHub: 'rgba(122, 104, 255, 0.9)',
            europeHub: 'rgba(79, 70, 229, 0.8)',
            ukSatellite: 'rgba(139, 92, 246, 0.7)',
            europeSatellite: 'rgba(67, 56, 202, 0.7)',
            global: 'rgba(139, 92, 246, 0.7)',
            specialists: 'rgba(167, 139, 250, 0.8)',
            solutions: 'rgba(192, 132, 252, 0.8)'
        };
        
        // Create hub nodes (cities)
        europeCities.forEach(city => {
            nodes.push(new Node(
                city.x, 
                city.y, 
                city.size, 
                city.isUK ? colors.ukHub : colors.europeHub,
                city.name,
                city.country,
                city.isUK
            ));
        });
        
        // Create satellite nodes
        const satelliteCount = width < 768 ? 40 : 80;
        
        for (let i = 0; i < satelliteCount; i++) {
            const x = 0.15 + Math.random() * 0.7; // Keep within Europe map area
            const y = 0.15 + Math.random() * 0.6;
            const radius = Math.random() * 1.2 + 0.8;
            
            // Determine if this is in UK region (rough approximation)
            const isUKRegion = x < 0.33 && y > 0.25 && y < 0.4;
            
            const node = new Node(
                x, y, radius, 
                isUKRegion ? colors.ukSatellite : colors.europeSatellite
            );
            
            // Connect to nearest hub
            let nearestHub = null;
            let minDistance = Infinity;
            
            nodes.forEach(hub => {
                if (hub.isHub) {
                    const dx = hub.x - (x * width);
                    const dy = hub.y - (y * height);
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        nearestHub = hub;
                    }
                }
            });
            
            if (nearestHub) {
                node.connections.push(nearestHub);
                nearestHub.connections.push(node);
            }
            
            nodes.push(node);
        }
        
        // Connect major cities
        function connectMajorCities() {
            const majorConnections = [
                ["London", "Paris"],
                ["London", "Amsterdam"],
                ["London", "Edinburgh"],
                ["London", "Manchester"],
                ["London", "Birmingham"],
                ["London", "Dublin"],
                ["Manchester", "Edinburgh"],
                ["Manchester", "Birmingham"],
                ["Paris", "Brussels"],
                ["Paris", "Madrid"],
                ["Paris", "Milan"],
                ["Amsterdam", "Brussels"],
                ["Amsterdam", "Berlin"],
                ["Berlin", "Warsaw"],
                ["Berlin", "Prague"],
                ["Berlin", "Vienna"],
                ["Madrid", "Barcelona"],
                ["Rome", "Milan"],
                ["Vienna", "Prague"],
                ["Vienna", "Zurich"],
                ["Stockholm", "Berlin"]
            ];
            
            majorConnections.forEach(connection => {
                const city1 = nodes.find(node => node.name === connection[0]);
                const city2 = nodes.find(node => node.name === connection[1]);
                
                if (city1 && city2) {
                    if (!city1.connections.includes(city2)) {
                        city1.connections.push(city2);
                    }
                    if (!city2.connections.includes(city1)) {
                        city2.connections.push(city1);
                    }
                }
            });
        }
        
        connectMajorCities();
        
        // Draw connections between nodes
        function drawConnections() {
            nodes.forEach(node => {
                node.connections.forEach(connectedNode => {
                    const dx = node.x - connectedNode.x;
                    const dy = node.y - connectedNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(connectedNode.x, connectedNode.y);
                    
                    let opacity = Math.min(0.7, 1 - distance / 400);
                    
                    // Highlight connections for UK cities
                    if ((node.isUK || connectedNode.isUK) && (node.isHub && connectedNode.isHub)) {
                        opacity = 0.8;
                        ctx.lineWidth = 1.5;
                        ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
                    } else if (node.isHub && connectedNode.isHub) {
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    } else {
                        ctx.lineWidth = node.highlighted || connectedNode.highlighted ? 0.8 : 0.4;
                        ctx.strokeStyle = `rgba(122, 104, 255, ${opacity})`;
                    }
                    
                    ctx.stroke();
                });
            });
        }
        
        // Handle mouse interaction
        let mouseX = 0;
        let mouseY = 0;
        let hoveredNode = null;
        
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
            
            // Check if mouse is over any node
            let foundNode = false;
            nodes.forEach(node => {
                if (node.isHub && node.isPointInside(mouseX, mouseY)) {
                    node.hoverState = true;
                    hoveredNode = node;
                    foundNode = true;
                    canvas.style.cursor = 'pointer';
                } else {
                    node.hoverState = false;
                }
            });
            
            if (!foundNode) {
                hoveredNode = null;
                canvas.style.cursor = 'default';
            }
        });
        
        canvas.addEventListener('click', () => {
            if (hoveredNode) {
                // Highlight the clicked node and its connections
                nodes.forEach(node => {
                    node.highlighted = false;
                });
                
                hoveredNode.highlighted = true;
                
                // Also highlight directly connected cities
                hoveredNode.connections.forEach(connectedNode => {
                    if (connectedNode.isHub) {
                        connectedNode.highlighted = true;
                    }
                });
            } else {
                // Reset all highlights
                nodes.forEach(node => {
                    node.highlighted = false;
                });
            }
        });
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw map outline (subtle)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(122, 104, 255, 0.1)';
            ctx.lineWidth = 1;
            // Simple outline of Europe (very simplified)
            ctx.moveTo(width * 0.2, height * 0.3);  // Ireland
            ctx.lineTo(width * 0.25, height * 0.4); // UK
            ctx.lineTo(width * 0.35, height * 0.45); // France
            ctx.lineTo(width * 0.3, height * 0.65); // Spain
            ctx.lineTo(width * 0.45, height * 0.7); // Mediterranean
            ctx.lineTo(width * 0.6, height * 0.6); // Italy/Balkans
            ctx.lineTo(width * 0.7, height * 0.4); // Eastern Europe
            ctx.lineTo(width * 0.6, height * 0.2); // Scandinavia
            ctx.lineTo(width * 0.4, height * 0.25); // North Sea
            ctx.lineTo(width * 0.2, height * 0.3); // Back to Ireland
            ctx.stroke();
            
            // Draw UK outline (more prominent)
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(167, 139, 250, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.moveTo(width * 0.32, height * 0.32); // Scotland
            ctx.lineTo(width * 0.31, height * 0.36); // Northern England
            ctx.lineTo(width * 0.33, height * 0.4); // Southern England
            ctx.lineTo(width * 0.29, height * 0.38); // Wales
            ctx.lineTo(width * 0.28, height * 0.34); // Back up west coast
            ctx.lineTo(width * 0.32, height * 0.32); // Back to Scotland
            ctx.stroke();
            
            // Draw connections
            drawConnections();
            
            // Update and draw nodes
            nodes.forEach(node => {
                node.update();
                node.draw();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Interactive feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const feature = card.getAttribute('data-feature');
                
                // Reset all highlights
                nodes.forEach(node => {
                    node.highlighted = false;
                });
                
                // Highlight nodes based on feature
                nodes.forEach(node => {
                    if (!node.isHub) {
                        node.color = colors[feature];
                        
                        // Create movement effect based on feature
                        if (feature === 'global') {
                            // Highlight UK connections to Europe
                            if (node.isHub) {
                                if (node.isUK) {
                                    node.highlighted = true;
                                    // Highlight European cities connected to this UK city
                                    node.connections.forEach(connectedNode => {
                                        if (connectedNode.isHub && !connectedNode.isUK) {
                                            connectedNode.highlighted = true;
                                        }
                                    });
                                }
                            } else {
                                // Move satellites in flowing patterns
                                const angle = Math.random() * Math.PI * 2;
                                const distance = 20 + Math.random() * 30;
                                const connectedHub = node.connections.find(n => n.isHub);
                                if (connectedHub) {
                                    node.targetX = connectedHub.x + Math.cos(angle) * distance;
                                    node.targetY = connectedHub.y + Math.sin(angle) * distance;
                                }
                            }
                        } else if (feature === 'specialists') {
                            // Highlight sector specialists (group by region)
                            if (node.isHub) {
                                // No special highlighting for hubs
                            } else {
                                // Group satellites tightly around their hubs
                                const connectedHub = node.connections.find(n => n.isHub);
                                if (connectedHub) {
                                    const angle = Math.random() * Math.PI * 2;
                                    const distance = 10 + Math.random() * 15;
                                    node.targetX = connectedHub.x + Math.cos(angle) * distance;
                                    node.targetY = connectedHub.y + Math.sin(angle) * distance;
                                }
                            }
                        } else if (feature === 'solutions') {
                            // Highlight innovative solutions (organized patterns)
                            if (node.isHub) {
                                // No special highlighting for hubs
                            } else {
                                // Form grid patterns around major hubs
                                const connectedHub = node.connections.find(n => n.isHub);
                                if (connectedHub) {
                                    const gridSize = 5;
                                    const cellSize = 10;
                                    const gridX = Math.floor(Math.random() * gridSize);
                                    const gridY = Math.floor(Math.random() * gridSize);
                                    node.targetX = connectedHub.x + (gridX - gridSize/2) * cellSize;
                                    node.targetY = connectedHub.y + (gridY - gridSize/2) * cellSize;
                                }
                            }
                        }
                    }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset node colors, positions and highlights
                nodes.forEach(node => {
                    if (!node.isHub) {
                        node.color = node.isUK || 
                            (node.connections.find(n => n.isHub && n.isUK)) ? 
                            colors.ukSatellite : colors.europeSatellite;
                        
                        // Return to original position near hub
                        const connectedHub = node.connections.find(n => n.isHub);
                        if (connectedHub) {
                            const angle = Math.random() * Math.PI * 2;
                            const distance = 20 + Math.random() * 50;
                            node.targetX = connectedHub.x + Math.cos(angle) * distance;
                            node.targetY = connectedHub.y + Math.sin(angle) * distance;
                        }
                    }
                    
                    node.highlighted = false;
                });
            });
        });
        
        // Initial positioning
        nodes.forEach(node => {
            if (!node.isHub) {
                const connectedHub = node.connections.find(n => n.isHub);
                if (connectedHub) {
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 20 + Math.random() * 50;
                    node.targetX = connectedHub.x + Math.cos(angle) * distance;
                    node.targetY = connectedHub.y + Math.sin(angle) * distance;
                }
            }
        });
    }
}); 

// Add this code to your existing script.js file to enhance service card animations

document.addEventListener('DOMContentLoaded', () => {
    // Enhanced service card animations
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('service-ripple');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                z-index: 1;
                opacity: 1;
                pointer-events: none;
            `;
            
            card.appendChild(ripple);
            
            // Animate ripple
            setTimeout(() => {
                ripple.style.transition = 'all 0.8s ease-out';
                ripple.style.width = '300%';
                ripple.style.height = '300%';
                ripple.style.opacity = '0';
            }, 10);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 800);
            
            // Slightly rotate icon on hover
            const icon = card.querySelector('.service-icon');
            icon.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset icon rotation
            const icon = card.querySelector('.service-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Add this code to your existing script.js file for resource type animations

document.addEventListener('DOMContentLoaded', () => {
    // Resource type animations
    const resourceTypes = document.querySelectorAll('.resource-type');
    
    resourceTypes.forEach(resourceType => {
        resourceType.addEventListener('mouseenter', () => {
            // Create pulse effect for icon
            const icon = resourceType.querySelector('.resource-type-icon');
            icon.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            
            // Animate list items sequentially
            const listItems = resourceType.querySelectorAll('.resource-features li');
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateX(5px)';
                }, index * 100);
            });
        });
        
        resourceType.addEventListener('mouseleave', () => {
            // Reset icon
            const icon = resourceType.querySelector('.resource-type-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
            
            // Reset list items
            const listItems = resourceType.querySelectorAll('.resource-features li');
            listItems.forEach(item => {
                item.style.transform = 'translateX(0)';
            });
        });
    });
});

// Update the clients carousel to rotate one by one
document.addEventListener('DOMContentLoaded', () => {
    // Clients carousel
    const track = document.querySelector('.clients-track');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const clientLogos = document.querySelectorAll('.client-logo');
    
    if (track && clientLogos.length) {
        // Clone logos for infinite scroll
        clientLogos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });
        
        let position = 0;
        const logoWidth = clientLogos[0].offsetWidth + parseInt(getComputedStyle(clientLogos[0]).marginLeft) * 2;
        const totalWidth = logoWidth * clientLogos.length;
        let autoScrollInterval;
        
        // Function to update track position
        const updatePosition = () => {
            track.style.transform = `translateX(${position}px)`;
            
            // Reset position for infinite scroll
            if (position <= -totalWidth) {
                position = 0;
                // Use setTimeout to avoid transition during reset
                setTimeout(() => {
                    track.style.transition = 'none';
                    track.style.transform = `translateX(${position}px)`;
                    // Force reflow
                    track.offsetHeight;
                    track.style.transition = 'transform 0.5s ease';
                }, 500);
            } else if (position > 0) {
                position = -totalWidth + logoWidth;
                setTimeout(() => {
                    track.style.transition = 'none';
                    track.style.transform = `translateX(${position}px)`;
                    track.offsetHeight;
                    track.style.transition = 'transform 0.5s ease';
                }, 500);
            }
        };
        
        // Auto scroll function - move one logo at a time
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                position -= logoWidth; // Move by exactly one logo width
                updatePosition();
            }, 2000); // Scroll every 2 seconds
        };
        
        // Start auto scroll
        startAutoScroll();
        
        // Manual navigation with arrows - move one logo at a time
        prevArrow.addEventListener('click', () => {
            clearInterval(autoScrollInterval);
            position += logoWidth; // Move by exactly one logo width
            updatePosition();
            startAutoScroll();
        });
        
        nextArrow.addEventListener('click', () => {
            clearInterval(autoScrollInterval);
            position -= logoWidth; // Move by exactly one logo width
            updatePosition();
            startAutoScroll();
        });
        
        // Pause auto scroll on hover
        track.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });
        
        track.addEventListener('mouseleave', () => {
            startAutoScroll();
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newLogoWidth = clientLogos[0].offsetWidth + parseInt(getComputedStyle(clientLogos[0]).marginLeft) * 2;
            
            // Adjust position proportionally
            position = (position / logoWidth) * newLogoWidth;
            updatePosition();
        });
    }
});

// Completely redesigned interactive Europe globe map
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('globeCanvas');
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions with higher resolution
        function setCanvasDimensions() {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            
            ctx.scale(dpr, dpr);
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
        }
        
        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);
        
        // European locations data
        const locations = [
            // Major European cities
            { name: "London", lat: 51.5074, lng: -0.1278, type: "coverage", country: "UK", connections: ["Paris", "Berlin", "Amsterdam"] },
            { name: "Berlin", lat: 52.5200, lng: 13.4050, type: "coverage", country: "Germany", connections: ["Warsaw", "Prague", "Vienna"] },
            { name: "Paris", lat: 48.8566, lng: 2.3522, type: "coverage", country: "France", connections: ["Madrid", "Brussels", "Zurich"] },
            { name: "Rome", lat: 41.9028, lng: 12.4964, type: "coverage", country: "Italy", connections: [] },
            { name: "Amsterdam", lat: 52.3676, lng: 4.9041, type: "coverage", country: "Netherlands", connections: ["Brussels"] },
            { name: "Brussels", lat: 50.8503, lng: 4.3517, type: "coverage", country: "Belgium", connections: [] },
            { name: "Vienna", lat: 48.2082, lng: 16.3738, type: "coverage", country: "Austria", connections: [] },
            { name: "Warsaw", lat: 52.2297, lng: 21.0122, type: "coverage", country: "Poland", connections: [] },
            { name: "Stockholm", lat: 59.3293, lng: 18.0686, type: "coverage", country: "Sweden", connections: [] },
            { name: "Zurich", lat: 47.3769, lng: 8.5417, type: "coverage", country: "Switzerland", connections: [] },
            { name: "Prague", lat: 50.0755, lng: 14.4378, type: "coverage", country: "Czech Republic", connections: [] },
            { name: "Munich", lat: 48.1351, lng: 11.5820, type: "coverage", country: "Germany", connections: [] },
            { name: "Milan", lat: 45.4642, lng: 9.1900, type: "coverage", country: "Italy", connections: [] },
            { name: "Copenhagen", lat: 55.6761, lng: 12.5683, type: "coverage", country: "Denmark", connections: [] },
            { name: "Lisbon", lat: 38.7223, lng: -9.1393, type: "coverage", country: "Portugal", connections: ["Madrid"] },
            
            // Spanish cities (expanded to 25)
            { name: "Madrid", lat: 40.4168, lng: -3.7038, type: "coverage", country: "Spain", connections: ["Barcelona", "Valencia", "Seville"] },
            { name: "Barcelona", lat: 41.3851, lng: 2.1734, type: "coverage", country: "Spain", connections: ["Madrid", "Valencia"] },
            { name: "Valencia", lat: 39.4699, lng: -0.3763, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Seville", lat: 37.3891, lng: -5.9845, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Bilbao", lat: 43.2630, lng: -2.9350, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Malaga", lat: 36.7213, lng: -4.4214, type: "coverage", country: "Spain", connections: ["Seville"] },
            { name: "Zaragoza", lat: 41.6488, lng: -0.8891, type: "coverage", country: "Spain", connections: ["Madrid", "Barcelona"] },
            { name: "Palma", lat: 39.5696, lng: 2.6502, type: "coverage", country: "Spain", connections: ["Barcelona"] },
            { name: "Las Palmas", lat: 28.1235, lng: -15.4366, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Murcia", lat: 37.9922, lng: -1.1307, type: "coverage", country: "Spain", connections: ["Valencia"] },
            { name: "Alicante", lat: 38.3452, lng: -0.4815, type: "coverage", country: "Spain", connections: ["Valencia"] },
            { name: "Córdoba", lat: 37.8882, lng: -4.7794, type: "coverage", country: "Spain", connections: ["Seville"] },
            { name: "Granada", lat: 37.1773, lng: -3.5986, type: "coverage", country: "Spain", connections: ["Malaga"] },
            { name: "Vigo", lat: 42.2328, lng: -8.7226, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Gijón", lat: 43.5452, lng: -5.6635, type: "coverage", country: "Spain", connections: ["Bilbao"] },
            { name: "Valladolid", lat: 41.6523, lng: -4.7245, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Tenerife", lat: 28.2916, lng: -16.6291, type: "coverage", country: "Spain", connections: ["Las Palmas"] },
            { name: "Pamplona", lat: 42.8125, lng: -1.6458, type: "coverage", country: "Spain", connections: ["Bilbao"] },
            { name: "Santander", lat: 43.4623, lng: -3.8099, type: "coverage", country: "Spain", connections: ["Bilbao"] },
            { name: "Salamanca", lat: 40.9701, lng: -5.6635, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Burgos", lat: 42.3439, lng: -3.6969, type: "coverage", country: "Spain", connections: ["Madrid"] },
            { name: "Albacete", lat: 38.9942, lng: -1.8564, type: "coverage", country: "Spain", connections: ["Valencia"] },
            { name: "Castellón", lat: 39.9864, lng: -0.0513, type: "coverage", country: "Spain", connections: ["Valencia"] },
            { name: "Logroño", lat: 42.4650, lng: -2.4506, type: "coverage", country: "Spain", connections: ["Bilbao"] },
            { name: "Huelva", lat: 37.2571, lng: -6.9495, type: "coverage", country: "Spain", connections: ["Seville"] }
        ];
        
        // Europe map boundaries
        const mapBounds = {
            north: 70,  // Northern latitude limit
            south: 35,  // Southern latitude limit
            west: -15,  // Western longitude limit
            east: 30    // Eastern longitude limit
        };
        
        // Animation variables
        let animationFrame;
        let particles = [];
        let hoveredLocation = null;
        let activeLocation = null;
        let time = 0;
        
        // Create particles
        function createParticles() {
            particles = [];
            
            // Create particles for connections
            locations.forEach(location => {
                if (location.connections && location.connections.length > 0) {
                    const sourcePos = latLngToXY(location.lat, location.lng);
                    
                    location.connections.forEach(targetName => {
                        const targetLocation = locations.find(loc => loc.name === targetName);
                        if (targetLocation) {
                            const targetPos = latLngToXY(targetLocation.lat, targetLocation.lng);
                            
                            // Create particles along the connection
                            const particleCount = 5 + Math.floor(Math.random() * 5);
                            for (let i = 0; i < particleCount; i++) {
                                particles.push({
                                    sourcePos,
                                    targetPos,
                                    progress: Math.random(),
                                    speed: 0.001 + Math.random() * 0.002,
                                    size: 1 + Math.random() * 2,
                                    sourceLocation: location,
                                    targetLocation: targetLocation,
                                    color: getLocationColor(location.type)
                                });
                            }
                        }
                    });
                }
            });
        }
        
        // Convert lat/lng to x,y coordinates
        function latLngToXY(lat, lng) {
            const rect = canvas.getBoundingClientRect();
            const mapWidth = rect.width;
            const mapHeight = rect.height;
            
            // Calculate the position based on the map boundaries
            const x = ((lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * mapWidth;
            const y = mapHeight - ((lat - mapBounds.south) / (mapBounds.north - mapBounds.south)) * mapHeight;
            
            return { x, y };
        }
        
        // Get color based on location type
        function getLocationColor(type) {
            return {
                color: '#7c3aed', // Purple for all locations
                shadowColor: 'rgba(124, 58, 237, 0.8)',
                size: 6
            };
        }
        
        // Draw the Europe map
        function drawMap() {
            const rect = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);
            
            // Draw background
            const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
            gradient.addColorStop(0, '#0f172a');
            gradient.addColorStop(1, '#1e293b');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, rect.width, rect.height);
            
            // Draw grid
            drawGrid();
            
            // Draw country outlines
            drawCountries();
            
            // Draw connections
            drawConnections();
            
            // Draw particles
            drawParticles();
            
            // Draw locations
            drawLocations();
            
            // Animation loop
            time += 0.01;
            animationFrame = requestAnimationFrame(drawMap);
        }
        
        // Draw grid
        function drawGrid() {
            ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
            ctx.lineWidth = 1;
            
            // Draw vertical grid lines
            for (let lng = Math.ceil(mapBounds.west); lng <= mapBounds.east; lng += 5) {
                const start = latLngToXY(mapBounds.south, lng);
                const end = latLngToXY(mapBounds.north, lng);
                
                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();
            }
            
            // Draw horizontal grid lines
            for (let lat = Math.ceil(mapBounds.south); lat <= mapBounds.north; lat += 5) {
                const start = latLngToXY(lat, mapBounds.west);
                const end = latLngToXY(lat, mapBounds.east);
                
                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();
            }
        }
        
        // Draw country outlines with improved detail and styling
        function drawCountries() {
            // Set styling for country outlines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 1.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            
            // More detailed country coordinates for Europe
            
            // UK
            drawCountryOutline([
                [58.6, -5.5], [58.0, -5.0], [57.5, -5.8], [57.1, -5.3], 
                [56.5, -5.8], [55.8, -5.5], [55.3, -5.6], [54.9, -5.0], 
                [54.8, -3.0], [54.3, -3.3], [53.4, -3.0], [53.2, -4.3], 
                [52.2, -4.1], [51.7, -5.3], [51.0, -5.0], [50.2, -3.8], 
                [50.7, -1.5], [50.9, 0.5], [51.4, 1.4], [52.0, 1.7], 
                [52.9, 1.7], [53.6, 0.3], [54.7, -0.8], [55.8, -2.0], 
                [56.1, -3.3], [57.6, -4.0], [58.6, -5.5]
            ]);
            
            // Ireland
            drawCountryOutline([
                [55.3, -7.5], [54.8, -8.5], [54.0, -10.0], [53.2, -9.8], 
                [52.2, -10.2], [51.5, -9.8], [51.4, -8.2], [52.0, -6.4], 
                [52.9, -6.0], [53.8, -6.0], [54.1, -6.5], [54.6, -5.9], 
                [55.2, -6.2], [55.3, -7.5]
            ]);
            
            // France
            drawCountryOutline([
                [51.1, 2.5], [50.9, 1.7], [50.5, 1.6], [49.8, 0.2], 
                [49.3, -0.5], [49.0, -1.5], [48.6, -1.8], [48.5, -3.5], 
                [48.0, -4.7], [47.5, -4.2], [47.0, -2.5], [46.5, -1.8], 
                [46.2, -1.2], [45.5, -1.0], [44.8, -1.2], [44.3, -1.5], 
                [43.5, -1.6], [43.3, -1.8], [43.1, 0.0], [42.7, 1.0], 
                [42.5, 3.1], [43.0, 3.5], [43.5, 4.8], [43.6, 6.5], 
                [43.7, 7.5], [44.1, 7.6], [44.4, 7.0], [45.0, 6.8], 
                [45.5, 7.0], [45.9, 6.8], [46.4, 6.0], [46.6, 6.2], 
                [47.0, 7.0], [47.5, 7.5], [47.6, 8.0], [48.0, 8.0], 
                [48.5, 8.0], [49.0, 8.2], [49.5, 8.0], [50.0, 7.5], 
                [50.3, 6.5], [50.0, 6.0], [50.2, 5.0], [50.8, 4.5], 
                [51.1, 2.5]
            ]);
            
            // Germany
            drawCountryOutline([
                [54.8, 8.0], [54.0, 8.8], [54.5, 11.0], [54.0, 11.5], 
                [54.5, 13.0], [54.0, 14.0], [53.5, 14.0], [53.0, 14.5], 
                [52.5, 14.5], [52.0, 14.8], [51.5, 15.0], [51.0, 15.0], 
                [50.8, 14.5], [50.5, 13.5], [50.0, 12.5], [50.3, 12.0], 
                [50.0, 11.0], [49.5, 10.5], [49.0, 10.0], [48.5, 10.0], 
                [48.0, 11.0], [47.5, 10.5], [47.3, 10.5], [47.4, 9.5], 
                [47.6, 8.5], [47.6, 7.6], [48.0, 7.5], [49.0, 8.2], 
                [49.5, 8.0], [50.0, 7.5], [50.3, 6.5], [50.0, 6.0], 
                [50.5, 6.0], [51.0, 6.0], [51.5, 6.5], [52.0, 7.0], 
                [52.5, 7.5], [53.0, 7.0], [53.5, 7.0], [53.5, 8.0], 
                [54.0, 8.5], [54.8, 8.0]
            ]);
            
            // Spain
            drawCountryOutline([
                [43.3, -8.0], [43.0, -8.5], [42.5, -9.0], [42.0, -9.0], 
                [41.5, -8.8], [41.0, -8.5], [40.0, -8.5], [39.0, -9.0], 
                [38.0, -9.0], [37.0, -9.0], [37.0, -7.0], [37.0, -5.5], 
                [36.0, -5.5], [36.0, -4.5], [36.5, -3.0], [36.7, -2.0], 
                [37.5, -1.5], [38.0, -0.5], [38.5, 0.0], [40.0, 0.5], 
                [40.5, 0.5], [41.0, 1.0], [41.5, 2.0], [42.0, 3.0], 
                [42.4, 3.2], [42.5, 2.0], [42.8, 0.0], [43.0, -1.0], 
                [43.3, -1.8], [43.3, -3.0], [43.5, -5.0], [43.3, -8.0]
            ]);
            
            // Italy
            drawCountryOutline([
                [46.5, 6.5], [46.2, 8.0], [46.5, 9.0], [46.2, 10.0], 
                [46.5, 11.0], [46.2, 12.0], [46.5, 13.0], [45.8, 13.6], 
                [45.5, 13.5], [45.0, 13.0], [44.5, 13.0], [44.0, 13.5], 
                [43.5, 13.5], [43.0, 14.0], [42.5, 14.0], [42.0, 14.5], 
                [41.5, 15.5], [41.0, 16.0], [40.5, 17.0], [40.0, 18.0], 
                [39.5, 18.5], [39.0, 18.0], [38.5, 16.5], [38.0, 16.0], 
                [38.0, 15.5], [38.0, 14.0], [38.5, 13.0], [38.5, 12.5], 
                [39.0, 12.0], [40.0, 12.0], [41.0, 12.0], [42.0, 12.0], 
                [42.5, 11.5], [43.0, 11.0], [43.5, 10.5], [44.0, 10.0], 
                [44.5, 9.0], [45.0, 8.0], [45.5, 7.5], [45.9, 6.8], 
                [46.5, 6.5]
            ]);
            
            // Add more European countries with detailed outlines
            
            // Netherlands
            drawCountryOutline([
                [53.5, 7.0], [53.0, 7.0], [52.5, 7.0], [52.0, 7.0], 
                [51.8, 6.0], [51.5, 5.0], [51.3, 4.0], [51.5, 3.5], 
                [51.8, 3.8], [52.0, 4.5], [52.5, 4.5], [53.0, 5.0], 
                [53.5, 6.0], [53.5, 7.0]
            ]);
            
            // Belgium
            drawCountryOutline([
                [51.5, 3.0], [51.3, 4.0], [51.0, 4.5], [50.8, 4.5], 
                [50.2, 5.0], [50.0, 6.0], [49.5, 5.8], [49.5, 5.0], 
                [50.0, 4.0], [50.5, 3.0], [51.0, 3.0], [51.5, 3.0]
            ]);
            
            // Switzerland
            drawCountryOutline([
                [47.8, 6.0], [47.5, 7.0], [47.0, 7.0], [46.5, 6.5], 
                [46.2, 6.2], [46.0, 7.0], [46.2, 8.0], [46.5, 9.0], 
                [46.8, 9.5], [47.0, 10.0], [47.5, 10.0], [47.8, 9.5], 
                [47.5, 8.5], [47.8, 8.0], [47.8, 7.0], [47.8, 6.0]
            ]);
            
            // Austria
            drawCountryOutline([
                [47.0, 10.0], [46.8, 11.0], [46.5, 12.0], [46.8, 13.0], 
                [47.0, 14.0], [47.5, 15.0], [48.0, 16.0], [48.2, 17.0], 
                [48.5, 17.0], [48.8, 16.5], [48.5, 15.0], [48.2, 14.0], 
                [48.0, 13.0], [48.0, 12.0], [47.5, 11.0], [47.0, 10.0]
            ]);
            
            // Poland
            drawCountryOutline([
                [54.0, 14.0], [54.5, 16.0], [54.5, 18.0], [54.0, 19.0], 
                [53.5, 20.0], [53.0, 21.0], [52.0, 21.0], [51.0, 21.0], 
                [50.0, 20.0], [49.5, 19.0], [49.0, 18.0], [49.0, 15.0], 
                [50.0, 15.0], [51.0, 15.0], [51.5, 15.0], [52.0, 14.8], 
                [52.5, 14.5], [53.0, 14.5], [53.5, 14.0], [54.0, 14.0]
            ]);
            
            // Czech Republic
            drawCountryOutline([
                [51.0, 15.0], [50.5, 16.0], [50.0, 17.0], [49.5, 18.0], 
                [49.0, 18.0], [49.0, 17.0], [48.5, 16.5], [48.8, 16.5], 
                [49.0, 15.0], [49.5, 14.0], [50.0, 13.0], [50.5, 12.5], 
                [50.8, 12.0], [50.8, 13.0], [50.8, 14.5], [51.0, 15.0]
            ]);
            
            // Denmark
            drawCountryOutline([
                [57.0, 8.0], [56.5, 8.0], [56.0, 8.5], [55.5, 9.5], 
                [55.0, 10.0], [55.0, 11.0], [55.5, 11.5], [56.0, 12.5], 
                [56.5, 12.0], [57.0, 11.0], [57.5, 10.5], [57.0, 9.0], 
                [57.0, 8.0]
            ]);
            
            // Sweden
            drawCountryOutline([
                [69.0, 20.0], [68.0, 23.0], [67.0, 24.0], [66.0, 24.0], 
                [65.0, 22.0], [64.0, 21.0], [63.0, 20.0], [62.0, 18.0], 
                [61.0, 17.0], [60.0, 15.0], [59.0, 14.0], [58.0, 12.0], 
                [57.5, 12.0], [56.5, 12.5], [56.0, 14.0], [56.5, 16.0], 
                [57.0, 18.0], [58.0, 19.0], [59.0, 20.0], [60.0, 21.0], 
                [61.0, 21.0], [62.0, 21.0], [63.0, 21.0], [64.0, 22.0], 
                [65.0, 23.0], [66.0, 23.0], [67.0, 23.0], [68.0, 22.0], 
                [69.0, 20.0]
            ]);
            
            // Norway
            drawCountryOutline([
                [71.0, 28.0], [70.0, 29.0], [69.0, 30.0], [68.0, 28.0], 
                [67.0, 25.0], [66.0, 24.0], [65.0, 22.0], [64.0, 21.0], 
                [63.0, 20.0], [62.0, 18.0], [61.0, 17.0], [60.0, 15.0], 
                [59.0, 14.0], [58.0, 12.0], [58.0, 11.0], [58.0, 10.0], 
                [58.0, 8.0], [58.0, 7.0], [58.0, 6.0], [58.5, 5.5], 
                [59.0, 5.0], [60.0, 5.0], [61.0, 5.0], [62.0, 5.0], 
                [63.0, 8.0], [64.0, 10.0], [65.0, 12.0], [66.0, 14.0], 
                [67.0, 15.0], [68.0, 17.0], [69.0, 20.0], [70.0, 22.0], 
                [71.0, 25.0], [71.0, 28.0]
            ]);
            
            // Finland
            drawCountryOutline([
                [70.0, 29.0], [69.0, 30.0], [68.0, 28.0], [67.0, 27.0], 
                [66.0, 27.0], [65.0, 26.0], [64.0, 25.0], [63.0, 24.0], 
                [62.0, 23.0], [61.0, 23.0], [60.0, 24.0], [60.0, 25.0], 
                [60.0, 26.0], [60.0, 27.0], [60.5, 28.0], [61.0, 29.0], 
                [62.0, 30.0], [63.0, 30.0], [64.0, 30.0], [65.0, 30.0], 
                [66.0, 30.0], [67.0, 30.0], [68.0, 30.0], [69.0, 30.0], 
                [70.0, 29.0]
            ]);
            
            // Add glow effect to country outlines
            ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
            ctx.shadowBlur = 5;
        }
        
        // Draw connections between locations
        function drawConnections() {
            locations.forEach(location => {
                if (location.connections && location.connections.length > 0) {
                    const sourcePos = latLngToXY(location.lat, location.lng);
                    const sourceColor = getLocationColor(location.type);
                    
                    location.connections.forEach(targetName => {
                        const targetLocation = locations.find(loc => loc.name === targetName);
                        if (targetLocation) {
                            const targetPos = latLngToXY(targetLocation.lat, targetLocation.lng);
                            const targetColor = getLocationColor(targetLocation.type);
                            
                            // Create gradient for connection
                            const gradient = ctx.createLinearGradient(
                                sourcePos.x, sourcePos.y, 
                                targetPos.x, targetPos.y
                            );
                            gradient.addColorStop(0, sourceColor.color);
                            gradient.addColorStop(1, targetColor.color);
                            
                            // Draw connection line
                            ctx.beginPath();
                            ctx.moveTo(sourcePos.x, sourcePos.y);
                            ctx.lineTo(targetPos.x, targetPos.y);
                            ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            
                            // Highlight connection if either location is hovered/active
                            if (
                                (hoveredLocation && 
                                (hoveredLocation.name === location.name || 
                                hoveredLocation.name === targetLocation.name)) ||
                                (activeLocation && 
                                (activeLocation.name === location.name || 
                                activeLocation.name === targetLocation.name))
                            ) {
                                ctx.beginPath();
                                ctx.moveTo(sourcePos.x, sourcePos.y);
                                ctx.lineTo(targetPos.x, targetPos.y);
                                ctx.strokeStyle = gradient;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            }
                        }
                    });
                }
            });
        }
        
        // Draw particles moving along connections
        function drawParticles() {
            particles.forEach(particle => {
                // Update particle position
                particle.progress += particle.speed;
                if (particle.progress > 1) {
                    particle.progress = 0;
                }
                
                // Calculate current position
                const x = particle.sourcePos.x + (particle.targetPos.x - particle.sourcePos.x) * particle.progress;
                const y = particle.sourcePos.y + (particle.targetPos.y - particle.sourcePos.y) * particle.progress;
                
                // Determine if this particle should be highlighted
                const isHighlighted = 
                    (hoveredLocation && 
                    (hoveredLocation.name === particle.sourceLocation.name || 
                    hoveredLocation.name === particle.targetLocation.name)) ||
                    (activeLocation && 
                    (activeLocation.name === particle.sourceLocation.name || 
                    activeLocation.name === particle.targetLocation.name));
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(x, y, isHighlighted ? particle.size * 1.5 : particle.size, 0, Math.PI * 2);
                ctx.fillStyle = isHighlighted ? particle.color : 'rgba(148, 163, 184, 0.5)';
                
                if (isHighlighted) {
                    ctx.shadowColor = particle.color;
                    ctx.shadowBlur = 10;
                }
                
                ctx.fill();
                ctx.shadowBlur = 0;
            });
        }
        
        // Draw location markers
        function drawLocations() {
            locations.forEach(location => {
                const pos = latLngToXY(location.lat, location.lng);
                const { color, shadowColor, size } = getLocationColor(location.type);
                
                // Determine if this location is highlighted
                const isHovered = hoveredLocation && hoveredLocation.name === location.name;
                const isActive = activeLocation && activeLocation.name === location.name;
                const isHighlighted = isHovered || isActive;
                
                // Draw pulsing circle for highlighted locations
                if (isHighlighted) {
                    const pulseSize = size * (1.5 + Math.sin(time * 5) * 0.2);
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, pulseSize, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                    ctx.fill();
                    
                    // Draw outer glow
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, size * 2, 0, Math.PI * 2);
                    const gradient = ctx.createRadialGradient(
                        pos.x, pos.y, size,
                        pos.x, pos.y, size * 2
                    );
                    gradient.addColorStop(0, shadowColor);
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                    ctx.fillStyle = gradient;
                    ctx.fill();
                }
                
                // Draw location dot
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, isHighlighted ? size * 1.2 : size, 0, Math.PI * 2);
                ctx.shadowColor = shadowColor;
                ctx.shadowBlur = isHighlighted ? 20 : 10;
                ctx.fillStyle = color;
                ctx.fill();
                ctx.shadowBlur = 0;
                
                // Draw location name
                if (isHighlighted) {
                    ctx.font = 'bold 14px Poppins, sans-serif';
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'center';
                    ctx.fillText(location.name, pos.x, pos.y - size * 2 - 5);
                    
                    // Don't show the type anymore
                }
            });
        }
        
        // Helper function to draw country outlines
        function drawCountryOutline(coordinates) {
            if (coordinates.length < 2) return;
            
            ctx.beginPath();
            
            const firstPoint = latLngToXY(coordinates[0][0], coordinates[0][1]);
            ctx.moveTo(firstPoint.x, firstPoint.y);
            
            for (let i = 1; i < coordinates.length; i++) {
                const point = latLngToXY(coordinates[i][0], coordinates[i][1]);
                ctx.lineTo(point.x, point.y);
            }
            
            ctx.stroke();
        }
        
        // Add interactivity
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Check if mouse is over a location
            let foundLocation = null;
            
            locations.forEach(location => {
                const pos = latLngToXY(location.lat, location.lng);
                const { size } = getLocationColor(location.type);
                const distance = Math.sqrt((pos.x - mouseX) ** 2 + (pos.y - mouseY) ** 2);
                
                if (distance < size * 2) {
                    foundLocation = location;
                }
            });
            
            // Update cursor and hovered location
            if (foundLocation) {
                canvas.style.cursor = 'pointer';
                hoveredLocation = foundLocation;
            } else {
                canvas.style.cursor = 'default';
                hoveredLocation = null;
            }
        });
        
        canvas.addEventListener('click', () => {
            if (hoveredLocation) {
                activeLocation = activeLocation === hoveredLocation ? null : hoveredLocation;
            } else {
                activeLocation = null;
            }
        });
        
        // Initialize
        createParticles();
        drawMap();
        
        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener('resize', setCanvasDimensions);
        };
    }
}); 

// Client logo carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.clients-track');
    const logos = document.querySelectorAll('.client-logo:not(.clone)');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    // Remove any existing clones first
    document.querySelectorAll('.client-logo.clone').forEach(clone => clone.remove());
    
    // Clone items for infinite scrolling (add clones at beginning and end)
    // First add clones at the end
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        clone.classList.add('clone');
        track.appendChild(clone);
    });
    
    // Then add clones at the beginning (in reverse order)
    [...logos].reverse().forEach(logo => {
        const clone = logo.cloneNode(true);
        clone.classList.add('clone', 'prepend-clone');
        track.prepend(clone);
    });
    
    // Set initial position to show the original items (not the prepended clones)
    const initialOffset = -(logos.length * (100 / 6));
    track.style.transform = `translateX(${initialOffset}%)`;
    
    // Override the CSS animation when using arrows
    let isUsingArrows = false;
    let currentIndex = 0;
    const totalItems = logos.length;
    const itemWidth = 100 / 6; // 6 items visible
    
    function updateCarousel() {
        const offset = initialOffset - (currentIndex * itemWidth);
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(${offset}%)`;
        
        // Handle the loop
        if (currentIndex >= totalItems) {
            currentIndex = 0;
            setTimeout(() => {
                track.style.transition = 'none';
                const resetOffset = initialOffset - (currentIndex * itemWidth);
                track.style.transform = `translateX(${resetOffset}%)`;
            }, 500);
        } else if (currentIndex < 0) {
            currentIndex = totalItems - 1;
            setTimeout(() => {
                track.style.transition = 'none';
                const resetOffset = initialOffset - (currentIndex * itemWidth);
                track.style.transform = `translateX(${resetOffset}%)`;
            }, 500);
        }
    }
    
    nextArrow.addEventListener('click', function() {
        // Stop the CSS animation
        isUsingArrows = true;
        track.style.animation = 'none';
        
        currentIndex++;
        updateCarousel();
    });
    
    prevArrow.addEventListener('click', function() {
        // Stop the CSS animation
        isUsingArrows = true;
        track.style.animation = 'none';
        
        currentIndex--;
        updateCarousel();
    });
    
    // Reset to CSS animation when mouse leaves the carousel
    const carouselContainer = document.querySelector('.clients-carousel-container');
    carouselContainer.addEventListener('mouseleave', function() {
        if (isUsingArrows) {
            setTimeout(() => {
                track.style.transition = 'none';
                track.style.transform = '';
                track.offsetHeight; // Force reflow
                track.style.animation = 'carousel 30s linear infinite';
                isUsingArrows = false;
            }, 1000);
        }
    });
    
    // Fix transition when animation ends
    track.addEventListener('transitionend', function() {
        if (currentIndex >= totalItems) {
            currentIndex = 0;
            track.style.transition = 'none';
            const resetOffset = initialOffset - (currentIndex * itemWidth);
            track.style.transform = `translateX(${resetOffset}%)`;
        } else if (currentIndex < 0) {
            currentIndex = totalItems - 1;
            track.style.transition = 'none';
            const resetOffset = initialOffset - (currentIndex * itemWidth);
            track.style.transform = `translateX(${resetOffset}%)`;
        }
    });
});

// Cookie Consent Popup
document.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieClose = document.getElementById('cookieClose');
    
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    // Show cookie consent popup if not accepted yet
    if (!cookiesAccepted) {
        // Delay showing the popup for better user experience
        setTimeout(() => {
            cookieConsent.style.display = 'block';
        }, 1500);
    }
    
    // Handle accept button click
    cookieAccept.addEventListener('click', () => {
        acceptCookies();
    });
    
    // Handle close button click
    cookieClose.addEventListener('click', () => {
        hideCookieConsent();
    });
    
    // Function to accept cookies
    function acceptCookies() {
        // Set a flag in localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        
        // Hide the consent popup with animation
        hideCookieConsent();
        
        // Here you would typically initialize your analytics or other cookie-dependent scripts
        console.log('Cookies accepted, analytics can now be initialized');
    }
    
    // Function to hide the cookie consent with animation
    function hideCookieConsent() {
        cookieConsent.classList.add('hiding');
        
        // Remove the element after animation completes
        setTimeout(() => {
            cookieConsent.style.display = 'none';
            cookieConsent.classList.remove('hiding');
        }, 500);
    }
});