import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Cloud, Server, Network, Terminal, BarChart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function OpenStackCloudDeploymentPage() {
  const technologies = [
    "OpenStack", "Kolla-Ansible", "Ansible", "Docker", 
    "Google Cloud Platform", "Networking", "Linux", 
    "Virtualization", "Cloud Infrastructure", "Automation", "Bash"
  ];

  const achievements = [
    "Deployed a fully functional private cloud service with OpenStack",
    "Automated deployment using Kolla-Ansible across multiple VMs",
    "Configured complex networking with multiple VPC networks",
    "Implemented nested virtualization to optimize resource usage",
    "Performed benchmarking and performance evaluation against public cloud providers"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Cloud className="h-8 w-8 text-blue-400" />
              <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                Cloud Infrastructure
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              OpenStack Cloud Deployment
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Building a private cloud service provider using Kolla-Ansible on Google Cloud Platform
            </p>
            
            {/* Hero Images */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/projects/deploy-cloud-service-kolla-ansible/OpenStack-Logo-Vertical.png"
                  alt="OpenStack Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-cyan-500" />
              <div className="relative w-24 h-24">
                <Image
                  src="/images/projects/deploy-cloud-service-kolla-ansible/kolla-ansible.png"
                  alt="Kolla-Ansible Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-indigo-600" />
              <div className="relative w-24 h-24">
                <Image
                  src="/images/projects/deploy-cloud-service-kolla-ansible/gcp.png"
                  alt="Google Cloud Platform Logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                February 2021
              </div>
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                Infrastructure as Code
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4" />
                Network Virtualization
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
                  subtitle="Creating a customizable and flexible private cloud infrastructure"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">
                        As enterprises increasingly migrate workloads to the cloud, the demand for private cloud solutions 
                        that offer control, security, and flexibility becomes critical. This project demonstrates how to 
                        deploy a private cloud infrastructure using OpenStack and Kolla-Ansible on Google Cloud Platform.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        OpenStack is a powerful open-source platform for building and managing cloud infrastructure, 
                        while Kolla-Ansible provides containerized deployment of OpenStack services. Together, they 
                        enable organizations to create their own cloud service provider with capabilities similar to 
                        public cloud providers, but with greater control over data, security, and costs.
                      </p>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Architecture */}
              <div>
                <SectionHeading 
                  title="System Architecture" 
                  subtitle="Multi-node deployment with controller and compute nodes"
                />
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Server className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Infrastructure Topology</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Controller Node:</strong> Manages the cloud services and API endpoints</li>
                        <li>• <strong>Compute Nodes (2):</strong> Host the virtual machines and workloads</li>
                        <li>• <strong>Network Setup:</strong> Dual VPC networks with custom subnets</li>
                        <li>• <strong>Nested Virtualization:</strong> Enabled for optimal resource usage</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20">
                          <Network className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Network Configuration</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Management Network:</strong> 172.28.0.0/24 for internal communication</li>
                        <li>• <strong>Provider Network:</strong> 172.24.0.0/24 for external connectivity</li>
                        <li>• <strong>Tenant Network:</strong> 10.1.0.0/16 for VM instances</li>
                        <li>• <strong>Firewall Rules:</strong> Custom rules for secure communication</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Implementation Process */}
              <div>
                <SectionHeading 
                  title="Implementation Process" 
                  subtitle="Step-by-step deployment of a private cloud infrastructure"
                />
                <div className="space-y-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Cloud className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">GCP Infrastructure Setup</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Created the foundation for our OpenStack deployment by provisioning virtual machines 
                        on Google Cloud Platform with specific configurations to support nested virtualization.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• Created two VPC networks with custom subnets</li>
                        <li>• Provisioned custom disk images with nested virtualization licenses</li>
                        <li>• Deployed three VM instances: one controller and two compute nodes</li>
                        <li>• Configured firewall rules to allow necessary traffic between nodes</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Terminal className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Kolla-Ansible Deployment</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Used Kolla-Ansible to automate the deployment of containerized OpenStack services 
                        across the infrastructure, ensuring consistent and reproducible deployments.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• Set up Ansible inventory with controller and compute node definitions</li>
                        <li>• Configured globals.yml with deployment parameters</li>
                        <li>• Executed deployment playbooks for bootstrapping and configuration</li>
                        <li>• Validated deployment with comprehensive pre-checks</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                          <Network className="h-5 w-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-semibold">OpenStack Configuration</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Configured OpenStack services to create a fully functional cloud environment with 
                        networking, storage, and compute capabilities.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• Created external networks and tenant networks</li>
                        <li>• Configured security groups for VM instances</li>
                        <li>• Set up SSH keypairs for secure access</li>
                        <li>• Imported VM images for instance creation</li>
                        <li>• Implemented NAT for external connectivity</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Performance Evaluation */}
              <div>
                <SectionHeading 
                  title="Performance Evaluation" 
                  subtitle="Benchmarking against public cloud providers"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">
                        To validate the performance of our OpenStack deployment, we conducted comprehensive 
                        benchmarking tests and compared the results against major public cloud providers 
                        like GCP and AWS. The benchmarks focused on key metrics including CPU performance, 
                        memory bandwidth, and disk I/O operations.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-400">CPU Performance</h3>
                          <p className="text-sm text-gray-300">
                            Our OpenStack deployment showed competitive CPU performance, achieving within 
                            15% of GCP's performance for compute-intensive workloads. The slight performance 
                            gap was primarily due to the overhead of nested virtualization.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-400">Memory Performance</h3>
                          <p className="text-sm text-gray-300">
                            Memory benchmarks revealed strong performance, with our OpenStack deployment 
                            actually outperforming both GCP and AWS in certain memory-intensive operations, 
                            particularly for sequential access patterns.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-purple-400">Disk I/O</h3>
                          <p className="text-sm text-gray-300">
                            For disk operations, our deployment showed mixed results. Sequential read/write 
                            operations were comparable to public cloud providers, while random access patterns 
                            showed higher latency, indicating an area for potential optimization.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Network Performance</h3>
                          <p className="text-sm text-gray-300">
                            Network throughput within the private cloud was excellent, showing low latency for 
                            internal communications. External connectivity performed adequately but showed higher 
                            variability compared to dedicated public cloud resources.
                          </p>
                        </div>
                      </div>
                      
                      {/* Performance Comparison Charts */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                          <Image
                            src="/images/projects/deploy-cloud-service-kolla-ansible/cpu-plot.png"
                            alt="CPU Performance Comparison"
                            width={800}
                            height={450}
                            className="w-full h-full object-contain bg-white/5"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-zinc-300">CPU performance comparison across different cloud platforms</p>
                          </div>
                        </div>
                        
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                          <Image
                            src="/images/projects/deploy-cloud-service-kolla-ansible/mem-plot.png"
                            alt="Memory Performance Comparison"
                            width={800}
                            height={450}
                            className="w-full h-full object-contain bg-white/5"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-zinc-300">Memory bandwidth benchmarks showing competitive performance</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                          <Image
                            src="/images/projects/deploy-cloud-service-kolla-ansible/diskSeq-plot.png"
                            alt="Sequential Disk Performance"
                            width={800}
                            height={450}
                            className="w-full h-full object-contain bg-white/5"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-zinc-300">Sequential disk I/O performance across platforms</p>
                          </div>
                        </div>
                        
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800">
                          <Image
                            src="/images/projects/deploy-cloud-service-kolla-ansible/diskRand-plot.png"
                            alt="Random Disk Performance"
                            width={800}
                            height={450}
                            className="w-full h-full object-contain bg-white/5"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-sm text-zinc-300">Random disk access patterns with latency analysis</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
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
                    <div className="text-sm">February 2021</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Category</div>
                    <div className="text-sm">Cloud Infrastructure</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Repository</div>
                    <a href="https://github.com/amrohendawi/Cloud-Computing" 
                       className="text-sm text-blue-400 hover:underline" 
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
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Performance Metrics */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">CPU Performance</span>
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Memory Bandwidth</span>
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Disk I/O (Sequential)</span>
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: "88%" }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Disk I/O (Random)</span>
                    <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: "78%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
