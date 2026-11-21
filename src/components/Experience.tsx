import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Freelance Developer",
      position: "Full-Stack Developer & Project Manager",
      duration: "2022 - Present",
      location: "Remote",
      description: [
        "Led development teams in creating large-scale web and mobile applications using MERN Stack",
        "Specialized in React Native for cross-platform mobile development",
        "Implemented AI chatbot solutions using Gemini AI for various client projects",
        "Managed project timelines, resources, and client communications",
        "Delivered 15+ successful projects with 98% client satisfaction rate"
      ],
      technologies: ["React.js", "Node.js", "React Native", "MongoDB", "Gemini AI", "Project Management"]
    },
    {
      company: "GCU Faisalabad",
      position: "Software Engineering Student & Research Assistant",
      duration: "2022-26 - Present",
      location: "Faisalabad, Pakistan",
      description: [
        "Pursuing BSc in Software Engineering with focus on AI and Machine Learning",
        "Conducting research in Generative AI and its applications",
        "Teaching assistant for programming fundamentals courses",
        "Leading student development teams in hackathons and coding competitions",
        "Maintaining a GPA of 3.31/4.0 with academic excellence"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Academic Research", "C#", "Java"]
    },
    {
      company: "Tech Training Institute",
      position: "Software Development Trainer",
      duration: "2023 - Present",
      location: "Faisalabad, Pakistan",
      description: [
        "Training students and professionals in modern web development technologies",
        "Developed comprehensive curriculum for MERN Stack development",
        "Conducted workshops on AI/ML integration in web applications",
        "Mentored 50+ students in their programming journey",
        "Achieved 95% student placement rate in tech companies"
      ],
      technologies: ["Teaching", "Curriculum Development", "MERN Stack", "AI/ML", "Mentoring"]
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-primary">02.</span> Where I've Worked
            </h2>
            <div className="w-20 h-0.5 bg-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tab navigation */}
            <div className="lg:col-span-1">
              <div className="flex lg:flex-col gap-3 overflow-x-auto pb-3 lg:pb-0 -mx-1 px-1 [&>button]:shrink-0">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                      activeTab === index
                        ? "border-foreground bg-card text-foreground font-bold shadow-glow"
                        : "border-foreground/30 text-muted-foreground hover:border-foreground hover:bg-card/60"
                    }`}
                  >
                    <div className="text-sm font-medium">{exp.company}</div>
                    <div className="text-xs opacity-70">{exp.duration}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {experiences[activeTab].position}
                      </h3>
                      <p className="text-muted-foreground">
                        {experiences[activeTab].company} • {experiences[activeTab].location}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {experiences[activeTab].duration}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {experiences[activeTab].description.map((point, index) => (
                        <li key={index} className="flex items-start space-x-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[activeTab].technologies.map((tech, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary"
                            className="bg-[hsl(var(--butter))] text-foreground border-2 border-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Experience;