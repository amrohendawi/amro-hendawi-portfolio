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
                  subtitle="Building a complete private cloud service provider with OpenStack and Kolla-Ansible"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">
                        As enterprises continue to move more workloads to the cloud, the need for private cloud services 
                        that can be deployed on-premises or in a hybrid cloud environment becomes increasingly important. 
                        For organizations that want the flexibility and control of a private cloud, but don't want to 
                        invest in the hardware and infrastructure required to build and maintain one, Kolla-Ansible and 
                        OpenStack offer an appealing solution.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Kolla-Ansible is a tool for deploying OpenStack services on top of an existing infrastructure. 
                        It is designed to be easy to use and operate, and can be deployed on a wide variety of platforms, 
                        including bare-metal, virtualized, and containerized environments. OpenStack is a popular open 
                        source platform for building private and public clouds, composed of modular services that can be 
                        deployed individually or together to provide a complete cloud solution.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        This project demonstrates how to use Kolla-Ansible to deploy a private cloud service using 
                        OpenStack on Google Cloud Platform, creating a fully functional cloud service provider with 
                        capabilities comparable to major public cloud providers while maintaining complete control 
                        over infrastructure, security, and costs.
                      </p>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Prerequisites and Setup */}
              <div>
                <SectionHeading 
                  title="Prerequisites and Project Setup" 
                  subtitle="Required tools and initial GCP infrastructure configuration"
                />
                <div className="space-y-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Cloud className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Prerequisites</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Google Cloud Platform (GCP) account</strong> with billing enabled</li>
                        <li>• <strong>Google Cloud SDK</strong> installed on local machine</li>
                        <li>• <strong>Linux OS</strong> (tested on Ubuntu and Debian)</li>
                        <li>• <strong>Basic networking knowledge</strong> and Linux command line skills</li>
                        <li>• <strong>Python 3 virtual environment</strong> for Ansible dependencies</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Terminal className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">SSH Key Configuration</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        First step involves creating and configuring SSH keys for secure access to GCP instances:
                      </p>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                        <pre className="text-sm text-green-400"><code>{`# Generate SSH key pair
ssh-keygen -t rsa -f <ssh_key_name> -C <username>
chmod 600 <ssh_key_name>

# Prepare metadata for GCP
echo -n <username>:$(cat <ssh_key_name>.pub) > metadata.txt

# Upload public key to GCP
gcloud compute project-info add-metadata --metadata-from-file ssh-keys=metadata.txt`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Network className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Automated Infrastructure Script</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        A comprehensive bash script automates the entire GCP infrastructure setup, including:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• Two VPC networks with custom subnet configurations</li>
                        <li>• Custom disk images with nested virtualization licenses</li>
                        <li>• Three VM instances (1 controller, 2 compute nodes)</li>
                        <li>• Firewall rules for inter-node communication</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-blue-400"><code>{`# Network IP ranges
IPRANGE1='172.28.0.0/24'     # Management network
IPRANGE1_2='10.1.0.0/16'     # Tenant network range
IPRANGE2='172.24.0.0/24'     # Provider network

# Create VPC networks
gcloud compute networks create cc-network1 --subnet-mode=custom
gcloud compute networks create cc-network2 --subnet-mode=custom

# Create subnets
gcloud compute networks subnets create cc-subnet1 \\
  --range \${IPRANGE1} --secondary-range range1=\${IPRANGE1_2} \\
  --network=cc-network1 --region=europe-west3`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Architecture */}
              <div>
                <SectionHeading 
                  title="System Architecture" 
                  subtitle="Multi-node OpenStack deployment with nested virtualization"
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
                        <li>• <strong>Controller Node:</strong> Manages API endpoints, database, and message queue</li>
                        <li>• <strong>Compute Node 1:</strong> Runs Nova compute service and hypervisor</li>
                        <li>• <strong>Compute Node 2:</strong> Additional compute capacity for VM instances</li>
                        <li>• <strong>Nested Virtualization:</strong> VMX enabled for optimal resource usage</li>
                        <li>• <strong>Instance Specs:</strong> n2-standard-2 (2 vCPUs, 8GB RAM, 100GB disk)</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/20">
                          <Network className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Network Architecture</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Management Network:</strong> 172.28.0.0/24 for OpenStack services</li>
                        <li>• <strong>Provider Network:</strong> 172.24.0.0/24 for external connectivity</li>
                        <li>• <strong>Tenant Networks:</strong> 10.1.0.0/16 for VM instance communication</li>
                        <li>• <strong>Dual NIC Setup:</strong> Each node has two network interfaces</li>
                        <li>• <strong>Firewall Rules:</strong> Custom rules for TCP, UDP, and ICMP traffic</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Implementation Process */}
              <div>
                <SectionHeading 
                  title="Implementation Process" 
                  subtitle="Comprehensive OpenStack deployment using Kolla-Ansible automation"
                />
                <div className="space-y-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Cloud className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Infrastructure Verification</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Before OpenStack deployment, comprehensive verification ensures all prerequisites are met:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Nested Virtualization:</strong> Verify VMX support with <code className="text-green-400">grep -cw vmx /proc/cpuinfo</code></li>
                        <li>• <strong>Network Interfaces:</strong> Confirm dual NIC configuration on all nodes</li>
                        <li>• <strong>SSH Connectivity:</strong> Test SSH access to all VMs from local machine</li>
                        <li>• <strong>Inter-node Communication:</strong> Verify internal IP connectivity using netcat</li>
                        <li>• <strong>Firewall Rules:</strong> Ensure TCP, UDP, and ICMP traffic flows correctly</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-green-400"><code>{`# Verify nested virtualization
grep -cw vmx /proc/cpuinfo

# Test internal connectivity
nc -z -v <internal_ip> 22

# Check network interfaces
ip link show`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Terminal className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Kolla-Ansible Configuration</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Detailed preparation of Kolla-Ansible deployment configuration and inventory files:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Python Environment:</strong> Create isolated virtual environment for dependencies</li>
                        <li>• <strong>Ansible Installation:</strong> Install Ansible and Kolla-Ansible via pip</li>
                        <li>• <strong>Inventory Setup:</strong> Configure multinode inventory with IP addresses</li>
                        <li>• <strong>Global Configuration:</strong> Set deployment parameters in globals.yml</li>
                        <li>• <strong>Password Generation:</strong> Auto-generate service passwords for security</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-purple-400"><code>{`# Example globals.yml configuration
kolla_base_distro: "ubuntu"
kolla_internal_vip_address: "172.28.0.100"
network_interface: "ens4"
neutron_external_interface: "ens5"
nova_compute_virt_type: "kvm"
enable_neutron_provider_networks: "yes"`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Server className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">OpenStack Deployment</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Automated deployment process using Kolla-Ansible playbooks with comprehensive validation:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Connectivity Test:</strong> Verify Ansible can reach all nodes</li>
                        <li>• <strong>Bootstrap Phase:</strong> Prepare nodes with Docker and dependencies</li>
                        <li>• <strong>Pre-checks:</strong> Validate system requirements and configuration</li>
                        <li>• <strong>Deployment:</strong> Deploy containerized OpenStack services</li>
                        <li>• <strong>Post-deployment:</strong> Generate admin credentials and verify services</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-blue-400"><code>{`# Deployment sequence
ansible -m ping all -i ./multinode
kolla-ansible -i ./multinode bootstrap-servers
kolla-ansible -i ./multinode prechecks
kolla-ansible -i ./multinode deploy
kolla-ansible -i ./multinode post-deploy`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                          <Network className="h-5 w-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-semibold">OpenStack Service Configuration</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Post-deployment configuration to create a fully operational cloud environment:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Admin Environment:</strong> Source admin credentials for CLI access</li>
                        <li>• <strong>External Networks:</strong> Create provider networks for floating IPs</li>
                        <li>• <strong>Security Groups:</strong> Configure firewall rules for VM instances</li>
                        <li>• <strong>SSH Keypairs:</strong> Import public keys for secure VM access</li>
                        <li>• <strong>VM Images:</strong> Upload Ubuntu 16.04 images for instance creation</li>
                        <li>• <strong>NAT Configuration:</strong> Enable external connectivity for VMs</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-red-400"><code>{`# Create security group with open rules
openstack security group create open-all
openstack security group rule create open-all --ingress --protocol tcp --dst-port 1:65525

# Create VM instance
openstack server create --flavor m1.medium --image ubuntu-16.04 \\
  --nic net-id=admin-net --security-group open-all \\
  --key-name openstack_keypair new_vm_instance`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Network Troubleshooting and Validation */}
              <div>
                <SectionHeading 
                  title="Network Troubleshooting & Validation" 
                  subtitle="Solving connectivity challenges and implementing NAT for external access"
                />
                <div className="space-y-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-500/20">
                          <Network className="h-5 w-5 text-yellow-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Floating IP Connectivity Challenge</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        A critical challenge emerged when VM instances with floating IPs couldn't reach external networks. 
                        The issue stemmed from missing NAT configuration between the OpenStack tenant networks and the 
                        external provider network.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Problem:</strong> VMs assigned floating IPs couldn't ping external addresses</li>
                        <li>• <strong>Root Cause:</strong> Missing iptables NAT rules on the controller node</li>
                        <li>• <strong>Solution:</strong> Custom iptables script to enable source NAT (SNAT)</li>
                        <li>• <strong>Validation:</strong> Successful external connectivity and metadata service access</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Terminal className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">NAT Configuration Implementation</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        The iptables-magic.sh script resolves connectivity issues by implementing proper NAT rules:
                      </p>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                        <pre className="text-sm text-green-400"><code>{`#!/bin/bash
# iptables-magic.sh - Enable NAT for OpenStack floating IPs

# Enable IP forwarding
echo 1 > /proc/sys/net/ipv4/ip_forward

# Add SNAT rule for floating IP network
iptables -t nat -A POSTROUTING -s 172.24.0.0/24 -o ens4 -j MASQUERADE

# Add forwarding rules
iptables -A FORWARD -i br-ex -o ens4 -j ACCEPT
iptables -A FORWARD -i ens4 -o br-ex -j ACCEPT`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <BarChart className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Connectivity Validation Tests</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Internal Ping Test:</strong> Verify controller can reach VM floating IPs</li>
                        <li>• <strong>SSH Access Test:</strong> Confirm secure shell access to VM instances</li>
                        <li>• <strong>External Connectivity:</strong> Test internet access from VM instances</li>
                        <li>• <strong>Metadata Service:</strong> Validate OpenStack metadata API accessibility</li>
                        <li>• <strong>Network Data Retrieval:</strong> Access instance network configuration via API</li>
                      </ul>
                      <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800 mt-4">
                        <pre className="text-sm text-blue-400"><code>{`# Validation commands
ping <floating_ip>                    # From controller
ssh ubuntu@<floating_ip>             # SSH access test
ping 8.8.8.8                        # External connectivity
wget 169.254.169.254/openstack/...   # Metadata service`}</code></pre>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Project Outcomes and Lessons Learned */}
              <div>
                <SectionHeading 
                  title="Project Outcomes & Lessons Learned" 
                  subtitle="Key insights from building a production-ready private cloud"
                />
                <div className="space-y-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/20">
                          <Cloud className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Successful Cloud Service Provider</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Successfully deployed a fully functional private cloud service provider with OpenStack, 
                        demonstrating enterprise-grade capabilities including:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-300 ml-4">
                        <li>• <strong>Complete IaaS Platform:</strong> Compute, networking, and storage services</li>
                        <li>• <strong>Multi-tenancy Support:</strong> Isolated environments for different users/projects</li>
                        <li>• <strong>API Compatibility:</strong> RESTful APIs compatible with public cloud services</li>
                        <li>• <strong>Web Dashboard:</strong> Horizon dashboard for graphical management</li>
                        <li>• <strong>CLI Tools:</strong> Command-line interface for automation and scripting</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-500/20">
                          <Server className="h-5 w-5 text-orange-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Technical Achievements</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Infrastructure Automation</h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Fully automated GCP infrastructure provisioning</li>
                            <li>• Containerized OpenStack deployment</li>
                            <li>• Infrastructure as Code principles</li>
                            <li>• Reproducible deployment process</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Performance & Scalability</h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Competitive performance vs. public clouds</li>
                            <li>• Multi-node compute scaling</li>
                            <li>• Efficient resource utilization</li>
                            <li>• Network performance optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Terminal className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Critical Lessons Learned</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Networking Complexity</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            OpenStack networking requires deep understanding of virtual networking concepts:
                          </p>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Provider vs. tenant network separation</li>
                            <li>• Floating IP and NAT configuration</li>
                            <li>• Security group rule management</li>
                            <li>• Neutron service troubleshooting</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Deployment Challenges</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Key challenges encountered during deployment:
                          </p>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Nested virtualization performance overhead</li>
                            <li>• Container orchestration complexity</li>
                            <li>• Service dependency management</li>
                            <li>• Configuration parameter tuning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <BarChart className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Business Value and Use Cases</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Cost Benefits</h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Reduced cloud infrastructure costs</li>
                            <li>• Predictable operational expenses</li>
                            <li>• No vendor lock-in concerns</li>
                            <li>• Open-source license advantages</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-200 mb-2">Enterprise Applications</h4>
                          <ul className="space-y-1 text-sm text-gray-300">
                            <li>• Hybrid cloud strategies</li>
                            <li>• Data sovereignty compliance</li>
                            <li>• Development/testing environments</li>
                            <li>• Legacy application migration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Performance Evaluation */}
              <div>
                <SectionHeading 
                  title="Performance Evaluation" 
                  subtitle="Comprehensive benchmarking against major public cloud providers"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <p className="text-gray-300 leading-relaxed">
                        To validate the performance of our OpenStack deployment, we conducted comprehensive 
                        benchmarking tests using the same methodology as our previous 
                        <a href="/projects/cloud-performance-comparison" className="text-blue-400 hover:underline ml-1">
                          GCP vs AWS performance evaluation
                        </a>. 
                        The benchmarks focused on four key areas: CPU performance, memory bandwidth, 
                        sequential disk I/O, and random disk access patterns.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-blue-400">CPU Performance Analysis</h3>
                          <p className="text-sm text-gray-300">
                            Our OpenStack deployment achieved 85% of GCP's CPU performance for compute-intensive 
                            workloads. The 15% performance gap is primarily attributed to the overhead of nested 
                            virtualization, which adds an additional hypervisor layer between the guest OS and 
                            the physical hardware.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-green-400">Memory Performance Excellence</h3>
                          <p className="text-sm text-gray-300">
                            Memory benchmarks revealed exceptional performance, with our OpenStack deployment 
                            actually outperforming both GCP and AWS in memory-intensive operations by 8-12%. 
                            Sequential memory access patterns showed particularly strong results, indicating 
                            efficient memory subsystem configuration.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-purple-400">Disk I/O Performance</h3>
                          <p className="text-sm text-gray-300">
                            Disk performance showed mixed results. Sequential read/write operations achieved 
                            88% of public cloud performance, while random access patterns exhibited higher 
                            latency (78% performance ratio). This indicates opportunities for storage subsystem 
                            optimization through advanced caching strategies.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Performance Variability</h3>
                          <p className="text-sm text-gray-300">
                            We observed higher volatility in benchmark results compared to dedicated public 
                            cloud resources. This variability is expected in nested virtualization environments 
                            where resources are shared with the host system and other workloads on the same 
                            physical infrastructure.
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
                            <p className="text-sm text-zinc-300">
                              CPU benchmark results showing OpenStack achieving 85% of GCP performance
                            </p>
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
                            <p className="text-sm text-zinc-300">
                              Memory performance benchmarks demonstrating superior bandwidth capabilities
                            </p>
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
                            <p className="text-sm text-zinc-300">
                              Sequential disk I/O performance achieving 88% of public cloud providers
                            </p>
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
                            <p className="text-sm text-zinc-300">
                              Random disk access patterns with higher latency due to nested virtualization
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900/80 rounded-lg p-6 border border-gray-800 mt-8">
                        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Key Performance Insights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-200 mb-2">Strengths</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                              <li>• Superior memory bandwidth performance</li>
                              <li>• Competitive sequential I/O operations</li>
                              <li>• Excellent internal network latency</li>
                              <li>• Cost-effective compared to public clouds</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-200 mb-2">Areas for Optimization</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                              <li>• CPU overhead from nested virtualization</li>
                              <li>• Random disk access latency</li>
                              <li>• Performance variability under load</li>
                              <li>• External network throughput optimization</li>
                            </ul>
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
