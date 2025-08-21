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

//event booking
const eventData = {
  'comic-con': {
    title: 'Comic Con 2025',
    date: 'March 15-17, 2025',
    location: 'Convention Center',
    tickets: [
      { name: 'General Admission', price: 45, description: 'Access to exhibition hall and basic panels' },
      { name: 'VIP Pass', price: 125, description: 'All access including exclusive panels and VIP lounge' },
      { name: 'Weekend Pass', price: 99, description: 'Full weekend access to all general activities' }
    ]
  },
  'developer-conference': {
    title: 'Developer Conference',
    date: 'April 22-23, 2025',
    location: 'Tech Hub Auditorium',
    tickets: [
      { name: 'Standard Ticket', price: 199, description: 'Access to all talks and networking sessions' },
      { name: 'Premium Pass', price: 299, description: 'Standard access plus workshops and premium meals' },
      { name: 'Student Discount', price: 99, description: 'Special pricing for students with valid ID' }
    ]
  },
  'anyma-concert': {
    title: 'Anyma Concert',
    date: 'May 10, 2025',
    location: 'Music Arena',
    tickets: [
      { name: 'General Admission', price: 75, description: 'Standing area with great sound' },
      { name: 'VIP Experience', price: 150, description: 'Premium viewing area with drinks' },
      { name: 'Meet & Greet', price: 250, description: 'VIP experience plus meet and greet' }
    ]
  },
  'adoption-day': {
    title: 'Pet Adoption Day',
    date: 'June 5, 2025',
    location: 'City Park',
    tickets: [
      { name: 'Entry Fee', price: 10, description: 'Entry to adoption fair with refreshments' },
      { name: 'Family Pass', price: 25, description: 'Entry for up to 4 family members plus activity pack' }
    ]
  },
  'art-exhibition': {
    title: 'Contemporary Art Exhibition',
    date: 'July 12-25, 2025',
    location: 'Modern Art Gallery',
    tickets: [
      { name: 'Regular Entry', price: 20, description: 'Self-guided tour of all exhibition areas' },
      { name: 'Guided Tour', price: 35, description: 'Expert-led tour with detailed insights' },
      { name: 'Opening Night', price: 65, description: 'Exclusive opening night with artist meet & greets' }
    ]
  },
  'gaming-tournament': {
    title: 'Gaming Tournament',
    date: 'August 18-20, 2025',
    location: 'Gaming Center',
    tickets: [
      { name: 'Spectator Pass', price: 25, description: 'Watch all tournaments with food court access' },
      { name: 'Player Registration', price: 50, description: 'Compete in tournaments with spectator access' },
      { name: 'Premium Package', price: 85, description: 'Player registration plus merchandise and priority seating' }
    ]
  }
};

let quantities = {};

function getEventFromURL() {
  const params = new URLSearchParams(window.location.search);
  const eventParam = params.get('event');
  console.log('Event parameter from URL:', eventParam); // Debug line
  return eventParam || 'comic-con';
}

function initializePage() {
  const eventKey = getEventFromURL();
  console.log('Loading event:', eventKey); // Debug line
  const event = eventData[eventKey];
  
  if (!event) {
    document.getElementById('eventTitle').textContent = 'Event Not Found';
    console.log('Event not found for key:', eventKey);
    return;
  }

  document.getElementById('eventTitle').textContent = event.title;
  document.getElementById('eventMeta').textContent = `${event.date} • ${event.location}`;
  document.title = `Book ${event.title} - Konekté`;

  createTicketOptions(event.tickets);
}

function createTicketOptions(tickets) {
  const container = document.getElementById('ticketOptions');
  container.innerHTML = '';

  tickets.forEach((ticket, index) => {
    const ticketDiv = document.createElement('div');
    ticketDiv.className = 'ticket-option';
    ticketDiv.dataset.ticketIndex = index;
    ticketDiv.dataset.price = ticket.price;
    
    ticketDiv.innerHTML = `
      <div class="ticket-header">
        <div class="ticket-name">${ticket.name}</div>
        <div class="ticket-price">$${ticket.price}</div>
      </div>
      <div class="ticket-description">${ticket.description}</div>
      <div class="quantity-controls">
        <div class="qty-btn" onclick="changeQuantity(${index}, -1)">-</div>
        <div class="qty-display" id="qty-${index}">0</div>
        <div class="qty-btn" onclick="changeQuantity(${index}, 1)">+</div>
      </div>
    `;

    container.appendChild(ticketDiv);
  });
}

function changeQuantity(ticketIndex, change) {
  if (!quantities[ticketIndex]) quantities[ticketIndex] = 0;
  
  quantities[ticketIndex] = Math.max(0, quantities[ticketIndex] + change);
  document.getElementById(`qty-${ticketIndex}`).textContent = quantities[ticketIndex];
  
  const ticketOption = document.querySelector(`[data-ticket-index="${ticketIndex}"]`);
  if (quantities[ticketIndex] > 0) {
    ticketOption.classList.add('selected');
  } else {
    ticketOption.classList.remove('selected');
  }

  calculateTotal();
}

function calculateTotal() {
  let subtotal = 0;
  
  Object.keys(quantities).forEach(ticketIndex => {
    const quantity = quantities[ticketIndex];
    const price = parseFloat(document.querySelector(`[data-ticket-index="${ticketIndex}"]`).dataset.price);
    subtotal += quantity * price;
  });

  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('serviceFee').textContent = `$${serviceFee.toFixed(2)}`;
  document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const hasTickets = Object.values(quantities).some(qty => qty > 0);
  if (!hasTickets) {
    alert('Please select at least one ticket.');
    return;
  }

  const bookBtn = document.querySelector('.book-btn');
  bookBtn.textContent = 'Processing...';
  bookBtn.disabled = true;

  setTimeout(() => {
    alert(`Booking confirmed! Details sent to ${document.getElementById('email').value}`);
    window.location.href = 'events.html';
  }, 1500);
});

function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', initializePage);