import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 py-6">
        <div className="container mx-auto flex  justify-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Nithies Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
