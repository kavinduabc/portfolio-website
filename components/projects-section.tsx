"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2 } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "KV audio web application",
    description:
      "MERN-based audio equipment rental app with product browsing, real-time availability, bookings, user auth, and order management. Fast, smooth, and user friendly.",
    techStack: ["React.js", "JavaScript", "Express.js", "Node.js", "Tailwind CSS", "MongoDB"],
    githubUrls: [
      { label: "Frontend", url: "https://github.com/kavinduabc/kv-audio-frontend.git" },
      { label: "Backend", url: "https://github.com/kavinduabc/kv-audio-backend.git" },
    ],
    demoUrl: "#",
    images: ["/project/kv-audio/kvAudio1.png", "/project/kv-audio/kvAudio2.png"],
  },
  {
    title: "Warranty Tracking Dashboard",
    description: `An interactive web dashboard designed for efficient warranty management. It enables companies to register products,
       track warranty status, and monitor claims in real time. The system features a modern React-based UI with detailed analytics,
        reporting tools, and secure data handling.`,
    techStack: ["React", "Node.js", "TypeScript", "Express.js", "MongoDB"],
    githubUrls: [{ label: "Code", url: "https://github.com/kavinduabc/Woranty-tracking.git" }],
    demoUrl: "#",
    images: ["/project/warranty/w1.png", "/project/warranty/w2.png", "/project/warranty/w3.png", "/project/warranty/w4.png"],
  },
  {
    title: "Hotel Management System",
    description: `An interactive web platform designed for seamless hotel management.
     Guests can easily book rooms online, while hotels efficiently manage reservations, check-ins, check-outs, staff schedules, and service requests.`,
    techStack: ["React", "SpringBoot", "JavaScript", "MYSQL"],
    githubUrls: [{ label: "Code", url: "https://github.com/kavinduabc/HotelWlimada.git" }],
    demoUrl: "#",
    images: ["/project/hotel/hotel1.png"],
  },
  {
    title: "NLearn Manager",
    description: `A secure and user-friendly authentication module developed as part of the NLearn Manager hotel management platform.`,
    techStack: ["Flutter", "Firebase"],
    githubUrls: [{ label: "Code", url: "https://github.com/upekshaip/nl_manager.git" }],
    demoUrl: "#",
    images: ["/project/nlearn/nlern1.png", "/project/nlearn/nlern2.png"],
  },
  {
    title: "Extra Project",
    description: `This is another project that will be shown when clicking View More.`,
    techStack: ["React", "TypeScript"],
    githubUrls: [{ label: "Code", url: "#" }],
    demoUrl: "#",
    images: ["/project/extra/extra1.png"],
  },
]

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)

  // Show first 4 or all
  const visibleProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/3 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and
            modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        {projects.length > 4 && (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % (project.images?.length || 1))
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images?.length) % (project.images?.length || 1))

  return (
    <Card
      className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image Slider */}
      <div className="aspect-video overflow-hidden rounded-t-lg relative bg-black flex items-center justify-center">
        {project.images && project.images.length > 0 && (
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="max-w-full max-h-full object-contain transition-transform duration-500"
          />
        )}

        {project.images && project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
            >
              ›
            </button>
          </>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="text-pretty">{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech: string, techIndex: number) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${techIndex * 50}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap">
          {project.githubUrls?.map((link: any, i: number) => (
            <Button
              key={i}
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 bg-transparent"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                {link.label}
              </a>
            </Button>
          ))}
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
