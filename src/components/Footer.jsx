import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#FFF5E8] pb-16 pt-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="mx-auto max-w-6xl px-6 text-center text-sm text-[#5F6C7B]"
      >
        © {new Date().getFullYear()} Rami Najem. All rights reserved.
      </motion.div>
    </footer>
  )
}
