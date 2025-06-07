"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

const projects = [
	{
		title: "Intent-Aware Conversational AI",
		description:
			"Master's Thesis project (Grade 1.0): Built before ChatGPT, combining LLMs with internet retrieval and uncertainty modeling to reduce hallucinations.",
		tags: ["LLMs", "RAG", "Graph Analysis", "Meta-Awareness"],
		href: "/projects/intent-aware-conversational-ai",
		image: "/images/projects/iaia-cs/intent-aware-conversational-ai.jpg",
	},
	{
		title: "BERT4Rec Recommender System",
		description:
			"Implementation of the BERT-based sequential recommendation system for personalized content suggestions.",
		tags: ["Transformers", "BERT", "Recommender Systems", "NLP"],
		href: "/projects/bert4rec-recommender-system",
		image: "/images/projects/bert4rec/autoregressive_models.drawio.png",
	},
	{
		title: "eBPF Real-time Network Monitoring",
		description:
			"Industry 4.0 solution using eBPF & XDP for sub-millisecond detection latency across multi-cloud environments.",
		tags: ["eBPF", "XDP", "Network Monitoring", "Multi-Cloud"],
		href: "/projects/ebpf-network-monitoring",
		image: "/images/projects/ebpf-realtime-network-monitoring/ebpf_user_kernel.drawio.png",
	},
	{
		title: "Bookstore Chatbot with Rasa",
		description:
			"Multilingual chatbot for e-commerce, providing personalized book recommendations and order tracking.",
		tags: ["Rasa", "NLP", "Vue.js", "Docker", "Chatbot"],
		href: "/projects/bookstore-chatbot-rasa",
		image: "/images/projects/bookstore-chatbot/e-bookstore.png",
	},
	{
		title: "OpenStack Cloud Deployment",
		description:
			"Private cloud infrastructure using Kolla-Ansible on Google Cloud Platform with performance benchmarking.",
		tags: ["OpenStack", "Kolla-Ansible", "Cloud Infrastructure", "GCP"],
		href: "/projects/openstack-cloud-deployment",
		image: "/images/projects/deploy-cloud-service-kolla-ansible/kolla-ansible.png",
	},
	{
		title: "Adversarial Attacks in AIOps",
		description:
			"Research on security vulnerabilities in AI-based operations, testing defense mechanisms against adversarial examples.",
		tags: ["AIOps", "Security", "Adversarial ML", "MLOps"],
		href: "/projects/adversarial-attacks-aiops",
		image: "/images/projects/adversarial-attacks-in-aiops/resnet_arch_for_ts.png",
	},
]

export default function ProjectsPage() {
	return (
		<div className="container max-w-6xl py-12">
			{/* Header Section - Animate immediately */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-16"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="inline-block mb-4"
				>
					<div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
						<span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Portfolio Showcase
						</span>
					</div>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
				>
					All{" "}
					<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Projects
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="text-xl text-zinc-400 max-w-2xl mx-auto"
				>
					Explore my technical work spanning AI/ML engineering, cloud
					infrastructure, and enterprise software development
				</motion.p>
			</motion.div>

			{/* Background decoration */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				<div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
				<div className="absolute top-1/3 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
				<div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
			</div>

			{/* Projects Grid */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.5 }}
				className="grid gap-8 relative z-10"
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.6 + index * 0.1,
							ease: "easeOut",
						}}
						whileHover={{ scale: 1.02 }}
						className="group"
					>
						<ProjectLink {...project} />
					</motion.div>
				))}
			</motion.div>

			{/* Call to action */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 1.2 }}
				className="text-center mt-16"
			>
				<div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900/50 to-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
					<h3 className="text-2xl font-bold mb-4">
						Interested in collaboration?
					</h3>
					<p className="text-zinc-400 mb-6 max-w-md mx-auto">
						I'm always open to discussing new opportunities and innovative
						AI/ML projects.
					</p>
					<Link href="/#contact">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
						>
							Get in Touch
						</motion.button>
					</Link>
				</div>
			</motion.div>
		</div>
	)
}

function ProjectLink({
	title,
	description,
	tags,
	href,
	image,
}: {
	title: string
	description: string
	tags: string[]
	href: string
	image: string
}) {
	return (
		<Link href={href}>
			<GlassmorphicCard>
				<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-800/60 group-hover:border-purple-500/30">
					{/* Project Image */}
					<div className="lg:w-64 lg:h-48 flex-shrink-0">
						<div className="relative w-full h-48 lg:h-full rounded-lg overflow-hidden bg-zinc-800/50 border border-zinc-700/50">
							<img
								src={image}
								alt={title}
								className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
						</div>
					</div>

					<div className="flex-grow">
						<div className="flex items-start justify-between mb-4">
							<h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
								{title}
							</h3>
							<motion.div whileHover={{ x: 5 }} className="flex-shrink-0 ml-4">
								<div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
									<ArrowRight className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
								</div>
							</motion.div>
						</div>

						<p className="text-zinc-400 text-lg leading-relaxed mb-6">
							{description}
						</p>

						<div className="flex flex-wrap gap-2">
							{tags.map((tag, index) => (
								<motion.span
									key={tag}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
									className="px-3 py-1 rounded-full text-sm font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300"
								>
									{tag}
								</motion.span>
							))}
						</div>
					</div>
				</div>
			</GlassmorphicCard>
		</Link>
	)
}