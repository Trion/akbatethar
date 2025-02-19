// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);
        
        // Show success message (in production, you'd want to send this to a server)
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Scroll-based animation for destination cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all destination cards
document.querySelectorAll('.destination-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Booking button click handler
document.querySelectorAll('.book-button').forEach(button => {
    button.addEventListener('click', function() {
        const packageTitle = this.closest('.package-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in our ${packageTitle}! Our team will contact you shortly to complete your booking.`);
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.style.transform = 'translateY(-100%)';
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});