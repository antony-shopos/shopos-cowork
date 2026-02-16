#!/bin/bash

echo "🚀 Setting up Cowork Landing Page..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js (v18 or higher) first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo "✅ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete!"
    echo ""
    echo "🎉 Ready to go! Run the following command to start:"
    echo ""
    echo "   npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser"
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi
