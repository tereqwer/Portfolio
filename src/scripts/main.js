// ─────────────────────────────────────────────────────
// MAIN.JS — Entry point
// Initializes: Lenis smooth scroll, GSAP, section scripts
// ─────────────────────────────────────────────────────

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// ── Lenis smooth scroll ──────────────────────────────
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})

// Connect Lenis to GSAP ticker
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Make available globally for section scripts
export { gsap, ScrollTrigger, lenis }

// ── Section scripts (uncomment as sections are built) ──
// import './hero.js'
// import './projects.js'
// import './contact.js'
