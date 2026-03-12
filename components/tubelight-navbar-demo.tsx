/**
 * Tubelight Navbar Demo Page
 *
 * Visual showcase of all tubelight navbar variations.
 * Run this in a Next.js page to see live examples.
 */

import TubelightNavbar from './tubelight-navbar'
import {
  Home,
  BookOpen,
  Users,
  Trophy,
  Settings,
  Code,
  Rocket,
  Target
} from 'lucide-react'

export default function TubelightNavbarDemo() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8 space-y-16">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[28px] font-[900] text-white mb-2 tracking-tight">
          Tubelight Navbar Component
        </h1>
        <p className="text-[13px] text-neutral-400">
          Interactive navigation with animated green glow effect
        </p>
      </div>

      {/* Demo Sections */}
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Example 1: Horizontal Nav with Icons */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Horizontal Navigation (with icons)
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Default style for top navigation bars
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
            <TubelightNavbar
              items={[
                { name: 'Home', url: '#', icon: Home },
                { name: 'Courses', url: '#', icon: BookOpen },
                { name: 'Teams', url: '#', icon: Users },
                { name: 'Compete', url: '#', icon: Trophy },
                { name: 'Settings', url: '#', icon: Settings },
              ]}
              defaultActive="Home"
            />
          </div>
        </section>

        {/* Example 2: Text-Only Tabs */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Text-Only Tabs
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Clean minimal style without icons
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
            <TubelightNavbar
              items={[
                { name: 'Overview', url: '#' },
                { name: 'Schedule', url: '#' },
                { name: 'Resources', url: '#' },
                { name: 'Discussion', url: '#' },
                { name: 'Assignments', url: '#' },
              ]}
              defaultActive="Overview"
            />
          </div>
        </section>

        {/* Example 3: Centered Navigation */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Centered Layout
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Perfect for landing pages or content sections
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
            <TubelightNavbar
              items={[
                { name: 'Features', url: '#' },
                { name: 'Pricing', url: '#' },
                { name: 'Docs', url: '#' },
                { name: 'Contact', url: '#' },
              ]}
              defaultActive="Features"
              className="justify-center"
            />
          </div>
        </section>

        {/* Example 4: Compact Icons-Only */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Learning Path Navigation
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Use for course or lesson navigation
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
            <TubelightNavbar
              items={[
                { name: 'Getting Started', url: '#', icon: Rocket },
                { name: 'Core Concepts', url: '#', icon: Code },
                { name: 'Projects', url: '#', icon: Target },
                { name: 'Challenges', url: '#', icon: Trophy },
              ]}
              defaultActive="Core Concepts"
            />
          </div>
        </section>

        {/* Example 5: Full Topbar Layout */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Complete Topbar Integration
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Full header with logo, nav, and user actions
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg overflow-hidden">
            <header className="flex items-center justify-between px-6 py-3 border-b border-neutral-800">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00ff00] flex items-center justify-center">
                  <span className="text-[14px] font-[900] text-black">CT</span>
                </div>
                <span className="text-[18px] font-[800] text-white tracking-tight">
                  CTRC Learning
                </span>
              </div>

              {/* Nav */}
              <TubelightNavbar
                items={[
                  { name: 'Learn', url: '#', icon: BookOpen },
                  { name: 'Build', url: '#', icon: Code },
                  { name: 'Compete', url: '#', icon: Trophy },
                ]}
                defaultActive="Learn"
              />

              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors flex items-center justify-center">
                  <Settings size={16} className="text-neutral-400" />
                </button>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00ff00] to-[#00cc00] flex items-center justify-center border-2 border-neutral-800">
                  <span className="text-[12px] font-[700] text-black">MS</span>
                </div>
              </div>
            </header>

            {/* Fake content below topbar */}
            <div className="p-6">
              <div className="h-40 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center justify-center">
                <p className="text-[11.5px] text-neutral-600 uppercase tracking-wide font-[600]">
                  Page Content Area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example 6: Stacked Vertical */}
        <section>
          <div className="mb-4">
            <h2 className="text-[14px] font-[700] text-white mb-1">
              Vertical Sidebar Style
            </h2>
            <p className="text-[11.5px] text-neutral-500">
              Stack items vertically for sidebar navigation
            </p>
          </div>
          <div className="bg-[#171717] border border-neutral-800 rounded-lg p-4 w-64">
            <TubelightNavbar
              items={[
                { name: 'Dashboard', url: '#', icon: Home },
                { name: 'Courses', url: '#', icon: BookOpen },
                { name: 'Teams', url: '#', icon: Users },
                { name: 'Compete', url: '#', icon: Trophy },
                { name: 'Settings', url: '#', icon: Settings },
              ]}
              defaultActive="Dashboard"
              className="flex-col items-stretch gap-1"
            />
          </div>
        </section>

        {/* Styling Guide */}
        <section className="border-t border-neutral-800 pt-12">
          <h2 className="text-[14px] font-[700] text-white mb-4">
            Glow Effect Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
              <div className="w-full h-[2px] bg-[#00ff00] rounded-full mb-3 relative">
                <div className="absolute w-full h-8 bg-[#00ff00]/30 rounded-full blur-lg -top-4" />
              </div>
              <h3 className="text-[11px] font-[700] text-white uppercase tracking-wide mb-1">
                Active State
              </h3>
              <p className="text-[11.5px] text-neutral-400">
                Multi-layer blur creates tubelight glow effect
              </p>
            </div>

            <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
              <div className="w-full h-[2px] bg-[#00ff00]/40 rounded-full mb-3 relative">
                <div className="absolute w-full h-4 bg-[#00ff00]/20 rounded-full blur-sm -top-2" />
              </div>
              <h3 className="text-[11px] font-[700] text-white uppercase tracking-wide mb-1">
                Hover State
              </h3>
              <p className="text-[11.5px] text-neutral-400">
                Subtle preview glow on hover
              </p>
            </div>

            <div className="bg-[#171717] border border-neutral-800 rounded-lg p-6">
              <div className="w-full h-[2px] bg-neutral-700 rounded-full mb-3" />
              <h3 className="text-[11px] font-[700] text-white uppercase tracking-wide mb-1">
                Default State
              </h3>
              <p className="text-[11.5px] text-neutral-400">
                Neutral color until interaction
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto border-t border-neutral-800 pt-8">
        <p className="text-[11.5px] text-neutral-500 text-center">
          Component adapted from{' '}
          <a
            href="https://21st.dev/community/components/ayushmxxn/tubelight-navbar/default"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff00] hover:underline"
          >
            21st.dev/ayushmxxn
          </a>
          {' '}for CTRC Learning design system
        </p>
      </div>
    </div>
  )
}
