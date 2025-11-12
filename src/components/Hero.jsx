import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white" />
        <div className="absolute top-[-10%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-neutral-200 blur-3xl opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-neutral-100 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Trusted Legal Counsel for Individuals and Businesses
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-6 text-lg text-neutral-600 max-w-2xl">
            Professional advocacy with integrity, precision, and diligence. Civil, criminal, corporate, and property law with client-first approach.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">Book a Consultation</a>
            <a href="#practice" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-300 text-neutral-800 hover:bg-neutral-50">Explore Practice Areas</a>
          </motion.div>
          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
            <div>
              <p className="font-semibold text-neutral-700">15+ Years</p>
              <p>Experience</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-700">500+ Cases</p>
              <p>Handled</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-700">95% Success</p>
              <p>Rate</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neutral-200/60 shadow-xl bg-white/40 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl">
            <div className="absolute -inset-20 bg-gradient-to-tr from-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
