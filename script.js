// ===== ELITE PORTFOLIO - WORLD-CLASS INTERACTIONS =====

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effect on links
document.querySelectorAll('a, button, .btn').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#2563eb', '#60a5fa', '#3b82f6']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 100
});

// Enhanced Counter Animation with Smooth Easing
const counters = document.querySelectorAll('[data-target]');
const animationDuration = 2500; // 2.5 seconds for smooth animation

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const startTime = Date.now();
        
        const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);
            
            const easedProgress = easeOutQuart(progress);
            const currentValue = Math.floor(easedProgress * target);
            
            counter.innerText = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + '+';
                counter.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 200);
            }
        };
        
        counter.style.transition = 'transform 0.2s ease';
        requestAnimationFrame(updateCount);
    });
};

// Trigger counter animation when in view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    counterObserver.observe(heroStats);
}

// Enhanced 3D Cube with Continuous Rotation and Mouse Parallax
const hero3DObject = document.querySelector('.hero-3d-object');
const cube = document.querySelector('.cube');

if (hero3DObject && cube) {
    let baseRotationX = 0;
    let baseRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 100;
        mouseY = (e.clientY / window.innerHeight) * 100;
    });
    
    const animateCube = () => {
        // Smooth mouse following
        currentMouseX += (mouseX - currentMouseX) * 0.05;
        currentMouseY += (mouseY - currentMouseY) * 0.05;
        
        const rotateX = ((currentMouseY - 50) / 50) * 15;
        const rotateY = ((currentMouseX - 50) / 50) * 15;
        
        // Continuous base rotation
        baseRotationX += 0.3;
        baseRotationY += 0.5;
        
        cube.style.transform = `rotateX(${baseRotationX + rotateX}deg) rotateY(${baseRotationY + rotateY}deg)`;
        cube.style.transition = 'transform 0.1s ease-out';
        
        requestAnimationFrame(animateCube);
    };
    
    animateCube();
}

// Enhanced Floating Cards with Wave Animation
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
    let time = index * 100;
    
    const animateCard = () => {
        time += 0.02;
        const floatY = Math.sin(time) * 10;
        const floatX = Math.cos(time * 0.5) * 5;
        const rotate = Math.sin(time * 0.3) * 3;
        
        if (!card.matches(':hover')) {
            card.style.transform = `translate(${floatX}px, ${floatY}px) rotate(${rotate}deg)`;
        }
        
        requestAnimationFrame(animateCard);
    };
    
    animateCard();
    
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-30px) scale(1.08) rotate(0deg)';
        card.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.1s ease';
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 40px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = '0 4px 50px rgba(0, 0, 0, 0.15)';
    }
    
    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Animated Section Titles
const sectionTitles = document.querySelectorAll('.section-title');
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const title = entry.target;
            const text = title.textContent;
            title.textContent = '';
            title.style.opacity = '1';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.opacity = '0';
                span.style.display = 'inline-block';
                span.style.transform = 'translateY(20px)';
                span.style.animation = `letterDrop 0.5s ease forwards ${index * 0.03}s`;
                title.appendChild(span);
            });
            
            titleObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sectionTitles.forEach(title => {
    title.style.opacity = '0';
    titleObserver.observe(title);
});

// Add keyframes for letter animation
const letterStyle = document.createElement('style');
letterStyle.innerHTML = `
    @keyframes letterDrop {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(letterStyle);

// Active Section Highlight in Navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Tech Orbit Interactive Hover
const orbitItems = document.querySelectorAll('.orbit-item');

orbitItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.animationPlayState = 'paused';
        item.style.transform = 'scale(1.2)';
        item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.animationPlayState = 'running';
        item.style.transform = 'scale(1)';
        item.style.zIndex = '1';
    });
});

// Animate Project Stats
const projectStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.project-stats .stat');
            statNumbers.forEach((stat, index) => {
                setTimeout(() => {
                    stat.style.opacity = '1';
                    stat.style.transform = 'translateX(0)';
                    
                    // Animate the numbers if they exist
                    const numberElement = stat.querySelector('i + *');
                    if (numberElement && numberElement.textContent.includes('K') || numberElement.textContent.includes('★')) {
                        const text = numberElement.textContent;
                        let currentNum = 0;
                        const target = parseFloat(text);
                        const duration = 1500;
                        const startTime = Date.now();
                        
                        const updateNumber = () => {
                            const elapsed = Date.now() - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            currentNum = easeOutQuart(progress) * target;
                            
                            if (text.includes('K')) {
                                numberElement.textContent = currentNum.toFixed(1) + 'K+ Users';
                            } else if (text.includes('★')) {
                                numberElement.textContent = currentNum.toFixed(1) + '★ Rating';
                            }
                            
                            if (progress < 1) {
                                requestAnimationFrame(updateNumber);
                            }
                        };
                        
                        updateNumber();
                    }
                }, index * 150);
            });
            projectStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.project-stats').forEach(stats => {
    const statItems = stats.querySelectorAll('.stat');
    statItems.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateX(-20px)';
        stat.style.transition = 'all 0.5s ease';
    });
    projectStatsObserver.observe(stats);
});

// Project Cards Enhanced Interaction
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Tilt effect
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 5; // Max 5 degrees
        const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
        
        card.style.transform = `translateY(-10px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Skill Cards Stagger Animation on Scroll
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1
});

skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    skillObserver.observe(card);
});

// Form Submission Handler
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        const btn = contactForm.querySelector('.btn-primary');
        const originalText = btn.innerHTML;
        
        // Show loading state
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        btn.disabled = true;
        
        // Let the form submit naturally to Formspree
        // Form will handle the submission via its action attribute
    });
}

// Add smooth reveal animation for scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '0.7';
            scrollIndicator.style.pointerEvents = 'all';
        }
    });
}

// Parallax Effect for Sections
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent && heroVisual) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroVisual.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
    
    // Shapes parallax
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.1;
        shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed}px)`;
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars[0].style.transform = navMenu.classList.contains('active') ? 
            'rotate(-45deg) translate(-5px, 6px)' : '';
        bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navMenu.classList.contains('active') ? 
            'rotate(45deg) translate(-5px, -6px)' : '';
    });
    
    // Close menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        });
    });
}

// Animated Gradient Background
const shapes = document.querySelectorAll('.shape');
let shapeTime = 0;

const animateShapes = () => {
    shapeTime += 0.005;
    
    shapes.forEach((shape, index) => {
        const offset = index * Math.PI * 0.5;
        const moveX = Math.sin(shapeTime + offset) * 30;
        const moveY = Math.cos(shapeTime * 0.7 + offset) * 30;
        const scale = 1 + Math.sin(shapeTime * 0.5 + offset) * 0.1;
        
        shape.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
    });
    
    requestAnimationFrame(animateShapes);
};

animateShapes();

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Add any additional scroll-based animations here
});

window.addEventListener('scroll', debouncedScroll);

// Easter egg: Konami code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Activate special effect
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.innerHTML = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

console.log('%c🚀 Elite Portfolio Loaded!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with precision and passion', 'color: #6b7280; font-size: 14px;');
