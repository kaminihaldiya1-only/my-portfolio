export default function Navbar() {
  return (
    <header className="sticky top-0 bg-[#141A22]/90 backdrop-blur border-b border-[#2A323D] z-10">
      <div className="max-w-3xl mx-auto flex justify-between items-center h-14 px-6">
        <span className="font-mono text-sm text-[#6FAE8C]">~/portfolio</span>
        <nav className="hidden sm:flex gap-6 text-sm text-[#8F98A3]">
          <a href="#about" className="hover:text-[#EDEAE2] transition-colors">about</a>
          <a href="#skills" className="hover:text-[#EDEAE2] transition-colors">skills</a>
          <a href="#projects" className="hover:text-[#EDEAE2] transition-colors">projects</a>
          <a href="#contact" className="hover:text-[#EDEAE2] transition-colors">contact</a>
        </nav>
      </div>
    </header>
  );
}