//hamburger menu
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.getElementById('mobileNav');

        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

//  hero section
let currentSlideIndex = 0;
let autoSlideInterval = null;

function updateCarousel() {
    const container = document.getElementById('carouselContainer');
    const currentSlideSpan = document.getElementById('currentSlide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const totalItems = container.children.length;
    const gap = parseInt(getComputedStyle(container).gap) || 0;

    // Compute total moveX by summing widths of previous cards
    let moveX = 0;
    for (let i = 0; i < currentSlideIndex; i++) {
        moveX += container.children[i].getBoundingClientRect().width + gap;
    }

    container.style.transform = `translateX(-${moveX}px)`;

    currentSlideSpan.textContent = currentSlideIndex + 1;
    document.getElementById('totalSlides').textContent = totalItems;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });

    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === totalItems - 1;
}

function changeSlide(direction) {
    const container = document.getElementById('carouselContainer');
    const totalItems = container.children.length;

    let newIndex = currentSlideIndex + direction;
    if (newIndex < 0) newIndex = totalItems - 1;
    if (newIndex >= totalItems) newIndex = 0;

    currentSlideIndex = newIndex;
    updateCarousel();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateCarousel();
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function stopAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
}

window.addEventListener('resize', updateCarousel);

const carousel = document.querySelector('.events-carousel');
carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

updateCarousel();
startAutoSlide();
