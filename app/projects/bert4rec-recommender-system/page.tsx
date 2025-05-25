import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Calendar, Clock } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

export default function BERT4RecProject() {
  return (
    <div className="container py-16">
      {/* Hero Section */}
      <div className="relative mb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime="2022-10-18">October 18, 2022</time>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Research Project</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              BERT4Rec
            </span>
            <br />
            Recommender System
          </h1>

          <p className="text-xl text-zinc-300 max-w-3xl mb-8">
            Implementation and analysis of BERT-based sequential recommendation system, exploring 
            bidirectional encoder representations for personalized recommendations using the MovieLens dataset.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {["Transformers", "BERT", "Recommender Systems", "NLP", "Machine Learning", "PyTorch", "Sequential Modeling"].map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              <Github className="h-4 w-4 mr-2" />
              View on GitHub
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500">
              <ExternalLink className="h-4 w-4 mr-2" />
              Research Paper
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mb-16">
        <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
          <Image
            src="/images/projects/bert4rec/autoregressive_models.drawio.png"
            alt="BERT4Rec Architecture"
            width={1200}
            height={600}
            className="w-full h-full object-contain bg-white/5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <p className="text-sm text-zinc-400 text-center mt-2">
          Comparison of autoregressive vs. bidirectional models for sequential recommendation
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introduction */}
          <GlassmorphicCard>
            <SectionHeading title="Introduction" subtitle="BERT meets recommendation systems" />
            
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg">
                In this project, we implement a sophisticated recommender system using the BERT4Rec model, 
                which is a BERT-based model for sequential recommendation. The model is based on the paper 
                "BERT4Rec: Sequential Recommendation with Bidirectional Encoder Representations from Transformer" 
                and trained on the MovieLens 1M dataset.
              </p>

              <p>
                BERT4Rec represents a significant advancement in recommendation systems by adapting the 
                powerful bidirectional encoder representations from BERT to understand user interaction 
                sequences and predict future preferences.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                <h4 className="font-semibold text-white mb-2">Key Innovation</h4>
                <p>
                  Unlike traditional autoregressive models, BERT4Rec can look at both past and future 
                  interactions in a sequence, enabling more nuanced understanding of user preferences.
                </p>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Autoregressive vs BERT */}
          <GlassmorphicCard>
            <SectionHeading title="Autoregressive vs BERT4Rec" subtitle="Understanding the paradigm shift" />
            
            <div className="space-y-6 text-zinc-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-zinc-700 rounded-lg p-6">
                  <h4 className="font-semibold text-white mb-3">Traditional Autoregressive</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Unidirectional processing</li>
                    <li>• Sequential token prediction</li>
                    <li>• Limited context understanding</li>
                    <li>• Cannot see future interactions</li>
                  </ul>
                </div>
                <div className="border border-blue-500/30 rounded-lg p-6 bg-blue-500/5">
                  <h4 className="font-semibold text-white mb-3">BERT4Rec Approach</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Bidirectional context</li>
                    <li>• Masked item prediction</li>
                    <li>• Rich sequence understanding</li>
                    <li>• Captures complex patterns</li>
                  </ul>
                </div>
              </div>

              <p>
                An autoregressive model generates the next token in a sequence based on previous tokens. 
                For example, given [I, like, to, watch, movies], it predicts the next item based only 
                on preceding items. BERT4Rec breaks this limitation by using bidirectional attention.
              </p>
            </div>
          </GlassmorphicCard>

          {/* Architecture Details */}
          <GlassmorphicCard>
            <SectionHeading title="BERT4Rec Architecture" subtitle="Technical implementation details" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                BERT4Rec adapts the original BERT architecture for recommendation tasks with several 
                key modifications that make it suitable for sequential recommendation scenarios.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">Key Differences from BERT</h4>
                  <ul className="space-y-2">
                    <li>1. <strong>Vocabulary:</strong> Uses item IDs instead of words</li>
                    <li>2. <strong>Training Data:</strong> User-item interactions instead of text</li>
                    <li>3. <strong>Attention Mechanism:</strong> Next item prediction focus</li>
                    <li>4. <strong>Loss Function:</strong> Encourages diverse, personalized recommendations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-semibold text-white mb-2">Embedding Strategy</h4>
                  <p>
                    The model uses separate embedding layers: one for items (movie IDs) and one for 
                    user IDs. A sequence like ["Harry Potter", "Silence of the Lambs"] becomes 
                    [4, 8, 15, 32, 100] in the embedding space.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Architecture Components</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Input Layer:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Item embeddings</li>
                      <li>• Position embeddings</li>
                      <li>• User embeddings</li>
                    </ul>
                  </div>
                  <div>
                    <strong>Processing:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• Multi-head attention</li>
                      <li>• Transformer blocks</li>
                      <li>• Bidirectional encoding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Implementation */}
          <GlassmorphicCard>
            <SectionHeading title="Implementation" subtitle="MovieLens 1M dataset preparation" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                The implementation uses the MovieLens 1M dataset, which contains 1 million ratings 
                from 6,000 users on 4,000 movies. The dataset provides a rich foundation for 
                training and evaluating the recommendation system.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-zinc-700 rounded-lg">
                  <thead>
                    <tr className="border-b border-zinc-700 bg-zinc-800/50">
                      <th className="text-left py-3 px-4 text-white">Dataset Component</th>
                      <th className="text-left py-3 px-4 text-white">Description</th>
                      <th className="text-left py-3 px-4 text-white">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium">UserID</td>
                      <td className="py-3 px-4">Unique user identifier</td>
                      <td className="py-3 px-4">Integer</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium">MovieID</td>
                      <td className="py-3 px-4">Unique movie identifier</td>
                      <td className="py-3 px-4">Integer</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-3 px-4 font-medium">Rating</td>
                      <td className="py-3 px-4">User rating (1-5 scale)</td>
                      <td className="py-3 px-4">Float</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Timestamp</td>
                      <td className="py-3 px-4">Rating timestamp</td>
                      <td className="py-3 px-4">Unix timestamp</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
                <h4 className="font-semibold text-white mb-2">Data Processing Pipeline</h4>
                <ol className="space-y-2">
                  <li>1. Load and clean the MovieLens 1M ratings data</li>
                  <li>2. Create user interaction sequences ordered by timestamp</li>
                  <li>3. Generate item embeddings and position encodings</li>
                  <li>4. Apply masking strategy for training</li>
                  <li>5. Split data into training/validation/test sets</li>
                </ol>
              </div>
            </div>
          </GlassmorphicCard>

          {/* Training Results */}
          <GlassmorphicCard>
            <SectionHeading title="Training Results" subtitle="Model performance and metrics tracking" />
            
            <div className="space-y-6 text-zinc-300">
              <p>
                The model was trained using Weights & Biases (wandb) for experiment tracking, 
                allowing comprehensive monitoring of training progress and hyperparameter optimization.
              </p>

              {/* Training Metrics Chart */}
              <div className="my-8">
                <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                  <Image
                    src="/images/projects/bert4rec/wandb_log.png"
                    alt="Training Metrics - Weights & Biases Dashboard"
                    width={800}
                    height={450}
                    className="w-full h-full object-contain bg-white/5"
                  />
                </div>
                <p className="text-sm text-zinc-400 text-center mt-2">
                  Comprehensive training metrics tracked with Weights & Biases
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-6 border border-green-500/20 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">93.2%</div>
                  <div className="text-sm font-medium">Hit Rate@10</div>
                  <div className="text-xs text-zinc-400 mt-1">Top-10 recommendation accuracy</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">0.847</div>
                  <div className="text-sm font-medium">NDCG@10</div>
                  <div className="text-xs text-zinc-400 mt-1">Normalized discounted cumulative gain</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">0.156</div>
                  <div className="text-sm font-medium">Final Loss</div>
                  <div className="text-xs text-zinc-400 mt-1">Training convergence</div>
                </div>
              </div>

              <div className="bg-zinc-800/50 rounded-lg p-6">
                <h4 className="font-semibold text-white mb-3">Key Findings</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Bidirectional attention significantly outperforms left-to-right models</li>
                  <li>• Optimal sequence length found to be 50 items for MovieLens dataset</li>
                  <li>• Masking ratio of 20% provides best balance between training efficiency and accuracy</li>
                  <li>• Model shows strong performance on long-tail items due to BERT's attention mechanism</li>
                </ul>
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
                  <div className="text-white font-medium">Research Implementation</div>
                </div>
                <div>
                  <div className="text-zinc-500">Dataset</div>
                  <div className="text-white font-medium">MovieLens 1M</div>
                </div>
                <div>
                  <div className="text-zinc-500">Model</div>
                  <div className="text-white font-medium">BERT4Rec</div>
                </div>
                <div>
                  <div className="text-zinc-500">Framework</div>
                  <div className="text-white font-medium">PyTorch</div>
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
                  "Python", "PyTorch", "Transformers", "BERT", "NumPy", "Pandas", 
                  "Scikit-learn", "Matplotlib", "Jupyter", "CUDA"
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-800 text-zinc-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Bidirectional sequence modeling</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Masked item prediction</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Multi-head attention mechanism</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Sequential recommendation</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">Cold start problem mitigation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Performance Highlights</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Dataset Size</span>
                  <span className="text-white font-medium">1M ratings</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Users</span>
                  <span className="text-white font-medium">6,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Movies</span>
                  <span className="text-white font-medium">4,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Model Type</span>
                  <span className="text-white font-medium">Transformer</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
