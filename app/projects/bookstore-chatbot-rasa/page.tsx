import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Bot, Database, Book, MessageCircle, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function BookstoreChatbotPage() {
  const technologies = [
    "Rasa", "NLP", "Python", "Vue.js", "Docker", 
    "JavaScript", "MongoDB", "NginX", "Swagger", 
    "SpaCy", "Prodigy", "Transformers", "BERT"
  ];

  const achievements = [
    "Multilingual chatbot supporting German and English",
    "Integration with e-commerce API for order status and tracking",
    "Custom NLP pipeline with sentiment analysis",
    "Microservice architecture with Docker containerization",
    "Entity extraction for book genres, prices, and titles"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Bot className="h-8 w-8 text-purple-400" />
              <Badge variant="outline" className="border-purple-400/50 text-purple-400">
                Conversational AI
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Bookstore Chatbot with Rasa
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A multilingual conversational AI assistant for an e-bookstore, 
              providing personalized recommendations and order tracking
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                February 2022
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Natural Language Processing
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                E-commerce
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
                  subtitle="Automating customer service for an e-bookstore with conversational AI"
                />
                
                {/* Hero Image */}
                <div className="my-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/bookstore-chatbot/e-bookstore.png"
                      alt="Bookstore E-commerce Interface"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    E-bookstore interface with integrated chatbot assistant
                  </p>
                </div>

                <GlassmorphicCard>
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      This project addresses the growing need for automated customer service in e-commerce, 
                      specifically for an online bookstore. Traditional FAQ lists and static search 
                      functions provide limited user experience compared to the natural interaction 
                      possible with a conversational interface.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our solution combines Rasa, an open-source conversational AI framework, with 
                      spaCy for natural language understanding to create a chatbot that can help users 
                      find books, place orders, check order status, and get personalized recommendations 
                      in both German and English.
                    </p>
                  </div>
                </GlassmorphicCard>
              </div>

              {/* Technical Architecture */}
              <div>
                <SectionHeading 
                  title="System Architecture" 
                  subtitle="Microservice-based architecture with containerized components"
                />
                
                {/* Architecture Diagram */}
                <div className="my-8">
                  <div className="aspect-video rounded-lg overflow-hidden border border-zinc-700">
                    <Image
                      src="/images/projects/bookstore-chatbot/architecture.drawio.png"
                      alt="System Architecture Diagram"
                      width={800}
                      height={450}
                      className="w-full h-full object-contain bg-white/5"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 text-center mt-2">
                    Complete system architecture showing chatbot, frontend, and backend integration
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Bot className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Chatbot Components</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Rasa Core:</strong> Dialogue management engine</li>
                        <li>• <strong>Rasa NLU:</strong> Intent classification & entity extraction</li>
                        <li>• <strong>spaCy NLP:</strong> Custom entity recognition model</li>
                        <li>• <strong>Language Detection:</strong> Multilingual support</li>
                        <li>• <strong>Sentiment Analysis:</strong> User mood understanding</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <Database className="h-5 w-5 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold">E-Bookstore Stack</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Frontend:</strong> Vue.js with chatbot widget</li>
                        <li>• <strong>Backend:</strong> Node.js REST API</li>
                        <li>• <strong>Database:</strong> MongoDB for books & orders</li>
                        <li>• <strong>API Documentation:</strong> Swagger</li>
                        <li>• <strong>Reverse Proxy:</strong> NGINX</li>
                      </ul>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Chatbot Capabilities */}
              <div>
                <SectionHeading 
                  title="Chatbot Capabilities" 
                  subtitle="Smart features powered by NLP and integration with the e-commerce platform"
                />
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-4 h-full">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                          <Book className="h-5 w-5 text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Book Information</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Provides summaries, reviews, and ratings for books in the catalog.
                        Can answer questions about specific authors, genres, and book details.
                      </p>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4 h-full">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-500/20">
                          <Code2 className="h-5 w-5 text-yellow-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Order Management</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Places orders, checks order status, and provides delivery estimates.
                        Integrates with the e-commerce backend via REST API calls.
                      </p>
                    </div>
                  </GlassmorphicCard>

                  <GlassmorphicCard>
                    <div className="space-y-4 h-full">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                          <MessageCircle className="h-5 w-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-semibold">Recommendations</h3>
                      </div>
                      <p className="text-sm text-gray-300">
                        Suggests books based on user preferences, search history, and filters.
                        Understands complex queries like price ranges and genre combinations.
                      </p>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* NLP Implementation */}
              <div>
                <SectionHeading 
                  title="NLP Implementation" 
                  subtitle="Custom natural language processing pipeline for bookstore domain"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-400">Custom Entity Recognition</h3>
                        <p className="text-gray-300 leading-relaxed">
                          To handle book-specific entities like GENRE, WORK_OF_ART, and PRICE, we created and annotated 
                          a custom training dataset. The dataset includes e-bookstore specific queries and book reviews 
                          from German news sources. The Prodigy annotation tool was used to label entities within examples.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">NLU Pipeline Components</h3>
                        <ul className="mt-3 space-y-3 text-gray-300 ml-4">
                          <li>• <strong>Language Detection:</strong> Based on spaCy fastlang to support multilingual conversations</li>
                          <li>• <strong>Sentiment Analysis:</strong> VADER-based component to understand user emotions</li>
                          <li>• <strong>Intent Classification:</strong> Trained to recognize 10+ domain-specific intents</li>
                          <li>• <strong>Entity Recognition:</strong> Custom spaCy model for book-related entities</li>
                        </ul>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </div>

              {/* Evaluation Results */}
              <div>
                <SectionHeading 
                  title="Evaluation Results" 
                  subtitle="Performance metrics for the NLU model and chatbot"
                />
                <div className="mt-8">
                  <GlassmorphicCard>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-green-400">Intent Classification Performance</h3>
                        <p className="text-gray-300 leading-relaxed">
                          The intent classification model showed strong performance in recognizing user intents, 
                          with only minor confusion between similar intents like "ask_about_delivery" and 
                          "ask_for_order_number". Overall accuracy was above 90% for the primary intents.
                        </p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="text-left py-2">User input</th>
                              <th className="text-left py-2">Detected intent</th>
                              <th className="text-left py-2">Sentiment</th>
                              <th className="text-left py-2">Language</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-300">
                            <tr>
                              <td className="py-2">Ich möchte gerne ein Buch bestellen.</td>
                              <td className="py-2">order: 0.723</td>
                              <td className="py-2">neutral: 0.649</td>
                              <td className="py-2">de: 0.998</td>
                            </tr>
                            <tr>
                              <td className="py-2">Das ist genau was ich gesucht habe, vielen Dank =)</td>
                              <td className="py-2">mood_great: 0.994</td>
                              <td className="py-2">positive: 0.403</td>
                              <td className="py-2">de: 0.993</td>
                            </tr>
                            <tr>
                              <td className="py-2">Bitte Bücher unter 15€ anzeigen.</td>
                              <td className="py-2">filter: 0.999</td>
                              <td className="py-2">neutral: 1.0</td>
                              <td className="py-2">de: 0.996</td>
                            </tr>
                          </tbody>
                        </table>
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
                    <div className="text-sm">February 2022</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Category</div>
                    <div className="text-sm">Conversational AI / E-commerce</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-400 mb-1">Repository</div>
                    <a href="https://github.com/amrohendawi/Bookstore-chatbot" 
                       className="text-sm text-purple-400 hover:underline" 
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
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
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
