#!/bin/bash

# CTRC Feature Section - Installation Script
# Run this from your project root

echo "🚀 Installing CTRC Feature Section Component..."
echo ""

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install framer-motion lucide-react clsx tailwind-merge

# Check if installation succeeded
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Error installing dependencies"
    exit 1
fi

echo ""
echo "✨ Installation complete!"
echo ""
echo "Next steps:"
echo "1. Copy feature-section.tsx to your components directory"
echo "2. Import and use: import { FeatureSection } from '@/components/feature-section'"
echo "3. Add to your page: <FeatureSection />"
echo ""
echo "📖 See FEATURE_SECTION_README.md for detailed usage"
echo ""
