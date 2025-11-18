import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.nav
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 flex items-center justify-between rounded-full border border-[#002B47]/10 bg-[#FFF5E8]/70 backdrop-blur-sm px-4 py-2.5 shadow-sm"
        >
          <a href="#home" className="text-sm font-semibold tracking-wide text-[#002B47]">Rami Najem</a>
          <ul className="hidden gap-6 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[#002B47]/80 hover:text-[#002B47] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-[#007B84] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Let’s talk
          </a>
        </motion.nav>
      </div>
    </header>
  )
}
