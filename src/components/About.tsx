import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Database, Terminal } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"], icon: Code },
    { category: "Backend", items: ["Java (Basics)", "Python", "C++"], icon: Terminal },
    { category: "Database", items: ["SQL", "Database Design"], icon: Database },
    { category: "Other", items: ["Linux (Basic)", "Git", "Problem Solving"], icon: Terminal },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              About Me
            </h2>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Dedicated to continuous learning and creating meaningful applications
            </p>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <Card className="p-6 shadow-medium border-0 bg-card">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-heading mb-2">
                        Education
                      </h3>
                      <p className="text-text-body font-medium">
                        B.Tech in Computer Science and Engineering (Honors)
                      </p>
                      <p className="text-text-light">
                        Lendi Institute of Engineering and Technologies
                      </p>
                      <p className="text-text-light text-sm">
                        Expected Graduation: 2027
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-gray max-w-none">
                <p className="text-text-body leading-relaxed">
                  I'm a passionate application developer currently pursuing my B.Tech in Computer Science 
                  Engineering with Honors. My journey in technology is driven by an insatiable curiosity 
                  to learn and create innovative solutions.
                </p>
                <p className="text-text-body leading-relaxed">
                  I believe in the power of continuous learning and staying updated with the latest 
                  technologies. Whether it's building web applications, solving complex problems, 
                  or exploring new programming paradigms, I approach each challenge with enthusiasm 
                  and dedication.
                </p>
                <p className="text-text-body leading-relaxed">
                  My goal is to contribute meaningfully to the tech industry by developing applications 
                  that make a positive impact on users' lives while continuously expanding my knowledge 
                  and skills.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-heading mb-6">
                Technical Skills
              </h3>
              
              <div className="grid gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="p-4 shadow-soft border-0 bg-card hover:shadow-medium transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 mt-1">
                          <skillGroup.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-heading mb-2">
                            {skillGroup.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-secondary rounded-full text-sm text-text-body font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;