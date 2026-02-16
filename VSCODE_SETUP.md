# VS Code Setup Guide

This guide will help you set up and run the Cowork Landing Page project in Visual Studio Code.

## Step 1: Install VS Code

If you don't have VS Code installed:
1. Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install it on your system
3. Open VS Code

## Step 2: Install Node.js

The project requires Node.js (v18 or higher):
1. Download from [https://nodejs.org/](https://nodejs.org/)
2. Install the LTS version
3. Verify installation by opening terminal and typing:
   ```bash
   node --version
   npm --version
   ```

## Step 3: Open Project in VS Code

### Option A: Using Terminal
```bash
cd path/to/cowork-landing
code .
```

### Option B: Using VS Code
1. Open VS Code
2. Click `File > Open Folder`
3. Navigate to and select the `cowork-landing` folder
4. Click `Open`

## Step 4: Install Dependencies

Open the integrated terminal in VS Code:
- Press `Ctrl + `` (backtick) on Windows/Linux
- Press `Cmd + `` (backtick) on Mac
- Or go to `View > Terminal`

In the terminal, run:
```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

## Step 5: Run the Development Server

In the terminal, run:
```bash
npm run dev
```

You should see output like:
```
> cowork-landing@0.1.0 dev
> next dev

  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

## Step 6: View in Browser

1. Open your web browser
2. Navigate to [http://localhost:3000](http://localhost:3000)
3. You should see the Cowork landing page!

## Recommended VS Code Extensions

Install these extensions for better development experience:

### Essential Extensions:

1. **ES7+ React/Redux/React-Native snippets**
   - Publisher: dsznajder
   - Provides React code snippets

2. **Tailwind CSS IntelliSense**
   - Publisher: Bradlc
   - Autocomplete for Tailwind classes

3. **Prettier - Code formatter**
   - Publisher: Prettier
   - Auto-format code on save

4. **TypeScript + JavaScript IntelliSense**
   - Built-in, should be enabled by default

### How to Install Extensions:

1. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for the extension name
3. Click `Install`

## VS Code Settings (Optional)

Create a `.vscode/settings.json` file in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Project Structure Overview

```
cowork-landing/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Testimonials.tsx
│   └── ... (more components)
├── public/               # Static files
└── package.json          # Project dependencies
```

## Editing the Project

### To modify the home page:
- Open `app/page.tsx`
- This file imports all the sections

### To modify a specific section:
- Navigate to `components/` folder
- Open the relevant component (e.g., `Hero.tsx` for the hero section)
- Make your changes
- Save the file
- The browser will automatically reload with your changes

### To modify styles:
- Global styles: `app/globals.css`
- Component styles: Use Tailwind classes in the components
- Tailwind config: `tailwind.config.js`

## Common Tasks

### Stop the development server:
- Press `Ctrl + C` in the terminal

### Restart the development server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

### Run production build locally:
```bash
npm run build
npm run start
```

## Troubleshooting

### Port 3000 already in use:
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

### Module not found errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Cache issues:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## Keyboard Shortcuts

### VS Code:
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + P` - Command palette
- `Ctrl + B` - Toggle sidebar
- `Ctrl + `` - Toggle terminal
- `Ctrl + /` - Toggle comment
- `Alt + Up/Down` - Move line up/down

### In Browser:
- `Ctrl + Shift + R` - Hard reload (clear cache)

## Getting Help

- Next.js Docs: [https://nextjs.org/docs](https://nextjs.org/docs)
- React Docs: [https://react.dev](https://react.dev)
- Tailwind CSS Docs: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- TypeScript Docs: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)

## Next Steps

1. ✅ Project is running
2. 📝 Start editing components
3. 🎨 Customize colors and styles
4. 🚀 Deploy to Vercel when ready

Happy coding! 🎉
