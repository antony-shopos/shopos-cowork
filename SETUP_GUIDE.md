# 📦 Cowork Landing Page - Complete Setup Guide

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [VS Code Setup](#vs-code-setup)
3. [Running the Project](#running-the-project)
4. [Project Structure](#project-structure)
5. [Customization Guide](#customization-guide)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software

1. **Node.js (v18+)**
   - Download: https://nodejs.org
   - Verify installation: `node --version`

2. **VS Code**
   - Download: https://code.visualstudio.com
   - Or use any text editor

3. **Git** (optional, for version control)
   - Download: https://git-scm.com

---

## VS Code Setup

### Opening the Project

**Method 1: Via VS Code**
1. Open VS Code
2. `File` → `Open Folder`
3. Select the `cowork-landing` folder
4. Click `Select Folder`

**Method 2: Via Terminal**
```bash
cd cowork-landing
code .
```

### Installing Recommended Extensions

VS Code will prompt you to install recommended extensions. Click **Install All**.

Or manually install:
1. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac)
2. Search and install:
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**

---

## Running the Project

### 1. Open Terminal in VS Code

Press `` Ctrl+` `` (backtick) or `View` → `Terminal`

### 2. Install Dependencies

```bash
npm install
```

**Expected output:**
```
added 365 packages, and audited 366 packages in 2m
```

### 3. Start Development Server

```bash
npm run dev
```

**Expected output:**
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000

✓ Ready in 2.1s
```

### 4. View in Browser

Open: **http://localhost:3000**

### 5. Make Changes

- Edit any `.tsx` file in `components/` folder
- Save the file (`Ctrl+S` or `Cmd+S`)
- Browser auto-refreshes with changes ✨

---

## Project Structure

```
cowork-landing/
│
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles + font imports
│   ├── layout.tsx           # Root layout wrapper
│   └── page.tsx             # Main landing page
│
├── components/              # React Components
│   ├── Header.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with chat UI
│   ├── Shift.tsx           # "The Shift" section
│   ├── Testimonials.tsx    # 9 testimonial cards
│   ├── HowCoworkRuns.tsx   # Features (black section)
│   ├── HowItWorks.tsx      # Step-by-step workflow
│   ├── Spaces.tsx          # Brand Memory section
│   ├── RiskLevels.tsx      # Risk level indicators
│   ├── Integrations.tsx    # Platform logos
│   ├── FAQ.tsx             # Accordion FAQs
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer links
│
├── public/                  # Static assets (images, etc.)
│
├── .vscode/                 # VS Code settings
│   ├── settings.json       # Editor configuration
│   └── extensions.json     # Recommended extensions
│
├── node_modules/           # Dependencies (auto-generated)
├── .next/                  # Build output (auto-generated)
│
├── package.json            # Project dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
├── postcss.config.js       # PostCSS config
├── .prettierrc            # Prettier config
├── .gitignore             # Git ignore rules
│
└── Documentation
    ├── README.md          # Full documentation
    ├── QUICKSTART.md      # Quick setup guide
    └── VSCODE_SETUP.md    # Detailed VS Code guide
```

---

## Customization Guide

### Editing Text Content

**Example: Change Hero Title**

1. Open `components/Hero.tsx`
2. Find line 11-12:
   ```tsx
   AI for your brand,<br />that actually does things
   ```
3. Change to:
   ```tsx
   AI for your business,<br />that works 24/7
   ```
4. Save (`Ctrl+S`)

### Updating Colors

**Method 1: Tailwind Config**

Edit `tailwind.config.js`:
```js
colors: {
  'cowork-blue': '#0066FF',    // Change this hex code
  'cowork-dark': '#0A0A0A',
}
```

**Method 2: Inline Classes**

In any component, change:
```tsx
className="bg-black"  // to
className="bg-blue-600"
```

### Adding New Sections

1. Create `components/NewSection.tsx`:
   ```tsx
   export default function NewSection() {
     return (
       <section className="py-20 px-6">
         <h2>New Section</h2>
       </section>
     )
   }
   ```

2. Add to `app/page.tsx`:
   ```tsx
   import NewSection from '@/components/NewSection'
   
   export default function Home() {
     return (
       <main>
         {/* ...existing components... */}
         <NewSection />
       </main>
     )
   }
   ```

### Modifying Testimonials

Edit `components/Testimonials.tsx`:
```tsx
const testimonials = [
  {
    name: "Your Name",
    quote: "Your testimonial here."
  },
  // Add more...
]
```

### Updating FAQ

Edit `components/FAQ.tsx`:
```tsx
const faqs = [
  {
    question: "Your question?",
    answer: "Your answer."
  },
  // Add more...
]
```

---

## Typography System

### Fonts Used

- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)

### Usage

```tsx
// Headings (automatically Space Grotesk)
<h1 className="font-space">Title</h1>

// Body text (automatically Inter)
<p className="font-inter">Paragraph</p>
```

### Font Weights

```tsx
className="font-light"    // 300
className="font-normal"   // 400
className="font-medium"   // 500
className="font-semibold" // 600
className="font-bold"     // 700
```

---

## Styling with Tailwind

### Common Classes

```tsx
// Spacing
className="p-6"      // Padding all sides
className="px-6"     // Padding horizontal
className="py-6"     // Padding vertical
className="m-4"      // Margin
className="mb-4"     // Margin bottom

// Typography
className="text-4xl"    // Font size
className="font-bold"   // Font weight
className="text-gray-600" // Text color

// Layout
className="flex"           // Flexbox
className="grid"           // Grid
className="grid-cols-3"    // 3 columns

// Background
className="bg-black"      // Background color
className="bg-gray-50"    // Light gray

// Borders & Radius
className="border-2"      // Border width
className="rounded-xl"    // Border radius
```

### Responsive Design

```tsx
// Mobile first approach
className="text-2xl md:text-4xl lg:text-6xl"

// Breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

### Build for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start
```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy folder**
   - Upload `.next` folder to Netlify
   - Or connect GitHub repository

---

## Troubleshooting

### Issue: `npm: command not found`

**Solution:** Install Node.js from https://nodejs.org

Verify: `node --version` should show v18+

---

### Issue: Port 3000 already in use

**Solution 1:** Kill the process
```bash
# Windows
taskkill /F /IM node.exe

# Mac/Linux
killall node
```

**Solution 2:** Use different port
```bash
npm run dev -- -p 3001
```

---

### Issue: Changes not showing in browser

**Solutions:**
1. Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
2. Clear browser cache
3. Restart dev server (`Ctrl+C`, then `npm run dev`)

---

### Issue: `Module not found` errors

**Solution:** Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Issue: TypeScript errors in VS Code

**Solution 1:** Restart TS Server
1. Press `Ctrl+Shift+P`
2. Type: "TypeScript: Restart TS Server"
3. Press Enter

**Solution 2:** Rebuild
```bash
rm -rf .next
npm run dev
```

---

### Issue: Styling not working

**Check:**
1. Is Tailwind installed? `npm list tailwindcss`
2. Is `globals.css` imported in `layout.tsx`?
3. Clear `.next` folder: `rm -rf .next`

---

## Development Workflow

### Recommended Process

1. **Start server:** `npm run dev`
2. **Edit components** in `components/` folder
3. **Save files** (`Ctrl+S`)
4. **View changes** in browser (auto-refreshes)
5. **Stop server:** `Ctrl+C` when done

### Before Deployment

```bash
# 1. Test production build
npm run build
npm start

# 2. Check for errors
npm run lint

# 3. Commit changes
git add .
git commit -m "Description"
git push

# 4. Deploy (auto-deploys if connected to Vercel/Netlify)
```

---

## Performance Tips

1. **Optimize images**
   - Use Next.js Image component
   - Compress before uploading

2. **Code splitting**
   - Next.js does this automatically
   - Use dynamic imports for heavy components

3. **Font optimization**
   - Already configured via Google Fonts
   - Uses `display=swap` for better performance

---

## Additional Resources

### Documentation
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Learning
- **Next.js Tutorial**: https://nextjs.org/learn
- **Tailwind Play**: https://play.tailwindcss.com
- **React Tutorial**: https://react.dev/learn

### Community
- **Stack Overflow**: Tag your questions with `next.js`, `react`, `tailwindcss`
- **GitHub Issues**: Report bugs or request features

---

## Summary

### Quick Commands Reference

```bash
# Setup (run once)
npm install

# Development
npm run dev          # Start dev server
Ctrl+C               # Stop server

# Production
npm run build        # Build for production
npm start            # Run production server

# Maintenance
npm run lint         # Check for errors
rm -rf .next         # Clear build cache
```

### File Editing Shortcuts

```
Ctrl+P         → Quick file open
Ctrl+S         → Save
Ctrl+Shift+P   → Command palette
Ctrl+`         → Toggle terminal
Ctrl+B         → Toggle sidebar
```

---

**Need Help?** Check other guides:
- `QUICKSTART.md` - Beginner-friendly setup
- `VSCODE_SETUP.md` - Detailed VS Code tips
- `README.md` - Full project documentation

**Happy coding! 🚀**
