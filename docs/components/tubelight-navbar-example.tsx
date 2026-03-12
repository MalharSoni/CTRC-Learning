/**
 * Tubelight Navbar - Usage Example
 *
 * This example shows how to integrate the tubelight navbar
 * into your CTRC Learning navigation.
 */

import TubelightNavbar from './tubelight-navbar'
import { Home, BookOpen, Users, Trophy, Settings } from 'lucide-react'

// Example 1: Top Navigation Bar
export function TopNavExample() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Courses', url: '/courses', icon: BookOpen },
    { name: 'Teams', url: '/teams', icon: Users },
    { name: 'Competitions', url: '/competitions', icon: Trophy },
    { name: 'Settings', url: '/settings', icon: Settings },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#171717] border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <TubelightNavbar items={navItems} defaultActive="Home" />
      </div>
    </nav>
  )
}

// Example 2: Text-only tabs (no icons)
export function SimpleTabsExample() {
  const tabs = [
    { name: 'Overview', url: '#overview' },
    { name: 'Schedule', url: '#schedule' },
    { name: 'Resources', url: '#resources' },
    { name: 'Discussion', url: '#discussion' },
  ]

  return (
    <div className="bg-neutral-900 rounded-lg p-4">
      <TubelightNavbar items={tabs} className="justify-center" />
    </div>
  )
}

// Example 3: Sidebar-style vertical navigation
export function VerticalNavExample() {
  const navItems = [
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Learning Path', url: '/learning' },
    { name: 'Projects', url: '/projects' },
    { name: 'Community', url: '/community' },
  ]

  return (
    <aside className="w-64 bg-[#171717] border-r border-neutral-800 h-screen p-6">
      <TubelightNavbar
        items={navItems}
        className="flex-col items-stretch gap-2"
        defaultActive="Dashboard"
      />
    </aside>
  )
}

// Example 4: Integration with existing CTRC layout
export function CTRCTopbarWithTubelight() {
  const mainNavItems = [
    { name: 'Learn', url: '/learn', icon: BookOpen },
    { name: 'Build', url: '/build', icon: Trophy },
    { name: 'Compete', url: '/compete', icon: Trophy },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#171717] border-b border-neutral-800">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="CTRC" className="w-8 h-8" />
          <span className="text-[22px] font-[800] text-white">CTRC Learning</span>
        </div>

        {/* Tubelight Nav */}
        <TubelightNavbar items={mainNavItems} />

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors">
            <Settings size={16} className="mx-auto text-neutral-400" />
          </button>
          <div className="w-9 h-9 rounded-full bg-[#00ff00] flex items-center justify-center">
            <span className="text-[12px] font-[700] text-black">MS</span>
          </div>
        </div>
      </div>
    </header>
  )
}
