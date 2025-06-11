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


const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSplashCursor, setShowSplashCursor] = useState(true);
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

    // Scroll detection
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSplashCursor(false);
      } else {
        setShowSplashCursor(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

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
      {/* Splash Screen */}
      <div className="h-screen w-full flex items-center justify-center bg-black relative">
      <Squares />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TextPressure
            text="PATRICIO"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={200}
          />
          {/* <FuzzyText>
            PATRICIO JAIME
          </FuzzyText> */}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#f325af]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="border border-[#f325af] bg-black hover:shadow-lg hover:shadow-[#f325af]/20 transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left side - Text content */}
                <div className="p-8 lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <Terminal className="w-8 h-8 text-[#f325af] group-hover:rotate-12 transition-transform duration-300" />
                    <h1 className="text-4xl lg:text-6xl font-bold text-[#f325af] select-none">
                      {glitchText}
                    </h1>
                  </div>
                  
                  <div className="text-xl lg:text-2xl mb-6">
                    <span className="text-[#f325af]">$</span>
                    <span className="text-gray-100 ml-2">whoami</span>
                  </div>
                  
                  <div className="pl-4 border-l border-[#f325af] mb-8 space-y-2">
                    <p className="text-lg text-gray-300 hover:text-[#f325af] transition-colors cursor-default">
                      &gt; Bsc Digital Technology 
                    </p>
                    <p className="text-lg text-gray-300 hover:text-[#f325af] transition-colors cursor-default">
                      &gt; Problem Solver
                    </p>
                    <p className="text-lg text-gray-300 hover:text-[#f325af] transition-colors cursor-default">
                      &gt; Full Stack Developer
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="bg-[#f325af] text-black hover:bg-[#f325af]/80 font-mono hover:scale-105 transition-all duration-200"
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
                      className="border-[#f325af] text-[#f325af] hover:bg-[#f325af] hover:text-black font-mono hover:scale-105 transition-all duration-200"
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
          <h2 className="text-3xl font-bold text-[#f325af] mb-8 flex items-center gap-3">
            <Terminal className="w-8 h-8" />
            ./projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-black border border-gray-600 hover:border-[#f325af] transition-all duration-300 group hover:scale-105 hover:rotate-1 rounded-none"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-[#f325af] transition-colors">{project.title}</h3>
                    <Badge className={`
                      ${project.status === 'LIVE' ? 'bg-[#f325af] text-black' : ''}
                      ${project.status === 'DEV' ? 'bg-[#f325af]/80 text-black' : ''}
                      ${project.status === 'BETA' ? 'bg-[#f325af]/60 text-black' : ''}
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
                        className="text-xs bg-gray-800 text-[#f325af] px-2 py-1 border border-gray-600 hover:bg-[#f325af] hover:text-black transition-all duration-200 cursor-default"
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
                      className="border-[#f325af] text-[#f325af] hover:bg-[#f325af] hover:text-black hover:scale-110 transition-all duration-200"
                      onClick={() => addTerminalLine(`git clone ${project.title.toLowerCase()}`)}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-[#f325af] text-[#f325af] hover:bg-[#f325af] hover:text-black hover:scale-110 transition-all duration-200"
                      onClick={() => addTerminalLine(`open ${project.title.toLowerCase()}.live`)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
          <SpotlightCard className="custom-spotlight-card h-[400px] w-full bg-black rounded-none" spotlightColor="rgba(243, 37, 175, 0.2)">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#f325af] mb-4">About Me</h3>
                <p className="text-gray-300">Full-stack developer with a passion for creating elegant solutions to complex problems. Specialized in React, TypeScript, and modern web technologies.</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-[#f325af]/20 text-[#f325af]">React</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">TypeScript</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">Node.js</Badge>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card h-[400px] w-full bg-black rounded-none" spotlightColor="rgba(243, 37, 175, 0.2)">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#f325af] mb-4">Experience</h3>
                <p className="text-gray-300">5+ years of experience in web development, working with startups and enterprise clients. Focused on building scalable and maintainable applications.</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-[#f325af]/20 text-[#f325af]">Full Stack</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">Architecture</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">DevOps</Badge>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="custom-spotlight-card h-[400px] w-full bg-black rounded-none" spotlightColor="rgba(243, 37, 175, 0.2)">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#f325af] mb-4">Interests</h3>
                <p className="text-gray-300">Passionate about AI, machine learning, and emerging technologies. Always exploring new ways to improve user experience and application performance.</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-[#f325af]/20 text-[#f325af]">AI/ML</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">UX Design</Badge>
                <Badge className="bg-[#f325af]/20 text-[#f325af]">Cloud</Badge>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-[#f325af]">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-[#f325af] mb-8 text-center">
              ./contact
            </h2>
            
            <div className="border border-gray-600 p-8 hover:border-[#f325af] transition-all duration-300 group rounded-none">
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
                    className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f325af] transition-colors"
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
                    className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f325af] transition-colors"
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
                    className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:border-[#f325af] transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Button 
                    type="submit"
                    className="bg-[#f325af] text-black hover:bg-[#f325af]/80 font-mono hover:scale-105 transition-all duration-200"
                    onClick={() => addTerminalLine("send_message()")}
                  >
                    Send Message
                  </Button>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-400 hover:border-[#f325af] hover:text-[#f325af] hover:scale-110 transition-all duration-200"
                      onClick={() => addTerminalLine("open github")}
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-600 text-gray-400 hover:border-[#f325af] hover:text-[#f325af] hover:scale-110 transition-all duration-200"
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
  );
};

export default Index;
