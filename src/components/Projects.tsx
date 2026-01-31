import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award } from "lucide-react";
import aiMlBg from "@/assets/ai-ml-bg.jpg";
import developmentBg from "@/assets/development-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot with Gemini AI",
      description: "Advanced conversational AI chatbot built using Google's Gemini AI. Features natural language processing, context awareness, and multi-turn conversations. Integrated with web applications to provide intelligent customer support.",
      image: aiMlBg,
      technologies: ["Gemini AI", "Node.js", "React.js", "WebSocket", "Natural Language Processing"],
      github: "https://github.com/ahsanraza",
      live: "https://chatbot-demo.vercel.app",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, inventory management, and admin dashboard. Built with MERN stack and optimized for performance and scalability.",
      image: developmentBg,
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux", "Express.js"],
      github: "https://github.com/ahsanraza",
      live: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      title: "Machine Learning Data Analysis Tool",
      description: "Python-based data analysis and visualization tool with machine learning capabilities. Features automated data preprocessing, multiple ML algorithms, and interactive dashboards.",
      image: aiMlBg,
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit", "NumPy"],
      github: "https://github.com/ahsanraza",
      featured: false
    },
    {
      title: "React Native Mobile App",
      description: "Cross-platform mobile application for task management and productivity. Features offline functionality, push notifications, and seamless synchronization across devices.",
      image: developmentBg,
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage", "Push Notifications"],
      github: "https://github.com/ahsanraza",
      live: "https://play.google.com/store",
      featured: false
    },
    {
      title: "Project Management Dashboard",
      description: "Comprehensive project management tool with team collaboration features, time tracking, task assignment, and progress visualization. Built for managing complex software projects.",
      image: developmentBg,
      technologies: ["React.js", "Node.js", "PostgreSQL", "Socket.io", "Chart.js", "JWT"],
      github: "https://github.com/ahsanraza",
      live: "https://pm-dashboard.vercel.app",
      featured: false
    },
    {
      title: "AI-Powered Code Review Tool",
      description: "Intelligent code review assistant using machine learning to analyze code quality, detect bugs, and suggest improvements. Integrates with GitHub for seamless workflow.",
      image: aiMlBg,
      technologies: ["Python", "Machine Learning", "GitHub API", "FastAPI", "Docker", "CI/CD"],
      github: "https://github.com/ahsanraza",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "Full-featured chat application with real-time messaging, file sharing, emoji reactions, and group chat functionality. Built with modern web technologies.",
      image: developmentBg,
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "JWT", "File Upload"],
      github: "https://github.com/ahsanraza",
      live: "https://chat-app.vercel.app",
      featured: false
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Advanced weather analytics platform with data visualization, historical trends, and predictive modeling. Features interactive charts and location-based forecasts.",
      image: aiMlBg,
      technologies: ["Python", "React.js", "D3.js", "Weather API", "PostgreSQL", "Machine Learning"],
      github: "https://github.com/ahsanraza",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const certificates = [
    {
      title: "Introduction to Retrieval Augmented Generation (RAG)",
      issuer: "Coursera",
      date: "July 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/4GU01IR35M1B",
      skills: ["RAG", "LLMs", "Generative AI"]
    },
    {
      title: "Microsoft Azure AI Fundamentals AI-900 Specialization",
      issuer: "Coursera",
      date: "July 2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/4ZLWBXMKY0O2",
      skills: ["Azure AI", "Computer Vision", "NLP"]
    },
    {
      title: "Microsoft Azure Machine Learning",
      issuer: "Coursera",
      date: "July 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/J1TC2SZ9FU2D",
      skills: ["Azure", "Machine Learning", "Cloud"]
    },
    {
      title: "Google Project Management Specialization",
      issuer: "Coursera",
      date: "June 2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/DZ7S9MTKC2DV",
      skills: ["Project Management", "Agile", "Scrum", "Strategic Planning"]
    },
    {
      title: "Computer Vision in Microsoft Azure",
      issuer: "Coursera",
      date: "July 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/CHDO1P0CVUZ6",
      skills: ["Computer Vision", "Azure", "AI"]
    },
    {
      title: "Foundations of Project Management",
      issuer: "Coursera",
      date: "June 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/XCQE99VUB0VF",
      skills: ["Project Management", "Planning"]
    },
    {
      title: "Speed Up Data Analysis and Presentation Building",
      issuer: "Coursera",
      date: "June 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/CQFJJTCUB2YL",
      skills: ["Data Analysis", "Presentation"]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-primary">03.</span> Some Things I've Built
            </h2>
            <div className="w-20 h-0.5 bg-primary" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg shadow-subtle hover:shadow-glow transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                </div>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:text-right' : ''}`}>
                  <div>
                    <p className="text-primary text-sm font-medium">Featured Project</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">{project.title}</h3>
                  </div>

                  <Card className="bg-secondary/80 border-border/50 p-6">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </Card>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                    <Button variant="ghost" size="icon" className="hover:text-primary">
                      <Github className="h-5 w-5" />
                    </Button>
                    {project.live && (
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Other Noteworthy Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/70 hover:-translate-y-2 transition-all duration-300 group">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                          <Github className="h-4 w-4" />
                        </Button>
                        {project.live && (
                          <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/5 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center mt-8">Certifications & Awards</h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <Card key={index} className="bg-card/30 border-primary/20 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Award className="w-16 h-16 text-primary" />
                  </div>
                  
                  <CardContent className="p-6 relative z-10 h-full flex flex-col">
                    <div className="mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          {cert.title}
                        </a>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                        <span>{cert.date}</span>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                          Verify <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
