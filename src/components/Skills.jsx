import { Code, Database, Globe } from "lucide-react";
import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "JDBC",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Oracle SQL",
    "Thymeleaf",
    "REST APIs",
    "Git & GitHub",
    "Postman",
    "MVC Architecture",
    "RESTful API Integration",
  ];
  return (
    <section id="skills" className="py-20 bg-muted/30 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-all duration-200 hover:scale-105 theme-transition">
            <div className="p-8 pt-0">
              <Code
                size={48}
                className="text-blue-600 dark:text-blue-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Languages & Frameworks
              </h3>
              <p className="text-muted-foreground">
                Java, JDBC, Spring Boot, Hibernate, JavaScript, HTML, CSS
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-all duration-200 hover:scale-105 theme-transition">
            <div className="p-8">
              <Database
                size={48}
                className="text-teal-600 dark:text-teal-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Tools & Technologies
              </h3>
              <p className="text-muted-foreground">
                Git & GitHub, Postman, MySQL, Oracle SQL, Thymeleaf, REST APIs
              </p>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-center hover:shadow-lg transition-all duration-200 hover:scale-105 theme-transition">
            <div className="p-8 pt-0">
              <Globe
                size={48}
                className="text-green-600 dark:text-green-400 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Development Expertise
              </h3>
              <p className="text-muted-foreground">
                Full-Stack Web Development, MVC Architecture, RESTful API
                Integration
              </p>
            </div>
          </div>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              variant="secondary"
              className=" bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-full font-semibold  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 px-6 py-3 text-lg hover:scale-105 transition-transform duration-200 bg-linear-to-r from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 hover:from-blue-100 hover:to-teal-100 dark:hover:from-blue-900 dark:hover:to-teal-900 border border-blue-200 dark:border-blue-800 theme-transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
