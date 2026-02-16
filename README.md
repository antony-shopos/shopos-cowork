# Cowork Landing Page

A pixel-perfect Next.js implementation of the ShopOS Cowork landing page with Space Grotesk for headings and Inter for body text.

## Features

- ✅ Responsive design for all screen sizes
- ✅ Space Grotesk font for headings
- ✅ Inter font for paragraphs and body text
- ✅ Smooth animations and transitions
- ✅ Interactive components (FAQ accordion, mobile menu)
- ✅ Modern, clean design with Tailwind CSS
- ✅ TypeScript support
- ✅ Production-ready code

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Google Fonts** - Space Grotesk & Inter fonts

## Setup Instructions

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended).

### Installation & Running

1. **Navigate to the project directory:**
   ```bash
   cd cowork-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will automatically reload when you make changes to the code.

## VS Code Setup

### Recommended Extensions

For the best development experience, install these VS Code extensions:

1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **TypeScript and JavaScript Language Features** - Built-in, enhanced TS support
4. **Prettier - Code formatter** - Code formatting

### Opening in VS Code

1. **Open the project folder:**
   ```bash
   code cowork-landing
   ```
   
   Or from VS Code: `File > Open Folder` and select the `cowork-landing` directory.

2. **Open the integrated terminal:**
   - Press `Ctrl + `` (backtick) or
   - View > Terminal

3. **Run commands from the integrated terminal:**
   ```bash
   npm install
   npm run dev
   ```

## Project Structure

```
cowork-landing/
├── app/
│   ├── globals.css          # Global styles and font imports
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main page component
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── Shift.tsx             # The Shift section
│   ├── Testimonials.tsx      # User testimonials
│   ├── HowItWorks.tsx        # Feature grid
│   ├── Spaces.tsx            # Spaces/Brand Memory section
│   ├── RiskLevels.tsx        # Risk levels explanation
│   ├── Integrations.tsx      # Platform integrations
│   ├── FAQ.tsx               # FAQ accordion
│   └── Footer.tsx            # Footer section
├── public/                   # Static assets
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Fonts

Fonts are imported in `app/globals.css`:
- **Space Grotesk** - Used for headings (font-display class)
- **Inter** - Used for body text (default font-sans)

### Colors

Main colors are defined in `tailwind.config.js`:
- Primary: Black (#000000)
- Secondary: Gray (#666666)
- Accent: Blue (#0066FF)

### Components

All components are modular and can be easily customized in the `components/` directory.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 ShopOS. Built with AI & Humans, together.
