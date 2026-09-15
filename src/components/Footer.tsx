import { profile } from "../data"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
        <span className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React, Vite &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
