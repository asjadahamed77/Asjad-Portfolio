import React, { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { RiMoonClearLine } from "react-icons/ri";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );
  const [resolvedTheme, setResolvedTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll to apply background/blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme
  useEffect(() => {
    const applyTheme = (mode) => {
      setResolvedTheme(mode);
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
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      {/* Navbar */}
      <motion.div
      initial={{ y: 15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.4,
      }}
      
        className={`fixed top-0 left-0 right-0 z-50 flex items-center  justify-between py-4 px-4 sm:px-8 xl:px-32 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 dark:bg-[#0F172A]/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <h1  onClick={() => window.scrollTo(0, 0)}  
  className="bg-clip-text text-transparent bg-gradient-to-b from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 text-2xl font-bold cursor-pointer">
          AA.
        </h1>

        {/* Desktop Nav + Theme Switcher + Resume + Mobile Icon */}
        <div className="text-mainBlueLight dark:text-slate-50 text-sm flex items-center gap-8">
          <div  className="hidden sm:flex items-center space-x-8">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative group inline-block"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute right-0 -bottom-1 h-1 rounded-full w-0 bg-mainBlueLight dark:bg-slate-50 transition-all duration-300 group-hover:w-2/3"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme switcher */}
            <div
              className={`flex items-center  p-1 text-base rounded-full ${
                resolvedTheme === "dark"
                  ? "bg-white/5 border border-white/30 text-white"
                  : "bg-slate-50 border border-slate-100"
              } font-light`}
            >
              <p
                className={`cursor-pointer text-mainBlueLight dark:text-white p-2 ${
                  theme === "system"
                    ? resolvedTheme === "dark"
                      ? "bg-white/20 border border-slate-300 rounded-full"
                      : "bg-slate-200 border border-slate-300 rounded-full"
                    : ""
                }`}
                onClick={resetToSystem}
              >
                <HiOutlineComputerDesktop />
              </p>
              <p
                className={`cursor-pointer text-mainBlueLight dark:text-white p-2 ${
                  theme === "dark"
                    ? "bg-white/20 text-mainBlueLight border border-slate-300 rounded-full"
                    : ""
                }`}
                onClick={setDarkTheme}
              >
                <RiMoonClearLine />
              </p>
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

            {/* Mobile menu icon */}
            <p
              onClick={handleMobileMenu}
              className="sm:hidden text-mainBlueLight dark:text-slate-50 text-2xl cursor-pointer"
            >
              <IoMdMenu />
            </p>
          </div>

          {/* Resume button */}
          <a
            href="/Asjad-Ahamed-Resume.pdf"
            download
            className="hidden sm:block font-medium bg-gradient-to-r from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 dark:text-mainBlueLight text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-90"
          >
            My resume
          </a>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 z-[100] sm:hidden bg-white/40 dark:bg-mainBlueLight/40 dark:text-white backdrop-blur-sm transition-transform duration-300 ease-linear ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <IoClose onClick={handleMobileMenu} className="text-2xl" />
        </div>
        <div className="w-full flex flex-col items-center gap-4 mt-12">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleMobileMenu}
              className="font-semibold text-xl"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a
            href="/Asjad-Ahamed-Resume.pdf"
            download
            className="font-medium bg-gradient-to-r from-mainBlueLight to-secondBlueLight dark:from-slate-50 dark:to-slate-200 dark:text-mainBlueLight text-white px-4 py-2 rounded-full cursor-pointer hover:opacity-90"
          >
            My resume
          </a>
        </div>
      </div>

     
    </motion.div>
  );
};

export default Navbar;
