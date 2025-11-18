import { Shield, Zap, Globe2, Code2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="text-blue-400" size={20} />,
      title: 'Real-time processing',
      desc: 'Instant settlements with low-latency rails across regions.'
    },
    {
      icon: <Shield className="text-blue-400" size={20} />,
      title: 'Bank-grade security',
      desc: 'PCI-DSS, tokenization and zero-trust infrastructure.'
    },
    {
      icon: <Globe2 className="text-blue-400" size={20} />,
      title: 'Global coverage',
      desc: 'Multi-currency support in 80+ countries with local routing.'
    },
    {
      icon: <Code2 className="text-blue-400" size={20} />,
      title: 'Developer-first',
      desc: 'Clean APIs, webhooks and SDKs to integrate in days, not months.'
    }
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur p-6">
              <div className="size-9 rounded-lg bg-white/10 border border-white/10 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-blue-200/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
