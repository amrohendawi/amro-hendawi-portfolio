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

              {/* System Design Overview */}
              <div>
                <SectionHeading 
                  title="System Design Overview" 
                  subtitle="Four-layer monitoring architecture following industry best practices"
                />
                
                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/software_as_blackbox.drawio.png"
                      alt="System Design Overview - Monitoring System as Blackbox"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Four-layer monitoring system architecture: Collection, Reporting, Management, and Presentation
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      Our monitoring system follows a four-layer abstract architecture based on industry best practices. 
                      The <strong>collection layer</strong> gathers measurements from network events and preprocesses them. 
                      The <strong>reporting layer</strong> exports measurement data for consumption by administrative entities. 
                      The <strong>management layer</strong> handles data storage and integrity checking. 
                      The <strong>presentation layer</strong> provides visual representation for easier network monitoring.
                    </p>
                  </div>
                </GlassmorphicCard>

                {/* Service Sequence Diagram */}
                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/services_sequence_diagram.png"
                      alt="Service Sequence Diagram - Data Collection to Visualization"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Complete data flow from collection to visualization showing component interactions
                  </p>
                </div>
              </div>

              {/* Technical Architecture */}
              <div>
                <SectionHeading 
                  title="Technical Implementation" 
                  subtitle="Dual-module architecture with kernel-level data collection"
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

                {/* Activity Diagram */}
                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/activity_uml_packet_filtering.png"
                      alt="eBPF Packet Filtering Activity Diagram"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    eBPF packet filtering and data exporting workflow showing parallel processing
                  </p>
                </div>
              </div>

              {/* XDP Technology Deep Dive */}
              <div>
                <SectionHeading 
                  title="XDP Technology Deep Dive" 
                  subtitle="eXpress Data Path for high-performance packet processing"
                />
                
                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/xdp_packet_processing.png"
                      alt="XDP Packet Processing Overview"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    XDP packet processing at the lowest layer of Linux network stack
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      XDP (eXpress Data Path) is a fast programmable packet processing framework operating 
                      at the kernel level. It represents the lowest layer of the Linux network stack, 
                      allowing the installation of programs that process packets directly in the kernel. 
                      These programs execute for every incoming packet, providing unprecedented performance 
                      for network monitoring and filtering operations.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      By bypassing traditional network stack overhead, XDP enables our monitoring system 
                      to achieve significant performance improvements while maintaining compatibility 
                      with existing network infrastructure.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>

              {/* Packet Filtering Technology */}
              <div>
                <SectionHeading 
                  title="Advanced Packet Filtering" 
                  subtitle="Multi-layer security and performance optimization"
                />
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/packet_filtering.png"
                        alt="Layers of Packet Filtering"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      Four levels of packet filtering from hardware to application layer
                    </p>
                  </div>
                  
                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/ebpf_packet_filtering_results.png"
                        alt="eBPF vs IPTables Performance Comparison"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      eBPF packet filtering performance compared to traditional IPTables
                    </p>
                  </div>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white">Packet Filtering Layers</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                          <h4 className="font-semibold text-blue-400 mb-2">1. Hardware Layer</h4>
                          <p className="text-sm text-gray-300">Network interface card (NIC) level filtering - most efficient but limited functionality</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                          <h4 className="font-semibold text-green-400 mb-2">2. Network Layer</h4>
                          <p className="text-sm text-gray-300">Operating system network stack filtering - more flexible than hardware</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                          <h4 className="font-semibold text-yellow-400 mb-2">3. System Layer</h4>
                          <p className="text-sm text-gray-300">Firewall-based filtering - higher flexibility with moderate efficiency</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                          <h4 className="font-semibold text-purple-400 mb-2">4. Application Layer</h4>
                          <p className="text-sm text-gray-300">Application-level filtering - maximum flexibility but lowest efficiency</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
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

              {/* Extended Performance Analysis */}
              <div>
                <SectionHeading 
                  title="Extended Performance Analysis" 
                  subtitle="Detailed comparison across Docker and single-node environments"
                />

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Latency Comparison - Docker</h3>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/latency_docker.png"
                        alt="Docker Latency Comparison"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      Performance evaluation in containerized environments
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Single Node Evaluation</h3>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/latency_1node_native.png"
                        alt="Single Node Latency Comparison"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      Robustness and accuracy evaluation on single node testbed
                    </p>
                  </div>
                </div>

                {/* Performance Table */}
                <GlassmorphicCard>
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white">Comprehensive Stress-Test Results</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="text-left py-2 text-gray-300">Testbed</th>
                            <th className="text-left py-2 text-gray-300">Tool</th>
                            <th className="text-left py-2 text-gray-300">Avg Latency (ms)</th>
                            <th className="text-left py-2 text-gray-300">Std Deviation (ms)</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800">
                            <td className="py-2">GCP</td>
                            <td className="py-2 text-cyan-400">eBPF MetricCollector</td>
                            <td className="py-2 font-mono">0.634</td>
                            <td className="py-2 font-mono">±1.15</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-2">GCP</td>
                            <td className="py-2">ping</td>
                            <td className="py-2 font-mono">3.577</td>
                            <td className="py-2 font-mono">±3.258</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-2">Docker</td>
                            <td className="py-2 text-cyan-400">eBPF MetricCollector</td>
                            <td className="py-2 font-mono">0.747</td>
                            <td className="py-2 font-mono">±1.851</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-2">Docker</td>
                            <td className="py-2">ping</td>
                            <td className="py-2 font-mono">3.054</td>
                            <td className="py-2 font-mono">±5.553</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-2">Native</td>
                            <td className="py-2 text-cyan-400">eBPF MetricCollector</td>
                            <td className="py-2 font-mono">0.193</td>
                            <td className="py-2 font-mono">±0.262</td>
                          </tr>
                          <tr>
                            <td className="py-2">Native</td>
                            <td className="py-2">ping</td>
                            <td className="py-2 font-mono">51.134</td>
                            <td className="py-2 font-mono">±56.990</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Results show consistent 7x performance improvement across all environments, 
                      with the most dramatic difference on native hardware where ping varies greatly 
                      while eBPF remains stable.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>

              {/* Monitoring Dashboards */}
              <div>
                <SectionHeading 
                  title="Real-time Monitoring Dashboards" 
                  subtitle="Prometheus and Grafana integration for comprehensive visualization"
                />

                {/* Prometheus Dashboard */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Prometheus Monitoring Server</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/prometheus.png"
                      alt="Prometheus Dashboard - Connected Resources"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Prometheus dashboard showing all connected metrics resources and exporters
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Prometheus Integration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The DataExporter component publishes up-to-date network metrics in Prometheus format, 
                      enabling external services to scrape them asynchronously. This integration provides 
                      a robust foundation for metrics collection with a large ecosystem of exporters and 
                      client libraries available in multiple programming languages.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <code className="text-sm text-green-400">
                        {`# Example Prometheus metrics output
metric_latency{destination_ip="192.168.1.10", source_ip="192.168.1.1"} 0.179
metric_throughput{destination_ip="192.168.1.10", source_ip="192.168.1.1"} 1024.5
metric_connections_total 397`}
                      </code>
                    </div>
                  </div>
                </GlassmorphicCard>

                {/* Grafana Dashboard */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Grafana Visualization Dashboard</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/grafana.png"
                      alt="Grafana Dashboard - Real-time Network Monitoring"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Grafana dashboard displaying real-time network metrics with interactive charts and alerts
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Dashboard Features</h3>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Real-time Charts:</strong> Live network performance visualization</li>
                        <li>• <strong>Custom Alerts:</strong> Configurable thresholds and notifications</li>
                        <li>• <strong>Historical Data:</strong> Time-series analysis and trending</li>
                        <li>• <strong>Multi-Environment:</strong> Support for various deployment scenarios</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <div>
                    <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                      <Image
                        src="/images/projects/ebpf-realtime-network-monitoring/grafana_new_panel.png"
                        alt="Creating New Panel in Grafana"
                        width={600}
                        height={400}
                        className="w-full h-full object-contain bg-white/5"
                      />
                    </div>
                    <p className="text-sm text-zinc-400 text-center mt-2">
                      Easy panel creation interface for custom metric visualization
                    </p>
                  </div>
                </div>
              </div>

              {/* CPU Utilization Analysis */}
              <div>
                <SectionHeading 
                  title="Resource Utilization Analysis" 
                  subtitle="CPU performance comparison and system efficiency"
                />

                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/ebpf-realtime-network-monitoring/flamegraph.drawio.png"
                      alt="CPU Utilization Flamegraph"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Flamegraph analysis showing CPU utilization distribution across system components
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white">Hardware Utilization Results</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our comprehensive CPU utilization analysis reveals significant efficiency gains. 
                      The eBPF-based MetricsExporter and MetricCollector together consume only 
                      <span className="text-green-400 font-semibold"> 5.56% CPU</span>, compared to 
                      <span className="text-red-400 font-semibold"> 34.57% for node_exporter</span> 
                      - representing a <strong>7x improvement</strong> in resource efficiency.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                        <div className="text-2xl font-bold text-green-400 mb-1">5.56%</div>
                        <div className="text-sm text-gray-300">eBPF MetricsExporter + MetricCollector</div>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                        <div className="text-2xl font-bold text-blue-400 mb-1">16.40%</div>
                        <div className="text-sm text-gray-300">Prometheus Server</div>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                        <div className="text-2xl font-bold text-red-400 mb-1">34.57%</div>
                        <div className="text-sm text-gray-300">Traditional node_exporter</div>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>

              {/* Technical Implementation Details */}
              <div>
                <SectionHeading 
                  title="Implementation Insights" 
                  subtitle="Technical challenges and solutions"
                />

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-white">Key Technical Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                          <h4 className="font-semibold text-cyan-400 mb-2">Kernel-Level Monitoring</h4>
                          <p className="text-sm text-gray-300">eBPF programs inject tracing points directly in the Linux kernel, capturing network events with minimal overhead and maximum accuracy.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20">
                          <h4 className="font-semibold text-green-400 mb-2">Active Probing</h4>
                          <p className="text-sm text-gray-300">PacketSampler ensures comprehensive coverage by generating probe packets when traffic is low, maintaining real-time monitoring capabilities.</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                          <h4 className="font-semibold text-purple-400 mb-2">XDP Packet Dropping</h4>
                          <p className="text-sm text-gray-300">High-performance packet filtering reduces bandwidth consumption and CPU context switches by processing packets at the lowest network stack level.</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                          <h4 className="font-semibold text-orange-400 mb-2">Scalable Architecture</h4>
                          <p className="text-sm text-gray-300">Containerized design with Docker-compose enables flexible deployment across various environments from single nodes to cloud platforms.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>

                <GlassmorphicCard>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">BCC Framework Integration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The implementation utilizes BCC (BPF Compiler Collection) to simplify eBPF program development. 
                      BCC provides a Python interface for writing eBPF programs, eliminating the need for deep 
                      kernel programming knowledge while maintaining performance benefits.
                    </p>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <code className="text-sm text-blue-400">
                        {`# Example BCC Python integration
from bcc import BPF

# Define eBPF program
bpf_program = """
int trace_tcp_connect(struct pt_regs *ctx) {
    // Kernel-level network tracing
    return 0;
}
"""

# Load and attach to kernel
b = BPF(text=bpf_program)
b.attach_kprobe(event="tcp_connect", fn_name="trace_tcp_connect")`}
                      </code>
                    </div>
                  </div>
                </GlassmorphicCard>
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
