import { Download } from "lucide-react";
import React from "react";

const About = () => {
  const education = [
    {
      degree:
        "Bachelor of Engineering in Electronics and Communication Engineering (ECE)",
      institution: "SSM Institute of Engineering and Technology",
      period: "Sep 2020 – Apr 2024",
    },
    {
      degree: "HSC",
      institution: "MSP Solainadar Memorial Hr. Sec. School",
      period: "Jun 2019 – Mar 2020",
    },
    {
      degree: "SSLC",
      institution: "Kandaswami Kandar Matric Hr. Sec. School",
      period: "Jun 2017 – Mar 2018",
    },
  ];
  return (
    <section id="about" className="py-20 bg-background theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with a strong foundation in backend
            development and a drive to create meaningful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I am an aspiring Full-Stack Developer with a strong focus on
              backend development using Java, Spring Boot, and MySQL. I'm
              passionate about solving real-world challenges through technology
              and continuously improving my technical and problem-solving
              skills.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I thrive in collaborative environments and enjoy learning new
              tools to stay ahead in the evolving tech landscape. My goal is to
              build applications that make a meaningful impact while delivering
              exceptional user experiences.
            </p>

            <div className="pt-4"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow duration-200 theme-transition"
              >
                <div className="p-6 pt-0">
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
