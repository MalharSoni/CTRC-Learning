#!/bin/bash

# CTRC Learning - Install Phosphor Icons
# This script installs the @phosphor-icons/react package for the icon system

echo "🎨 Installing Phosphor Icons for CTRC Learning..."
echo ""

# Check if we're in the right directory
if [ ! -f "mkdocs.yml" ]; then
  echo "❌ Error: mkdocs.yml not found. Please run this script from the CTRC-Learning root directory."
  exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo "❌ Error: npm is not installed. Please install Node.js and npm first."
  exit 1
fi

# Initialize package.json if it doesn't exist
if [ ! -f "package.json" ]; then
  echo "📦 Creating package.json..."
  cat > package.json <<EOF
{
  "name": "ctrc-learning",
  "version": "1.0.0",
  "description": "VEX V5 Robotics learning platform by Caution Tape Robotics Club",
  "private": true,
  "scripts": {
    "dev": "mkdocs serve",
    "build": "mkdocs build"
  },
  "dependencies": {},
  "devDependencies": {}
}
EOF
fi

# Install Phosphor Icons
echo "⬇️  Installing @phosphor-icons/react..."
npm install @phosphor-icons/react

# Check if installation was successful
if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Phosphor Icons installed successfully!"
  echo ""
  echo "📚 Next steps:"
  echo "   1. Import icons from '@phosphor-icons/react'"
  echo "   2. See docs/components/ICON_SYSTEM.md for usage guide"
  echo "   3. Use the Icon component from docs/components/icons.tsx"
  echo ""
  echo "Example usage:"
  echo "   import { BookOpen, Trophy, Gear } from '@phosphor-icons/react'"
  echo "   <BookOpen size={24} weight=\"regular\" color=\"#00ff00\" />"
  echo ""
else
  echo ""
  echo "❌ Installation failed. Please check the error messages above."
  exit 1
fi
