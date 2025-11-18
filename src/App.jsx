import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-50">
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,transparent_0,transparent_31px,rgba(99,102,241,0.07)_31px,rgba(99,102,241,0.07)_32px),linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(99,102,241,0.07)_31px,rgba(99,102,241,0.07)_32px)] bg-[size:32px_32px]" />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
