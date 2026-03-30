/**
 * Premium Portfolio - Interaction Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const primaryNav = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isOpened = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isOpened);
            mobileToggle.classList.toggle('active');
            primaryNav.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (primaryNav.classList.contains('active')) {
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.classList.remove('active');
                primaryNav.classList.remove('active');
            }
        });
    });

    // 2. Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Sticky Navbar Styling on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(10, 10, 15, 0.85)';
        }
    });

    // 4. Form Validation Logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            const nameGroup = nameInput.parentElement;
            if (nameInput.value.trim() === '') {
                nameGroup.classList.add('has-error');
                isValid = false;
            } else {
                nameGroup.classList.remove('has-error');
            }

            // Email validation
            const emailInput = document.getElementById('email');
            const emailGroup = emailInput.parentElement;
            const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value.trim())) {
                emailGroup.classList.add('has-error');
                isValid = false;
            } else {
                emailGroup.classList.remove('has-error');
            }

            // Message validation
            const msgInput = document.getElementById('message');
            const msgGroup = msgInput.parentElement;
            if (msgInput.value.trim() === '') {
                msgGroup.classList.add('has-error');
                isValid = false;
            } else {
                msgGroup.classList.remove('has-error');
            }

            // Submission Action
            const successMsg = document.getElementById('form-success');
            const submitBtn = document.querySelector('.submit-btn');
            
            if (isValid) {
                // Simulate an API call / submission process
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    successMsg.classList.remove('hidden');
                    contactForm.reset();
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.classList.add('hidden');
                    }, 5000);
                }, 1000);
            }
        });
    }
});
