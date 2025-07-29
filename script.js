document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // FAQ Modal
    const faqModal = document.querySelector('.faq-modal');
    const openFaqButtons = document.querySelectorAll('#open-faq, #open-faq-footer');
    const closeFaqModal = document.querySelector('.close-faq-modal');
    
    // Load FAQ content from IT Park website
    const faqItems = [
        {
            question: "What is IT Park?",
            answer: "<p>IT Park is a special economic zone in Uzbekistan created to develop the IT industry and attract foreign investment in the technology sector.</p>"
        },
        {
            question: "How to become a resident of IT Park?",
            answer: "<p>To become a resident, you need to register a legal entity in Uzbekistan and apply for IT Park residency through their official website or office.</p>"
        },
        {
            question: "What are the benefits of IT Park residency?",
            answer: "<p>Residents enjoy tax exemptions, simplified customs procedures, and other benefits designed to support IT businesses.</p>"
        },
        {
            question: "Can foreign companies become residents?",
            answer: "<p>Yes, foreign companies can establish subsidiaries in Uzbekistan and apply for IT Park residency to receive all benefits.</p>"
        },
        {
            question: "What types of activities are eligible?",
            answer: "<p>Software development, IT outsourcing, data processing, and other technology-related activities qualify for residency.</p>"
        },
        {
            question: "Is there a minimum investment requirement?",
            answer: "<p>No, there is no minimum investment requirement to become an IT Park resident.</p>"
        },
        {
            question: "How long does the registration process take?",
            answer: "<p>Typically 2-3 weeks for complete company registration and IT Park residency approval.</p>"
        },
        {
            question: "What taxes are exempted for residents?",
            answer: "<p>Corporate tax, property tax, land tax, and customs duties on equipment imports are fully exempted.</p>"
        },
        {
            question: "Can I hire foreign employees?",
            answer: "<p>Yes, IT Park residents can hire foreign specialists with simplified visa procedures.</p>"
        },
        {
            question: "Is office space provided?",
            answer: "<p>IT Park offers co-working spaces and offices for residents, but you can also rent your own office.</p>"
        }
    ];
    
    // Function to open FAQ modal with content
    function openFaqModal() {
        const faqModalBody = document.querySelector('.faq-modal-body');
        faqModalBody.innerHTML = '';
        
        faqItems.forEach(item => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <div class="faq-question">
                    <h3>${item.question}</h3>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    <div class="faq-answer-content">
                        ${item.answer}
                    </div>
                </div>
            `;
            faqModalBody.appendChild(faqItem);
        });
        
        faqModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Initialize FAQ accordion inside modal
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
                
                const answer = faqItem.querySelector('.faq-answer');
                if (faqItem.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
                
                // Close other open items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                        item.querySelector('.faq-answer').style.maxHeight = '0';
                    }
                });
            });
        });
    }
    
    // Open FAQ modal when buttons are clicked
    openFaqButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openFaqModal();
        });
    });
    
    // Close FAQ modal
    closeFaqModal.addEventListener('click', function() {
        faqModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    faqModal.addEventListener('click', function(e) {
        if (e.target === faqModal) {
            faqModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
        // Benefit Detail Modal
    const benefitModal = document.querySelector('.benefit-modal');
    const closeBenefitModal = document.querySelector('.close-benefit-modal');
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    // Open benefit detail modal
    benefitCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Prevent default link behavior if it's a link
            e.preventDefault();
            
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const nonResidentValue = this.querySelector('.non-resident').textContent;
            const residentValue = this.querySelector('.resident').textContent;
            
            document.querySelector('.benefit-modal-title').textContent = title;
            document.querySelector('.benefit-modal-description').textContent = description;
            document.querySelector('.non-resident-value').textContent = nonResidentValue;
            document.querySelector('.resident-value').textContent = residentValue;
            
            benefitModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close benefit detail modal
    closeBenefitModal.addEventListener('click', function() {
        benefitModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside content
    benefitModal.addEventListener('click', function(e) {
        if (e.target === benefitModal) {
            benefitModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal when clicking outside content
    benefitModal.addEventListener('click', function(e) {
        if (e.target === benefitModal) {
            benefitModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const company = document.getElementById('company').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', {
                firstName,
                lastName,
                email,
                phone,
                company,
                message
            });
            
            // Show success message
            alert('Thank you for your message! We will contact you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input').value;
            console.log('Newsletter subscription:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            this.querySelector('input').value = '';
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.benefit-card, .news-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.benefit-card, .news-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

// Benefits dropdown in navigation
const benefitItems = document.querySelectorAll('.benefit-item');

benefitItems.forEach(item => {
    const toggle = item.querySelector('.benefit-toggle');
    
    toggle.addEventListener('click', function() {
        item.classList.toggle('active');
        
        const content = item.querySelector('.benefit-content');
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
        
        // Close other open items
        benefitItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.benefit-content').style.maxHeight = '0';
            }
        });
    });
});
});