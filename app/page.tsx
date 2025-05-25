import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { BlogCard } from "@/components/blog-card"
import { CertificationsGrid } from "@/components/certifications-grid"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Senior ML/AI Engineer & Team Lead</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Amro Hendawi
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I architect enterprise AI systems with 5+ years of experience in GenAI, multi-agent systems, and scalable AI solutions on AWS, Azure, and GCP.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                <span className="relative z-10 flex items-center">
                  View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
              >
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/amrohendawi/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:amro.hendawi@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70" />
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Amro Hendawi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a Senior ML/AI Engineer with over 5 years of experience architecting enterprise AI systems across the automotive, industrial tech, and logistics sectors. I specialize in Generative AI (GenAI), multi-agent systems, LLMOps, and scalable AI architectures on AWS, Azure, and GCP.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I've led cross-functional engineering teams, delivered patented AI products, and generated over €300K in annual cost savings through AI-driven automation and system modernization. My work combines hands-on engineering, deep AI knowledge, and a passion for building AI solutions that make a measurable impact.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Currently based in Berlin, I hold an M.Sc. in Computer Engineering from TU Berlin with a GPA of 1.0, and I'm multilingual, speaking Arabic, English, German, Turkish, and French.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Amro Hendawi</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">amro.hendawi@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Berlin, Germany</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+49 176 47121256</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Education</div>
                    <div className="font-medium">M.Sc. Computer Engineering</div>
                    <div className="text-xs text-zinc-400">TU Berlin (GPA: 1.0)</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Languages</div>
                    <div className="font-medium text-sm">AR, EN, DE, TR, FR</div>
                    <div className="text-xs text-zinc-400">Native + 4 fluent</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">Download Resume</Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Python" level={95} />
            <SkillBadge name="GenAI/LLMs" level={90} />
            <SkillBadge name="LangChain" level={85} />
            <SkillBadge name="AWS" level={85} />
            <SkillBadge name="Azure" level={80} />
            <SkillBadge name="Kubernetes" level={85} />
            <SkillBadge name="FastAPI" level={90} />
            <SkillBadge name="Java" level={80} />
            <SkillBadge name="JavaScript" level={75} />
            <SkillBadge name="Docker" level={85} />
            <SkillBadge name="MongoDB" level={80} />
            <SkillBadge name="PostgreSQL" level={75} />
            <SkillBadge name="MLflow" level={80} />
            <SkillBadge name="Prometheus" level={75} />
            <SkillBadge name="Grafana" level={75} />
            <SkillBadge name="Git/CI/CD" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-950/50">
        <div className="container">
          <SectionHeading title="Projects" subtitle="Featured work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProjectCard
              title="Intent-Aware Conversational AI"
              description="Master's Thesis (Grade 1.0): Combined LLMs with internet retrieval and uncertainty modeling to reduce hallucinations."
              tags={["LLMs", "RAG", "NLP"]}
              image="/images/projects/iaia-cs/intent-aware-conversational-ai.jpg"
              demoUrl="/projects/intent-aware-conversational-ai"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="Enterprise Network Monitoring"
              description="Industry 4.0 solution using eBPF & XDP for sub-millisecond detection latency across multi-cloud environments."
              tags={["eBPF", "XDP", "Networking"]}
              image="/images/projects/ebpf-realtime-network-monitoring/ebpf_user_kernel.drawio.png"
              demoUrl="/projects/ebpf-network-monitoring"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="Bookstore Chatbot with Rasa"
              description="Multilingual chatbot for e-commerce, providing personalized book recommendations and order tracking."
              tags={["Rasa", "NLP", "Vue.js"]}
              image="/images/projects/bookstore-chatbot/e-bookstore.png"
              demoUrl="/projects/bookstore-chatbot-rasa"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="BERT4Rec Recommender System"
              description="Implementation of the BERT-based sequential recommendation system for personalized content suggestions."
              tags={["Transformers", "BERT", "ML"]}
              image="/images/projects/bert4rec/autoregressive_models.drawio.png"
              demoUrl="/projects/bert4rec-recommender-system"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="OpenStack Cloud Deployment"
              description="Private cloud infrastructure using Kolla-Ansible on Google Cloud Platform with performance benchmarking."
              tags={["OpenStack", "DevOps", "Cloud"]}
              image="/images/projects/deploy-cloud-service-kolla-ansible/openstack-dashboard.png"
              demoUrl="/projects/openstack-cloud-deployment"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="Adversarial Attacks in AIOps"
              description="Research on security vulnerabilities in AI-based operations, testing defense mechanisms against adversarial examples."
              tags={["AIOps", "Security", "ML"]}
              image="/images/projects/adversarial-attacks-in-aiops/resnet_arch_for_ts.png"
              demoUrl="/projects/adversarial-attacks-aiops"
              repoUrl="https://github.com/amrohendawi"
            />
          </div>
          
          {/* View All Projects Button */}
          <div className="flex justify-center mt-12">
            <Link href="/projects">
              <Button 
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Publications & Blog Section */}
      <section id="publications" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Publications & Research" subtitle="Technical articles and research work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <BlogCard
              title="Intent-Aware Internet-Augmented Conversational AI"
              description="Master's Thesis research on building conversational AI systems that understand user intent and reduce hallucinations through meta-awareness and internet retrieval."
              date="2023-01-12"
              tags={["LLM", "RAG", "Fine-tuning", "NLP", "Conversational Search", "Intent Detection"]}
              readTime="15 min read"
              githubUrl="/projects/intent-aware-conversational-ai"
            />
            <BlogCard
              title="BERT4Rec: BERT as a Recommender System"
              description="Implementation and analysis of BERT-based sequential recommendation system, exploring bidirectional encoder representations for personalized recommendations."
              date="2022-10-18"
              tags={["Transformers", "BERT", "Recommender Systems", "NLP", "Machine Learning"]}
              readTime="12 min read"
              githubUrl="/projects/bert4rec-recommender-system"
            />
            <BlogCard
              title="Real-time Network Monitoring with eBPF & XDP"
              description="Building highly scalable real-time network monitoring systems using eBPF and XDP for Industry 4.0 applications with sub-millisecond latency."
              date="2022-02-18"
              tags={["eBPF", "XDP", "Network Monitoring", "Real-time Systems", "Linux"]}
              readTime="10 min read"
              githubUrl="/projects/ebpf-network-monitoring"
            />
            <BlogCard
              title="Bookstore Chatbot with Rasa & Vue.js"
              description="Full-stack e-commerce chatbot implementation using Rasa for NLP, Vue.js for frontend, and Docker for deployment with multilingual support."
              date="2022-02-10"
              tags={["Rasa", "NLP", "Vue.js", "Docker", "Chatbot", "German", "English"]}
              readTime="8 min read"
              githubUrl="/projects/bookstore-chatbot-rasa"
            />
            <BlogCard
              title="Deploy Private Cloud with Kolla-Ansible"
              description="Step-by-step guide to deploying your own private cloud service provider using OpenStack and Kolla-Ansible on Google Cloud Platform."
              date="2021-02-12"
              tags={["OpenStack", "Kolla-Ansible", "Cloud Computing", "DevOps", "Infrastructure"]}
              readTime="12 min read"
              githubUrl="/projects/openstack-cloud-deployment"
            />
            <BlogCard
              title="Adversarial Attacks in AIOps"
              description="Research on security vulnerabilities in AI-driven operations systems and defense mechanisms against adversarial attacks."
              date="2021-07-30"
              tags={["AI Security", "AIOps", "Adversarial Attacks", "Machine Learning Security"]}
              readTime="10 min read"
              githubUrl="/projects/adversarial-attacks-aiops"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Certifications" subtitle="Professional credentials and achievements" />

          <div className="mt-16">
            <CertificationsGrid />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">amro.hendawi@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/amrohendawi</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/amrohendawi</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span>Available for AI/ML consulting and leadership opportunities</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Amro</span>
              <span className="text-white">Hendawi</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Amro Hendawi. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/amrohendawi" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/amrohendawi/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:amro.hendawi@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
