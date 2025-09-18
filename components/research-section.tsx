import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText } from "lucide-react"

// const researchProjects = [
//   // {
//   //   title: "Machine Learning for Predictive Analytics",
//   //   description:
//   //     "Developing novel algorithms for time-series prediction in financial markets using deep learning techniques and ensemble methods.",
//   //   category: "Machine Learning",
//   //   status: "Published",
//   //   publicationUrl: "#",
//   //   paperUrl: "#",
//   //   keywords: ["Deep Learning", "Time Series", "Financial Analytics", "Neural Networks"],
//   // }
// ]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Published":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Under Review":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
    case "In Progress":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Research & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My research focuses on advancing the field of computer science through innovative approaches to machine
            learning, distributed systems, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchProjects.map((research, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="mb-2">
                    {research.category}
                  </Badge>
                  <Badge className={getStatusColor(research.status)}>{research.status}</Badge>
                </div>
                <CardTitle className="text-xl text-balance">{research.title}</CardTitle>
                <CardDescription className="text-pretty">{research.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {research.keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {research.status === "Published" && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={research.publicationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Publication
                      </a>
                    </Button>
                  )}
                  <Button size="sm" asChild>
                    <a href={research.paperUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      Paper
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
