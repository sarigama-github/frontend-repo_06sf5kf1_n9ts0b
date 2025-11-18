import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-8 md:pt-16 lg:pt-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(90%_60%_at_50%_10%,rgba(56,189,248,0.25),rgba(99,102,241,0.15)_40%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 text-xs text-blue-200/80 bg-white/10 backdrop-blur border border-white/10 rounded-full px-3 py-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 2,500+ fintech builders
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Payments that feel invisible
          </h1>
          <p className="mt-5 text-base md:text-lg text-blue-100/85 max-w-xl">
            LumenPay is a modern fintech platform for cards, payouts and wallets. Secure, instant and built for developers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
              Start for free
            </a>
            <a href="#features" className="inline-flex items-center justify-center text-blue-100/90 border border-white/10 bg-white/5 backdrop-blur px-5 py-3 rounded-xl hover:bg-white/10 transition">
              See features
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 max-w-md text-center">
            <div>
              <p className="text-2xl font-semibold text-white">99.99%</p>
              <p className="text-xs text-blue-200/70">Uptime</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">150ms</p>
              <p className="text-xs text-blue-200/70">Avg. latency</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">80+</p>
              <p className="text-xs text-blue-200/70">Countries</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 bg-gradient-to-t from-slate-900 to-transparent" />
        </div>
      </div>
    </section>
  )
}
