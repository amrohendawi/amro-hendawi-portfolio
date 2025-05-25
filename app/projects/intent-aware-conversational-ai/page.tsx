import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Calendar, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function IntentAwareConversationalAI() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime="2023-01-12">January 12, 2023</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Master's Thesis</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Intent-Aware
            </span>
            <br />
            Conversational AI
          </h1>

          <p className="text-xl text-zinc-300 max-w-3xl mb-8">
            Beyond Chatbot Blunders: Internet-Augmented Intent-Aware Conversational AI
            that grasps your intent, even for muddled questions. Built before ChatGPT with a grade of 1.0.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["LLM", "RAG", "Fine-tuning", "NLP", "Conversational Search", "Intent Detection", "PyTorch", "Transformers"].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mb-16">
        <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
          <Image
            src="/images/projects/iaia-cs/intent-aware-conversational-ai.jpg"
            alt="Intent-Aware Conversational AI System"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introduction */}
          <GlassmorphicCard>
            <SectionHeading title="Introduction" subtitle="Breaking new ground in conversational AI" />
            
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg">
                Tired of chatbots that fumble your meaning? My research breaks new ground with a world-first 
                conversational search system that grasps your intent, even for muddled questions. This 
                innovative approach hinges on two key advancements:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">Unveiling Hidden Meaning</h4>
                  <p>
                    The system employs cutting-edge techniques to unlock the true intent behind your queries. 
                    First, a Dialogue Heterogeneous Graph Network (D-HGN) meticulously analyzes past conversations, 
                    extracting the semantic context. This allows the system to understand the connections between 
                    your current request and prior interactions. Second, a custom-designed dataset fine-tunes the 
                    AI's ability to recognize and respond to ambiguous user queries with multiple potential meanings.
                  </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">Limitless Knowledge at Your Fingertips</h4>
                  <p>
                    Imagine a chatbot with the combined knowledge of Google and Bing! This system seamlessly 
                    integrates with search engines, granting it access to a virtually limitless knowledge base. 
                    This ensures factually accurate and highly relevant responses to your questions.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                <p className="text-lg font-medium text-center">
                  🎯 <strong>30-50% improvement</strong> over existing models on BLEU, ROUGE, and F1 metrics
                </p>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Background */}
          <GlassmorphicCard>
            <SectionHeading title="Background & Challenge" subtitle="The complexity of human language" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                Conversational AI has made significant strides in recent years, with chatbots becoming 
                increasingly prevalent in our daily lives. However, these systems often struggle to 
                understand user intent, leading to frustrating and unproductive interactions.
              </p>

              <p>
                The core challenge lies in the complexity of human language. People frequently use 
                ambiguous phrasing, colloquialisms, and incomplete sentences, making it difficult 
                for AI to accurately interpret their meaning.
              </p>

              <p>
                The state-of-the-art conversational AI models that use the revolutionary large language 
                models (LLM) typically rely on predicting the next word in a sentence or generating 
                responses based on pre-defined templates, limiting their ability to understand nuanced queries.
              </p>
            </div>
          </GlassmorphicCard>

          {/* System Design */}
          <GlassmorphicCard>
            <SectionHeading title="System Architecture" subtitle="ParlAI-powered conversational search" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                The ParlAI framework powers our conversational search model, which is built with a shared 
                encoder, multiple decoders, a dialogue manager, and a search engine. The encoder processes 
                input, creating hidden states that the decoders use to generate task-specific outputs.
              </p>

              {/* System Design Image */}
              <div className="my-8">
                <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                  <Image
                    src="/images/projects/iaia-cs/system-design.png"
                    alt="System Architecture Diagram"
                    width={800}
                    height={450}
                    className="w-full h-full object-contain bg-white/5"
                  />
                </div>
                <p className="text-sm text-zinc-400 text-center mt-2">
                  Multi-task learning architecture with shared encoder and task-specific decoders
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Key Components</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Shared Encoder Architecture</li>
                    <li>• Multiple Task-Specific Decoders</li>
                    <li>• Dialogue Heterogeneous Graph Network (D-HGN)</li>
                    <li>• Search Engine Integration</li>
                    <li>• Intent Classification Module</li>
                    <li>• Context-Aware Response Generation</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Technologies Used</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• PyTorch & Transformers</li>
                    <li>• ParlAI Framework</li>
                    <li>• T5 & BART Models</li>
                    <li>• Custom Graph Networks</li>
                    <li>• Semi-Supervised Learning</li>
                    <li>• Synthetic Data Generation</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Datasets */}
          <GlassmorphicCard>
            <SectionHeading title="Datasets & Training" subtitle="Multi-task learning approach" />
            
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-3 text-white">Task</th>
                      <th className="text-left py-3 text-white">Dataset</th>
                      <th className="text-left py-3 text-white">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-zinc-800">
                      <td className="py-3">Reasoning & Intent Detection</td>
                      <td className="py-3 font-medium">ConvAI3</td>
                      <td className="py-3">Human-human conversations with clarifying questions</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3" />
                      <td className="py-3 font-medium">QReCC</td>
                      <td className="py-3">End-to-end open-domain QA dataset</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3">Question Answering</td>
                      <td className="py-3 font-medium">Natural Questions</td>
                      <td className="py-3">Open Domain Question Answering dataset</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-zinc-300">
                The training approach combines multiple datasets to create a robust multi-task learning 
                environment, enabling the model to handle various aspects of conversational AI simultaneously.
              </p>

              {/* Training Performance Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Training Loss (ConvAI3)</h4>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_loss_train.png"
                      alt="ConvAI3 Training Loss"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Validation Loss (ConvAI3)</h4>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_loss_valid.png"
                      alt="ConvAI3 Validation Loss"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Results & Performance */}
          <GlassmorphicCard>
            <SectionHeading title="Results & Performance" subtitle="Benchmark improvements and metrics" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                The model demonstrated significant improvements across multiple evaluation metrics, 
                achieving state-of-the-art performance on conversational search tasks with enhanced 
                intent understanding capabilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-4">Perplexity Scores</h4>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ppl_train.png"
                      alt="Training Perplexity"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Token Accuracy</h4>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_token_acc_train.png"
                      alt="Token Accuracy"
                      width={400}
                      height={300}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20">
                <h4 className="font-semibold text-white mb-4">Key Performance Metrics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">30-50%</div>
                    <div className="text-zinc-400">BLEU Score Improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">85%</div>
                    <div className="text-zinc-400">Intent Recognition Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">1.0</div>
                    <div className="text-zinc-400">Thesis Grade</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Project Info */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-zinc-500">Type</div>
                  <div className="text-white font-medium">Master's Thesis</div>
                </div>
                <div>
                  <div className="text-zinc-500">Grade</div>
                  <div className="text-white font-medium">1.0 (Summa Cum Laude)</div>
                </div>
                <div>
                  <div className="text-zinc-500">Institution</div>
                  <div className="text-white font-medium">TU Berlin</div>
                </div>
                <div>
                  <div className="text-zinc-500">Duration</div>
                  <div className="text-white font-medium">8 months</div>
                </div>
                <div>
                  <div className="text-zinc-500">Status</div>
                  <div className="text-green-400 font-medium">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "PyTorch", "Transformers", "ParlAI", "T5", "BART", 
                  "Graph Networks", "NLP", "Deep Learning", "Semi-Supervised Learning"
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Achievements</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">30-50% improvement over existing models</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Novel intent-aware architecture</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Internet-augmented knowledge base</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Multi-task learning framework</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
