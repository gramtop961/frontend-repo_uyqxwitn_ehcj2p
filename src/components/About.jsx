import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-[#FFF5E8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-[#002B47]">About</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-[#002B47]">
              I’m a UI/UX designer who believes that clarity is the most powerful form of creativity. With a background in law, I combine analytical thinking with human-centered empathy to design experiences that feel structured, intuitive, and thoughtful. My process is simple: understand deeply, simplify intelligently, and design with intention.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-[#5F6C7B]">Skills</h3>
                <ul className="space-y-2 text-[#002B47]">
                  {['UI Design','UX Research','Wireframing','Interaction Design','Prototyping'].map((s)=> (
                    <li key={s} className="">{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-semibold tracking-wide text-[#5F6C7B]">Tools</h3>
                <ul className="space-y-2 text-[#002B47]">
                  {['Figma','Framer','Notion','Adobe Suite'].map((t)=> (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a href="#" className="inline-flex items-center rounded-full bg-[#007B84] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">View Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
