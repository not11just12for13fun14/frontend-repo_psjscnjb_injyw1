import { Shield, Scale, Briefcase, Landmark, FileText, Building2, Gavel, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const areas = [
  { icon: Scale, title: 'Civil Litigation', desc: 'Contract disputes, damages, injunctions, and appellate matters.' },
  { icon: Gavel, title: 'Criminal Law', desc: 'Bail, trial defense, and criminal appeals with strategic counsel.' },
  { icon: FileText, title: 'Corporate & Commercial', desc: 'Company law, compliance, due diligence, and agreements.' },
  { icon: Landmark, title: 'Property & Real Estate', desc: 'Title verification, RERA, conveyance, and property disputes.' },
  { icon: Users, title: 'Family & Matrimonial', desc: 'Divorce, maintenance, custody, and domestic violence matters.' },
  { icon: Shield, title: 'Consumer Protection', desc: 'Complaints before consumer commissions for deficiency of service.' },
  { icon: Briefcase, title: 'Arbitration & ADR', desc: 'Arbitration, mediation and settlement negotiations.' },
  { icon: Building2, title: 'Writs & Public Law', desc: 'Writ petitions and constitutional remedies before High Courts.' },
]

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Practice Areas</h2>
          <p className="mt-3 text-neutral-600">Comprehensive legal services tailored to individual and corporate needs.</p>
        </div>
        
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group rounded-xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-neutral-900 text-white grid place-items-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
