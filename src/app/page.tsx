"use client"

import { useRef, useEffect, useState } from "react"
import ParticleCircle from "../components/ParticleCircle"
import FixedNav from "../components/FixedNav"
import Link from "next/link"

export default function Home() {
  const [showFixedNav, setShowFixedNav] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const talksRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute("href")
      if (href === "#about") {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" })
      } else if (href === "#projects") {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" })
      } else if (href === "#talks") {
        talksRef.current?.scrollIntoView({ behavior: "smooth" })
      } else if (href === "#contact") {
        contactRef.current?.scrollIntoView({ behavior: "smooth" })
      } else if (href === "#home") {
        mainRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleClick))

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFixedNav(!entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (mainRef.current) {
      observer.observe(mainRef.current)
    }

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick))
      if (mainRef.current) {
        observer.unobserve(mainRef.current)
      }
    }
  }, [])

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <FixedNav show={showFixedNav} />
      <main
        ref={mainRef}
        className="relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden snap-start"
      >
        <div className="absolute inset-0">
          <ParticleCircle />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Jack Wilson</h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Senior Application Security Engineer @{" "}
            <Link href="https://vercel.com" className="text-white hover:text-gray-300 transition-colors">
              Vercel
            </Link>
          </h2>
          <nav className="flex justify-center space-x-6">
            <a href="#about" className="text-white hover:text-gray-300 hover:underline transition-colors">
              About
            </a>
            <a href="#projects" className="text-white hover:text-gray-300 hover:underline transition-colors">
              Projects
            </a>
            <a href="#talks" className="text-white hover:text-gray-300 hover:underline transition-colors">
              Talks
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 hover:underline transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </main>

      <section ref={aboutRef} className="min-h-screen bg-black text-white p-8 pt-20 snap-start">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            I'm a T-shaped security professional, with a genuine passion for cybersecurity. I enjoy coming into early
            security teams and building out application/product security programs from the ground up.
          </p>
          <p className="mb-4">
            I've previously worked as a penetration tester with experience delivering multiple service lines including
            web application, infrastructure and cloud penetration tests.
          </p>
          <p className="mb-4">
          Experience working in security programs in a large array of industries including: financial services,
          payments, manufacturing, healthcare, education, ecommerce and technology startups.
          </p>
          <p className="mb-4">
          I've presented research and spoken at events, security meetups and conferences throughout Europe, including:
          </p>
          <ul>
            <li>- Securi-Tay (2018 & 2019)</li>
            <li>- BSides Ljubljana</li>
            <li>- DC4420 (London DEFCON Group)</li>
            <li>- Cyber Re:coded</li>
          </ul>
        </div>
      </section>

      <section ref={projectsRef} className="min-h-screen bg-black text-white p-8 pt-20 snap-start">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <table className="w-full mb-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2">SecureAuth</td>
                <td className="py-2">An open-source authentication library with advanced security features.</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">VulnScanner</td>
                <td className="py-2">Automated vulnerability scanner for web applications.</td>
              </tr>
              <tr>
                <td className="py-2">SafeAPI</td>
                <td className="py-2">A framework for building secure RESTful APIs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section ref={talksRef} className="min-h-screen bg-black text-white p-8 pt-20 snap-start">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Talks</h2>
          <table className="w-full mb-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2">Event</th>
                <th className="text-left py-2">Topic</th>
                <th className="text-left py-2">Year</th>
              </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-700">
                <td className="py-2">Abertay Uni Guest Lecture</td>
                <td className="py-2">Real-world Application Security</td>
                <td className="py-2">2024</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Securi-Tay</td>
                <td className="py-2">Panel: Striking while the iron's hot</td>
                <td className="py-2">2019</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Abertay Ethical Hacking Society</td>
                <td className="py-2">AWS Security Crash Course</td>
                <td className="py-2">2019</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Cyber Re:coded</td>
                <td className="py-2">Panel: Getting past the gatekeepers</td>
                <td className="py-2">2019</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">DC4420</td>
                <td className="py-2">Why the consumer VPN market is a bit broken</td>
                <td className="py-2">2018</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Securi-Tay</td>
                <td className="py-2">iOS VPN Security</td>
                <td className="py-2">2018</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">BSides Ljubljana</td>
                <td className="py-2">iOS VPN Security</td>
                <td className="py-2">2018</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2">Abertay Ethical Hacking Society</td>
                <td className="py-2">Windows 10 - Why?</td>
                <td className="py-2">2016</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section ref={contactRef} className="min-h-screen bg-black text-white p-8 pt-20 snap-start">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <ul className="mb-6">
            <li className="mb-2">
              Email:{" "}
              <a href="mailto:website@jackwilson.uk" className="text-blue-400 hover:text-blue-300 transition-colors">
                website@jackwilson.uk
              </a>
            </li>
            <li className="mb-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/ijackwilson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/ijackwilson
              </a>
            </li>
            <li className="mb-2">
              Bluesky:{" "}
              <a
                href="https://bsky.app/profile/jackwilson.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                @jackwilson.uk
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

