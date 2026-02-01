# How to Add a Preview Image to Your Shared Link

When you share https://nemyinvitation.netlify.app/ on Facebook, WhatsApp, Twitter, or other platforms, an image preview will appear **only if** you add an image file to your project.

## Quick Setup (3 Steps)

### Step 1: Create or Choose Your Image

- **Recommended size:** 1200 × 630 pixels (ideal for Facebook, WhatsApp, Twitter)
- **Format:** JPG or PNG
- **File name:** `og-image.jpg` (or `og-image.png`)

**Ideas for your image:**
- Photo of Nemy
- Event poster with date, time, venue
- “Save the Date” graphic with Nemy’s name
- Invitation-style design

### Step 2: Add the Image to Your Project

1. Place `og-image.jpg` in the same folder as your `index.html`:
   ```
   NemyInvitation/
   ├── index.html
   ├── og-image.jpg    ← Add your image here
   ├── 18-roses.html
   └── ...
   ```

2. Re-deploy to Netlify (drag and drop the folder, or push if using Git).

### Step 3: Verify and Clear Cache

- **Facebook/WhatsApp:** Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Enter: `https://nemyinvitation.netlify.app/`
  - Click “Debug” → then “Scrape Again” to refresh the preview

- **Twitter:** Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## Meta Tags (Already Set)

Your `index.html` already includes:

```html
<meta property="og:image" content="https://nemyinvitation.netlify.app/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

No changes needed as long as `og-image.jpg` is in your project root and deployed.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No image shows when sharing | Make sure `og-image.jpg` exists in the project root and is deployed to Netlify |
| Old preview still showing | Platforms cache previews. Use Facebook Debugger “Scrape Again” or wait 24–48 hours |
| Wrong image displayed | Check that the image URL is exactly `https://nemyinvitation.netlify.app/og-image.jpg` |
| Blurry or cropped | Use an image that is 1200×630px or larger in that ratio |

---

## Using PNG Instead of JPG

If you use `og-image.png` instead of `og-image.jpg`:

1. Rename your file to `og-image.png`.
2. In `index.html`, replace both:
   - `og-image.jpg` → `og-image.png`
   - In the `og:image` and `twitter:image` meta tags.
