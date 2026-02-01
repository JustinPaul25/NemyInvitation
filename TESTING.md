# Testing Checklist for Nemy's 18th Birthday Invitation

## ✅ Pre-Launch Checklist

### 📱 **Mobile Testing (Required)**
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test all page transitions
- [ ] Test navigation menu on mobile
- [ ] Test share functionality
- [ ] Check animations and performance
- [ ] Verify text is readable
- [ ] Check button sizes for touch

### 💻 **Desktop Testing**
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Check responsive breakpoints
- [ ] Verify all hover effects work

### 🔗 **Navigation Testing**
- [ ] Menu button opens overlay on all pages
- [ ] Close button works (X button)
- [ ] ESC key closes menu
- [ ] Clicking outside closes menu
- [ ] All menu links work correctly
- [ ] Active page is highlighted in menu
- [ ] Back buttons work on all pages
- [ ] Page transitions are smooth

### 📄 **Page-by-Page Testing**

#### Index (Save The Date)
- [ ] Loads correctly
- [ ] Event details are accurate
- [ ] Enter button navigates to 18 Roses
- [ ] Share button works
- [ ] Stars animation plays
- [ ] Menu button works

#### 18 Roses
- [ ] All 18 names display correctly
- [ ] Rose animations play
- [ ] Back button goes to Index
- [ ] Next button goes to 18 Candles
- [ ] Share button works
- [ ] Menu shows this page as active

#### 18 Candles
- [ ] All 18 names display correctly
- [ ] Candle animations play
- [ ] Back button goes to 18 Roses
- [ ] Next button goes to 18 Shots
- [ ] Share button works
- [ ] Menu shows this page as active

#### 18 Shots
- [ ] All 18 names display correctly
- [ ] Shot glass animations play
- [ ] Back button goes to 18 Candles
- [ ] Next button goes to 18 Treasures
- [ ] Share button works
- [ ] Menu shows this page as active

#### 18 Treasures
- [ ] All 18 names display correctly
- [ ] Treasure chest animations play
- [ ] Back button goes to 18 Shots
- [ ] Next button goes to 18 Blue Bills
- [ ] Share button works
- [ ] Menu shows this page as active

#### 18 Blue Bills
- [ ] All 18 names display correctly (including "Extra Slot")
- [ ] Bill animations play
- [ ] Back button goes to 18 Treasures
- [ ] Next button goes to Closing
- [ ] Share button works
- [ ] Menu shows this page as active

#### Closing (Thank You)
- [ ] Thank you message displays
- [ ] Event details are accurate
- [ ] Call to RSVP button works (phone link)
- [ ] Share button works
- [ ] Back to Home link works
- [ ] Back button goes to 18 Blue Bills
- [ ] Menu shows this page as active

### 📤 **Share Functionality Testing**
- [ ] Web Share API works on mobile
- [ ] Facebook share opens correctly
- [ ] Twitter share works
- [ ] WhatsApp share works
- [ ] Copy link functionality works
- [ ] Notification appears when link copied
- [ ] Share URLs are correct

### 🎨 **Visual Testing**
- [ ] All colors match design
- [ ] Fonts load correctly (Cormorant Garamond & Montserrat)
- [ ] Icons display properly (SVGs)
- [ ] Background animations don't impact performance
- [ ] Spacing and alignment are correct
- [ ] No content overflow issues
- [ ] Images load (if added)

### ♿ **Accessibility Testing**
- [ ] Tab navigation works
- [ ] Focus indicators are visible
- [ ] ARIA labels are present
- [ ] Color contrast is sufficient
- [ ] Screen reader compatible (test with NVDA/VoiceOver)
- [ ] Keyboard-only navigation possible

### ⚡ **Performance Testing**
- [ ] Pages load quickly (< 3 seconds)
- [ ] No JavaScript errors in console
- [ ] No CSS errors
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts on load
- [ ] Works on slow connections

### 📱 **Cross-Device Testing**
- [ ] iPhone SE / 13 Mini (small screen)
- [ ] iPhone 13 / 14 (standard)
- [ ] iPhone 14 Pro Max (large)
- [ ] Android phone (various sizes)
- [ ] iPad / Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1920px+)

### 🔧 **Technical Verification**
- [ ] All HTML files validate
- [ ] All CSS files load
- [ ] All JavaScript files load
- [ ] No 404 errors
- [ ] navigation.js is included on all pages
- [ ] All script files load in correct order

### 📝 **Content Verification**
- [ ] All names spelled correctly
- [ ] Event date is correct: February 6, 2026
- [ ] Event time is correct: 6:00 PM till Midnight
- [ ] Venue is correct: Ezkina Resto Bar, Crossing Sarah Ville/Cabile Tadeco Road, Southern Davao, Panabo City
- [ ] RSVP contact is correct: Nemy - 0917.888.8888
- [ ] All meta descriptions are accurate
- [ ] No placeholder text remaining

### 🌐 **SEO Verification**
- [ ] Title tags are unique on each page
- [ ] Meta descriptions are present
- [ ] Open Graph tags are correct
- [ ] Twitter Card tags are correct
- [ ] URLs in meta tags match actual URLs
- [ ] og:image exists and is correct size (1200x630)
- [ ] Favicon files exist

### 🚀 **Pre-Deployment**
- [ ] Update all URLs in meta tags with production domain
- [ ] Add actual og-image.jpg file
- [ ] Add favicon.png and apple-touch-icon.png
- [ ] Test with actual domain URLs
- [ ] Verify HTTPS works (if applicable)
- [ ] Test social media preview (Facebook Debugger, Twitter Card Validator)

## 🐛 Common Issues to Check

1. **Navigation not working**: Ensure `navigation.js` is loaded before page-specific scripts
2. **Menu doesn't open**: Check console for JavaScript errors
3. **Animations choppy**: Test on actual device, not just browser dev tools
4. **Share not working**: Web Share API only works on HTTPS or localhost
5. **Fonts not loading**: Check Google Fonts link in `<head>`
6. **Back button wrong**: Verify each page's handleBackClick() function

## 📊 Testing Tools

- **Mobile Testing**: Chrome DevTools, Safari Responsive Design Mode
- **Performance**: Lighthouse, WebPageTest
- **Accessibility**: WAVE, axe DevTools
- **SEO**: Google Search Console, Facebook Sharing Debugger
- **Cross-browser**: BrowserStack, LambdaTest
- **Validators**: W3C HTML Validator, CSS Validator

## 🎯 Success Criteria

- [ ] All pages load without errors
- [ ] Navigation works smoothly
- [ ] Content is accurate
- [ ] Mobile experience is excellent
- [ ] Share functionality works
- [ ] Performance is good (Lighthouse score > 90)
- [ ] No accessibility issues
- [ ] Works on target devices

---

**Note**: Test on actual devices when possible, as browser dev tools don't always accurately represent real-world performance and behavior.

**Last Updated**: February 1, 2026
