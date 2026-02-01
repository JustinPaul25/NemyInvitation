// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Inject navigation menu
    injectNavigationMenu('index');
    
    // Initialize all event listeners
    initializeButtons();
    initializeShareModal();
    
    // Preload any animations
    initializeAnimations();
    
    // Check if page was shared via social media
    checkSocialMediaReferrer();
}

// ========================================
// BUTTON INITIALIZATION
// ========================================
function initializeButtons() {
    const enterBtn = document.getElementById('enterBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    if (enterBtn) {
        enterBtn.addEventListener('click', handleEnterClick);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', handleShareClick);
    }
}

// ========================================
// ENTER BUTTON HANDLER
// ========================================
function handleEnterClick() {
    // Add page transition animation
    const page = document.querySelector('.page');
    page.style.transition = 'opacity 0.5s ease-out';
    page.style.opacity = '0';
    
    // Navigate to next page after animation
    setTimeout(() => {
        window.location.href = '18-roses.html';
    }, 500);
}

// ========================================
// SHARE MODAL
// ========================================
function initializeShareModal() {
    const shareModal = document.getElementById('shareModal');
    const closeModalBtn = document.getElementById('closeModal');
    const shareFacebookBtn = document.getElementById('shareFacebook');
    const shareTwitterBtn = document.getElementById('shareTwitter');
    const shareWhatsappBtn = document.getElementById('shareWhatsapp');
    const copyLinkBtn = document.getElementById('copyLink');
    
    // Close modal handlers
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeShareModal);
    }
    
    // Close modal when clicking outside
    if (shareModal) {
        shareModal.addEventListener('click', function(e) {
            if (e.target === shareModal) {
                closeShareModal();
            }
        });
    }
    
    // Share button handlers
    if (shareFacebookBtn) {
        shareFacebookBtn.addEventListener('click', shareOnFacebook);
    }
    
    if (shareTwitterBtn) {
        shareTwitterBtn.addEventListener('click', shareOnTwitter);
    }
    
    if (shareWhatsappBtn) {
        shareWhatsappBtn.addEventListener('click', shareOnWhatsapp);
    }
    
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', copyLinkToClipboard);
    }
    
    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && shareModal.classList.contains('active')) {
            closeShareModal();
        }
    });
}

function handleShareClick() {
    const shareModal = document.getElementById('shareModal');
    if (shareModal) {
        shareModal.classList.add('active');
        shareModal.setAttribute('aria-hidden', 'false');
        
        // Focus first share button for accessibility
        const firstButton = shareModal.querySelector('.share-option');
        if (firstButton) {
            firstButton.focus();
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

function closeShareModal() {
    const shareModal = document.getElementById('shareModal');
    if (shareModal) {
        shareModal.classList.remove('active');
        shareModal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to share button
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.focus();
        }
    }
}

// ========================================
// SOCIAL MEDIA SHARING
// ========================================
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    
    openShareWindow(shareUrl, 'Facebook');
    
    // Track share event (if analytics is implemented)
    trackShareEvent('facebook');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("You're invited to celebrate Nemy's 18th Birthday! 🎉");
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    
    openShareWindow(shareUrl, 'Twitter');
    
    // Track share event
    trackShareEvent('twitter');
}

function shareOnWhatsapp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("You're invited to celebrate Nemy's 18th Birthday! Check out this invitation: ");
    const shareUrl = `https://wa.me/?text=${text}${url}`;
    
    // WhatsApp works better as a direct link on mobile
    if (isMobile()) {
        window.location.href = shareUrl;
    } else {
        openShareWindow(shareUrl, 'WhatsApp');
    }
    
    // Track share event
    trackShareEvent('whatsapp');
}

function copyLinkToClipboard() {
    const url = window.location.href;
    
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => {
                showCopyConfirmation();
                trackShareEvent('copy_link');
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                fallbackCopyToClipboard(url);
            });
    } else {
        // Fallback for older browsers
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
        showCopyConfirmation();
        trackShareEvent('copy_link');
    } catch (err) {
        console.error('Fallback copy failed:', err);
        alert('Failed to copy link. Please copy manually: ' + text);
    }
    
    document.body.removeChild(textArea);
}

function showCopyConfirmation() {
    const confirmation = document.getElementById('copyConfirmation');
    if (confirmation) {
        confirmation.classList.add('show');
        
        setTimeout(() => {
            confirmation.classList.remove('show');
        }, 3000);
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================
function openShareWindow(url, name) {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,menubar=0,location=0,status=0`;
    
    window.open(url, `Share on ${name}`, features);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function trackShareEvent(platform) {
    // Placeholder for analytics tracking
    // Integrate with Google Analytics, Facebook Pixel, etc.
    console.log(`Share event: ${platform}`);
    
    // Example Google Analytics tracking (uncomment if GA is implemented)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'share', {
    //         'event_category': 'social',
    //         'event_label': platform
    //     });
    // }
}

function checkSocialMediaReferrer() {
    // Check if visitor came from social media
    const referrer = document.referrer.toLowerCase();
    
    if (referrer.includes('facebook') || referrer.includes('fb')) {
        console.log('Visitor from Facebook');
        // You can track this or show a special message
    } else if (referrer.includes('twitter') || referrer.includes('t.co')) {
        console.log('Visitor from Twitter');
    } else if (referrer.includes('whatsapp')) {
        console.log('Visitor from WhatsApp');
    }
}

// ========================================
// ANIMATION INITIALIZATION
// ========================================
function initializeAnimations() {
    // Observe elements for scroll-triggered animations (if needed for future pages)
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.1
            }
        );
        
        // Observe elements with .animate-on-scroll class (for future use)
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
}

// ========================================
// WEB SHARE API (BONUS FEATURE)
// ========================================
async function shareViaWebShareAPI() {
    // Check if Web Share API is supported
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Giselle's 40th Birthday Celebration",
                text: "You're invited to celebrate Giselle's 40th Birthday on September 12, 2026!",
                url: window.location.href
            });
            
            console.log('Shared successfully');
            trackShareEvent('web_share_api');
        } catch (err) {
            // User cancelled or error occurred
            if (err.name !== 'AbortError') {
                console.error('Share failed:', err);
            }
        }
    } else {
        // Fallback to custom share modal
        handleShareClick();
    }
}

// ========================================
// SERVICE WORKER (FOR PWA - OPTIONAL)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
window.addEventListener('load', () => {
    // Log page load performance
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
    // You can send errors to a logging service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // You can send errors to a logging service here
});
