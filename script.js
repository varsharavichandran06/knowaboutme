// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.3)';
    }
});

// Modal functionality
const experienceCards = document.querySelectorAll('.experience-card');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal-close');

console.log('Experience cards found:', experienceCards.length);
console.log('Modals found:', modals.length);
console.log('Close buttons found:', modalCloses.length);

// Open modal when clicking on experience card or button
experienceCards.forEach(card => {
    card.addEventListener('click', (e) => {
        const modalId = card.getAttribute('data-modal') + '-modal';
        console.log('Clicked card with modal ID:', modalId);
        const modal = document.getElementById(modalId);
        console.log('Modal element found:', modal);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            console.log('Modal opened:', modalId);
        } else {
            console.error('Modal not found:', modalId);
        }
    });
});

// Close modal when clicking close button
modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const modal = closeBtn.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = ''; // Restore scrolling
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll('.experience-card, .project-card, .skill-category, .education-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Type writer effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Add dynamic year to footer
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Varsha Ravichandran. All rights reserved.`;
}

/* Chat widget frontend */
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatClose = document.getElementById('chatClose');
const chatMessages = document.getElementById('chatMessages');
const sendQuestion = document.getElementById('sendQuestion');
const questionInput = document.getElementById('questionInput');

let greeted = false;
let conversationHistory = [];

function addMessage(text, who='bot'){
    const div = document.createElement('div');
    div.className = 'chat-msg ' + (who === 'user' ? 'user' : 'bot');
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatToggle?.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    const isActive = chatWindow.classList.contains('active');
    chatWindow.setAttribute('aria-hidden', !isActive);
    // initial greeting when first opened
    if (isActive && !greeted) {
        setTimeout(() => addMessage("Hi, this is Varsha. I'm happy to answer any questions about me!", 'bot'), 200);
        greeted = true;
    }
});

chatClose?.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    chatWindow.setAttribute('aria-hidden', 'true');
});

async function askQuestion(){
    const q = questionInput.value.trim();
    if (!q) return;
    addMessage(q, 'user');
    conversationHistory.push({ role: 'user', content: q });
    questionInput.value = '';
    addMessage('Thinking...', 'bot');

    try {
        const res = await fetch('/api/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: conversationHistory })
        });
        const data = await res.json();
        // remove the 'Thinking...' placeholder
        const last = chatMessages.querySelector('.chat-msg.bot:last-child');
        if (last && last.textContent === 'Thinking...') last.remove();
        if (res.ok) {
            addMessage(data.answer || 'No answer returned', 'bot');
            conversationHistory.push({ role: 'assistant', content: data.answer || '' });
        } else {
            addMessage(data.error || 'Error from server', 'bot');
            conversationHistory.pop(); // drop the unanswered question so retries stay clean
        }
    } catch (err) {
        console.error(err);
        const last = chatMessages.querySelector('.chat-msg.bot:last-child');
        if (last && last.textContent === 'Thinking...') last.remove();
        addMessage('Failed to get answer (network).', 'bot');
        conversationHistory.pop();
    }
}

sendQuestion?.addEventListener('click', askQuestion);

// allow Enter to send
questionInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        askQuestion();
    }
});