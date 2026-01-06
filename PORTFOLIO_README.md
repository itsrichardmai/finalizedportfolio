# Richard Mai - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS v4, and Motion (Framer Motion).

## ✨ Features

- **Modern Design**: Clean, minimalist design with dark/light theme support
- **Smooth Animations**: Enhanced with Motion (Framer Motion) for fluid transitions and interactions
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Glassmorphism Effects**: Modern UI with blur effects and transparency
- **Interactive Components**: 
  - Sticky navigation with scroll effects
  - Animated hero section
  - Skill progress bars with animations
  - Project cards with hover effects
  - Timeline experience section
  - Contact form with toast notifications
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion) 12.x
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite 6.x
- **Notifications**: Sonner

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                           # Main app component
│   └── components/
│       └── portfolio/
│           ├── Navigation.tsx            # Sticky nav with glassmorphism
│           ├── Hero.tsx                  # Hero section with animations
│           ├── About.tsx                 # About section with stats
│           ├── Skills.tsx                # Skills with progress bars
│           ├── Projects.tsx              # Project cards with Unsplash images
│           ├── Experience.tsx            # Timeline with work history
│           ├── Contact.tsx               # Contact form with validation
│           └── Footer.tsx                # Footer with links
├── styles/
│   ├── fonts.css                         # Font imports (Inter, Space Grotesk)
│   ├── index.css                         # Main CSS entry point
│   ├── tailwind.css                      # Tailwind directives
│   └── theme.css                         # Color theme variables
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

## 🎨 Customization Guide

### Update Personal Information

1. **Hero Section** (`/src/app/components/portfolio/Hero.tsx`):
   - Update name, title, and description
   - Update social media links (GitHub, LinkedIn, Email)
   - Update resume link

2. **About Section** (`/src/app/components/portfolio/About.tsx`):
   - Modify biography text
   - Update stats (projects, technologies, years)

3. **Skills Section** (`/src/app/components/portfolio/Skills.tsx`):
   - Add/remove skills in the `skillsData` array
   - Update skill levels (1-100%)

4. **Projects Section** (`/src/app/components/portfolio/Projects.tsx`):
   - Update projects in the `projectsData` array
   - Replace Unsplash images with your own or keep them
   - Update project descriptions, tech stacks, and links

5. **Experience Section** (`/src/app/components/portfolio/Experience.tsx`):
   - Update work history in the `experienceData` array
   - Modify dates, titles, companies, and achievements

6. **Contact Section** (`/src/app/components/portfolio/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Update social media links
   - Configure form submission endpoint if needed

### Replace Images

The project currently uses Unsplash images for project cards. To use your own images:

1. **Option 1: Use Image Hosting** (Recommended for deployment)
   - Upload images to Imgur, Cloudinary, or AWS S3
   - Replace image URLs in `Projects.tsx`

2. **Option 2: Local Images** (For local development)
   - Place images in `/public/projects/`
   - Update image paths to `/projects/your-image.jpg`

### Color Theme Customization

Edit `/src/styles/theme.css` to modify:
- Background colors
- Text colors
- Border colors
- Accent colors

The theme supports both light and dark modes automatically.

## 📝 Adding New Sections

To add a new section:

1. Create a new component in `/src/app/components/portfolio/`
2. Import and add it to `/src/app/App.tsx`
3. Add a navigation link in `Navigation.tsx`
4. Use the same animation patterns for consistency

Example:
```tsx
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const NewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="new-section" ref={ref} className="min-h-screen">
      {/* Your content */}
    </section>
  );
};
```

## 🔧 Form Integration

The contact form currently shows a success toast. To integrate with a backend:

### Option 1: EmailJS
```tsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
    .then(() => toast.success('Message sent!'))
    .catch(() => toast.error('Failed to send'));
};
```

### Option 2: Custom API
```tsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    toast.success('Message sent!');
  } else {
    toast.error('Failed to send');
  }
};
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📄 Resume

Place your resume PDF in `/public/resume.pdf` or update the link in `Hero.tsx`.

## 🐛 Troubleshooting

**Issue**: Animations not working
- Solution: Ensure Motion is installed: `npm install motion`

**Issue**: Dark mode not switching
- Solution: Check that `toggleTheme` prop is passed correctly in `App.tsx`

**Issue**: Images not loading
- Solution: Verify image URLs are accessible or use local images in `/public/`

## 📧 Contact

For questions or support, reach out via:
- GitHub: [@itsrichardmai](https://github.com/itsrichardmai)
- Email: contact@richardmai.dev

## 📜 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Richard Mai
