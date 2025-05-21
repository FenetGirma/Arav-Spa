"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-lg transition-all duration-300 ${
        theme === "light"
          ? "bg-white border-[#8ca889] hover:bg-[#f9f5f0]"
          : "bg-[#2c2c2c] border-[#4a4a4a] hover:bg-[#3c3c3c]"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-[#8ca889]" /> : <Sun className="h-5 w-5 text-[#8ca889]" />}
    </Button>
  )
}
