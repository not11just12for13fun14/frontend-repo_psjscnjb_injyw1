import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-white" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">About the Chambers</h2>
          <p className="mt-4 text-neutral-600">
            A client-centric practice led by Advocate Sunil Chandran, providing dependable legal representation across diverse practice areas. We combine rigorous preparation with strategic advocacy to secure favorable outcomes.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-3xl font-bold text-neutral-900">15+</p>
              <p className="text-sm text-neutral-600">Years of Practice</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-3xl font-bold text-neutral-900">500+</p>
              <p className="text-sm text-neutral-600">Matters Handled</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-3xl font-bold text-neutral-900">95%</p>
              <p className="text-sm text-neutral-600">Resolution Rate</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-3xl font-bold text-neutral-900">24-48h</p>
              <p className="text-sm text-neutral-600">Consultation Slots</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
