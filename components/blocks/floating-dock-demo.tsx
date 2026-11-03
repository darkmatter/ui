"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Terminal, LayoutGrid, Sparkles, ArrowRightLeft, Twitter, Github } from "lucide-react"

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <Terminal className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <LayoutGrid className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "Features",
      icon: <Sparkles className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <ArrowRightLeft className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <Twitter className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-muted-foreground" />,
      href: "#",
    },
  ]

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock items={links} />
    </div>
  )
}

export default FloatingDockDemo
