#!/bin/bash

# Tubelight Navbar - Dependency Installer
# Run this script to install all required dependencies

echo "🚀 Installing Tubelight Navbar dependencies..."
echo ""

# Check if package manager is npm or pnpm
if command -v pnpm &> /dev/null; then
    PKG_MANAGER="pnpm"
elif command -v npm &> /dev/null; then
    PKG_MANAGER="npm"
else
    echo "❌ Error: No package manager found (npm or pnpm required)"
    exit 1
fi

echo "📦 Using package manager: $PKG_MANAGER"
echo ""

# Install main dependencies
echo "Installing framer-motion..."
$PKG_MANAGER install framer-motion

echo "Installing lucide-react..."
$PKG_MANAGER install lucide-react

echo "Installing clsx and tailwind-merge (for cn utility)..."
$PKG_MANAGER install clsx tailwind-merge

echo ""
echo "✅ All dependencies installed successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Ensure you have the cn() utility in your lib/utils.ts"
echo "2. Copy tubelight-navbar.tsx to your components directory"
echo "3. Import and use: import TubelightNavbar from '@/components/tubelight-navbar'"
echo ""
echo "📖 See TUBELIGHT_NAVBAR_README.md for full documentation"
