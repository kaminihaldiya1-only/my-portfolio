export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#232A34]">
      <h2 className="font-serif text-2xl font-medium mb-6">Projects</h2>

      <div className="border border-[#6FAE8C]/40 rounded-md p-6 mb-5 hover:border-[#6FAE8C] transition-colors">
        <h3 className="font-serif text-xl font-medium mb-1">FixNow</h3>
        <p className="font-mono text-xs text-[#6FAE8C] mb-3">
          Java · Spring Boot · React + Vite + Tailwind · PostgreSQL · Redis · WebSocket · JWT
        </p>
        <p className="text-[#9AA4B2] text-sm leading-relaxed">
          An on-demand home services marketplace connecting customers with
          verified professionals — built as a 5-member team project during
          Java Full Stack training at Tata STRIVE. I worked on database
          design and frontend development, covering booking, admin-reviewed
          KYC verification, smart worker matching, live tracking, and an
          AI-based cost estimator that gives customers a price range before
          they book.
        </p>
        <div className="flex gap-8 mt-5 pt-4 border-t border-[#232A34]">
          <div>
            <b className="block font-mono text-lg">24/24</b>
            <span className="text-xs text-[#9AA4B2]">modules completed</span>
          </div>
          <div>
            <b className="block font-mono text-lg">150/150</b>
            <span className="text-xs text-[#9AA4B2]">tests passing</span>
          </div>
        </div>
      </div>

      <div className="border border-[#232A34] rounded-md p-6 mb-5 hover:border-[#6FAE8C]/50 transition-colors">
        <h3 className="font-serif text-lg font-medium mb-1">AI Advanced Voice Assistant System</h3>
        <p className="text-[#9AA4B2] text-sm">
          Team project of four members — performed functional testing and
          feature validation, and prepared project documentation and reports.
        </p>
      </div>

      <div className="border border-[#232A34] rounded-md p-6 hover:border-[#6FAE8C]/50 transition-colors">
        <h3 className="font-serif text-lg font-medium mb-1">Space Invaders</h3>
        <p className="text-[#9AA4B2] text-sm">
          Built a browser-based game using HTML5, CSS3, and JavaScript —
          implemented player controls, score tracking, and DOM manipulation.
        </p>
      </div>
    </section>
  );
}