"use client"
import type React from "react"
import { useState } from "react"
import { Github } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { AmbientColor } from "@/components/ui/ambient-color"

export function LoginWithSocialsAndEmail() {
  return (
    <div className="relative w-full overflow-hidden">
      <AmbientColor />
      <Form />
    </div>
  )
}

// Keep the old export for backward compatibility
export const LoginWithSocials = LoginWithSocialsAndEmail

export default LoginWithSocialsAndEmail

function Form() {
  const [isClicked, setIsClicked] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    console.log(target)
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center">
      <Logo />
      <h1 className="my-4 text-xl font-bold text-neutral-800 md:text-4xl dark:text-neutral-100">
        Sign in to your account
      </h1>

      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <button className="flex flex-1 items-center justify-center space-x-2 rounded-md border border-neutral-200 bg-gray-100 px-4 py-3 text-neutral-700 shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.05)_inset] transition duration-200 hover:bg-gray-100/80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.05)_inset]">
          <Github className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
          <span className="text-sm">Login with GitHub</span>
        </button>
        <button className="flex flex-1 items-center justify-center space-x-2 rounded-md border border-neutral-200 bg-gray-100 px-4 py-3 text-neutral-700 shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.05)_inset] transition duration-200 hover:bg-gray-100/80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.05)_inset]">
          <GoogleIcon className="h-4 w-4" />
          <span className="text-sm">Login with Google</span>
        </button>
      </div>

      <div className="my-6 h-px w-full bg-neutral-100 dark:bg-neutral-800" />
      <motion.input
        initial={{ height: "0px", opacity: 0, marginBottom: "0px" }}
        animate={{
          height: isClicked ? "40px" : "0px",
          opacity: isClicked ? 1 : 0,
          marginBottom: isClicked ? "10px" : "0px",
        }}
        type="email"
        placeholder="support@example.com"
        className="shadow-input block h-10 w-full rounded-md border-0 bg-white px-4 py-1.5 pl-4 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:bg-neutral-900 dark:text-white"
      />
      <button
        onClick={(e) => {
          if (!isClicked) {
            setIsClicked(true)
            return
          }
          handleSubmit(e)
        }}
        className="group/btn relative w-full rounded-lg bg-black px-4 py-3 text-white dark:bg-white dark:text-black"
      >
        <div className="absolute inset-0 h-full w-full transform opacity-0 transition duration-200 group-hover/btn:opacity-100">
          <div className="absolute -top-px -left-px h-4 w-4 rounded-tl-lg border-t-2 border-l-2 border-black bg-transparent transition-all duration-200 group-hover/btn:-top-4 group-hover/btn:-left-4 dark:border-white" />
          <div className="absolute -top-px -right-px h-4 w-4 rounded-tr-lg border-t-2 border-r-2 border-black bg-transparent transition-all duration-200 group-hover/btn:-top-4 group-hover/btn:-right-4 dark:border-white" />
          <div className="absolute -bottom-px -left-px h-4 w-4 rounded-bl-lg border-b-2 border-l-2 border-black bg-transparent transition-all duration-200 group-hover/btn:-bottom-4 group-hover/btn:-left-4 dark:border-white" />
          <div className="absolute -right-px -bottom-px h-4 w-4 rounded-br-lg border-r-2 border-b-2 border-black bg-transparent transition-all duration-200 group-hover/btn:-right-4 group-hover/btn:-bottom-4 dark:border-white" />
        </div>
        <span className="text-sm">Continue with Email</span>
      </button>
    </form>
  )
}

const Logo = () => {
  return (
    <Link href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-700 dark:to-neutral-500" />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}
