import React from 'react'

export default function Guide() {
  return (
    <section id="guide" className="bg-[#FFF5E8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-[#002B47]">Visual Layout Guide</h2>
        <p className="mt-3 max-w-3xl text-[#5F6C7B]">A concise system that keeps the portfolio clear, structured, and human-centered.</p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Grid & Spacing</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>12-column grid, 72px max column width on desktop, 24px gutters.</li>
              <li>Container widths: 1280, 1024, 768, 640. Content centered.</li>
              <li>Section vertical rhythm: 96–120px. Components: 16/24/32px steps.</li>
              <li>Cards: 20px inner padding, 8px corner radius, 8px gaps.</li>
              <li>Use white space generously to separate groups logically.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Typography Scale</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>Headings: Plus Jakarta Sans or Inter for geometric clarity.</li>
              <li>Body: Inter or DM Sans for warmth and legibility.</li>
              <li>Scale: 12, 14, 16, 18, 24, 32, 40, 56. Line-height 1.3–1.6.</li>
              <li>Tracking: -1% for large headings, default for body.</li>
              <li>Links & CTAs use clear verbs and direct language.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Color Usage</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>Background: #FFF5E8 (calm, warm canvas).</li>
              <li>Primary text: #002B47. Secondary: #5F6C7B.</li>
              <li>Accent/CTA: #007B84. Deep navy: #001E2D for contrast blocks.</li>
              <li>Shadows: very subtle, 8–12 blur, 5% opacity.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Imagery & Shapes</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>Avatar/hero: left; copy on right for desktop. Stack on mobile.</li>
              <li>Use simple geometric shapes (squares, circles) as subtle accents.</li>
              <li>Project thumbnails: 16:10 ratio, slight radius.</li>
              <li>Maintain consistent margins around images for breathing room.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Buttons & Interactions</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>Primary button: #007B84 background, white text, 24px radius.</li>
              <li>Secondary: text link with underline and subtle hover.</li>
              <li>Focus states: 2px ring in #007B84. Motion: 150–200ms ease-out.</li>
              <li>Hover: opacity 90% or scale 1.02 on visuals. No heavy effects.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#002B47]/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#001E2D]">Behavior</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#002B47]">
              <li>Anchor navigation with smooth scrolling.</li>
              <li>Sticky, minimal navbar with clear sections.</li>
              <li>Cards are clickable only via explicit CTAs to reduce ambiguity.</li>
              <li>Content reads in short, clear blocks to reduce cognitive load.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
