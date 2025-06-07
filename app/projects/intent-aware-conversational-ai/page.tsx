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

          {/* Background Examples */}
          <GlassmorphicCard>
            <SectionHeading title="Problem Examples" subtitle="Understanding ambiguous queries" />
            
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <Image
                    src="/images/projects/iaia-cs/intent-aware-conversational-ai.jpg"
                    alt="Example 1: Ambiguous query handling"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-zinc-400">Example 1: Intent clarification for ambiguous queries</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <Image
                    src="/images/projects/iaia-cs/intent-aware-conversational-ai-2.jpg"
                    alt="Example 2: Context-aware responses"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-zinc-400">Example 2: Context-aware response generation</p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <Image
                    src="/images/projects/iaia-cs/intent-aware-conversational-ai-3.jpg"
                    alt="Example 3: Multi-turn dialogue handling"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-zinc-400">Example 3: Multi-turn dialogue management</p>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* System Design & Architecture */}
          <GlassmorphicCard>
            <SectionHeading title="System Architecture" subtitle="ParlAI-powered conversational search model" />
            
            <div className="space-y-6 text-zinc-300">
              <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-700">
                <Image
                  src="/images/projects/iaia-cs/system-design.png"
                  alt="System Architecture Overview"
                  width={800}
                  height={500}
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-zinc-400 mt-3 text-center">General system modules overview</p>
              </div>

              <p>
                The ParlAI framework powers our conversational search model, which is built with a shared encoder, 
                multiple decoders, a dialogue manager, and a search engine. The encoder processes input, creating 
                hidden states that the decoders use to generate task-specific outputs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <h4 className="font-semibold text-purple-300 mb-2">🧠 Shared Encoder</h4>
                  <p className="text-sm">Processes input and creates hidden states for downstream tasks</p>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                  <h4 className="font-semibold text-pink-300 mb-2">🔀 Multiple Decoders</h4>
                  <p className="text-sm">Generate task-specific outputs for different conversation aspects</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-300 mb-2">💬 Dialogue Manager</h4>
                  <p className="text-sm">Manages conversation flow and context understanding</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-semibold text-green-300 mb-2">🔍 Search Engine</h4>
                  <p className="text-sm">Provides access to internet knowledge and real-time information</p>
                </div>
              </div>

              <p>
                The dialogue manager and search engine work together to create meaningful, user-friendly 
                dialogues and search results. This robust architecture, depicted as a combination of 
                agents in the ParlAI framework, provides a powerful and intuitive conversational search experience.
              </p>
            </div>
          </GlassmorphicCard>

          {/* Datasets and Data Generation */}
          <GlassmorphicCard>
            <SectionHeading title="Datasets & Data Generation" subtitle="Training data sources and synthetic data creation" />
            
            <div className="space-y-6 text-zinc-300">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-zinc-700 rounded-lg">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-purple-300">Task</th>
                      <th className="px-4 py-3 text-left text-pink-300">Dataset</th>
                      <th className="px-4 py-3 text-left text-blue-300">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr className="bg-zinc-900/30">
                      <td className="px-4 py-3 font-medium" rowSpan={2}>Reasoning and intent-detection</td>
                      <td className="px-4 py-3 text-purple-300 font-medium">ConvAI3</td>
                      <td className="px-4 py-3">Human-human conversations with clarifying questions</td>
                    </tr>
                    <tr className="bg-zinc-900/30">
                      <td className="px-4 py-3 text-purple-300 font-medium">QReCC</td>
                      <td className="px-4 py-3">End-to-end open-domain QA dataset</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium" rowSpan={3}>Question Answering</td>
                      <td className="px-4 py-3 text-pink-300 font-medium">NQ</td>
                      <td className="px-4 py-3">Open Domain Question Answering dataset</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-pink-300 font-medium">TriviaQA</td>
                      <td className="px-4 py-3">100K question-answer pairs from 65K Wikipedia documents</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-pink-300 font-medium">QuAC</td>
                      <td className="px-4 py-3">Modeling information seeking dialog understanding</td>
                    </tr>
                    <tr className="bg-zinc-900/30">
                      <td className="px-4 py-3 font-medium">Long-term memory</td>
                      <td className="px-4 py-3 text-blue-300 font-medium">MSC</td>
                      <td className="px-4 py-3">237k training and 25k evaluation multi-session examples</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Internet search</td>
                      <td className="px-4 py-3 text-green-300 font-medium">WoI</td>
                      <td className="px-4 py-3">Conversations grounded with internet-retrieved knowledge</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                <h4 className="font-semibold text-white mb-4">🤖 Synthetic Data Generation Process</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    <p><strong>Leveraging GPT-3:</strong> Few examples from ConvAI3 dataset were fed into GPT-3 to establish reference points</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    <p><strong>Customizing QReCC Data:</strong> GPT-3 generated corresponding entries mirroring ConvAI3 structure</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    <p><strong>Enhancing Data Volume:</strong> Created additional data points to enrich training material</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    <p><strong>Manual Review:</strong> Filtered irrelevant or nonsensical entries through manual review</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                <h5 className="font-semibold text-zinc-300 mb-3">Sample from ConvAI3 Preprocessed Dataset</h5>
                <div className="overflow-x-auto text-xs">
                  <table className="w-full border border-zinc-600 rounded">
                    <thead className="bg-zinc-700">
                      <tr>
                        <th className="px-2 py-2 text-left">Text</th>
                        <th className="px-2 py-2 text-left">Candidates</th>
                        <th className="px-2 py-2 text-left">Ambiguity</th>
                        <th className="px-2 py-2 text-left">Topic</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 border-t border-zinc-600">Find me information about diabetes education</td>
                        <td className="px-2 py-2 border-t border-zinc-600">Which type of diabetes?</td>
                        <td className="px-2 py-2 border-t border-zinc-600">2</td>
                        <td className="px-2 py-2 border-t border-zinc-600">Online diabetes resources</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Training Setup */}
          <GlassmorphicCard>
            <SectionHeading title="Training Setup & Configuration" subtitle="Multi-task learning with weighted objectives" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                During training, the model is trained on multiple tasks simultaneously using multi-task learning. 
                This involves optimizing the model's parameters across all tasks by jointly minimizing a weighted 
                sum of task-specific losses. The weights are learned during training and adjust the model's focus 
                on different tasks.
              </p>

              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                <h5 className="font-semibold text-zinc-300 mb-3">Training Configuration Example</h5>
                <pre className="text-xs overflow-x-auto bg-black/30 p-3 rounded">
{`task:
  fromfile:
    - projects.iaia_cs.tasks.dialogue
    - projects.iaia_cs.tasks.search_query
    - projects.iaia_cs.tasks.augmented_convai3
    - projects.iaia_cs.tasks.msc
    - projects.iaia_cs.tasks.rag
  multitask_weights: [2,1,3,2]
vmt: ppl
lr: 0.000001
optimizer: adamw
n_docs: 5
gradient_clip: 1.0
dropout: 0.1
init_model: zoo:seeker/r2c2_blenderbot_400M/model`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20 text-center">
                  <h4 className="font-bold text-2xl text-purple-300">14 hours</h4>
                  <p className="text-sm">Training time on 1x A5000 GPU</p>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20 text-center">
                  <h4 className="font-bold text-2xl text-pink-300">24GB</h4>
                  <p className="text-sm">Dedicated GPU memory</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                  <h4 className="font-bold text-2xl text-blue-300">2x faster</h4>
                  <p className="text-sm">With 4x A5000 parallel training</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Training Metrics - ConvAI3 Dialogue Teacher</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_loss_train.png"
                      alt="Training Loss"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Training Loss</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_loss_valid.png"
                      alt="Validation Loss"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Validation Loss</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_ppl_train.png"
                      alt="Training Perplexity"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Training Perplexity</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ConvAI3DialogueTeacher_token_acc_train.png"
                      alt="Token Accuracy"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Token Accuracy</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Multi-Session Chat Training Metrics</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/MSCDialogueTeacher_loss_train.png"
                      alt="MSC Training Loss"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">MSC Training Loss</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/MSCDialogueTeacher_loss_valid.png"
                      alt="MSC Validation Loss"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">MSC Validation Loss</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/MSCKnowledgeOverlapTeacher_token_acc_train.png"
                      alt="MSC Training Token Accuracy"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">MSC Training Token Accuracy</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/MSCKnowledgeOverlapTeacher_token_acc_valid.png"
                      alt="MSC Validation Token Accuracy"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">MSC Validation Token Accuracy</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Overall Performance Perplexity</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ppl_train.png"
                      alt="Overall Training Perplexity"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Training Perplexity (All Tasks)</p>
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700">
                    <Image
                      src="/images/projects/iaia-cs/ppl_valid.png"
                      alt="Overall Validation Perplexity"
                      width={400}
                      height={300}
                      className="w-full rounded"
                    />
                    <p className="text-xs text-zinc-400 mt-2">Validation Perplexity (All Tasks)</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">
                  The averaged validation perplexity showed improvement compared to individual tasks. 
                  Training plots exhibit natural oscillation as the model adjusts weights to minimize the loss function.
                </p>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Qualitative Evaluation - Demo 1 */}
          <GlassmorphicCard>
            <SectionHeading title="Qualitative Evaluation" subtitle="Real-world dialogue demonstrations" />
            
            <div className="space-y-8 text-zinc-300">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                <h4 className="font-semibold text-white mb-4">Demo 1: Cached Intent Modeling and Knowledge Expansion</h4>
                <p className="text-sm text-zinc-400 mb-4">Dialogue with geo-location = Germany</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-medium text-purple-300">Conversational Search Interface</h5>
                    <div className="space-y-2">
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/conversational_search_1.png"
                          alt="Turn 1 - User query"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 1: Ambiguous query "find information about the wall"</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/conversational_search_2.png"
                          alt="Turn 3 - AI clarification"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 3: AI asks "Do you want to know about the Berlin wall?"</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/conversational_search_3.png"
                          alt="Turn 5 - Knowledge response"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 5: AI provides Berlin Wall information</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/conversational_search_4.png"
                          alt="Turn 7 - Cached intent"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 7: Repeated query understood without clarification</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-pink-300">Search Server Backend</h5>
                    <div className="space-y-2">
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/search_server_1.png"
                          alt="Search server response 1"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Search server processing initial query</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/search_server_2.png"
                          alt="Search server response 2"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Berlin Wall search results retrieval</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/search_server_3.png"
                          alt="Search server response 3"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Additional Berlin Wall information fetch</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo1/search_server_4.png"
                          alt="Search server response 4"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Cached intent processing for repeated query</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h5 className="font-medium text-blue-300">Key Observations</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                      <h6 className="font-medium text-blue-300 text-sm">🎯 Intent Clarification</h6>
                      <p className="text-xs">AI correctly identified ambiguity and asked for clarification</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                      <h6 className="font-medium text-green-300 text-sm">🧠 Knowledge Expansion</h6>
                      <p className="text-xs">System fetched and provided relevant Berlin Wall information</p>
                    </div>
                    <div className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                      <h6 className="font-medium text-purple-300 text-sm">💾 Cached Intent</h6>
                      <p className="text-xs">Repeated queries understood without re-clarification</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg p-6 border border-blue-500/20">
                <h4 className="font-semibold text-white mb-4">Demo 2: Disambiguation and Correction</h4>
                <p className="text-sm text-zinc-400 mb-4">Dialogue with geo-location = USA</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h5 className="font-medium text-blue-300">Conversational Search Interface</h5>
                    <div className="space-y-2">
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo2/conversational_search_1.png"
                          alt="Demo 2 Turn 1"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 1: Same ambiguous query about "the wall"</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo2/conversational_search_2.png"
                          alt="Demo 2 Turn 3"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 3: User clarifies and corrects AI understanding</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo2/conversational_search_3.png"
                          alt="Demo 2 Turn 5"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Turn 5: AI adapts and provides Mexico-USA wall information</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-medium text-green-300">Search Server Backend</h5>
                    <div className="space-y-2">
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo2/search_server_2.png"
                          alt="Demo 2 Search server 2"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Initial search processing</p>
                      </div>
                      <div className="bg-zinc-800/50 rounded-lg p-2">
                        <Image
                          src="/images/projects/iaia-cs/demo2/search_server_3.png"
                          alt="Demo 2 Search server 3"
                          width={300}
                          height={200}
                          className="w-full rounded"
                        />
                        <p className="text-xs text-zinc-400 mt-1">Adapted search for Mexico-USA border wall</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <h5 className="font-medium text-green-300">Key Observations</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
                      <h6 className="font-medium text-orange-300 text-sm">🔄 Disambiguation</h6>
                      <p className="text-xs">User provided clarification to correct AI's initial understanding</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/20">
                      <h6 className="font-medium text-cyan-300 text-sm">🎯 Adaptive Understanding</h6>
                      <p className="text-xs">AI successfully adapted search query based on user correction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                <h5 className="font-semibold text-white mb-2">🎯 Conclusion</h5>
                <p>
                  These demonstrations show that our AI system is capable of understanding complex user intent 
                  and adapting its understanding throughout the dialogue history to respond with contextually 
                  coherent answers. The system handles ambiguous queries, learns from user corrections, and 
                  maintains context across multiple turns.
                </p>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Quantitative Evaluation */}
          <GlassmorphicCard>
            <SectionHeading title="Quantitative Evaluation" subtitle="Performance metrics and comparative analysis" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                To evaluate our conversational search model, we employed several metrics for comprehensive 
                quantitative comparison: BLEU, ROUGE, F1, precision, recall, and perplexity. These metrics 
                gauge the quality of generated responses in terms of relevance and fluency.
              </p>

              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700">
                <h5 className="font-semibold text-zinc-300 mb-3">Evaluation Configuration</h5>
                <pre className="text-xs overflow-x-auto bg-black/30 p-3 rounded">
{`eval_model:
    task:
        - projects.IAIA_CS.tasks.knowledge
        - projects.IAIA_CS.tasks.dialogue
        - projects.IAIA_CS.tasks.search_query
    model_file: IAIA_CS/model
    metrics: ppl,f1,accuracy,rouge,bleu
    num_examples: 10
    multitask_weights: 3,3,1
    search_server: http://localhost:8081`}
                </pre>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Comparative Results vs State-of-the-Art Models</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-zinc-700 rounded-lg">
                    <thead className="bg-zinc-800">
                      <tr>
                        <th className="px-3 py-3 text-left text-purple-300">Model</th>
                        <th className="px-3 py-3 text-center text-pink-300">Precision</th>
                        <th className="px-3 py-3 text-center text-blue-300">Recall</th>
                        <th className="px-3 py-3 text-center text-green-300">F1</th>
                        <th className="px-3 py-3 text-center text-yellow-300">Perplexity</th>
                        <th className="px-3 py-3 text-center text-red-300">BLEU-1</th>
                        <th className="px-3 py-3 text-center text-cyan-300">BLEU-2</th>
                        <th className="px-3 py-3 text-center text-orange-300">ROUGE-1</th>
                        <th className="px-3 py-3 text-center text-indigo-300">ROUGE-2</th>
                        <th className="px-3 py-3 text-center text-emerald-300">ROUGE-L</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="px-3 py-3 font-medium">BB2 (400M)</td>
                        <td className="px-3 py-3 text-center">0.059</td>
                        <td className="px-3 py-3 text-center">0.158</td>
                        <td className="px-3 py-3 text-center">0.08</td>
                        <td className="px-3 py-3 text-center">49.86</td>
                        <td className="px-3 py-3 text-center">0.059</td>
                        <td className="px-3 py-3 text-center">0.019</td>
                        <td className="px-3 py-3 text-center">0.158</td>
                        <td className="px-3 py-3 text-center">0.06</td>
                        <td className="px-3 py-3 text-center">0.125</td>
                      </tr>
                      <tr className="bg-zinc-900/30">
                        <td className="px-3 py-3 font-medium">Seeker (400M)</td>
                        <td className="px-3 py-3 text-center">0.078</td>
                        <td className="px-3 py-3 text-center">0.262</td>
                        <td className="px-3 py-3 text-center">0.112</td>
                        <td className="px-3 py-3 text-center">27.87</td>
                        <td className="px-3 py-3 text-center">0.078</td>
                        <td className="px-3 py-3 text-center">0.009</td>
                        <td className="px-3 py-3 text-center">0.26</td>
                        <td className="px-3 py-3 text-center">0.05</td>
                        <td className="px-3 py-3 text-center">0.229</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                        <td className="px-3 py-3 font-bold">Ours (400M)</td>
                        <td className="px-3 py-3 text-center font-bold">0.122</td>
                        <td className="px-3 py-3 text-center">0.416</td>
                        <td className="px-3 py-3 text-center font-bold">0.173</td>
                        <td className="px-3 py-3 text-center font-bold">22.36</td>
                        <td className="px-3 py-3 text-center font-bold">0.122</td>
                        <td className="px-3 py-3 text-center font-bold">0.046</td>
                        <td className="px-3 py-3 text-center font-bold">0.416</td>
                        <td className="px-3 py-3 text-center">0.04</td>
                        <td className="px-3 py-3 text-center font-bold">0.375</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 font-medium">Ours (DHGT)</td>
                        <td className="px-3 py-3 text-center">0.106</td>
                        <td className="px-3 py-3 text-center font-bold">0.42</td>
                        <td className="px-3 py-3 text-center">0.156</td>
                        <td className="px-3 py-3 text-center">56.07</td>
                        <td className="px-3 py-3 text-center">0.02</td>
                        <td className="px-3 py-3 text-center">0.000</td>
                        <td className="px-3 py-3 text-center">0.33</td>
                        <td className="px-3 py-3 text-center">0.01</td>
                        <td className="px-3 py-3 text-center">0.12</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20 text-center">
                  <h4 className="font-bold text-2xl text-purple-300">+107%</h4>
                  <p className="text-sm">F1 Score improvement over BB2</p>
                </div>
                <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20 text-center">
                  <h4 className="font-bold text-2xl text-pink-300">+55%</h4>
                  <p className="text-sm">F1 Score improvement over Seeker</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 text-center">
                  <h4 className="font-bold text-2xl text-blue-300">-55%</h4>
                  <p className="text-sm">Perplexity reduction (lower is better)</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20 text-center">
                  <h4 className="font-bold text-2xl text-green-300">+64%</h4>
                  <p className="text-sm">ROUGE-L improvement over Seeker</p>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-white">Key Observations</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <h6 className="font-medium text-green-300 mb-2">✅ Superior Performance</h6>
                    <ul className="text-sm space-y-1">
                      <li>• Surpasses state-of-the-art models in precision, F1, and perplexity</li>
                      <li>• Superior BLEU-1 and BLEU-2 scores vs BB2 and Seeker</li>
                      <li>• Significant improvement in ROUGE-L metric</li>
                    </ul>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                    <h6 className="font-medium text-orange-300 mb-2">📊 DHGT Analysis</h6>
                    <ul className="text-sm space-y-1">
                      <li>• DHGT model underperforms by ~30% across metrics</li>
                      <li>• Short dialogues may not benefit from DHGT summarization</li>
                      <li>• Performance expected to improve with more data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                <h5 className="font-semibold text-white mb-3">🔍 Discussion</h5>
                <div className="space-y-3 text-sm">
                  <p>
                    Our model's superior performance is attributed to its fine-tuning for ambiguous user queries 
                    and the dataset's focus on ConvAI3, which targets ambiguous user queries. Blenderbot 2 
                    emphasizes casual conversations, while Seeker prioritizes relevant results without 
                    questioning user intent.
                  </p>
                  <p>
                    Utilizing synthetic data generation techniques to expand the training dataset has proven 
                    effective for enhancing the model's understanding of ambiguous user queries. This approach 
                    significantly improved performance across various metrics, demonstrating its potential to 
                    revolutionize conversational search systems.
                  </p>
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
