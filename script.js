// GSAP Animation for the left section
gsap.from("#left", { x: -100, opacity: 0, duration: 1 });


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Navigation items fade in from the top
    gsap.from("nav h1", {
        y: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
    });

    // "Hi, my name is..." text fade-in from the left
    gsap.from("#left div span", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power2.out",
    });

    // "Prashant kr Sharma" main title pop-in effect
    gsap.from(".text-8xl", {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        delay: 1,
        ease: "elastic.out(1, 0.6)",
    });

    // "I build things for the web" fade-in and slide-up
    gsap.from(".text-7xl", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
    });

    // Background color subtle pulse effect for the whole body
    gsap.to("body", {
        backgroundColor: "#0d2337",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
    });

    // Right section image animation
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".overflow-hidden img", {
        x: 200, // Start position (200px to the right)
        opacity: 0, // Start with opacity 0
        duration: 1.5, // Animation duration
        ease: "power3.out", // Easing for smooth effect
        scrollTrigger: {
            trigger: ".overflow-hidden", // Trigger when this section comes into view
            start: "top 80%", // Animation starts when the section is 80% into the viewport
            toggleActions: "play none none none", // Play animation only once
        },
    });
});


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// Text animation for role
function animateText(elementId, color = "white", stagger = 0.1, delayBetweenLoops = 0.5) {
    const element = document.querySelector(`#${elementId}`);
    if (!element) return; // Exit if element doesn't exist

    const text = element.textContent;
    let clutter = "";

    // Wrap each character in a span
    text.split("").forEach((char) => {
        clutter += `<span>${char}</span>`;
    });
    element.innerHTML = clutter;

    // Create GSAP timeline for continuous animation
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: delayBetweenLoops });

    // Forward animation: fill each character with the specified color
    timeline.to(`#${elementId} span`, {
        color: color,
        stagger: stagger, // Stagger effect for characters
        duration: 0.2, // Speed for each character
        ease: "power1.inOut",
    });

    // Reset animation: revert color back to original
    timeline.to(`#${elementId} span`, {
        color: "", // Reset to original color
        stagger: stagger,
        duration: 0.2,
        ease: "power1.inOut",
    });
}

// Apply animation to the "role" text
animateText("role");

// icon rotet
// Achievement animation
// GSAP ScrollTrigger Animations
window.addEventListener("load", function() {
    gsap.registerPlugin(ScrollTrigger);  // Registering ScrollTrigger plugin

    // Animation for Third Section when it enters the viewport
    gsap.from("#third-section", {
        opacity: 0,
        y: 100,  // Slide up from bottom
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#third-section",  // Trigger when this section comes into view
            start: "top 80%",            // When the top of the section is 80% from the top of the viewport
            end: "top 50%",              // Animation ends when the section reaches 50% from the top of the viewport
            toggleActions: "play none none none",  // Play the animation when the section comes into view
        }
    });

    // Custom Cursor logic
    const cursor = document.getElementById("custom-cursor");
    document.addEventListener("mousemove", (e) => {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
    });

    // Hover effects for changing cursor color and text effects
    const textElements = document.querySelectorAll("h2, p");

    textElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            gsap.to("#custom-cursor", { backgroundColor: "#FFC300", duration: 0.3 });
        });

        el.addEventListener("mouseleave", () => {
            gsap.to("#custom-cursor", { backgroundColor: "#FF5733", duration: 0.3 });
        });
    });
});

// Detect the active section on scroll
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');

    let currentPosition = window.scrollY;

    sections.forEach((section, index) => {
        let sectionTop = section.offsetTop - 100; // Section's top position
        let sectionBottom = sectionTop + section.offsetHeight; // Section's bottom position

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
            navLinks.forEach(link => link.classList.remove('active')); // Remove active class from all
            navLinks[index].classList.add('active'); // Add active class to current link
        }
    });
});

// Smooth scroll behavior for the anchor links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        let targetId = this.getAttribute('href').substring(1);
        let targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth', // Smooth scroll effect
            block: 'start'
        });
    });
});
