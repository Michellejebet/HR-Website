      // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                    const icon = mobileMenuButton.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success message (in a real application, you would send this to a server)
            alert(`Thank you ${name}! Your message has been sent. We'll contact you at ${email} shortly.`);
            
            // Reset form
            this.reset();
        });


// Client Slideshow
let slideIndex = 1;
let slideTimer;

// Initialize slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex);
    startAutoSlide();
});

// Auto slide every 3 seconds
function startAutoSlide() {
    slideTimer = setInterval(function() {
        changeSlide(1);
    }, 3000);
}

// Stop auto slide when user manually changes
function resetAutoSlide() {
    clearInterval(slideTimer);
    startAutoSlide();
}

// Next/previous controls
function changeSlide(n) {
    resetAutoSlide();
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    resetAutoSlide();
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("client-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length === 0) return; // Exit if no slides found
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("active");
    if (dots[slideIndex-1]) {
        dots[slideIndex-1].className += " active";
    }
}
