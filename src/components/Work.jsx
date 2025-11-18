import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Insight Health – Patient Portal',
    desc: 'Designing a patient-first portal that simplifies complex healthcare data into clear, actionable views.',
    tags: ['UX Research', 'UI Design', 'Web'],
    thumb: 'https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1200&auto=format&fit=crop',
    figma: 'https://www.figma.com/'
  },
  {
    id: 2,
    title: 'Atlas Finance – Mobile Banking',
    desc: 'A mobile experience that balances trust, clarity, and speed for everyday financial tasks.',
    tags: ['UX Research', 'UI Design', 'Mobile'],
    thumb: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop',
    figma: 'https://www.figma.com/'
  },
  {
    id: 3,
    title: 'Metro Travel – Ticketing System',
    desc: 'A streamlined ticketing flow with clear hierarchy and accessible interactions for all riders.',
    tags: ['UI Design', 'Web'],
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    figma: 'https://www.figma.com/'
  },
]

export default function Work() {
  return (
    <section id="work" className="bg-[#FFF5E8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-[#002B47]">Selected Projects</h2>
          <p className="mt-3 max-w-3xl text-[#5F6C7B]">A collection of interfaces, systems, and user experiences designed with clarity, structure, and empathy.</p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-[#002B47]/10 bg-white shadow-sm transition-transform"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#001E2D]">
                <img src={p.thumb} alt="" className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#002B47]">{p.title}</h3>
                <p className="mt-2 text-sm text-[#5F6C7B]">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-[#002B47]/15 bg-[#FFF5E8] px-2.5 py-1 text-xs text-[#002B47]">{t}</span>
                  ))}
                </div>
                <div className="mt-5">
                  <a href={p.figma} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#007B84] underline underline-offset-4 hover:no-underline">View Project</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
