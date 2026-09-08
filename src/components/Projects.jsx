export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-serif text-2xl mb-6">Selected work</h2>

      <div className="border border-[#4C7A63] rounded-md p-6 mb-5">
        <h3 className="font-serif text-xl mb-1">FixNow</h3>
        <p className="font-mono text-xs text-[#6FAE8C] mb-3">
          Spring Boot 3 · React + Vite + TypeScript · PostgreSQL · Redis · Docker
        </p>
        <p className="text-[#8F98A3] text-sm">
          A service marketplace platform connecting customers with providers —
          containerized Spring Boot backend, React/TypeScript frontend, live
          updates via WebSockets.
        </p>
        <div className="flex gap-6 mt-5 pt-4 border-t border-[#2A323D]">
          <div>
            <b className="block font-mono">24/24</b>
            <span className="text-xs text-[#8F98A3]">modules completed</span>
          </div>
          <div>
            <b className="block font-mono">150/150</b>
            <span className="text-xs text-[#8F98A3]">tests passing</span>
          </div>
        </div>
      </div>

      <div className="border border-[#2A323D] rounded-md p-6 mb-5">
        <h3 className="font-serif text-xl mb-1">AI Advanced Voice Assistant System</h3>
        <p className="text-[#8F98A3] text-sm">Group project — add 2-3 lines here.</p>
      </div>

      <div className="border border-[#2A323D] rounded-md p-6">
        <h3 className="font-serif text-xl mb-1">Space Invaders</h3>
        <p className="text-[#8F98A3] text-sm">Browser game built with HTML, CSS, JavaScript.</p>
      </div>
    </section>
  );
}