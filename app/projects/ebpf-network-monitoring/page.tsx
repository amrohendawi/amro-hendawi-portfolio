import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Code2, Database, Network, Timer } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import Image from "next/image";

export default function EbpfNetworkMonitoringPage() {
  const technologies = [
    "eBPF", "XDP", "Linux Kernel", "BCC", "C", "Python", 
    "Prometheus", "Grafana", "Docker", "Google Cloud Platform",
    "Network Programming", "Real-time Systems"
  ];

  const achievements = [
    "7x faster latency measurements than traditional ping",
    "5x reduction in CPU utilization compared to conventional tools",
    "Real-time network monitoring at kernel level",
    "Scalable architecture supporting multiple deployment environments"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Network className="h-8 w-8 text-cyan-400" />
              <Badge variant="outline" className="border-cyan-400/50 text-cyan-400">
                Network Systems
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              eBPF Real-time Network Monitoring
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Building a highly scalable real-time network monitoring system with eBPF & XDP 
              that achieves 7x performance improvement over traditional tools
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                February 2022
              </div>
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Real-time Systems
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                Kernel Programming
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* Overview */}
              <div>
                <SectionHeading 
                  title="Project Overview" 
                  subtitle="Revolutionary approach to network monitoring using kernel-level programming"
                />
                
                {/* Hero Image */}
                <div className="my-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/ebpf_user_kernel.drawio.png"
                      alt="eBPF User-Kernel Space Architecture"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    eBPF architecture bridging user and kernel space for high-performance network monitoring
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      This project addresses the growing challenges in network monitoring for Industry 4.0 
                      and cloud-native applications. As network traffic increases, traditional monitoring 
                      solutions struggle with scalability, real-time capabilities, and resource efficiency.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our solution leverages eBPF (extended Berkeley Packet Filter) and XDP (eXpress Data Path) 
                      to create a high-performance monitoring system that operates at the kernel level, 
                      providing unprecedented visibility into network behavior with minimal overhead.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>

              {/* Technical Architecture */}
              <div>
                <SectionHeading 
                  title="System Architecture" 
                  subtitle="Four-layer monitoring architecture with kernel-level data collection"
                />
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/20">
                          <Database className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold">DataAggregator Module</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>MetricCollector:</strong> eBPF programs for kernel-level tracing</li>
                        <li>• <strong>PacketSampler:</strong> Active probing for comprehensive coverage</li>
                        <li>• <strong>XDP-packetDrop:</strong> High-performance packet filtering</li>
                        <li>• <strong>DataExporter:</strong> Prometheus-compatible metrics export</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Network className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">DataVisualizer Module</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>MonitoringServer:</strong> Prometheus-based metrics storage</li>
                        <li>• <strong>Visualization:</strong> Grafana dashboards</li>
                        <li>• <strong>Database:</strong> Time-series data persistence</li>
                        <li>• <strong>MetricsExporter:</strong> Third-party integration</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Performance Results */}
              <div>
                <SectionHeading 
                  title="Performance Evaluation" 
                  subtitle="Comprehensive benchmarking across multiple environments"
                />
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="text-center space-y-3">
                      <div className="text-3xl font-bold text-green-400">7x</div>
                      <div className="text-sm font-medium">Faster Latency</div>
                      <div className="text-xs text-gray-400">vs. traditional ping</div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="text-center space-y-3">
                      <div className="text-3xl font-bold text-blue-400">5.56%</div>
                      <div className="text-sm font-medium">CPU Usage</div>
                      <div className="text-xs text-gray-400">vs. 34.57% node_exporter</div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="text-center space-y-3">
                      <div className="text-3xl font-bold text-purple-400">0.179ms</div>
                      <div className="text-sm font-medium">Average Latency</div>
                      <div className="text-xs text-gray-400">eBPF vs. 0.766ms ping</div>
                    </div>
                  </GlassmorphicCard>
                </div>

                {/* Performance Comparison Charts */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Latency Comparison - Native Linux</h3>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/latency_native.png"
                        alt="Native Linux Latency Comparison"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      eBPF vs. traditional ping latency measurements on native Linux
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Latency Comparison - GCP</h3>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/latency_gcp.png"
                        alt="GCP Latency Comparison"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      Performance comparison on Google Cloud Platform infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Project Info */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Date</div>
                    <div className="text-sm">February 2022</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Category</div>
                    <div className="text-sm">Network Systems Research</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Repository</div>
                    <a href="https://github.com/amrohendawi/RT-network-monitoring-system" 
                       className="text-sm text-cyan-400 hover:underline" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      View Source Code
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Achievements */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg">Key Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
