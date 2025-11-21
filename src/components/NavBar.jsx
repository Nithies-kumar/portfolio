import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm shadow-sm z-50 theme-transition border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-foreground">
            Nithies Kumar
          </div>
          <div className="flex align-middle justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === item
                      ? "text-blue-600 dark:text-blue-400 font-medium"
                      : "text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
