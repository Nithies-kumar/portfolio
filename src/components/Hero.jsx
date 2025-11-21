import { ChevronDown, Code } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-linear-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-linear-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Nithies Kumar
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Aspiring Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm a passionate Full-Stack Developer specializing in Java and
                Spring Boot, focused on building scalable, efficient, and
                user-friendly web applications. I enjoy turning complex ideas
                into simple, elegant, and high-performing solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="h-11 rounded-md border bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8  text-lg transition-all duration-200 hover:scale-105"
              >
                View My Work
              </button>
              <button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border rounded-md text-xl border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-8   transition-all duration-200 hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-linear-to-br from-blue-400 to-teal-400 dark:from-blue-600 dark:to-teal-600 rounded-full flex items-center justify-center animate-scale-in">
                <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-background rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                  <img
                    src="https://drive.google.com/file/d/17bLpotACzCSC_-5fz-L7pu917LF1Mgy8/view?usp=sharing"
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
