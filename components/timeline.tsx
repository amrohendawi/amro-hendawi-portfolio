"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior AI Engineering Lead – Consultant",
    company: "KI Reply GmbH",
    period: "Sep 2024 - Present",
    description:
      "Leading advanced AI consulting projects, focusing on enterprise GenAI solutions and multi-agent system architectures for DAX 40 clients. Deployed AI agents on Kubernetes for DHL, reducing tech debt resolution by 60%. Co-designed production-ready multi-agent orchestration platform.",
  },
  {
    title: "ML/AI Engineering Team Lead – Consultant",
    company: "ML Reply",
    period: "Jul 2023 - Aug 2024",
    description:
      "Led modernization of Porsche's vehicle diagnostics system (150K+ requests/day, €300K/year savings). Improved BMW's in-car recommender system using LLMs for contextual personalization. Built RAG pipelines for 500+ page documents deployed via Azure AI Studio.",
  },
  {
    title: "AI/ML Engineer",
    company: "Fraunhofer-Gesellschaft - Data Analytics",
    period: "Jun 2022 - Jul 2023",
    description:
      "Led the design and implementation of a patented semantic search solution in a cooperation with major research centers",
  },
  {
    title: "Full-Stack Developer",
    company: "Fraunhofer FOKUS",
    period: "Nov 2020 - Jun 2022",
    description: "Delivered public IT sector web apps with advanced data visualizations (React, D3.js). Led a patented semantic search engine project with CI/CD and secure cloud deployment.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200" />

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
