import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Purple Finance",
    id: "purple",
    colors: {
      primary: "280 85% 65%",
      secondary: "200 95% 55%",
      accent: "340 85% 65%",
    }
  },
  {
    name: "Ocean Blue",
    id: "ocean",
    colors: {
      primary: "210 100% 60%",
      secondary: "190 95% 55%",
      accent: "230 90% 65%",
    }
  },
  {
    name: "Emerald Green",
    id: "emerald",
    colors: {
      primary: "160 84% 55%",
      secondary: "140 80% 50%",
      accent: "180 75% 60%",
    }
  },
  {
    name: "Golden Sunset",
    id: "sunset",
    colors: {
      primary: "25 95% 60%",
      secondary: "45 100% 55%",
      accent: "10 90% 65%",
    }
  },
  {
    name: "Rose Pink",
    id: "rose",
    colors: {
      primary: "330 85% 65%",
      secondary: "350 90% 60%",
      accent: "310 80% 70%",
    }
  }
];

const ThemeSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("purple");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "purple";
    setCurrentTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = themes.find(t => t.id === themeId);
    if (theme) {
      document.documentElement.style.setProperty('--primary', theme.colors.primary);
      document.documentElement.style.setProperty('--secondary', theme.colors.secondary);
      document.documentElement.style.setProperty('--accent', theme.colors.accent);
    }
  };

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem("portfolio-theme", themeId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-primary/50 flex items-center justify-center text-white transition-all"
      >
        <Palette className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 left-0 bg-card/95 backdrop-blur-md border border-primary/20 rounded-2xl p-4 shadow-2xl min-w-[200px]"
          >
            <p className="text-sm font-semibold text-foreground mb-3">Choose Theme</p>
            <div className="space-y-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.id}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                    currentTheme === theme.id
                      ? "bg-primary/20 border border-primary/50"
                      : "hover:bg-muted border border-transparent"
                  }`}
                >
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: `hsl(${theme.colors.primary})` }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: `hsl(${theme.colors.secondary})` }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ background: `hsl(${theme.colors.accent})` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {theme.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitch;
