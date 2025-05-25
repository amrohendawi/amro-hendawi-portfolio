"use client"

import { motion } from "framer-motion"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CertificationCardProps {
  title: string
  issuer: string
  year: string
  status?: 'completed' | 'in-progress'
  credentialUrl?: string
  icon?: string
}

export function CertificationCard({
  title,
  issuer,
  year,
  status = 'completed',
  credentialUrl,
  icon,
}: CertificationCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm">{issuer}</p>
            </div>
          </div>
          {status === 'in-progress' && (
            <Badge
              variant="secondary"
              className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
            >
              In Progress
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <Calendar className="h-4 w-4" />
            <span>{year}</span>
          </div>
          {credentialUrl && (
            <Link href={credentialUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="ghost"
                className="text-zinc-400 hover:text-purple-400"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Credential
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const certifications = [
  {
    title: "Azure AI Engineer Associate AI-104",
    issuer: "Microsoft Azure",
    year: "2024",
    status: "in-progress" as const,
  },
  {
    title: "Build and Deploy ML on Vertex AI",
    issuer: "Google Cloud",
    year: "2024",
    status: "completed" as const,
  },
  {
    title: "Serverless LLM Apps with Amazon Bedrock",
    issuer: "DeepLearning.ai",
    year: "2024",
    status: "completed" as const,
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "The Linux Foundation",
    year: "2024",
    status: "completed" as const,
  },
  {
    title: "AZ-900: Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    status: "completed" as const,
  },
  {
    title: "AWS SAA-C03 Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    status: "completed" as const,
  },
]

export function CertificationsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <CertificationCard key={cert.title} {...cert} />
      ))}
    </div>
  )
}
