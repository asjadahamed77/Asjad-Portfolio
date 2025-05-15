import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import { HiOutlineComputerDesktop } from "react-icons/hi2";


const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );
  const [resolvedTheme, setResolvedTheme] = useState("light"); // actual applied theme

  useEffect(() => {
    const applyTheme = (mode) => {
      setResolvedTheme(mode); // Track what is actually applied
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const systemThemeHandler = (e) => {
      if (!localStorage.getItem("theme")) {
        const mode = e.matches ? "dark" : "light";
        applyTheme(mode);
      }
    };

    if (theme === "dark" || theme === "light") {
      applyTheme(theme);
    } else {
      const systemPref = mediaQuery.matches ? "dark" : "light";
      applyTheme(systemPref);
    }

    mediaQuery.addEventListener("change", systemThemeHandler);
    return () => mediaQuery.removeEventListener("change", systemThemeHandler);
  }, [theme]);

  const setDarkTheme = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  };

  const setLightTheme = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  };

  const resetToSystem = () => {
    setTheme("system");
    localStorage.removeItem("theme");
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
    setResolvedTheme(isDark ? "dark" : "light");
  };

  return (
    <div className=" px-4 sm:px-12 lg:px-32">
      <div className="flex items-center justify-between py-4 sticky top-0 left-0 right-0">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-2xl font-bold cursor-pointer">
          AA.
        </h1>
        <div className="text-mainBlueLight dark:text-slate-50 text-sm flex items-center space-x-8">
          <a href="#home" className="relative group inline-block"  >
            Home
            <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
          </a>
          <a href="#about" className="relative group inline-block"  >
          About
            <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight  dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
          </a>
          <a href="#projects" className="relative group inline-block"  >
          Projects
            <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
          </a>
          <a href="#skills" className="relative group inline-block"  >
          Skills
            <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
          </a>
          <a href="#contact" className="relative group inline-block"  >
          Contact
            <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
          </a>
          
          <div
            className={`flex items-center  text-lg  rounded-full ${
              resolvedTheme === "dark"
                ? "bg-white/5 border border-white/30 text-white"
                : "bg-slate-50 border border-slate-100"
            }  font-light`}
          >
            {/* System */}
            <p
              className={`cursor-pointer text-mainBlueLight dark:text-white  p-2 ${
                theme === "system"
                  ? resolvedTheme === "dark"
                    ? "bg-white/20 border border-slate-300 rounded-full"
                    : "bg-slate-200  border border-slate-300 rounded-full"
                  : ""
              }`}
              onClick={resetToSystem}
            >
              <HiOutlineComputerDesktop />
            </p>
            {/* Dark */}
            <p
              className={`cursor-pointer text-mainBlueLight dark:text-white  p-2 ${
                theme === "dark"
                  ? "bg-white/20 text-mainBlueLight border border-slate-300 rounded-full"
                  : ""
              }`}
              onClick={setDarkTheme}
            >
              <RiMoonClearLine />
            </p>
            {/* Light */}
            <p
              className={`cursor-pointer text-mainBlueLight dark:text-white p-2 ${
                theme === "light"
                  ? "bg-slate-200 border border-slate-300 rounded-full"
                  : ""
              }`}
              onClick={setLightTheme}
            >
              <IoSunnyOutline />
            </p>
          </div>
          <a href="/public/Asjad-Ahamed-Resume.pdf" download className="font-medium bg-gradient-to-r  from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 dark:text-mainBlueLight text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-90">My resume</a>
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
