import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">NEXT.JS · REACT THREE FIBER · FRAMER MOTION</p>
        <a href="#home" className="hover:text-white transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
