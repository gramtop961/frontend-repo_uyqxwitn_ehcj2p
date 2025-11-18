import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[88vh] grid place-items-center bg-[#FFF5E8] pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-24 h-24 w-24 rounded-lg bg-[#007B84]/10"></div>
        <div className="absolute right-8 bottom-16 h-32 w-32 rounded-lg bg-[#002B47]/5"></div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Avatar Illustration */}
        <div className="order-2 md:order-1">
          <div className="relative mx-auto aspect-square max-w-sm rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#002B47]/10">
            <div className="grid h-full place-items-center rounded-lg bg-gradient-to-br from-[#FFF5E8] to-white">
              <div className="relative h-48 w-48">
                <div className="absolute inset-0 rounded-full border-2 border-[#002B47]/20"></div>
                <div className="absolute inset-3 rounded-full bg-[#007B84]/10"></div>
                <div className="absolute inset-6 rounded-full bg-[#002B47]/10"></div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-[#5F6C7B]">Placeholder avatar illustration — replace with your artwork.</p>
        </div>

        {/* Copy */}
        <div className="order-1 md:order-2">
          <h1 className="text-5xl font-semibold tracking-tight text-[#002B47]">Rami Najem</h1>
          <p className="mt-3 text-xl text-[#002B47]/80">Designing clarity in complexity.</p>
          <p className="mt-5 max-w-xl text-[#5F6C7B]">
            UI/UX designer blending analytical structure with human empathy to create intuitive digital experiences.
          </p>
          <div className="mt-8">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full bg-[#007B84] px-6 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-[#007B84] transition-colors hover:opacity-90"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
