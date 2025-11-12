import { Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const awards = [
  { title: 'Top Litigation Counsel - 2022', issuer: 'Bar Council Recognition' },
  { title: 'Featured Advocate', issuer: 'Legal Insights Journal' },
  { title: 'Client Service Excellence', issuer: 'City Law Awards' },
]

export default function Recognition() {
  return (
    <section id="awards" className="relative py-20 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Recognition</h2>
          <p className="mt-3 text-neutral-600">Milestones that reflect our commitment to excellence and client trust.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-amber-500 text-white grid place-items-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{a.title}</p>
                  <p className="text-sm text-neutral-600">{a.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-500" />
          ))}
          <p className="ml-2 text-sm text-neutral-700">Client-rated 5/5 for professionalism</p>
        </div>
      </div>
    </section>
  )
}
