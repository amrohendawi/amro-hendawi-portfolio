"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  description: string
  date: string
  tags: string[]
  readTime?: string
  image?: string
  slug?: string
  externalUrl?: string
  githubUrl?: string
}

export function BlogCard({
  title,
  description,
  date,
  tags,
  readTime = "5 min read",
  image = "/placeholder.svg?height=200&width=400",
  slug,
  externalUrl,
  githubUrl,
}: BlogCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-purple-500/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <span>•</span>
            <span>{readTime}</span>
          </div>

          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-300 mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-zinc-700/50 text-zinc-300 hover:bg-purple-500/20 transition-colors"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge
                variant="secondary"
                className="bg-zinc-700/50 text-zinc-300"
              >
                +{tags.length - 4} more
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2">
            {externalUrl && (
              <Link href={externalUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border-purple-500/30"
                  variant="outline"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read More
                </Button>
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-zinc-400 hover:text-white"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
