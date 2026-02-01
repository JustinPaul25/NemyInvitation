// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Inject navigation menu
    injectNavigationMenu('18-shots');
    
    // Initialize all event listeners
    initializeNavigation();
    initializeShotItems();
    initializeShareButton();
    initializeNextButton();
    
    // Add scroll animations
    initializeScrollAnimations();
    
    // Log page view
    logPageView();
}

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
    const backBtn = document.getElementById('backBtn');
    const menuBtn = document.getElementById('menuBtn');
    
    if (backBtn) {
        backBtn.addEventListener('click', handleBackClick);
    }
    
    if (menuBtn) {
        menuBtn.addEventListener('click', handleMenuClick);
    }
}

function handleBackClick() {
    // Add page transition animation
    const page = document.querySelector('.page');
    page.style.transition = 'opacity 0.5s ease-out';
    page.style.opacity = '0';
    
    // Navigate back after animation
    setTimeout(() => {
        window.location.href = '18-candles.html';
    }, 500);
}

function handleMenuClick() {
    openNavMenu();
}

// ========================================
// SHOT ITEMS INTERACTION
// ========================================
function initializeShotItems() {
    const shotItems = document.querySelectorAll('.shot-item');
    
    shotItems.forEach((item, index) => {
        // Add click event
        item.addEventListener('click', () => handleShotClick(index + 1));
        
        // Add keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleShotClick(index + 1);
            }
        });
    });
}

function handleShotClick(shotNumber) {
    console.log(`Shot ${shotNumber} clicked`);
    
    // Add animation effect
    const shotItem = document.querySelector(`.shot-item[data-number="${shotNumber}"]`);
    if (shotItem) {
        shotItem.style.animation = 'none';
        setTimeout(() => {
            shotItem.style.animation = 'fadeInLeft 0.6s ease-out forwards';
        }, 10);
    }
    
    // TODO: Show more details about the person (optional feature)
    // You could open a modal with more information, photos, etc.
}

// ========================================
// SHARE BUTTON
// ========================================
function initializeShareButton() {
    const shareBtn = document.getElementById('shareBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShareClick);
    }
}

async function handleShareClick() {
    // Try Web Share API first (native mobile sharing)
    if (navigator.share) {
        try {
            await navigator.share({
                title: "18 Shots - Nemy's 18th Birthday",
                text: "Check out the 18 Shots celebration for Nemy's 18th Birthday!",
                url: window.location.href
            });
            
            trackShareEvent('web_share_api');
            console.log('Shared successfully');
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
                // Fallback to custom share options
                showCustomShareOptions();
            }
        }
    } else {
        // Fallback for browsers without Web Share API
        showCustomShareOptions();
    }
}

function showCustomShareOptions() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out the 18 Shots celebration for Nemy's 18th Birthday!");
    
    // Simple share options
    const shareOptions = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        whatsapp: `https://wa.me/?text=${text}%20${url}`
    };
    
    // Show options dialog
    const choice = confirm('Would you like to share on Facebook?\n\nOK = Facebook\nCancel = Copy link instead');
    
    if (choice) {
        window.open(shareOptions.facebook, 'Share', 'width=600,height=400');
        trackShareEvent('facebook');
    } else {
        copyLinkToClipboard();
    }
}

function copyLinkToClipboard() {
    const url = window.location.href;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => {
                showNotification('Link copied to clipboard!');
                trackShareEvent('copy_link');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                fallbackCopyToClipboard(url);
            });
    } else {
        fallbackCopyToClipboard(url);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Link copied to clipboard!');
        trackShareEvent('copy_link');
    } catch (err) {
        console.error('Fallback copy failed:', err);
        alert('Link: ' + text);
    }
    
    document.body.removeChild(textArea);
}

// ========================================
// NEXT BUTTON
// ========================================
function initializeNextButton() {
    const nextBtn = document.getElementById('nextBtn');
    
    if (nextBtn) {
        nextBtn.addEventListener('click', handleNextClick);
    }
}

function handleNextClick() {
    // Add page transition animation
    const page = document.querySelector('.page');
    page.style.transition = 'opacity 0.5s ease-out';
    page.style.opacity = '0';
    
    // Navigate to next page after animation
    setTimeout(() => {
        window.location.href = '18-treasures.html';
    }, 500);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initializeScrollAnimations() {
    // Observe elements for scroll-triggered animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        // Observe quote section
        const quoteSection = document.querySelector('.quote-section');
        if (quoteSection) {
            observer.observe(quoteSection);
        }
        
        // Observe next section
        const nextSection = document.querySelector('.next-section');
        if (nextSection) {
            observer.observe(nextSection);
        }
    }
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(77, 208, 225, 0.95);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-family: var(--font-body);
        font-size: 0.875rem;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// ANALYTICS & TRACKING
// ========================================
function trackShareEvent(platform) {
    console.log(`Share event: ${platform}`);
    
    // Example Google Analytics tracking (uncomment if GA is implemented)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'share', {
    //         'event_category': 'social',
    //         'event_label': platform,
    //         'event_page': '18-shots'
    //     });
    // }
}

function logPageView() {
    console.log('18 Shots page viewed');
    
    // Example Google Analytics page view (uncomment if GA is implemented)
    // if (typeof gtag !== 'undefined') {
    //     gtag('config', 'GA_MEASUREMENT_ID', {
    //         'page_title': '18 Shots - Nemy',
    //         'page_path': '/18-shots.html'
    //     });
    // }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ========================================
// SMOOTH SCROLL (FOR LONG LISTS)
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
