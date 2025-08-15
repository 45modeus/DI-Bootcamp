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