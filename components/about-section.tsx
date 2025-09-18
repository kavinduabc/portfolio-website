import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Code, Database, Brain, Globe } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5" />,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: <Database className="h-5 w-5" />,
    technologies: ["Node.js", "Python", "Java", "MySQL", "MongoDB", "SpringBoot"],
  },
  // {
  //   category: "AI/ML",
  //   icon: <Brain className="h-5 w-5" />,
  //   technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "Pandas"],
  // },
  {
    category: "Tools",
    icon: <Code className="h-5 w-5" />,
    technologies: ["Git", "GitHub","VsCode","Intelij"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Learn more about my background, skills, and what drives my passion for technology and projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    KP
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Kavindu Piumal</h3>
                    <p className="text-muted-foreground">FullStack Developer & Software Engineer</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p className="text-pretty">
                    I'm Kavindu Piumal, a full-stack developer and software engineer. I am a 3rd year
                    undergraduate at NSBM Green University, following a BSc in Computer Science.
                  </p>
                   <p className="text-pretty">
                     I have strong skills in teamwork, problem-solving, and building scalable web
                     applications. I’m also interested in exploring new technologies, software engineering
                     practices, and how AI can improve development and real-world solutions.
                   </p>
                  <p className="text-pretty">
                     Beyond coding, I enjoy learning, contributing to projects, and working with others
                     to create meaningful software. I believe technology can make a big difference in
                     people’s lives and I want to be part of that change.
                  </p>
                </div>


                <Button className="mt-6" asChild>
                  <a href="https://drive.google.com/file/d/1v6ptNo0a-ImKj21ZxtTWcyjejH58icfc/view?usp=sharing" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Education</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">BSc Computer Science undergraduate</p>
                    <p className="text-muted-foreground">NSBM Green University</p>
                  </div>
                  
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FullStack web development</Badge>
                  <Badge variant="secondary">Software development</Badge>
                  <Badge variant="secondary">Hiking</Badge>
                  <Badge variant="secondary">Maths</Badge>
                  <Badge variant="secondary">Cricket</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{skillGroup.icon}</div>
                  <h4 className="font-semibold">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
