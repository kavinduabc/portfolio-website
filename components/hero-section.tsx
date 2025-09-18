"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/images/cvimage.jpg"
                  alt="Profile Photo"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-background shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-gradient">
            Hi, I'm <span className="text-primary animate-pulse">Kavindu Piumal</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up delay-200">
            FullStack Developer & Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty animate-fade-in-up delay-300">
         I am a Full Stack Developer and Software Engineer, passionate about designing scalable applications and building end-to-end solutions that solve real-world problems. I thrive on creating efficient, user-focused software that drives innovation and impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:animate-bounce transition-all duration-300" />
            </Button>
            <div className="flex gap-4">
              <a
                href="https://github.com/kavinduabc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/25 rounded-full"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/kavindu-piumal-2ba7662a8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/25 rounded-full"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a
                href="mailto:piumalranepura@gmail.com"
                className="hover:scale-110 transition-all duration-300 bg-transparent hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/25 rounded-full"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
