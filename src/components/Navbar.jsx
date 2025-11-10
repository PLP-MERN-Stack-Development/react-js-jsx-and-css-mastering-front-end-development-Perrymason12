import React from 'react'
import Button from './Button'

const Navbar = ({ onToggleTheme, isDark }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">PLP Task Manager</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={onToggleTheme} size="sm">
            {isDark ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
