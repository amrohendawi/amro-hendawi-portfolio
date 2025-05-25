import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />
      
      {/* Back Navigation */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/#projects">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700/50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-24">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Amro</span>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
