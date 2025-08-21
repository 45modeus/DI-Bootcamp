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

// booking
 // Event data
    const events = {
      'comic-con': {
        title: 'Comic Con 2025',
        type: 'premium-event',
        typeText: '$75',
        date: 'Saturday, Sep 21 • 10:00 AM',
        location: 'Convention Center, Downtown',
        description: 'Join thousands of fans for the ultimate comic book and pop culture experience. Meet your favorite artists, discover new comics, and enjoy exclusive panels with celebrity guests.',
        image: './src/img/comiccon.jpg',
        price: 75.00,
        ticketName: 'Convention Pass',
        features: [
          { icon: '🎨', text: 'Artist Alley Access' },
          { icon: '🎤', text: 'Celebrity Panels' },
          { icon: '📚', text: 'Comic Book Vendors' },
          { icon: '🎮', text: 'Gaming Zone' }
        ]
      },
      'developer-conference': {
        title: 'Developer Conference',
        type: 'paid-event',
        typeText: '$120',
        date: 'Friday, Sep 27 • 9:00 AM',
        location: 'Tech Hub, Silicon Valley',
        description: 'Connect with industry leaders and learn about the latest in software development, AI, and emerging technologies. Network with professionals and expand your skills.',
        image: './src/img/devcon.jpg',
        price: 120.00,
        ticketName: 'Conference Pass',
        features: [
          { icon: '💻', text: 'Tech Workshops' },
          { icon: '🤖', text: 'AI Demonstrations' },
          { icon: '🌐', text: 'Networking Sessions' },
          { icon: '🎯', text: 'Career Fair' }
        ]
      },
      'anyma-concert': {
        title: 'Anyma Concert',
        type: 'premium-event',
        typeText: '$89',
        date: 'Saturday, Oct 5 • 8:00 PM',
        location: 'Grand Arena, Music District',
        description: 'Experience an unforgettable night with Anyma\'s mesmerizing electronic music performance. Cutting-edge visuals and immersive soundscapes await.',
        image: './src/img/ANYMA.jpg',
        price: 89.00,
        ticketName: 'Concert Ticket',
        features: [
          { icon: '🎵', text: 'Live Performance' },
          { icon: '✨', text: 'Visual Effects' },
          { icon: '🍸', text: 'VIP Bar Access' },
          { icon: '🎧', text: 'Premium Sound' }
        ]
      },
      'adoption-day': {
        title: 'Adoption Day',
        type: 'free-event',
        typeText: 'Free',
        date: 'Sunday, Oct 12 • 11:00 AM',
        location: 'City Park, Pet Pavilion',
        description: 'Find your new best friend at our pet adoption event! Meet rescued dogs and cats looking for loving homes. All pets are vaccinated and microchipped.',
        image: './src/img/DogAdopt.jpg',
        price: 0.00,
        ticketName: 'Free Entry',
        features: [
          { icon: '🐕', text: 'Dogs & Cats' },
          { icon: '💉', text: 'Vaccinated Pets' },
          { icon: '❤️', text: 'Loving Homes' },
          { icon: '🏥', text: 'Health Checked' }
        ]
      },
      'art-exhibition': {
        title: 'Art Exhibition',
        type: 'paid-event',
        typeText: '$15',
        date: 'Friday, Oct 18 • 6:00 PM',
        location: 'Modern Art Gallery, Arts District',
        description: 'Discover contemporary artworks from local and international artists. Opening night includes wine reception and artist meet-and-greet sessions.',
        image: './src/img/rt.jpg',
        price: 15.00,
        ticketName: 'Gallery Pass',
        features: [
          { icon: '🎨', text: 'Contemporary Art' },
          { icon: '🍷', text: 'Wine Reception' },
          { icon: '👨‍🎨', text: 'Meet Artists' },
          { icon: '🖼️', text: 'Exclusive Viewing' }
        ]
      },
      'gaming-tournament': {
        title: 'Gaming Tournament',
        type: 'paid-event',
        typeText: '$35',
        date: 'Saturday, Oct 26 • 1:00 PM',
        location: 'Esports Arena, Gaming Center',
        description: 'Compete or spectate in the ultimate gaming tournament featuring popular titles. Prizes, food, and gaming gear giveaways throughout the event.',
        image: './src/img/gameevent.jpg',
        price: 35.00,
        ticketName: 'Tournament Pass',
        features: [
          { icon: '🎮', text: 'Multiple Games' },
          { icon: '🏆', text: 'Cash Prizes' },
          { icon: '🍕', text: 'Food & Drinks' },
          { icon: '🎁', text: 'Gaming Gear' }
        ]
      }
    };

    let quantity = 1;
    let currentEvent = null;
    const serviceFeeRate = 0.10;

    // Get event from URL parameter
    function getEventFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('event') || 'comic-con'; // Default to comic-con
    }

    // Load event data
    function loadEvent() {
      const eventId = getEventFromURL();
      currentEvent = events[eventId];

      if (!currentEvent) {
        currentEvent = events['comic-con']; // Fallback
      }

      // Update event details
      document.getElementById('eventTitle').textContent = currentEvent.title;
      document.getElementById('eventType').textContent = currentEvent.typeText;
      document.getElementById('eventType').className = `event-type ${currentEvent.type}`;
      document.getElementById('eventDate').innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        ${currentEvent.date}
      `;
      document.getElementById('eventLocation').textContent = `📍 ${currentEvent.location}`;
      document.getElementById('eventDescription').textContent = currentEvent.description;
      document.getElementById('eventImage').src = currentEvent.image;
      document.getElementById('eventImage').alt = currentEvent.title;

      // Update ticket info
      document.getElementById('ticketName').textContent = currentEvent.ticketName;
      document.getElementById('ticketPrice').textContent = currentEvent.price.toFixed(2);
      document.getElementById('ticketTypeSummary').textContent = currentEvent.ticketName;

      // Load features
      const featuresContainer = document.getElementById('eventFeatures');
      featuresContainer.innerHTML = currentEvent.features.map(feature => `
        <div class="feature-item">
          <div class="feature-icon">${feature.icon}</div>
          <div>${feature.text}</div>
        </div>
      `).join('');

      // Update pricing
      updateDisplay();
    }

    function changeQuantity(delta) {
      const newQuantity = quantity + delta;
      if (newQuantity >= 1 && newQuantity <= 10) {
        quantity = newQuantity;
        updateDisplay();
      }
    }

    function updateDisplay() {
      if (!currentEvent) return;

      document.getElementById('quantity').textContent = quantity;
      document.getElementById('summaryQty').textContent = quantity;
      
      const subtotal = currentEvent.price * quantity;
      const serviceFee = subtotal * serviceFeeRate;
      const total = subtotal + serviceFee;
      
      document.getElementById('subtotal').textContent = subtotal.toFixed(2);
      document.getElementById('serviceFee').textContent = serviceFee.toFixed(2);
      document.getElementById('total').textContent = total.toFixed(2);
    }

    // Form submission
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      document.getElementById('successMessage').style.display = 'block';
      
      // Scroll to top to show message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Reset form after a delay
      setTimeout(() => {
        this.reset();
        quantity = 1;
        updateDisplay();
        document.getElementById('successMessage').style.display = 'none';
      }, 3000);
    });

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', loadEvent);