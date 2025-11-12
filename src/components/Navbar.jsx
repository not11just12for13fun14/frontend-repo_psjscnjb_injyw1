import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#practice', label: 'Practice Areas' },
    { href: '#awards', label: 'Recognition' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-neutral-900 to-neutral-700 grid place-items-center text-white font-semibold">A</div>
            <div className="leading-tight">
              <p className="font-semibold text-neutral-900">Advocate Sunil Chandran</p>
              <p className="text-xs text-neutral-500">& Associates</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900">
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a href="mailto:contact@example.com" className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-200" onClick={() => setOpen((v) => !v)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-2 py-2 rounded-md text-neutral-700 hover:bg-neutral-100" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 px-2 pt-2">
                <a href="tel:+919999999999" className="flex items-center gap-2 text-neutral-700">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-neutral-700">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
