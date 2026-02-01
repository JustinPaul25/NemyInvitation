# Nemy's 18th Birthday Celebration - Online Invitation

A beautiful, mobile-first online invitation for Nemy's debut celebration featuring Filipino debut traditions.

## 🎉 Features

- **Mobile-First Responsive Design** - Optimized for all devices
- **SEO Optimized** - Complete meta tags for search engines
- **Social Media Ready** - Share buttons and Open Graph tags
- **Smooth Animations** - Beautiful page transitions and effects
- **Accessible** - Keyboard navigation and ARIA labels
- **Working Navigation** - Full menu system to navigate between pages

## 📱 Pages

### 1. **Save The Date** (`index.html`)
- Initial landing page with event details
- Date: February 6, 2026
- Time: 6:00 PM till Midnight
- Venue: Ezkina Resto Bar, Crossing Sarah Ville/Cabile Tadeco Road, Southern Davao, Panabo City
- RSVP: Nemy at 0917.888.8888

### 2. **18 Roses** (`18-roses.html`)
- Traditional debut dance with 18 special men
- Rose-themed design with pink/gold colors
- Animated floating roses

### 3. **18 Candles** (`18-candles.html`)
- 18 wishes from special women
- Candle-themed design with cream/gold colors
- Animated floating candles

### 4. **18 Shots** (`18-shots.html`)
- Celebration tradition with 18 participants
- Turquoise/cyan themed design
- Animated shot glasses and bubbles

### 5. **18 Treasures** (`18-treasures.html`)
- 18 gifts of wisdom from special women
- Purple/gold themed design
- Animated treasure chests and sparkles

### 6. **18 Blue Bills** (`18-blue-bills.html`)
- Traditional monetary blessings
- Blue/gold themed design
- Animated floating bills and coins

### 7. **Thank You / Closing** (`closing.html`)
- Final page with gratitude message
- Event details summary
- RSVP and contact information
- Call-to-action buttons

## 🗂️ File Structure

```
NemyInvitation/
├── index.html              # Main landing page
├── 18-roses.html          # 18 Roses page
├── 18-candles.html        # 18 Candles page
├── 18-shots.html          # 18 Shots page
├── 18-treasures.html      # 18 Treasures page
├── 18-blue-bills.html     # 18 Blue Bills page
├── closing.html           # Thank you/closing page
├── styles.css             # Styles for index page
├── styles-roses.css       # Styles for 18 Roses
├── styles-candles.css     # Styles for 18 Candles
├── styles-shots.css       # Styles for 18 Shots
├── styles-treasures.css   # Styles for 18 Treasures
├── styles-blue-bills.css  # Styles for 18 Blue Bills
├── styles-closing.css     # Styles for closing page
├── script.js              # JavaScript for index page
├── script-roses.js        # JavaScript for 18 Roses
├── script-candles.js      # JavaScript for 18 Candles
├── script-shots.js        # JavaScript for 18 Shots
├── script-treasures.js    # JavaScript for 18 Treasures
├── script-blue-bills.js   # JavaScript for 18 Blue Bills
├── script-closing.js      # JavaScript for closing page
├── navigation.js          # Shared navigation module
└── README.md              # This file
```

## 🎨 Design Features

### Color Themes
- **Index**: Gold on dark background with stars
- **18 Roses**: Rose-gold and pink
- **18 Candles**: Cream, gold, and flame colors
- **18 Shots**: Cyan and turquoise
- **18 Treasures**: Purple and gold
- **18 Blue Bills**: Blue and gold (money theme)
- **Closing**: Gold on dark with hearts

### Animations
- Smooth page transitions (fade in/out)
- Staggered list item animations
- Floating background elements
- Hover effects on interactive elements
- Glowing icons and headings

### Responsive Breakpoints
- Mobile: Default (< 768px)
- Tablet: 768px and above
- Desktop: 1024px and above

## 🚀 Navigation System

### Menu Button
- Located in the top-right corner of every page
- Opens a full-screen overlay menu
- Shows all 7 pages with icons
- Highlights the current page

### Navigation Features
- **Back Button**: Returns to previous page
- **Menu Button**: Opens navigation overlay
- **Smooth Transitions**: Fade effects between pages
- **Keyboard Support**: ESC key closes menu
- **Click Outside**: Closes menu when clicking overlay
- **Active State**: Current page highlighted in menu

### Navigation Flow
```
index.html (Save The Date)
    ↓
18-roses.html (18 Roses)
    ↓
18-candles.html (18 Candles)
    ↓
18-shots.html (18 Shots)
    ↓
18-treasures.html (18 Treasures)
    ↓
18-blue-bills.html (18 Blue Bills)
    ↓
closing.html (Thank You)
    ↓
Back to index.html
```

## 📤 Sharing Features

### Web Share API
- Native mobile sharing when available
- Falls back to custom options

### Social Media Platforms
- **Facebook**: Direct share button
- **Twitter**: Tweet with invitation link
- **WhatsApp**: Share via WhatsApp
- **Copy Link**: Clipboard copy functionality

### Share Content
- Title: "Nemy's 18th Birthday Celebration"
- Description: Invitation details
- URL: Current page or home page

## ♿ Accessibility

- **Semantic HTML**: Proper HTML5 elements
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Tab and Enter support
- **Focus Indicators**: Visible focus states
- **Reduced Motion**: Respects user preferences
- **High Contrast**: Support for high contrast mode

## 🔧 Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Cormorant Garamond & Montserrat
- **SVG**: Icons and decorative elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

1. Upload all files to a web server
2. Ensure all files are in the same directory
3. Update meta tags with actual domain URLs
4. Update phone numbers and event details if needed
5. Test on multiple devices

### Recommended Updates Before Deployment

1. **Meta Tags**: Update `og:url`, `og:image`, `twitter:url`, `twitter:image` with actual URLs
2. **Favicon**: Add `favicon.png` and `apple-touch-icon.png` files
3. **OG Image**: Create and add `og-image.jpg` (1200x630px) for social sharing
4. **Analytics**: Add Google Analytics or similar tracking code (commented sections in scripts)
5. **Contact Info**: Verify RSVP phone number and contact details
6. **Event Details**: Double-check date, time, and venue information

## 📝 Customization

### Change Event Details
Edit the following files:
- `index.html`: Main event details
- All HTML files: Meta tags
- All JavaScript files: Share text

### Change Colors
Edit CSS custom properties in `:root` section of each stylesheet:
```css
:root {
    --color-gold: #d4af37;
    --color-dark: #0a0a0a;
    /* ... more colors */
}
```

### Add/Remove Participants
Edit the HTML list items in each ceremony page:
- `18-roses.html`: Lines with `<article class="rose-item">`
- `18-candles.html`: Lines with `<article class="candle-item">`
- etc.

## 📞 Contact Information

**Celebrant**: Nemy  
**RSVP Contact**: Nemy  
**Phone**: 0917.888.8888

## 🎊 Filipino Debut Traditions

This invitation celebrates traditional Filipino debut customs:

1. **18 Roses**: Dance with 18 important men in the debutante's life
2. **18 Candles**: 18 women share wishes and light candles
3. **18 Shots**: Modern tradition of celebrating with drinks
4. **18 Treasures**: 18 women give symbolic gifts of wisdom
5. **18 Blue Bills**: Monetary gifts and blessings for prosperity

## 📄 License

This is a custom-built invitation website. All rights reserved.

---

**Built with ❤️ for Nemy's Special Day**

*Last Updated: February 1, 2026*
