// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Inject navigation menu
    injectNavigationMenu('closing');
    
    // Initialize all event listeners
    initializeNavigation();
    initializeShareButton();
    
    // Log page view
    logPageView();
}

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
    const backBtn = document.getElementById('backBtn');
    const menuBtn = document.getElementById('menuBtn');
    const navOverlay = document.getElementById('navOverlay');
    const navClose = document.getElementById('navClose');
    
    if (backBtn) {
        backBtn.addEventListener('click', handleBackClick);
    }
    
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

function handleBackClick() {
    // Add page transition animation
    const page = document.querySelector('.page');
    page.style.transition = 'opacity 0.5s ease-out';
    page.style.opacity = '0';
    
    // Navigate back after animation
    setTimeout(() => {
        window.location.href = '18-blue-bills.html';
    }, 500);
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
                title: "Nemy's 18th Birthday Celebration",
                text: "You're invited to celebrate Nemy's 18th Birthday on September 12, 2026!",
                url: window.location.origin + '/index.html'
            });
            
            trackShareEvent('web_share_api');
            console.log('Shared successfully');
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
                showCustomShareOptions();
            }
        }
    } else {
        showCustomShareOptions();
    }
}

function showCustomShareOptions() {
    const url = encodeURIComponent(window.location.origin + '/index.html');
    const text = encodeURIComponent("You're invited to Nemy's 18th Birthday celebration!");
    
    const shareOptions = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        whatsapp: `https://wa.me/?text=${text}%20${url}`
    };
    
    const choice = confirm('Would you like to share on Facebook?\n\nOK = Facebook\nCancel = Copy link instead');
    
    if (choice) {
        window.open(shareOptions.facebook, 'Share', 'width=600,height=400');
        trackShareEvent('facebook');
    } else {
        copyLinkToClipboard();
    }
}

function copyLinkToClipboard() {
    const url = window.location.origin + '/index.html';
    
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
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(212, 175, 55, 0.95);
        color: #0a0a0a;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-family: var(--font-body);
        font-size: 0.875rem;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideUp 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
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
}

function logPageView() {
    console.log('Closing/Thank You page viewed');
}

// ========================================
// ERROR HANDLING
// ========================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
