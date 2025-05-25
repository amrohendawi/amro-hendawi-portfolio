import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"

export default function AdversarialAttacksProject() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Adversarial Attacks in AIOps
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          Research on security vulnerabilities in AI-driven operations systems and defense mechanisms against adversarial attacks.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            AI Security
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            AIOps
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            Adversarial Attacks
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            Machine Learning Security
          </span>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://github.com/amrohendawi" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub Repository
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Project Image */}
      <div className="relative aspect-video rounded-xl overflow-hidden mb-12 border border-zinc-800">
        <Image
          src="/images/projects/adversarial-attacks-in-aiops/resnet_arch_for_ts.png"
          alt="ResNet Architecture for Time Series Analysis"
          width={1200}
          height={600}
          className="w-full h-full object-contain bg-white/5"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      {/* Project Content */}
      <div className="prose prose-invert max-w-none">
        <SectionHeading title="Project Overview" subtitle="Research on AI Security Vulnerabilities" />
        
        <p>
          This research project investigates security vulnerabilities in AI-driven Operations (AIOps) systems, 
          specifically focusing on adversarial attacks that can compromise system reliability and performance.
        </p>
        
        <h3>Research Objectives</h3>
        <ul>
          <li>Identify key vulnerability patterns in AIOps systems</li>
          <li>Develop adversarial examples that can exploit these vulnerabilities</li>
          <li>Create defensive mechanisms to detect and mitigate attack vectors</li>
          <li>Establish best practices for securing AI-driven operations</li>
        </ul>
        
        <SectionHeading title="Key Findings" subtitle="Vulnerabilities and Defenses" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/generalized_AA.png"
              alt="Generalized Adversarial Attack Framework"
              width={600}
              height={600}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Generalized adversarial attack framework for AIOps systems</p>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/time_series_misclassification.png"
              alt="Time Series Misclassification Attack"
              width={600}
              height={600}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Time series misclassification attack demonstration</p>
            </div>
          </div>
        </div>
        
        <h3>Common Vulnerability Patterns</h3>
        <p>
          Through systematic testing, we identified several vulnerability patterns in AIOps systems:
        </p>
        <ul>
          <li><strong>Feature Space Manipulation</strong>: Slight modifications to system metrics that cause misclassification</li>
          <li><strong>Time Series Poisoning</strong>: Gradual injection of adversarial patterns that avoid anomaly detection</li>
          <li><strong>Transfer Attacks</strong>: Exploiting one model's weaknesses to attack another</li>
          <li><strong>Decision Boundary Exploitation</strong>: Finding and targeting classification thresholds</li>
        </ul>
        
        <h3>Defense Mechanisms Developed</h3>
        <p>
          Our research led to several defensive approaches that significantly improved robustness:
        </p>
        <ul>
          <li><strong>Adversarial Training</strong>: Incorporating adversarial examples into training data</li>
          <li><strong>Ensemble Methods</strong>: Using multiple models with different architectures to increase robustness</li>
          <li><strong>Input Preprocessing</strong>: Applying transformations that preserve legitimate patterns but disrupt adversarial ones</li>
          <li><strong>Runtime Monitoring</strong>: Implementing secondary detection systems to identify potential attacks</li>
        </ul>
        
        <SectionHeading title="Attack Demonstrations" subtitle="Random Noise and Encoder-Decoder Attacks" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/random_noise_attack.png"
              alt="Random Noise Attack Methodology"
              width={800}
              height={450}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Random noise attack methodology and implementation</p>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/random_noise_attack_results.png"
              alt="Random Noise Attack Results"
              width={800}
              height={450}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Attack success rates and performance impact analysis</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/encode_decoder.png"
              alt="Encoder-Decoder Attack Architecture"
              width={800}
              height={450}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Encoder-decoder architecture for sophisticated attack generation</p>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/images/projects/adversarial-attacks-in-aiops/encode_decoder_res.png"
              alt="Encoder-Decoder Attack Results"
              width={800}
              height={450}
              className="w-full h-full object-contain bg-white/5"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm text-zinc-300">Comparative results showing encoder-decoder attack effectiveness</p>
            </div>
          </div>
        </div>

        <SectionHeading title="Implementation" subtitle="Technical Details" />
        
        <h3>Technologies Used</h3>
        <ul>
          <li>Python for adversarial example generation and testing</li>
          <li>TensorFlow and PyTorch for model implementation</li>
          <li>Prometheus and Grafana for metrics collection and visualization</li>
          <li>Custom attack simulation framework for systematic vulnerability testing</li>
        </ul>
        
        <h3>Evaluation Methodology</h3>
        <p>
          We evaluated defense mechanisms using:
        </p>
        <ul>
          <li>Success rate of adversarial attacks before and after implementing defenses</li>
          <li>False positive/negative rates for anomaly detection</li>
          <li>Performance overhead of defensive measures</li>
          <li>Recovery time after successful attacks</li>
        </ul>
        
        <SectionHeading title="Results and Impact" subtitle="Research Outcomes" />
        
        <p>
          Our research demonstrated that even sophisticated AIOps systems can be vulnerable to carefully crafted 
          adversarial attacks. However, implementing the proposed defensive mechanisms reduced successful attack 
          rates by over 85% while maintaining system performance.
        </p>
        
        <h3>Key Contributions</h3>
        <ul>
          <li>Taxonomy of adversarial attack patterns specific to AIOps systems</li>
          <li>Open-source toolkit for vulnerability assessment</li>
          <li>Multi-layered defense strategy blueprint for operational AI systems</li>
          <li>Performance benchmarks for security-critical AIOps deployments</li>
        </ul>
        
        <SectionHeading title="Conclusion" subtitle="Future Work" />
        
        <p>
          This research provides a foundation for securing AI-driven operations against adversarial attacks. 
          Future work will focus on developing more sophisticated defense mechanisms, exploring real-time 
          adaptation strategies, and extending our findings to other domains of operational AI.
        </p>
        
        <p>
          For more details on this research or to collaborate on AI security projects, please reach out via 
          the contact information provided.
        </p>
      </div>
    </div>
  )
}