"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Senior AI Architect",
    company: "mama health technologies GmbH",
    period: "Apr 2026 - Present",
    description:
      "Architecting a multi-agent medical assistant platform for rare chronic disease communities across EU & US, built on LiteLLM, Pydantic, Claude SDK, and DSPy. Leading a patient-side AI companion that builds disease-progression models from structured symptom data, plus a pharma-side analytics assistant supporting partners including Bayer. Designing Hybrid Search pipelines on Qdrant (BM25 + dense Gemini embeddings via HNSW, RRF fusion, HyDE) evaluated with F1, MRR, and nDCG.",
  },
  {
    title: "Senior AI Solutions Architect",
    company: "str8con GmbH (Remote)",
    period: "Sep 2025 - Mar 2026",
    description:
      "Led a team building an Arbeitszeugnisgenerator on ServiceNow HRSD + Now Assist for a German Mittelstand enterprise. Initiated a multi-language AI voice assistant integrating Twilio with ServiceNow Now Assist Voice for a major Frankfurt company. Architected a multi-tenant GenAI solution targeting €50K/year operational savings across 5+ clients.",
  },
  {
    title: "ML/AI Engineering → Senior AI Engineering Lead",
    company: "Reply GmbH (ML Reply / KI Reply)",
    period: "Jul 2023 - Aug 2025",
    description:
      "Delivered enterprise AI to Porsche, BMW, DHL, Vodafone, Red Bull, and Siemens. Project Lead on Porsche's vehicle diagnostics modernization (team of 10, 30K+ workshops in 16 languages, 150K+ daily requests, €300K/year savings, 99.996% behavioral parity). Co-architected a multi-agent orchestration platform on AWS later sold to BMW. Built a LangGraph agent harness orchestrating 50+ coding agents across 200+ DHL repos, cutting tech-debt resolution by 60%. Delivered a GDPR-compliant Medical Conversational Agent processing 10TB+ clinical data. Promoted to Senior in Sep 2024.",
  },
  {
    title: "AI/ML Engineer",
    company: "Fraunhofer-Gesellschaft - Data Analytics",
    period: "Jun 2022 - Jul 2023",
    description:
      "Led design and implementation of a semantic search solution with major research centers, deployed via CI/CD to private cloud supporting 1,000+ active users. Built an MLFlow pipeline training and serving 16+ AI models behind a secure JWT endpoint, cutting deployment time by 50%.",
  },
  {
    title: "Full-Stack Developer",
    company: "Fraunhofer FOKUS",
    period: "Nov 2020 - May 2022",
    description:
      "Built interactive web apps for the public IT sector visualizing global research datasets (React, D3.js, FastAPI). Formulated a custom Rasa + BERT pipeline for multilingual government queries achieving 15% higher intent accuracy vs Dialogflow.",
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
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-indigo-500/50">
              <div className="absolute -inset-1 bg-indigo-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200" />

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
                className="w-6 h-6 rounded-full bg-indigo-600 z-10 flex items-center justify-center"
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
