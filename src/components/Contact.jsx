import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FFF5E8] py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#002B47]">Let’s Work Together</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#5F6C7B]">
          If you’re looking to build a digital product that feels thoughtful, intuitive, and modern — I’d love to collaborate.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="mailto:hello@raminajem.com" className="rounded-full bg-[#007B84] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">Email Me</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#002B47]/15 text-[#002B47] hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24H8z"/></svg>
          </a>
        </div>

        <form className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-4 text-left">
          <input className="w-full rounded-lg border border-[#002B47]/15 bg-white px-4 py-3 text-sm text-[#002B47] placeholder-[#5F6C7B] focus:outline-none focus:ring-2 focus:ring-[#007B84]" placeholder="Your name" />
          <input className="w-full rounded-lg border border-[#002B47]/15 bg-white px-4 py-3 text-sm text-[#002B47] placeholder-[#5F6C7B] focus:outline-none focus:ring-2 focus:ring-[#007B84]" placeholder="Email" />
          <textarea rows="4" className="w-full rounded-lg border border-[#002B47]/15 bg-white px-4 py-3 text-sm text-[#002B47] placeholder-[#5F6C7B] focus:outline-none focus:ring-2 focus:ring-[#007B84]" placeholder="Tell me about your project" />
          <div className="pt-2">
            <button className="w-full rounded-full bg-[#007B84] px-6 py-3 text-sm font-medium text-white hover:opacity-90">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
