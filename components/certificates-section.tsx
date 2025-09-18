"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, Download } from "lucide-react"

const certificates = [
  {
    
    title: "Spring Boot 2.0 Essential Training",
    issuer: "Linkedin Learning",
    date: "2025 July 25",
    description: "Comprehensive training on building and deploying applications using Spring Boot framework.",
    skills: ["SpringBoot"],
    verifyUrl: "https://www.linkedin.com/learning/certificates/33d9e5056650b0a69d66f9b2d8b70db5b3bc1fcf6481b97a1983b7a53bfb10c6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BtiubpISyQuq63J0Os40j2A%3D%3D",
    downloadUrl: "https://www.linkedin.com/learning/certificates/33d9e5056650b0a69d66f9b2d8b70db5b3bc1fcf6481b97a1983b7a53bfb10c6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BtiubpISyQuq63J0Os40j2A%3D%3D",
  },
  {
    title: "Certificate of Accomplishment in React",
    issuer: "HackerRank",
    date: "2025 Sep 08",
    description: "Certification demonstrating proficiency in React.js for building dynamic web applications.",
    skills: ["React", "JavaScript", "Frontend Development"],
    credentialId: "6F1193C86F3",
    verifyUrl: "http://email.postmaster.hackerrankmail.com/c/eJxskUGP2yAQhX8NPkYwA2Nz8KFS5L9hjWG8QbETC-Om_fcVrrpKtXtk3sd7vCH2noihkd60rkWNBNjcet_h7KZoYgzIGGWehGA2AJp50nZqUg8anPa60-jQ4iUKE4M11koAH6OyenvuZeW9SL7cONwlZ37cV07LJTzXZulvpWwKfygYFAyv1-uNqoSCocJjlpiyhFLPZSyZw13hEJ6PIr-KwusJFVm3hYuMBj2OYJG61oMC-us5pqjw-ja-y2-FV0dO2GrSXWvQMXc2itbTZF3kyc7Usud21qSA_k857WrUP-U4zhERYssz-YATOdPZFkwXCX3n3ezBKKDyVHit1XcFrrZ3tb_7fgMOhiC5pDkFLrKfA5qN8QihoxmrxXCUdVwlpqNewKvUB1WSqrA_jxzkFL4u6pMKvG6cPh4nd8th3O9pWfbxLbzJ_ZaOlZfMD9mOzKA1KKs_Pn-09F8Tmp89_AkAAP__M6fAPQ",
    downloadUrl: "https://drive.google.com/file/d/1W2jJHceC6PzHVgfcvDv7N_cMruP-2gYg/view?usp=sharing",
  },
  // {
  //   title: "Machine Learning Specialization",
  //   issuer: "Stanford University (Coursera)",
  //   date: "2023",
  //   description: "Comprehensive specialization covering machine learning algorithms and practical applications.",
  //   skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
  //   credentialId: "COURSERA-ML-345678",
  //   verifyUrl: "#",
  //   downloadUrl: "#",
  // },
  // {
  //   title: "React Developer Certification",
  //   issuer: "Meta",
  //   date: "2022",
  //   description: "Professional certification demonstrating advanced React development skills and best practices.",
  //   skills: ["React", "JavaScript", "Redux", "Testing"],
  //   credentialId: "META-REACT-901234",
  //   verifyUrl: "#",
  //   downloadUrl: "#",
  // },
]

export function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications and achievements that validate my expertise in various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-muted-foreground">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">ID: {cert.credentialId}</span>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Verify
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
