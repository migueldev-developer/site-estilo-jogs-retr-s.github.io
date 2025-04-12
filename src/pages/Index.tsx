
import { useState, useEffect } from 'react';
import PixelHeader from '@/components/PixelHeader';
import PixelFooter from '@/components/PixelFooter';
import PixelText from '@/components/PixelText';
import PixelButton from '@/components/PixelButton';
import PixelCard from '@/components/PixelCard';
import PixelSection from '@/components/PixelSection';
import PixelSkillBar from '@/components/PixelSkillBar';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello World! I'm a Miguel Developer";
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { toast } = useToast();

  // Typing effect
  useEffect(() => {
    if (currentTextIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prevText => prevText + fullText[currentTextIndex]);
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, fullText]);

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Pixel Game',
      description: 'A retro-style platformer with pixel-perfect graphics.',
      tags: ['JavaScript', 'Canvas', 'Game Dev']
    },
    {
      id: 2,
      title: 'Data Visualizer',
      description: 'Interactive data visualization with a retro aesthetic.',
      tags: ['React', 'D3.js', 'API']
    },
    {
      id: 3,
      title: 'Retro Portfolio',
      description: 'A nostalgic blast from the past with modern web tech.',
      tags: ['TypeScript', 'React', 'Tailwind']
    },
    {
      id: 4,
      title: 'Pixel Editor',
      description: 'Create and edit pixel art directly in your browser.',
      tags: ['Canvas API', 'JavaScript', 'UI/UX']
    }
  ];

  // Skills data
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Pixel Art', level: 95 },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-black text-pixel-blue pt-16 pixel-grid-pattern">
      <PixelHeader />
      
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="pixel-container text-center">
          <div className="mb-6 inline-block">
            <div className="border-2 border-pixel-blue inline-block p-1">
              <div className="border-2 border-pixel-blue p-4 md:p-8">
                <PixelText variant="heading" animate="float" className="mb-4">
                  {typedText}
                  <span className="animate-pixel-blink ml-1">_</span>
                </PixelText>
                <PixelText className="max-w-2xl mx-auto mb-8">
                  Creating retro-inspired digital experiences with modern web technologies.
                  Let's build something nostalgic together!
                </PixelText>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PixelButton onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                    View Projects
                  </PixelButton>
                  <PixelButton 
                    variant="secondary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                  >
                    Contact Me
                  </PixelButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <PixelSection id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <PixelCard className="h-full">
              <PixelText variant="subheading" className="mb-4">Who I Am</PixelText>
              <div className="space-y-4 font-pixel-mono">
                <p>
                  I'm a developer with a passion for combining retro aesthetics with modern web technologies.
                </p>
                <p>
                  My journey began with 8-bit games that inspired me to create digital experiences that evoke nostalgia while delivering cutting-edge functionality.
                </p>
                <p>
                  When I'm not coding, you can find me creating pixel art, collecting retro games, and exploring new technologies.
                </p>
              </div>
            </PixelCard>
          </div>
          <div>
            <PixelCard className="h-full">
              <PixelText variant="subheading" className="mb-4">My Approach</PixelText>
              <div className="space-y-4 font-pixel-mono">
                <p>
                  I believe in creating web experiences that are:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Visually distinctive and memorable</li>
                  <li>Technically robust and performant</li>
                  <li>Accessible to all users</li>
                  <li>Responsive across all devices</li>
                  <li>Fun and engaging to interact with</li>
                </ul>
              </div>
            </PixelCard>
          </div>
        </div>
      </PixelSection>
      
      {/* Skills Section */}
      <PixelSection id="skills" title="Skills" className="bg-black bg-opacity-80">
        <div className="grid md:grid-cols-2 gap-8">
          <PixelCard>
            <PixelText variant="subheading" className="mb-6">Technical Skills</PixelText>
            <div className="space-y-6">
              {skills.map((skill) => (
                <PixelSkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </PixelCard>
          <div className="space-y-6">
            <PixelCard>
              <PixelText variant="subheading" className="mb-4">Front-End</PixelText>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'SVG', 'Canvas API'].map((tech) => (
                  <span key={tech} className="font-pixel-mono bg-black border border-pixel-blue px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </PixelCard>
            <PixelCard>
              <PixelText variant="subheading" className="mb-4">Back-End</PixelText>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST API', 'GraphQL'].map((tech) => (
                  <span key={tech} className="font-pixel-mono bg-black border border-pixel-blue px-2 py-1 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </PixelCard>
            <PixelCard>
              <PixelText variant="subheading" className="mb-4">Tools</PixelText>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Webpack', 'Vite', 'Figma', 'VS Code', 'Aseprite', 'Photoshop'].map((tool) => (
                  <span key={tool} className="font-pixel-mono bg-black border border-pixel-blue px-2 py-1 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </PixelCard>
          </div>
        </div>
      </PixelSection>
      
      {/* Projects Section */}
      <PixelSection id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <PixelCard key={project.id} hoverEffect className="overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-pixel-blue-dark to-pixel-blue flex items-center justify-center">
                <div className="font-pixel text-2xl text-black">PROJECT {project.id}</div>
              </div>
              <div className="p-4">
                <PixelText variant="subheading" className="mb-2">{project.title}</PixelText>
                <p className="font-pixel-mono mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-pixel bg-black border border-pixel-blue px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <PixelButton className="w-full text-center">View Details</PixelButton>
              </div>
            </PixelCard>
          ))}
        </div>
      </PixelSection>
      
      {/* Contact Section */}
      <PixelSection id="contact" title="Contact" className="bg-black bg-opacity-80">
        <div className="grid md:grid-cols-2 gap-8">
          <PixelCard>
            <PixelText variant="subheading" className="mb-6">Get In Touch</PixelText>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-xs mb-1 block">NAME</label>
                <input 
                  type="text" 
                  className="w-full bg-black border-2 border-pixel-blue font-pixel-mono p-2 text-pixel-blue focus:outline-none focus:border-pixel-blue-light"
                  required
                />
              </div>
              <div>
                <label className="font-pixel text-xs mb-1 block">EMAIL</label>
                <input 
                  type="email" 
                  className="w-full bg-black border-2 border-pixel-blue font-pixel-mono p-2 text-pixel-blue focus:outline-none focus:border-pixel-blue-light"
                  required
                />
              </div>
              <div>
                <label className="font-pixel text-xs mb-1 block">MESSAGE</label>
                <textarea 
                  className="w-full bg-black border-2 border-pixel-blue font-pixel-mono p-2 text-pixel-blue h-32 focus:outline-none focus:border-pixel-blue-light"
                  required
                ></textarea>
              </div>
              <PixelButton className="w-full text-center">SEND MESSAGE</PixelButton>
            </form>
          </PixelCard>
          <div className="space-y-6">
            <PixelCard>
              <PixelText variant="subheading" className="mb-4">Contact Info</PixelText>
              <div className="space-y-4 font-pixel-mono">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-pixel-blue mt-1"></div>
                  <div>
                    <div className="font-pixel text-xs mb-1">EMAIL</div>
                    <div>hello@pixeldev.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-pixel-blue mt-1"></div>
                  <div>
                    <div className="font-pixel text-xs mb-1">LOCATION</div>
                    <div>Pixel City, Digital World</div>
                  </div>
                </div>
              </div>
            </PixelCard>
            <PixelCard>
              <PixelText variant="subheading" className="mb-4">Connect</PixelText>
              <div className="flex justify-around">
                <a href="#" className="font-pixel text-pixel-blue hover:text-pixel-blue-light">GitHub</a>
                <a href="#" className="font-pixel text-pixel-blue hover:text-pixel-blue-light">LinkedIn</a>
                <a href="#" className="font-pixel text-pixel-blue hover:text-pixel-blue-light">Twitter</a>
                <a href="#" className="font-pixel text-pixel-blue hover:text-pixel-blue-light">Dribbble</a>
              </div>
            </PixelCard>
            <PixelCard>
              <div className="text-center">
                <PixelText animate="pulse" className="mb-2">Ready to work together?</PixelText>
                <PixelButton onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Let's Talk!
                </PixelButton>
              </div>
            </PixelCard>
          </div>
        </div>
      </PixelSection>
      
      <PixelFooter />
    </div>
  );
};

export default Index;
