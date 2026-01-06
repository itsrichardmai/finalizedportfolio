# 🚀 Quick Start Guide

## Your Portfolio is Ready!

Your modernized portfolio website is ready to use. Here's how to get started:

## ⚡ Immediate Actions (5 minutes)

### 1. Update Your Information

Open these files and replace placeholder data with your own:

```
📝 Priority Updates:
├── Hero.tsx          → Your name, bio, social links
├── About.tsx         → Your story and stats
├── Contact.tsx       → Email, phone, location
├── Projects.tsx      → Your real projects
└── Experience.tsx    → Your work history
```

### 2. Quick Customization Checklist

- [ ] Update name in `Hero.tsx` (line 32)
- [ ] Update GitHub link in `Hero.tsx` (line 61)
- [ ] Update LinkedIn link in `Hero.tsx` (line 68)
- [ ] Update email in `Contact.tsx` (line 26)
- [ ] Update about text in `About.tsx` (lines 33-45)
- [ ] Add your projects in `Projects.tsx` (lines 7-67)
- [ ] Add resume PDF to `/public/resume.pdf`

## 🎨 Visual Customization

### Change Theme Colors

Edit `/src/styles/theme.css`:

```css
:root {
  --background: #ffffff;     /* Change these */
  --foreground: #000000;     /* Change these */
}
```

### Swap Fonts

Edit `/src/styles/fonts.css`:

```css
@import url('YOUR_GOOGLE_FONT_URL');
```

## 📸 Replace Project Images

### Option 1: Keep Unsplash (Easiest)
No changes needed! Images load from Unsplash CDN.

### Option 2: Use Your Images
1. Create folder: `/public/projects/`
2. Add images: `project1.jpg`, `project2.jpg`, etc.
3. Update `Projects.tsx`:

```tsx
image: '/projects/project1.jpg'
```

## 🔗 Connect Social Media

Update links in:
- `Hero.tsx` (lines 61-75)
- `Contact.tsx` (lines 113-123)
- `Footer.tsx` (lines 49-57)

Replace:
```tsx
href: '#'  // ← Change this
```

With:
```tsx
href: 'https://linkedin.com/in/yourprofile'
```

## 📧 Setup Contact Form

### Option 1: EmailJS (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your credentials
3. Install: `npm install @emailjs/browser`
4. Update `Contact.tsx`:

```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => toast.success('Message sent!'))
  .catch(() => toast.error('Failed to send'));
};
```

### Option 2: Custom Backend

Create an API endpoint and update `Contact.tsx`:

```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (res.ok) toast.success('Sent!');
  else toast.error('Failed');
};
```

## 🚀 Deploy Your Portfolio

### Vercel (Recommended - 2 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts, and you're live! 🎉

### Netlify (Drag & Drop)

1. Run: `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag the `dist` folder
4. Done! ✨

### GitHub Pages

1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repo settings

## 📱 Test Responsiveness

Open DevTools (F12) and test these sizes:
- 📱 Mobile: 375px width
- 📱 Tablet: 768px width  
- 💻 Desktop: 1920px width

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All personal info updated
- [ ] Social media links work
- [ ] Resume PDF uploaded
- [ ] Project images load correctly
- [ ] Contact form tested
- [ ] Mobile responsive
- [ ] Light/dark theme works
- [ ] All links work (no `#` placeholders)
- [ ] No console errors
- [ ] Fast page load (test on slow 3G)

## 🎯 Common Customizations

### Add a Blog Section

1. Create `Blog.tsx` component
2. Add to `App.tsx`:
```tsx
import Blog from './components/portfolio/Blog';

// In JSX:
<Blog />
```
3. Add nav link in `Navigation.tsx`

### Change Section Order

Reorder components in `App.tsx`:

```tsx
<Hero />
<Projects />  {/* ← Moved projects up */}
<About />
<Skills />
// etc...
```

### Remove a Section

Comment out in `App.tsx`:

```tsx
{/* <Skills /> */}
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Load**: Images below fold
3. **Minify**: Already done in build
4. **CDN**: Vercel/Netlify handle this
5. **Lighthouse**: Aim for 90+ score

## 🐛 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark mode broken
Check `App.tsx` - ensure theme state is properly set

### Icons not showing
Verify Lucide icons are imported correctly

### Animations laggy
Reduce motion in components or disable for mobile

## 📚 Learn More

- **Motion Docs**: https://motion.dev/docs
- **Tailwind v4**: https://tailwindcss.com/docs
- **React Best Practices**: https://react.dev

## 🆘 Need Help?

1. Check `PORTFOLIO_README.md` for detailed docs
2. Review `MODERNIZATION_SUMMARY.md` for changes
3. Open GitHub issue
4. Contact: richard@example.com

## 🎉 You're All Set!

Your portfolio is production-ready. Just:
1. ✏️ Update your content (5 min)
2. 🚀 Deploy (2 min)
3. 📢 Share with the world!

**Pro Tip**: Update your portfolio regularly with new projects to keep it fresh!

---

Built with ❤️ using React + Tailwind CSS + Motion
