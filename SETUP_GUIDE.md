# 🚀 Duba Karaoke & Pub - Setup Guide

## Current Status

✅ **Your website is now LIVE and working with placeholder images!**

The website is currently using:
- **Unsplash placeholder images** for hero background, gallery, and food
- **Generated placeholder logos** using via.placeholder.com
- All functionality is working perfectly

## 📸 How to Replace with Your Own Images

### Option 1: **Direct URL Method** (Easiest for Figma Make)

Since Figma Make runs in the browser, the easiest way is to **host your images online** and use direct URLs:

#### Steps:
1. **Upload your images to a free image hosting service:**
   - **ImgBB** (https://imgbb.com/) - Free, no account needed
   - **Imgur** (https://imgur.com/) - Popular, free
   - **Cloudinary** (https://cloudinary.com/) - Professional, free tier
   - Or your own website/server

2. **Get the direct image URLs** (must end in .jpg, .png, etc.)

3. **Update the image URLs in the code:**

#### Hero Section (`/src/app/components/HeroSection.tsx`):
```typescript
// Find these lines (around line 20-22):
const logoUrl = "YOUR_LOGO_URL_HERE";
const heroBackgroundUrl = "YOUR_HERO_BACKGROUND_URL_HERE";
const bbqPromoUrl = "YOUR_BBQ_PROMO_IMAGE_URL_HERE";
```

#### Navigation (`/src/app/components/Navigation.tsx`):
```typescript
// Find this line (around line 15):
const logoUrl = "YOUR_LOGO_URL_HERE";
```

#### Footer (`/src/app/components/Footer.tsx`):
```typescript
// Find this line (around line 6):
const logoUrl = "YOUR_LOGO_URL_HERE";
```

#### Gallery (`/src/app/components/GallerySection.tsx`):
```typescript
// Replace the galleryItems array (around line 8-18):
const galleryItems = [
  { type: 'image', url: 'YOUR_IMAGE_1_URL', title: 'Karaoke Room' },
  { type: 'image', url: 'YOUR_IMAGE_2_URL', title: 'Restaurant Interior' },
  { type: 'image', url: 'YOUR_IMAGE_3_URL', title: 'Korean Fried Chicken' },
  // ... add as many as you want
];
```

---

### Option 2: **Download & Run Locally** (For Full Control)

If you want to use your actual images and run this on your own server:

#### 1. Download the Code
You've already done this! You should have a folder with all the files.

#### 2. Install Node.js
Download from: https://nodejs.org/ (get the LTS version)

#### 3. Add Your Images
Create this folder structure in your downloaded project:

```
your-project-folder/
├── public/
│   ├── logo-icon.png              # Your logo (recommended: 200x200px)
│   ├── hero-background.jpg         # Hero background (recommended: 1920x1080px)
│   ├── bbq-chicken-promo.png      # BB.Q promo image (recommended: 800x400px)
│   └── gallery/
│       ├── image1.jpg
│       ├── image2.jpg
│       ├── image3.jpg
│       └── ... (add all your gallery photos)
```

#### 4. Update the Code to Use Local Images

**In `/src/app/components/HeroSection.tsx`**, change:
```typescript
const logoUrl = "/logo-icon.png";
const heroBackgroundUrl = "/hero-background.jpg";
const bbqPromoUrl = "/bbq-chicken-promo.png";
```

**In `/src/app/components/Navigation.tsx`**, change:
```typescript
const logoUrl = "/logo-icon.png";
```

**In `/src/app/components/Footer.tsx`**, change:
```typescript
const logoUrl = "/logo-icon.png";
```

**In `/src/app/components/GallerySection.tsx`**, change:
```typescript
const galleryItems = [
  { type: 'image', url: '/gallery/image1.jpg', title: 'Karaoke Room' },
  { type: 'image', url: '/gallery/image2.jpg', title: 'Restaurant Interior' },
  // ... etc
];
```

#### 5. Install Dependencies
Open a terminal/command prompt in your project folder and run:
```bash
npm install
```

#### 6. Run the Development Server
```bash
npm run dev
```

Your website will be available at: `http://localhost:5173`

#### 7. Build for Production
When ready to deploy:
```bash
npm run build
```

This creates a `dist` folder with your production-ready website.

---

## 🔧 Elfsight Reviews Widget

The Elfsight widget is already integrated in `/src/app/components/AboutSection.tsx`.

**Current code (lines ~80-83):**
```html
<script src="https://elfsightcdn.com/platform.js" async></script>
<div className="elfsight-app-919f2f96-9bec-42a8-b90d-7b87eefbaba9" data-elfsight-app-lazy></div>
```

### To Update with Your Widget:
1. Log into your Elfsight account
2. Find your Yelp Reviews widget
3. Copy the widget code
4. Replace the `data-elfsight-app-*` ID in the code above

**Example:**
```html
<div className="elfsight-app-YOUR-WIDGET-ID-HERE" data-elfsight-app-lazy></div>
```

---

## 📧 Email Form Setup

The contact form currently shows success/error messages. To make it actually send emails:

### Option 1: EmailJS (Free & Easy)
1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Get your:
   - Service ID
   - Template ID
   - Public Key

4. Update `/src/app/components/ContactSection.tsx` around line 47:
```typescript
// Replace the setTimeout simulation with actual EmailJS code:
const response = await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
);
```

### Option 2: Custom Backend
You can connect to your own email server or use services like:
- SendGrid
- Mailgun
- Postmark
- AWS SES

---

## 🎨 Customization Quick Reference

### Colors
All color values use these classes:
- `text-yellow-400` - Main gold color
- `bg-black` - Black backgrounds
- `border-yellow-500/20` - Semi-transparent borders

To change the color scheme, find and replace these classes throughout the components.

### Contact Information
Update in `/src/app/components/ContactSection.tsx` (around line 16):
```typescript
const contactInfo = {
  phone: '215-635-DUBA (3822)',
  email: 'duba.elkins@gmail.com',
  address: '1333 W. Cheltenham Ave, Fl Basement, Elkins Park, PA 19027',
  hours: {
    'Friday - Saturday': '5:00 PM - 2:00 AM',
    'Sunday - Thursday': '5:00 PM - 1:00 AM',
  },
};
```

### Menu Items
Edit `/src/app/data/menuData.ts` to update all menu items, prices, and descriptions.

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Sign up at https://vercel.com
3. Import your repository
4. Deploy!

### Option 2: Netlify (Free)
1. Sign up at https://www.netlify.com
2. Drag and drop your `dist` folder (after running `npm run build`)

### Option 3: GitHub Pages
1. Update `package.json` with your repo details
2. Run: `npm run deploy`

---

## 🆘 Troubleshooting

### Images Not Showing?
- Check that image URLs are correct and accessible
- Make sure URLs start with `http://` or `https://`
- For local files, ensure they're in the `/public/` folder

### Build Errors?
- Run `npm install` first
- Make sure Node.js is installed (version 16 or higher)
- Delete `node_modules` folder and run `npm install` again

### Widget Not Showing?
- Check your browser console for errors
- Verify the Elfsight widget ID is correct
- Make sure the Elfsight script is loading

---

## 📞 Need Help?

The website is fully functional with placeholder images right now. You can:
1. Use it as-is with Unsplash images
2. Replace images with direct URLs (easiest)
3. Download and run locally with your actual files

Choose the option that works best for your workflow!
