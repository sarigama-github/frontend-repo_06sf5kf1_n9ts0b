export default function Footer(){
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-blue-200/70">© 2025 LumenPay. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-blue-200/70">
          <a href="#" className="hover:text-white">Status</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
