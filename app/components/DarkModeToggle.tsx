import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "~/contexts/ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      className="p-3 rounded-full transition-colors duration-200
                hover:bg-gray-100/50 dark:hover:bg-neutral-800/50
                relative group min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5 transition-transform duration-300" aria-hidden="true">
        <HiSun
          className={`w-full h-full absolute inset-0 transition-[opacity,transform] duration-300
                         text-gray-900 dark:text-neutral-400
                         ${theme === "dark" ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
        />
        <HiMoon
          className={`w-full h-full absolute inset-0 transition-[opacity,transform] duration-300
                         text-gray-900 dark:text-apple-blue-400
                        ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
        />
      </div>

      <span
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1
                bg-gray-900 dark:bg-neutral-800 text-white dark:text-neutral-100
                text-xs font-medium rounded-md opacity-0 group-hover:opacity-100
                transition-opacity duration-200 whitespace-nowrap pointer-events-none"
        aria-hidden="true"
      >
        Toggle dark mode
      </span>
    </button>
  );
}
