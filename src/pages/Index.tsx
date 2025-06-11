import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, MapPin, Calendar, ArrowRight, Code, Terminal, Cpu, Zap } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/spline-demo";
import SplashCursor from '@/components/ui/SplashCursor'


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [glitchText, setGlitchText] = useState("[YOUR_NAME]");
  const [terminalLines, setTerminalLines] = useState([
    "$ initializing portfolio...",
    "$ loading user data...",
    "$ system ready."
  ]);

  useEffect(() => {
    setIsVisible(true);
    
    // Glitch effect for name
    const glitchInterval = setInterval(() => {
      const glitchChars = "!@#$%^&*()[]{}|;:,.<>?";
      const original = "Patricio Jaime";
      let glitched = "";
      
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }
      
      setGlitchText(glitched);
      
      setTimeout(() => setGlitchText(original), 100);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const skills = [
    { name: "JavaScript", level: 95, color: "bg-cyan-400" },
    { name: "React", level: 90, color: "bg-green-400" },
    { name: "TypeScript", level: 85, color: "bg-blue-400" },
    { name: "Node.js", level: 80, color: "bg-yellow-400" },
    { name: "Python", level: 75, color: "bg-purple-400" },
    { name: "SQL", level: 70, color: "bg-red-400" }
  ];

  const projects = [
    {
      title: "Certo",
      description: "Modern web application with real-time features",
      tech: ["React", "TypeScript", "WebSocket"],
      status: "BETA"
    },
    {
      title: "Ripe", 
      description: "High-performance API with microservices architecture",
      tech: ["Node.js", "Docker", "Redis"],
      status: "ALPHA"
    },
    {
      title: "Buddy",
      description: "Machine learning pipeline for data processing",
      tech: ["Python", "TensorFlow", "AWS"],
      status: "DEV"
    }
  ];

  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Corp",
      period: "2022 - Present",
      tech: ["React", "Node.js", "AWS"]
    },
    {
      title: "Full Stack Developer", 
      company: "Startup Inc",
      period: "2020 - 2022",
      tech: ["Vue.js", "Python", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2019 - 2020", 
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ];

  const addTerminalLine = (command: string) => {
    setTerminalLines(prev => [...prev, `$ ${command}`, "executing...", "done."]);
    setTimeout(() => {
      setTerminalLines(prev => prev.slice(-3));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono relative overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-black border-b border-cyan-400 p-4 relative">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 bg-red-400 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full hover:scale-125 transition-transform cursor-pointer"></div>
          <span className="ml-4 text-cyan-400">patojaime@developer:~$</span>
          <span className="animate-pulse text-cyan-400">|</span>
        </div>
        <div className="absolute right-4 top-4 text-xs text-gray-500">
          {terminalLines.map((line, index) => (
            <div key={index} className="opacity-60">{line}</div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="p-8 lg:p-16 relative">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border border-cyan-400 bg-black hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left side - Text content */}
              <div className="p-8 lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <Terminal className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  <h1 className="text-4xl lg:text-6xl font-bold text-cyan-400 select-none">
                    {glitchText}
                  </h1>
                </div>
                
                <div className="text-xl lg:text-2xl mb-6">
                  <span className="text-cyan-400">$</span>
                  <span className="text-gray-100 ml-2">whoami</span>
                </div>
                
                <div className="pl-4 border-l border-cyan-400 mb-8 space-y-2">
                  <p className="text-lg text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                    &gt; Full Stack Developer
                  </p>
                  <p className="text-lg text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                    &gt; Problem Solver
                  </p>
                  <p className="text-lg text-gray-300 hover:text-cyan-400 transition-colors cursor-default">
                    &gt; Tech Enthusiast
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono hover:scale-105 transition-all duration-200"
                    onClick={() => addTerminalLine("view_projects()")}
                  >
                    <Code className="mr-2 h-4 w-4" />
                    view_projects()
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono hover:scale-105 transition-all duration-200"
                    onClick={() => addTerminalLine("contact_me()")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    contact_me()
                  </Button>
                </div>
              </div>

              {/* Right side - 3D Scene */}
              <div className="h-[500px] lg:h-auto lg:col-span-3">
                <SplineSceneBasic />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-8 lg:p-16 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <Cpu className="w-8 h-8 animate-pulse" />
            ./skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="border border-gray-600 bg-black p-4 hover:border-cyan-400 transition-all duration-300 group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-100 font-semibold group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 overflow-hidden">
                  <div 
                    className="h-2 bg-cyan-400 transition-all duration-1000 group-hover:animate-pulse"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8 lg:p-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <Terminal className="w-8 h-8" />
            ./projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-black border border-gray-600 hover:border-cyan-400 transition-all duration-300 group hover:scale-105 hover:rotate-1"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <Badge className={`
                      ${project.status === 'LIVE' ? 'bg-green-400 text-black' : ''}
                      ${project.status === 'DEV' ? 'bg-yellow-400 text-black' : ''}
                      ${project.status === 'BETA' ? 'bg-purple-400 text-black' : ''}
                      animate-pulse
                    `}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 border border-gray-600 hover:bg-cyan-400 hover:text-black transition-all duration-200 cursor-default"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-200"
                      onClick={() => addTerminalLine(`git clone ${project.title.toLowerCase()}`)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:scale-110 transition-all duration-200"
                      onClick={() => addTerminalLine(`open ${project.title.toLowerCase()}.live`)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-8 lg:p-16 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            ./experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className="border-l-2 border-cyan-400 pl-6 bg-black p-6 hover:bg-gray-900 transition-all duration-300 group hover:translate-x-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-400">{exp.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="text-xs bg-gray-700 text-cyan-400 px-2 py-1 border border-gray-600 hover:scale-110 transition-transform duration-200 cursor-default"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 lg:p-16 bg-black border-t border-cyan-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            ./contact
          </h2>
          
          <div className="border border-gray-600 p-8 mb-8 hover:border-cyan-400 transition-all duration-300 group">
            <p className="text-lg text-gray-300 mb-6 group-hover:text-gray-100 transition-colors">
              [YOUR_CONTACT_MESSAGE_HERE]
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono hover:scale-105 transition-all duration-200"
                onClick={() => addTerminalLine("send_email()")}
              >
                <Mail className="mr-2 h-4 w-4" />
                patricioperaltarg@domain.com
              </Button>
              <Button 
                variant="outline" 
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-mono hover:scale-105 transition-all duration-200"
                onClick={() => addTerminalLine("get_location()")}
              >
                <MapPin className="mr-2 h-4 w-4" />
                [Your Location]
              </Button>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                onClick={() => addTerminalLine("open github")}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-400 hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                onClick={() => addTerminalLine("open linkedin")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="text-cyan-400 text-sm">
            <span>patriciojaime@portfolio:~$ </span>
            <span className="animate-pulse">_</span>
          </div>
          </div>
        </section>
      </div>
  );
};

export default Index;
