import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
      aria-label="Toggle Dark Mode"
    >
      {dark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-900" />}
    </button>
  );
};

export default DarkModeToggle;
