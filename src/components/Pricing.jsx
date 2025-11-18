export default function Pricing(){
  const tiers = [
    { name: 'Starter', price: 'Free', blurb: 'All core features to get started', features: ['Up to 1k transactions/mo', 'Basic analytics', 'Community support'] },
    { name: 'Growth', price: '$99', blurb: 'Scale with higher limits and SLA', features: ['Up to 100k transactions/mo', 'Priority support', 'Webhooks + logs'] },
    { name: 'Enterprise', price: 'Talk to us', blurb: 'Custom pricing for high volume', features: ['Unlimited volume', 'Dedicated SRE', 'Custom compliance'] }
  ]

  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/[0.06] ${i===1 ? 'ring-1 ring-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.25)]' : ''}`}>
              <p className="text-blue-200/80 text-sm">{t.name}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{t.price}<span className="text-sm text-blue-200/70 font-normal">{t.price!== 'Free' && '/mo'}</span></p>
              <p className="mt-2 text-sm text-blue-200/80">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-emerald-400"/>{f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 transition ${i===1 ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'border border-white/10 text-blue-100/90 bg-white/5 hover:bg-white/10'}`}>Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
