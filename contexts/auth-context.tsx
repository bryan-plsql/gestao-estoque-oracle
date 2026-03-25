'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
  adventurerName: string | null
  isLoggedIn: boolean
  login: (name: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [adventurerName, setAdventurerName] = useState<string | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('adventurerName')
    if (saved) {
      setAdventurerName(saved)
      setIsLoggedIn(true)
    }
    setIsHydrated(true)
  }, [])

  const login = (name: string) => {
    setAdventurerName(name)
    setIsLoggedIn(true)
    localStorage.setItem('adventurerName', name)
  }

  const logout = () => {
    setAdventurerName(null)
    setIsLoggedIn(false)
    localStorage.removeItem('adventurerName')
  }

  // Prevent rendering until hydrated
  if (!isHydrated) {
    return <>{children}</>
  }

  return (
    <AuthContext.Provider value={{ adventurerName, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
