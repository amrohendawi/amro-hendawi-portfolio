import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter, Bot, Sparkles, Search, Cpu, Activity, Cloud, Database, Layers } from "lucide-react"

// Skill clusters — Senior AI Architect stack, May 2026
const skillGroups = [
  {
    icon: Bot,
    title: "AI & Agents",
    hue: "indigo",
    skills: [
      "Multi-Agent Systems", "Agent Harnesses", "Context Engineering",
      "Claude Agent SDK", "OpenAI Agents SDK", "LangGraph", "DeepAgents",
      "AutoGen", "LangChain", "DSPy", "MCP Servers", "LiteLLM",
      "Pydantic AI", "n8n",
    ],
  },
  {
    icon: Sparkles,
    title: "LLMs & Foundation Models",
    hue: "fuchsia",
    skills: [
      "Multi-Modal LLMs", "self-hosting",
      "Reasoning Models", "Prompt Engineering", "Synthetic Data",
      "RLHF / DPO", "Distillation", "Speculative Decoding",
    ],
  },
  {
    icon: Search,
    title: "RAG & Semantic Search",
    hue: "emerald",
    skills: [
      "RAG", "HyDE", "Hybrid Search", "BM25", "HNSW", "RRF Fusion",
      "Re-ranking", "Cross-Encoders", "Embeddings", "Chunking Strategies",
      "Semantic Search", "Knowledge Graphs"
    ],
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    hue: "sky",
    skills: [
      "PyTorch", "TensorFlow", "Transformers", "BERT", "LSTM",
      "CNN", "RNN", "GNN", "Diffusion Models", "GANs", "VAEs",
      "Hugging Face", "spaCy", "NLTK", "scikit-learn", "NumPy", "pandas",
      "NLP / NLU",
    ],
  },
  {
    icon: Activity,
    title: "MLOps & LLMOps",
    hue: "teal",
    skills: [
      "MLFlow", "Kubeflow", "KServe", "vLLM", "SGLang",
      "Weights & Biases", "Langfuse", "LangSmith", "Ragas",
      "OpenLLMetry", "PEFT / LoRA / QLoRA", "Unsloth", "LlamaFactory",
      "CUDA"
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    hue: "cyan",
    skills: [
      "AWS", "Google Cloud", "Bedrock", "CloudFormation", "Terraform", "Azure AI Studio",
      "GCP Vertex AI", "OpenStack", "Kubernetes", "Docker", "Helm",
      "ArgoCD", "Kargo",
      "GitHub Actions", "Prometheus", "Grafana", "Splunk",
      "Datadog", "OpenTelemetry",
    ],
  },
  {
    icon: Database,
    title: "Data & Storage",
    hue: "amber",
    skills: [
      "Qdrant", "Pinecone", "pgvector", "ChromaDB", "FAISS",
      "PostgreSQL", "MongoDB", "Redis", "Supabase", "Neon DB", "ClickHouse", "Drizzle", "Prisma",
      "Dagster", "AWS Glue Jobs", "Apache Kafka", "Apache Flink", "dbt",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack & Web",
    hue: "rose",
    skills: [
      "Next.js", "Angular",
      "Tailwind CSS", "SCSS", "shadcn/ui", "Framer Motion", "Figma",
      "Node.js", "Spring Boot", "FastAPI",
      "REST", "OpenAPI", "gRPC",
      "WebSockets", "SSE", "Edge Functions",
      "Clerk", "Keycloak", "FusionAuth",
      "OAuth 2.0", "SAML", "JWT",
      "RBAC", "IAM",
    ],
  },
] as const

// Hue → static Tailwind classes (Tailwind needs full literal strings to JIT)
const hueStyles: Record<string, { wrap: string; glyph: string; chip: string }> = {
  indigo:  { wrap: "bg-indigo-500/15 ring-1 ring-indigo-500/30",   glyph: "text-indigo-300",   chip: "bg-indigo-500/[0.05] text-indigo-300 border-indigo-500/15 hover:bg-indigo-500/15 hover:border-indigo-400/50 hover:text-indigo-100" },
  fuchsia: { wrap: "bg-fuchsia-500/15 ring-1 ring-fuchsia-500/30", glyph: "text-fuchsia-300",  chip: "bg-fuchsia-500/[0.04] text-fuchsia-300 border-fuchsia-500/15 hover:bg-fuchsia-500/15 hover:border-fuchsia-400/50 hover:text-fuchsia-100" },
  emerald: { wrap: "bg-emerald-500/15 ring-1 ring-emerald-500/30", glyph: "text-emerald-300", chip: "bg-emerald-500/[0.04] text-emerald-300 border-emerald-500/15 hover:bg-emerald-500/15 hover:border-emerald-400/50 hover:text-emerald-100" },
  sky:     { wrap: "bg-sky-500/15 ring-1 ring-sky-500/30",         glyph: "text-sky-300",     chip: "bg-sky-500/[0.04] text-sky-300 border-sky-500/15 hover:bg-sky-500/15 hover:border-sky-400/50 hover:text-sky-100" },
  teal:    { wrap: "bg-teal-500/15 ring-1 ring-teal-500/30",       glyph: "text-teal-300",    chip: "bg-teal-500/[0.04] text-teal-300 border-teal-500/15 hover:bg-teal-500/15 hover:border-teal-400/50 hover:text-teal-100" },
  cyan:    { wrap: "bg-cyan-500/15 ring-1 ring-cyan-500/30",       glyph: "text-cyan-300",    chip: "bg-cyan-500/[0.04] text-cyan-300 border-cyan-500/15 hover:bg-cyan-500/15 hover:border-cyan-400/50 hover:text-cyan-100" },
  amber:   { wrap: "bg-amber-500/15 ring-1 ring-amber-500/30",     glyph: "text-amber-300",   chip: "bg-amber-500/[0.04] text-amber-300 border-amber-500/15 hover:bg-amber-500/15 hover:border-amber-400/50 hover:text-amber-100" },
  rose:    { wrap: "bg-rose-500/15 ring-1 ring-rose-500/30",       glyph: "text-rose-300",    chip: "bg-rose-500/[0.04] text-rose-300 border-rose-500/15 hover:bg-rose-500/15 hover:border-rose-400/50 hover:text-rose-100" },
}

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { CertificationsGrid } from "@/components/certifications-grid"

export default function Portfolio() {
  return (
    <div className="bg-grain min-h-screen text-white relative" style={{ background: "radial-gradient(ellipse at top, hsl(228 25% 8%), hsl(228 22% 5%) 50%, hsl(230 20% 3%))" }}>
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-[28rem] h-[28rem] bg-indigo-800 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-blob" />
          <div className="absolute top-1/3 right-10 w-64 h-64 bg-lime-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.12] animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-slate-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-indigo-500/[0.08] backdrop-blur-sm border border-indigo-400/25 ring-1 ring-indigo-400/10 mb-4">
                <span className="relative w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]">
                  <span className="absolute inset-0 rounded-full bg-lime-400 animate-ping opacity-75" />
                </span>
                <span className="relative z-10 text-indigo-100 tracking-wide">Senior AI Architect</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-zinc-400 font-light text-3xl md:text-4xl mb-2">Hi, I'm</span>
              <span className="block text-zinc-50">
                Amro <span className="relative">Hendawi<span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-lime-400/80 rounded-full" /></span>
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              I architect distributed AI systems with 6+ years engineering multi-agent platforms, hybrid semantic search, and MLOps across healthcare, automotive, and logistics.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/projects" className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-zinc-100/[0.04] hover:bg-zinc-100/[0.07] border border-white/10 hover:border-white/20 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-all">
                <span className="tracking-wide">View Projects</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-lime-400/90 text-zinc-950 group-hover:bg-lime-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
              <Link href="#contact" className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-zinc-400 hover:text-zinc-100 border border-white/10 hover:border-white/20 transition-all">
                Contact me
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
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
              <Link href="https://www.linkedin.com/in/amro-hendawi/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://medium.com/@amro.hendawi" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <svg viewBox="0 0 1043.63 592.71" className="h-5 w-5 fill-current">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                  </svg>
                  <span className="sr-only">Medium</span>
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
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-800 rounded-full mix-blend-screen filter blur-[130px] opacity-10" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-indigo-500/15 blur-xl opacity-70" />
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/Hendawi_Amro.jpeg"
                  alt="Amro Hendawi - Senior ML/AI Engineer & Team Lead"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
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
                  I'm a Senior AI Architect with 6+ years engineering distributed AI systems across healthcare, automotive, and logistics. I specialize in multi-agent systems, hybrid semantic search (BM25 + HNSW + RRF + HyDE), LLMOps, and scalable AI architectures on AWS, Azure, and GCP.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Currently I'm building AI-powered medical assistants for rare chronic diseases at mama health — a patient-side AI companion guiding treatment journeys and a pharma-side analytics assistant supporting partners including Bayer. Previously delivered enterprise AI to Porsche, BMW, DHL, Vodafone, Red Bull, and Siemens — generating <span className="text-lime-300 font-medium">€300K+ in annual savings</span> through legacy modernization and multi-agent orchestration platforms.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Based in Berlin, I hold an M.Sc. in Computer Engineering from TU Berlin (Grade 1.4, Thesis 1.0). I'm multilingual: Arabic (native), English, German, Turkish, and French.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Amro Hendawi</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <a
                      href="mailto:amro.hendawi@gmail.com"
                      className="font-medium hover:text-indigo-300 transition-colors break-all"
                    >
                      amro.hendawi@gmail.com
                    </a>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Berlin, Germany</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Phone</div>
                    <a
                      href="tel:+4917647121256"
                      className="font-medium hover:text-indigo-300 transition-colors"
                    >
                      +49 176 47121256
                    </a>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Education</div>
                    <div className="font-medium">M.Sc. Computer Engineering</div>
                    <div className="text-xs text-zinc-400">TU Berlin · Grade 1.4 (Thesis 1.0)</div>
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
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[130px] opacity-10" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-8" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies and expertise I work with" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {skillGroups.map(({ icon: Icon, title, hue, skills }) => {
              const s = hueStyles[hue]
              return (
                <GlassmorphicCard key={title}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${s.wrap}`}>
                        <Icon className={`h-5 w-5 ${s.glyph}`} />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <span key={skill} className={`px-2.5 py-1 text-xs font-medium rounded-md border ${s.chip} transition-colors`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassmorphicCard>
              )
            })}
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
              tags={["LLM", "RAG", "Fine-tuning", "NLP", "Conversational Search", "Intent Detection"]}
              image="/images/projects/iaia-cs/intent-aware-conversational-ai.jpg"
              demoUrl="/projects/intent-aware-conversational-ai"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="eBPF Real-time Network Monitoring"
              description="Industry 4.0 solution using eBPF & XDP for sub-millisecond detection latency across multi-cloud environments."
              tags={["eBPF", "XDP", "Network Monitoring", "Real-time Systems", "Linux"]}
              image="/images/projects/ebpf-realtime-network-monitoring/ebpf_user_kernel.drawio.png"
              demoUrl="/projects/ebpf-network-monitoring"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="Bookstore Chatbot with Rasa"
              description="Multilingual chatbot for e-commerce, providing personalized book recommendations and order tracking."
              tags={["Rasa", "NLP", "Vue.js", "Docker", "Chatbot", "German", "English"]}
              image="/images/projects/bookstore-chatbot/e-bookstore.png"
              demoUrl="/projects/bookstore-chatbot-rasa"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="BERT4Rec Recommender System"
              description="Implementation of the BERT-based sequential recommendation system for personalized content suggestions."
              tags={["Transformers", "BERT", "Recommender Systems", "NLP", "Machine Learning"]}
              image="/images/projects/bert4rec/autoregressive_models.drawio.png"
              demoUrl="/projects/bert4rec-recommender-system"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="OpenStack Cloud Deployment"
              description="Private cloud infrastructure using Kolla-Ansible on Google Cloud Platform with performance benchmarking."
              tags={["OpenStack", "Kolla-Ansible", "Cloud Computing", "DevOps", "Infrastructure"]}
              image="/images/projects/deploy-cloud-service-kolla-ansible/kolla-ansible.png"
              demoUrl="/projects/openstack-cloud-deployment"
              repoUrl="https://github.com/amrohendawi"
            />
            <ProjectCard
              title="Adversarial Attacks in AIOps"
              description="Research on security vulnerabilities in AI-based operations, testing defense mechanisms against adversarial examples."
              tags={["AI Security", "AIOps", "Adversarial Attacks", "Machine Learning Security"]}
              image="/images/projects/adversarial-attacks-in-aiops/resnet_arch_for_ts.png"
              demoUrl="/projects/adversarial-attacks-aiops"
              repoUrl="https://github.com/amrohendawi"
            />
          </div>
          
          {/* View All Projects Button */}
          <div className="flex justify-center mt-12">
            <Link href="/projects" className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-zinc-100/[0.04] hover:bg-zinc-100/[0.07] border border-white/10 hover:border-white/20 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-all">
              <span className="tracking-wide">View all projects</span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-lime-400/90 text-zinc-950 group-hover:bg-lime-400 group-hover:translate-x-0.5 transition-all">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-800 rounded-full mix-blend-screen filter blur-[140px] opacity-15 animate-pulse animation-delay-2000" />
        </div>

        <div className="container relative z-10">
          <SectionHeading 
            title="Publications & Thought Leadership" 
            subtitle="Contributing to the AI community through research and insights"
          />
          
          {/* Featured badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 backdrop-blur-sm">
              <div className="relative w-5 h-5">
                <svg viewBox="0 0 1043.63 592.71" className="w-full h-full fill-white">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white">Published on Medium</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <BlogCard
              title="From Autoregressive Models to Artificial General Intelligence (AGI)"
              description="Exploring the path from LLMs to AGI through chain-of-thought reasoning, tree-of-thought exploration, and advanced techniques like MCTS and RLHF. A deep dive into building an artificial brain by simulating human cognitive processes with modular AI architectures."
              date="2024-12-27"
              tags={["AGI", "LLM", "Artificial Intelligence", "Chain-of-Thought", "MCTS", "RLHF", "Knowledge Graphs", "Neural Architecture"]}
              readTime="8 min read"
              image="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*fdagJow_V00Y7HH6L3BxAQ.png"
              externalUrl="https://medium.com/ai-powered-software-development/from-autoregressive-models-to-artificial-general-intelligence-agi-987c14ea67bc"
            />
            <BlogCard
              title="Europe's Digital Sovereignty Imperative"
              description="A comprehensive analysis of Europe's path to digital independence. Covering EU-compliant cloud infrastructure, open-source alternatives, sovereign AI models, and the regulatory landscape shaping the future of European tech. From Mistral AI to Nextcloud, discover the ecosystem enabling true digital sovereignty."
              date="2025-05-23"
              tags={["Digital Sovereignty", "European Tech", "Open Source", "GDPR", "AI Act", "Cloud Infrastructure", "Mistral AI", "Self-Hosting"]}
              readTime="11 min read"
              image="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*LmMH2zH4nrWKhnITQx29NQ.png"
              externalUrl="https://medium.com/ai-powered-software-development/europes-digital-sovereignty-imperative-58444e837f98"
            />
          </div>

          {/* Call to action for more articles */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400">
                More Articles Coming Soon
              </h3>
              <p className="text-zinc-400 max-w-md">
                I regularly write about AI/ML, system architecture, and emerging technologies. Follow me on Medium to stay updated.
              </p>
              <Link
                href="https://medium.com/@amro.hendawi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-zinc-100/[0.04] hover:bg-zinc-100/[0.07] border border-white/10 hover:border-white/20 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-all"
              >
                <svg viewBox="0 0 1043.63 592.71" className="w-4 h-4 fill-current text-zinc-300">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                </svg>
                <span className="tracking-wide">Follow on Medium</span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-lime-400/90 text-zinc-950 group-hover:bg-lime-400 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-8" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[130px] opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-lime-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08]" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[130px] opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Certifications" subtitle="Professional credentials and achievements" />

          <div className="mt-16">
            <CertificationsGrid />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 relative min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-800 rounded-full mix-blend-screen filter blur-[130px] opacity-10" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-slate-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10" />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="flex justify-center mt-8">
            <div className="max-w-md w-full">
              <GlassmorphicCard>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <Link
                    href="mailto:amro.hendawi@gmail.com"
                    className="flex items-center gap-3 group rounded-lg -m-2 p-2 hover:bg-zinc-800/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Mail className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium text-sm group-hover:text-indigo-300 transition-colors">amro.hendawi@gmail.com</div>
                    </div>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/amro-hendawi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group rounded-lg -m-2 p-2 hover:bg-zinc-800/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Linkedin className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">LinkedIn</div>
                      <div className="font-medium text-sm group-hover:text-indigo-300 transition-colors">linkedin.com/in/amro-hendawi</div>
                    </div>
                  </Link>
                  <Link
                    href="https://github.com/amrohendawi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group rounded-lg -m-2 p-2 hover:bg-zinc-800/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                      <Github className="h-4 w-4 text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">GitHub</div>
                      <div className="font-medium text-sm group-hover:text-indigo-300 transition-colors">github.com/amrohendawi</div>
                    </div>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <h4 className="text-base font-medium mb-3">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">Available for AI/ML consulting and leadership opportunities</span>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-400">Amro</span>
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
            <Link href="https://www.linkedin.com/in/amro-hendawi/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://medium.com/@amro.hendawi" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <svg viewBox="0 0 1043.63 592.71" className="h-5 w-5 fill-current">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"/>
                </svg>
                <span className="sr-only">Medium</span>
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
