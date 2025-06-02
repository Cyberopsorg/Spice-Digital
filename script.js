// Hide loading screen when page is fully loaded
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden'); // Use CSS transition for smooth fade-out
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 600); // Match transition duration in CSS
    }
    
    // EmailJS is initialized in helper-email.js
});

// Smooth scrolling and navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Menu tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all tabs and categories
            tabButtons.forEach(btn => btn.classList.remove('active'));
            menuCategories.forEach(category => category.classList.remove('active'));

            // Add active class to clicked tab and corresponding category
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Reservation and contact form handling
    const reservationForm = document.getElementById('reservation-form');
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtns = document.querySelectorAll('.modal-close');

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Close modal when clicking the X or Done button
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const date = formData.get('date');
            const time = formData.get('time');
            const guests = formData.get('guests');
            
            // Use the EmailJS helper function to send the email
            sendReservationWithEmailJS(this);
            
            // Format date and time for display
            const formattedDate = formatDate(date);
            const formattedTime = formatTime(time);
            
            // Listen for EmailJS success via a custom event
            document.addEventListener('reservationEmailSent', function(event) {
                if (event.detail.success) {
                    // Success message
                    modalMessage.textContent = `Your reservation for ${guests} guests on ${formattedDate} at ${formattedTime} has been confirmed. We've sent a confirmation to ${email}.`;
                } else {
                    // Error message
                    modalMessage.textContent = `We're sorry, there was an error processing your reservation. Please try again or contact us directly.`;
                    console.error('EmailJS Error:', event.detail.error);
                }
                modal.style.display = 'block';
            }, { once: true });
        });
    }

    // Handle contact form using EmailJS
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data for display in modal
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            
            // Use EmailJS helper function
            sendContactWithEmailJS(this);
            
            // Listen for EmailJS success via custom event
            document.addEventListener('contactEmailSent', function(event) {
                if (event.detail.success) {
                    // Update modal message
                    modalMessage.textContent = `Thank you for your message, ${name}. We'll get back to you at ${email} shortly.`;
                } else {
                    // Error handling
                    modalMessage.textContent = `We're sorry, there was an error sending your message. Please try again or contact us directly.`;
                }
                
                // Show success modal
                modal.style.display = 'block';
            }, { once: true });
        });
    }

    // Modal close functionality
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Gallery lightbox effect (simple version)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Simple zoom effect
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.menu-item, .gallery-item, .feature, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Form validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // Real-time form validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#e74c3c';
                showValidationMessage(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '#27ae60';
                hideValidationMessage(this);
            }
        });
    });

    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validatePhone(this.value)) {
                this.style.borderColor = '#e74c3c';
                showValidationMessage(this, 'Please enter a valid phone number');
            } else {
                this.style.borderColor = '#27ae60';
                hideValidationMessage(this);
            }
        });
    });

    function showValidationMessage(input, message) {
        hideValidationMessage(input); // Remove existing message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
    }

    function hideValidationMessage(input) {
        const existingError = input.parentNode.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
    }

    // --- Digital Menu Rendering (Template Style: Name & Price Only) ---
    if (window.menuData && document.getElementById('menu-grid')) {
        const menuGrid = document.getElementById('menu-grid');
        menuGrid.innerHTML = '';
        // Group menu items by category
        const categories = {};
        window.menuData.forEach(item => {
            if (!categories[item.category]) categories[item.category] = [];
            categories[item.category].push(item);
        });
        // Category display names
        const categoryNames = {
            breakfast: 'Breakfast',
            thali: 'Thali & Meals',
            mains: 'Main Course',
            snacks: 'Snacks & Farsan',
            sweets: 'Sweets & Desserts',
            beverages: 'Beverages',
            salads: 'Salads',
            sides: 'Sides & Accompaniments',
            soups: 'Soups',
            party: 'Party Specials',
            packaged: 'Packaged/Branded Items',
            'south-indian': 'South Indian',
        };
        // Render each category
        Object.keys(categoryNames).forEach(cat => {
            if (!categories[cat]) return;
            // Category Title
            const section = document.createElement('div');
            section.className = 'menu-category-section';
            section.innerHTML = `<h3 class="menu-category-title">${categoryNames[cat]}</h3>`;
            // Table for items
            const table = document.createElement('table');
            table.className = 'menu-table';
            table.innerHTML = `<thead><tr><th>Dish</th><th>Price</th></tr></thead><tbody></tbody>`;
            const tbody = table.querySelector('tbody');
            categories[cat].forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `<td class="menu-dish-name">${item.name}</td><td class="menu-dish-price">${item.price !== null ? '₹' + item.price : 'MRP'}</td>`;
                tbody.appendChild(row);
            });
            section.appendChild(table);
            menuGrid.appendChild(section);
        });
    }
    // Render Gallery
    if (window.galleryData && document.getElementById('gallery-grid')) {
        const galleryGrid = document.getElementById('gallery-grid');
        galleryGrid.innerHTML = '';
        window.galleryData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'gallery-item animate-on-scroll';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="item-title">${item.title}</div>
            `;
            galleryGrid.appendChild(card);
        });
    }
    // Render Testimonials
    if (!document.getElementById('testimonials-section')) {
        const testimonialsSection = document.createElement('section');
        testimonialsSection.id = 'testimonials-section';
        testimonialsSection.className = 'testimonials';
        testimonialsSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">What Our Guests Say</h2>
                    <p class="section-subtitle">Real stories from our happy diners</p>
                </div>
                <div class="testimonials-grid">
                    <div class="testimonial-card animate-on-scroll">
                        <p>“The best Indian food I’ve ever had! The biryani was aromatic and the desserts were divine.”</p>
                        <div class="testimonial-author">— Priya S.</div>
                    </div>
                    <div class="testimonial-card animate-on-scroll">
                        <p>“A beautiful ambiance and authentic flavors. Highly recommend the Paneer Tikka!”</p>
                        <div class="testimonial-author">— Rahul M.</div>
                    </div>
                    <div class="testimonial-card animate-on-scroll">
                        <p>“Perfect for family dinners. The staff is friendly and the food is always fresh.”</p>
                        <div class="testimonial-author">— Anjali K.</div>
                    </div>
                </div>
            </div>
        `;
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            aboutSection.parentNode.insertBefore(testimonialsSection, aboutSection.nextSibling);
        }
    }

    // --- Navigation and Hero Button Smooth Scroll ---
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 80; // offset for navbar
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }

    // Nav links
    const navLinksAll = document.querySelectorAll('.nav-link[data-section]');
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            if (section) scrollToSection(section);
        });
    });

    // Hero buttons
    const exploreMenuBtn = document.querySelector('.btn.btn-primary[data-target="#menu"]');
    if (exploreMenuBtn) {
        exploreMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('menu');
        });
    }
    const bookTableBtn = document.querySelector('.btn.btn-secondary[data-target="#reservation"]');
    if (bookTableBtn) {
        bookTableBtn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('reservation');
        });
    }

    // Utility functions
    function formatDate(dateString) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }

    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours), parseInt(minutes));
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    // Performance optimization: Lazy load images (if real images were used)
    function lazyLoadImages() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Initialize lazy loading if there are lazy images
    lazyLoadImages();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Show/hide scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
    `;

    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Ensure menuData and galleryData are available globally for rendering
if (typeof window.menuData === 'undefined' && typeof menuData !== 'undefined') {
    window.menuData = menuData;
}
if (typeof window.galleryData === 'undefined' && typeof galleryData !== 'undefined') {
    window.galleryData = galleryData;
}

// Render Testimonials
if (!document.getElementById('testimonials-section')) {
    const testimonialsSection = document.createElement('section');
    testimonialsSection.id = 'testimonials-section';
    testimonialsSection.className = 'testimonials';
    testimonialsSection.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">What Our Guests Say</h2>
                <p class="section-subtitle">Real stories from our happy diners</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card animate-on-scroll">
                    <p>“The best Indian food I’ve ever had! The biryani was aromatic and the desserts were divine.”</p>
                    <div class="testimonial-author">— Priya S.</div>
                </div>
                <div class="testimonial-card animate-on-scroll">
                    <p>“A beautiful ambiance and authentic flavors. Highly recommend the Paneer Tikka!”</p>
                    <div class="testimonial-author">— Rahul M.</div>
                </div>
                <div class="testimonial-card animate-on-scroll">
                    <p>“Perfect for family dinners. The staff is friendly and the food is always fresh.”</p>
                    <div class="testimonial-author">— Anjali K.</div>
                </div>
            </div>
        </div>
    `;
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.parentNode.insertBefore(testimonialsSection, aboutSection.nextSibling);
    }
}