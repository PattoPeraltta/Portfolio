import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Code, Terminal } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/spline-demo";
import SpotlightCard from '@/components/ui/SpotlightCard';
import TextPressure from '@/components/ui/TextPressure';
import SplashCursor from '@/components/ui/SplashCursor'
import Squares from '@/components/ui/Squares'
import FuzzyText from '@/components/ui/FuzzyText'
import { IconHover3D } from "@/components/ui/icon-3d-hover";


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSplashCursor, setShowSplashCursor] = useState(true);
  const [gridOpacity, setGridOpacity] = useState(1);
  const [glitchText, setGlitchText] = useState("pato jaime");
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
    const original = "patricio jaime";
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

    // Scroll detection
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 600, 1);
      setGridOpacity(1 - progress);
      if (window.scrollY > 50) {
        setShowSplashCursor(false);
      } else {
        setShowSplashCursor(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearInterval(glitchInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
    },
    {
      title: "Nova",
      description: "AI-powered content creation platform",
      tech: ["Next.js", "OpenAI", "Supabase"],
      status: "BETA"
    }
  ];
  const addTerminalLine = (command: string) => {
    setTerminalLines(prev => [...prev, `$ ${command}`, "executing...", "done."]);
    setTimeout(() => {
      setTerminalLines(prev => prev.slice(-3));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-mono relative overflow-hidden">
      {/* Fixed Background Grid */}
      <div className="fixed inset-0 z-0" style={{ opacity: 0.3 }}>
        <Squares />
      </div>

      {/* Splash Screen */}
      <div className="h-screen w-full flex items-center justify-center bg-black relative">
        <div className="h-screen w-full" style={{ opacity: 0.5 }}>
          <Squares />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TextPressure
            text="PATRICIO"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#f4a2d8"
            strokeColor="#ff0000"
            minFontSize={200}
          />
        </div>
      </div>
      {/* Main Column Container */}
      <div className="max-w-7xl mx-auto relative z-10 bg-black border border-[#ffffff] rounded-xl shadow-[0_0_15px_rgba(243,37,175,0.3)]">
        {/* Main Content */}  
        <div className="px-8">
          {/* Hero Section */}
          <section className="py-16">
            <div className="border border-gray-600 ">
              <div className="bg-black">
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                  {/* Left side - Text content */}
                  <div className="p-8 lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <h1 className="text-4xl lg:text-6xl font-bold text-[#f4a2d8] select-none">
                        {glitchText}
                      </h1>
                    </div>
                    
                    <div className="text-xl lg:text-2xl mb-12">
                      <span className="text-[#f4a2d8]">$</span>
                      <span className="text-gray-100">whoami</span>
                    </div>

                    
                    <div className="pl-4 border-l border-gray-600 mb-12 space-y-2">
                      <p className="text-lg text-gray-300">
                        &gt; Bsc Digital Technology 
                      </p>
                      <p className="text-lg text-gray-300">
                        &gt; Problem Solver
                      </p>
                      <p className="text-lg text-gray-300">
                        &gt; Full Stack Developer
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline"
                        className="bg-[#f4a2d8] text-black hover:bg-[#f4a2d8]/80 font-mono hover:scale-105 transition-all duration-200"
                        onClick={() => {
                          addTerminalLine("view_projects()");
                          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Code className="mr-2 h-4 w-4" />
                        view_projects()
                      </Button>
                      <Button 
                        variant="outline" 
                        className="bg-[#f4a2d8] text-black hover:bg-[#f4a2d8]/80 font-mono hover:scale-105 transition-all duration-200"
                        onClick={() => {
                          addTerminalLine("contact_me()");
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
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

          {/* Projects Section */}
          <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold text-[#f4a2d8] mb-8 flex items-center gap-3">
              <Terminal className="w-8 h-8" />
              ./projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <SpotlightCard 
                  key={project.title} 
                  className="custom-spotlight-card h-[300px] w-full bg-black rounded-none" 
                  spotlightColor="rgba(244, 162, 216, 0.2)"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-100 group-hover:text-[#f4a2d8] transition-colors">{project.title}</h3>
                      <Badge className={`
                        ${project.status === 'LIVE' ? 'bg-[#f4a2d8] text-black' : ''}
                        ${project.status === 'DEV' ? 'bg-[#f4a2d8]/80 text-black' : ''}
                        ${project.status === 'BETA' ? 'bg-[#f4a2d8]/60 text-black' : ''}
                        animate-pulse
                      `}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-300 mb-2 group-hover:text-gray-100 transition-colors">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-gray-800 text-[#f4a2d8] px-2 py-1 border border-gray-600 hover:bg-[#f4a2d8] hover:text-black transition-all duration-200 cursor-default"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 mt-auto">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-600 text-gray-400 hover:border-[#f4a2d8] hover:text-[#f4a2d8] hover:scale-110 transition-all duration-200"
                        onClick={() => addTerminalLine(`git clone ${project.title.toLowerCase()}`)}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-600 text-gray-400 hover:border-[#f4a2d8] hover:text-[#f4a2d8] hover:scale-110 transition-all duration-200"
                        onClick={() => addTerminalLine(`open ${project.title.toLowerCase()}.live`)}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* Info Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
            <SpotlightCard className="custom-spotlight-card h-[300px] w-full bg-black rounded-none" spotlightColor="rgba(244, 162, 216, 0.2)">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#f4a2d8] mb-4">About Me</h3>
                  <p className="text-gray-300">Full-stack developer with a passion for creating elegant solutions to complex problems. Specialized in React, TypeScript, and modern web technologies.</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="custom-spotlight-card h-[300px] w-full bg-black rounded-none" spotlightColor="rgba(244, 162, 216, 0.2)">
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#f4a2d8] mb-4">Experience</h3>
                  <p className="text-gray-300">5+ years of experience in web development, working with startups and enterprise clients. Focused on building scalable and maintainable applications.</p>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Contact Section */}
          <section id="contact" className="py-16 border-t border-gray-600">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-[#f4a2d8] mb-8 text-center">
                ./contact
              </h2>
              
              <div className="border border-gray-600 p-8 hover:border-[#f4a2d8] transition-all duration-300 group rounded-none">
                <p className="text-lg text-gray-300 mb-6 group-hover:text-gray-100 transition-colors">
                  Let's connect! Feel free to reach out through the form below.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f4a2d8] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f4a2d8] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f4a2d8] transition-colors"
                      placeholder="Your message..."
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <Button 
                      type="submit"
                      className="bg-[#f4a2d8] text-black hover:bg-[#f4a2d8]/80 font-mono hover:scale-105 transition-all duration-200"
                      onClick={() => addTerminalLine("send_message()")}
                    >
                      Send Message
                    </Button>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        className="border-gray-600 text-gray-400 hover:border-[#f4a2d8] hover:text-[#f4a2d8] hover:scale-110 transition-all duration-200"
                        onClick={() => addTerminalLine("open github")}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-gray-600 text-gray-400 hover:border-[#f4a2d8] hover:text-[#f4a2d8] hover:scale-110 transition-all duration-200"
                        onClick={() => addTerminalLine("open linkedin")}
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;


