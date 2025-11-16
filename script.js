 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Hero Carousel
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function showSlide(n) {
            carouselSlides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + carouselSlides.length) % carouselSlides.length;
            carouselSlides[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);

        // Typing Effect
        const typedTextElement = document.querySelector('.typed-text');
        const texts = [
            "We farm, process, package and sell rice",
            "Premium rice products and services",
            "Your trusted partner in agribusiness"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of text
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before starting next text
            }
            
            setTimeout(type, typingSpeed);
        }

        // Start typing effect after page loads
        setTimeout(type, 1000);

        // Stats Counter
        const statNumbers = document.querySelectorAll('.stat-number');
        let counted = false;

        function startCounters() {
            if (counted) return;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        stat.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCounter();
            });
            
            counted = true;
        }

        // Testimonials Slider
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        const testimonialDots = document.querySelectorAll('.testimonial-dot');
        let currentTestimonial = 0;

        function showTestimonial(n) {
            testimonialSlides.forEach(slide => slide.classList.remove('active'));
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            
            currentTestimonial = (n + testimonialSlides.length) % testimonialSlides.length;
            testimonialSlides[currentTestimonial].classList.add('active');
            testimonialDots[currentTestimonial].classList.add('active');
        }

        testimonialDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                showTestimonial(slideIndex);
            });
        });

        // Auto-advance testimonials
        function nextTestimonial() {
            showTestimonial(currentTestimonial + 1);
        }

        setInterval(nextTestimonial, 6000);

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
            
            // Start counters when stats section is in view
            const statsSection = document.querySelector('.stats');
            const statsPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (statsPosition < screenPosition) {
                startCounters();
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });