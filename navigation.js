// ========================================
// SHARED NAVIGATION MODULE
// This module provides navigation functionality for all pages
// ========================================

// Navigation menu HTML template
function getNavigationMenuHTML(currentPage = '') {
    return `
    <!-- Navigation Menu Overlay -->
    <div class="nav-overlay" id="navOverlay">
        <div class="nav-overlay-content">
            <button class="nav-close" id="navClose" aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <h2 class="nav-title">Menu</h2>
            
            <ul class="nav-links">
                <li><a href="index.html" class="nav-link ${currentPage === 'index' ? 'active' : ''}">
                    <span class="nav-icon">⭐</span>
                    <span class="nav-text">Save The Date</span>
                </a></li>
                <li><a href="18-roses.html" class="nav-link ${currentPage === '18-roses' ? 'active' : ''}">
                    <span class="nav-icon">🌹</span>
                    <span class="nav-text">18 Roses</span>
                </a></li>
                <li><a href="18-candles.html" class="nav-link ${currentPage === '18-candles' ? 'active' : ''}">
                    <span class="nav-icon">🕯️</span>
                    <span class="nav-text">18 Candles</span>
                </a></li>
                <li><a href="18-shots.html" class="nav-link ${currentPage === '18-shots' ? 'active' : ''}">
                    <span class="nav-icon">🥃</span>
                    <span class="nav-text">18 Shots</span>
                </a></li>
                <li><a href="18-treasures.html" class="nav-link ${currentPage === '18-treasures' ? 'active' : ''}">
                    <span class="nav-icon">💎</span>
                    <span class="nav-text">18 Treasures</span>
                </a></li>
                <li><a href="18-blue-bills.html" class="nav-link ${currentPage === '18-blue-bills' ? 'active' : ''}">
                    <span class="nav-icon">💵</span>
                    <span class="nav-text">18 Blue Bills</span>
                </a></li>
                <li><a href="closing.html" class="nav-link ${currentPage === 'closing' ? 'active' : ''}">
                    <span class="nav-icon">💌</span>
                    <span class="nav-text">Thank You</span>
                </a></li>
            </ul>
        </div>
    </div>
    `;
}

// Navigation menu CSS
function getNavigationMenuCSS() {
    return `
    /* Navigation Overlay Styles */
    .nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(10px);
        z-index: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .nav-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .nav-overlay-content {
        width: 90%;
        max-width: 500px;
        padding: 3rem;
        transform: translateY(30px);
        transition: transform 0.3s ease;
    }

    .nav-overlay.active .nav-overlay-content {
        transform: translateY(0);
    }

    .nav-close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 44px;
        height: 44px;
        background: transparent;
        border: 2px solid #d4af37;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        color: #d4af37;
    }

    .nav-close svg {
        width: 24px;
        height: 24px;
    }

    .nav-close:hover {
        background: #d4af37;
        color: #0a0a0a;
        transform: rotate(90deg);
    }

    .nav-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: 2.5rem;
        font-weight: 600;
        color: #d4af37;
        margin-bottom: 3rem;
        text-align: center;
    }

    .nav-links {
        list-style: none;
    }

    .nav-links li {
        margin-bottom: 1rem;
    }

    .nav-link {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background: rgba(212, 175, 55, 0.05);
        border: 1px solid rgba(212, 175, 55, 0.2);
        border-radius: 12px;
        text-decoration: none;
        color: #f8f8f8;
        transition: all 0.3s ease;
    }

    .nav-link:hover {
        background: rgba(212, 175, 55, 0.15);
        border-color: #d4af37;
        transform: translateX(10px);
    }

    .nav-link.active {
        background: rgba(212, 175, 55, 0.2);
        border-color: #d4af37;
    }

    .nav-icon {
        font-size: 1.5rem;
        width: 40px;
        text-align: center;
    }

    .nav-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }
    `;
}

// Initialize navigation functionality
function initializeNavigationMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');
    const navClose = document.getElementById('navClose');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', openNavMenu);
    }
    
    if (navClose) {
        navClose.addEventListener('click', closeNavMenu);
    }
    
    if (navOverlay) {
        // Close menu when clicking outside
        navOverlay.addEventListener('click', function(e) {
            if (e.target === navOverlay) {
                closeNavMenu();
            }
        });
        
        // Close menu when pressing Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navOverlay.classList.contains('active')) {
                closeNavMenu();
            }
        });
    }
}

function openNavMenu() {
    const navOverlay = document.getElementById('navOverlay');
    if (navOverlay) {
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeNavMenu() {
    const navOverlay = document.getElementById('navOverlay');
    if (navOverlay) {
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Auto-inject navigation menu if not present
function injectNavigationMenu(currentPage = '') {
    // Check if navigation menu already exists
    if (!document.getElementById('navOverlay')) {
        // Inject CSS
        const style = document.createElement('style');
        style.textContent = getNavigationMenuCSS();
        document.head.appendChild(style);
        
        // Inject HTML
        const navHTML = getNavigationMenuHTML(currentPage);
        document.body.insertAdjacentHTML('afterbegin', navHTML);
        
        // Initialize event listeners
        initializeNavigationMenu();
    }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        injectNavigationMenu,
        initializeNavigationMenu,
        openNavMenu,
        closeNavMenu
    };
}
