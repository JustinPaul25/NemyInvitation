# Fix Messenger/Facebook Link Preview (Image Not Showing)

Messenger and Facebook **cache link previews**. If the image wasn't showing when you first shared, they may have saved that "no image" version. Follow these steps to fix it:

## Step 1: Clear Facebook's Cache (Required)

1. Go to **https://developers.facebook.com/tools/debug/**
2. Paste your link: `https://nemyinvitation.netlify.app/`
3. Click **"Debug"**
4. Click **"Scrape Again"** (you may need to click it 2–3 times)
5. Wait until it says the scrape was successful

After this, new shares in Messenger and Facebook should show the image preview.

## Step 2: Verify the Image Loads

Open this URL in your browser to confirm the image is live:
- **https://nemyinvitation.netlify.app/IMG_9902.JPG**

If you get a 404:
- Make sure `IMG_9902.JPG` is in your project root (same folder as index.html)
- Check the filename: Netlify is case-sensitive (IMG_9902.JPG ≠ img_9902.jpg)
- Redeploy your site to Netlify

## Step 3: Share Again

- In Messenger, share the link again in a new message
- The preview should now include the image

## If It Still Doesn't Show

1. **Filename case** – If the file is `img_9902.jpg` on your computer, rename it to `IMG_9902.JPG` to match the meta tags, or update the meta tags in `index.html` to match the actual filename.
2. **Deploy** – Ensure the latest version with `IMG_9902.JPG` is deployed to Netlify.
3. **Wait** – Sometimes it can take a few minutes after scraping before the new preview appears everywhere.
