import { Database, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise through real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 theme-transition">
            <div className="md:flex">
              <div className="md:w-1/3 bg-linear-to-br from-blue-500 to-teal-500 dark:from-blue-600 dark:to-teal-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Database size={64} className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Banking System</h3>
                </div>
              </div>
              <div className="md:w-2/3 p-8 bg-muted/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Online Banking System
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A comprehensive secure online banking platform featuring
                    user registration, login, balance inquiry, fund transfer,
                    and transaction history. Developed RESTful services and
                    secure MySQL database interactions with a clean UI using
                    Thymeleaf.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "Java", "Thymeleaf", "MySQL"].map(
                        (tech) => (
                          <div
                            key={tech}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900"
                          >
                            {tech}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="https://github.com/Nithies-kumar/Online_Banking"
                      rel="noopener noreferrer"
                      className="h-9 px-3 border inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-blue-50 dark:hover:bg-blue-950"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
