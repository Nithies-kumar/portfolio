import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Email from "./Email";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30 theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">
              Let's Connect
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, collaborating on
              interesting projects, or simply connecting with fellow developers.
              Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                  <Mail
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:nithieskumar2002@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    nithieskumar2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-900 transition-colors">
                  <Phone
                    size={24}
                    className="text-green-600 dark:text-green-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:6385725209"
                    className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                  >
                    6385725209
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900 transition-colors">
                  <Linkedin
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/nithies-kumar"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    Nithies Kumar
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                  <Github size={24} className="text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <a
                    href="https://github.com/Nithies-kumar"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Nithies-kumar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Email />
        </div>
      </div>
    </section>
  );
};

export default Contact;
