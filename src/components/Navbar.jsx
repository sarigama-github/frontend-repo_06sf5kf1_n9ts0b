import { useState } from 'react'
import { Menu, X, CreditCard, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
  ]

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-white/10 backdrop-blur border border-white/10 grid place-items-center shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            <CreditCard className="text-blue-400" size={20} />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">LumenPay</p>
            <p className="text-xs text-blue-200/70 -mt-0.5">Fintech for modern teams</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-blue-100/80 hover:text-white transition">Sign in</a>
          <a href="#pricing" className="text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition">
            Get started
          </a>
        </div>

        <button className="md:hidden text-white/90" aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-4 space-y-3">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-blue-50/90">
              {item.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="flex-1 text-center text-blue-50/90 border border-white/10 rounded-lg py-2">Sign in</a>
            <a href="#pricing" className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg py-2">Get started</a>
          </div>
          <div id="security" className="flex items-center gap-2 text-xs text-blue-200/70 pt-2">
            <ShieldCheck size={14} />
            PCI-DSS compliant & bank-grade encryption
          </div>
        </div>
      )}
    </header>
  )
}
