import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 900))
    setStatus('Thank you. We will reach out shortly.')
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Get in touch</h2>
          <p className="mt-3 text-neutral-600">Book a consultation or send us your query. We typically respond within 24 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-neutral-700">Full name</label>
                <input required type="text" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-neutral-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-neutral-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-neutral-700">Message</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800">Send Message</button>
              </div>
              {status && <p className="sm:col-span-2 text-sm text-green-700 mt-2">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-neutral-700">
                <Mail className="w-5 h-5 text-neutral-900" />
                <div>
                  <p className="font-medium">contact@example.com</p>
                  <p className="text-sm text-neutral-500">Email us</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-neutral-700">
                <Phone className="w-5 h-5 text-neutral-900" />
                <div>
                  <p className="font-medium">+91 99999 99999</p>
                  <p className="text-sm text-neutral-500">Call Monday–Saturday</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-neutral-700">
                <MapPin className="w-5 h-5 text-neutral-900" />
                <div>
                  <p className="font-medium">Kozhikode, Kerala</p>
                  <p className="text-sm text-neutral-500">Find our office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
