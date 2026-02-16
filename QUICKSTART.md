# 🚀 Quick Setup Instructions

## For Complete Beginners

### Step 1: Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher) - Download from https://nodejs.org
- **VS Code** - Download from https://code.visualstudio.com

### Step 2: Open in VS Code

1. Open VS Code
2. Click `File` → `Open Folder`
3. Navigate to the `cowork-landing` folder
4. Click `Select Folder`

### Step 3: Open Terminal

In VS Code, press:
- **Windows/Linux**: `Ctrl + ` (backtick key, usually above Tab)
- **Mac**: `Cmd + ` (backtick)

Or go to: `View` → `Terminal`

### Step 4: Install Dependencies

In the terminal, type this command and press Enter:

```bash
npm install
```

⏳ Wait 2-3 minutes for packages to download.

You'll see a progress bar and eventually:
```
added 365 packages in 2m
```

### Step 5: Start Development Server

In the terminal, type:

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000

✓ Ready in 2.1s
```

### Step 6: View in Browser

Open your web browser and go to:

```
http://localhost:3000
```

🎉 **You should see the Cowork landing page!**

---

## Making Changes

### To Edit Text:

1. In VS Code sidebar, open: `components/Hero.tsx`
2. Find line 11: `AI for your brand,`
3. Change it to: `AI for your awesome brand,`
4. Press `Ctrl+S` (Windows/Linux) or `Cmd+S` (Mac) to save
5. Check your browser - it updates automatically! ✨

### To Stop the Server:

In the terminal, press:
- `Ctrl+C` (Windows/Linux/Mac)

### To Restart:

```bash
npm run dev
```

---

## File Structure Overview

```
cowork-landing/
│
├── app/
│   ├── page.tsx          ← Main page (combines all components)
│   └── globals.css       ← Global styles & fonts
│
├── components/           ← All page sections
│   ├── Header.tsx        ← Top navigation
│   ├── Hero.tsx          ← Main hero section
│   ├── Testimonials.tsx  ← User reviews
│   ├── FAQ.tsx           ← Questions & answers
│   └── ...               ← Other sections
│
└── public/               ← Images & static files
```

---

## Common Commands

| Command | What it does |
|---------|--------------|
| `npm install` | Downloads all packages (run once) |
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm start` | Runs production server |

---

## Troubleshooting

### "npm: command not found"
→ Install Node.js from https://nodejs.org

### "Port 3000 already in use"
→ Stop other servers or use: `npm run dev -- -p 3001`

### Changes not showing in browser
→ Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### TypeScript errors
→ Ignore red squiggles for now, or restart VS Code

---

## Next Steps

1. ✅ Edit component text and see live changes
2. ✅ Try changing colors in Tailwind classes
3. ✅ Read `README.md` for detailed documentation
4. ✅ Check `VSCODE_SETUP.md` for advanced tips

---

## Need Help?

- **Detailed Setup**: Read `VSCODE_SETUP.md`
- **Project Info**: Read `README.md`
- **Next.js Docs**: https://nextjs.org/learn

Happy coding! 🎨
