"use client";

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-16 h-9 rounded-full bg-gray-200 dark:bg-zinc-800 border border-gray-300 dark:border-gray-700" />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-9 rounded-full bg-gray-300/50 dark:bg-zinc-800 p-1 flex items-center transition-colors border border-gray-300 dark:border-gray-700 cursor-pointer shadow-inner"
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-black"
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {isDark ? (
           <Moon className="w-4 h-4 fill-current text-indigo-500" />
        ) : (
           <Sun className="w-4 h-4 fill-current text-orange-500" />
        )}
      </motion.div>
    </button>
  )
}
