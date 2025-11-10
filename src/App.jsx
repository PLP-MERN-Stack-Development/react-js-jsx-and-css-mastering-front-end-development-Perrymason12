import React from 'react'
import './index.css'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TaskManager from './components/TaskManager'
import ApiList from './components/ApiList'

function AppInner() {
  const { isDark, toggle } = useTheme()

  return (
    <div className="app-container min-h-screen flex flex-col">
      <Navbar onToggleTheme={toggle} isDark={isDark} />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskManager />
          <ApiList />
        </div>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App