import profilePic from "../assets/profile.jpeg";

export default function About() {
  return (
    <section id="About" className="max-w-4xl mx-auto px-6 py-20 border-t border-[#232A34]">
      <div className="flex flex-col sm:flex-row gap-10 items-start">
        <div className="shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#6FAE8C]/50 shadow-lg shadow-[#6FAE8C]/10">
            <img src={profilePic} alt="Kamini Rani" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex-1">
          <p className="font-mono text-sm text-[#6FAE8C] mb-3 tracking-wide">
            ABOUT ME
          </p>
          <h2 className="font-serif text-3xl font-medium mb-6">
            Hi, I'm Kamini Rani
          </h2>
          <p className="text-[#9AA4B2] leading-relaxed max-w-2xl">
            I completed my{" "}
            <span className="text-[#6FAE8C] font-medium">
              MCA in Artificial Intelligence
            </span>{" "}
            at Gautam Buddha University and am now training as a Java Full
            Stack Developer at Tata STRIVE, learning Java, Spring Boot, MySQL,
            React.js, and REST APIs. I like building complete, working
            products rather than isolated exercises — FixNow, a service
            marketplace I helped build end to end, reflects that approach.
            I'm now looking to bring these skills to a full-time Java Full
            Stack Developer role.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mt-12">
        <div className="border border-[#232A34] rounded-md p-5 hover:border-[#6FAE8C]/50 transition-colors">
          <p className="font-mono text-2xl text-[#6FAE8C] mb-1">2026</p>
          <p className="text-sm text-[#9AA4B2]">MCA (AI) Graduate</p>
        </div>
        <div className="border border-[#232A34] rounded-md p-5 hover:border-[#6FAE8C]/50 transition-colors">
          <p className="font-mono text-2xl text-[#6FAE8C] mb-1">24/24</p>
          <p className="text-sm text-[#9AA4B2]">FixNow modules completed</p>
        </div>
        <div className="border border-[#232A34] rounded-md p-5 hover:border-[#6FAE8C]/50 transition-colors">
          <p className="font-mono text-2xl text-[#6FAE8C] mb-1">4+</p>
          <p className="text-sm text-[#9AA4B2]">Projects built</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#6FAE8C] text-[#0F1419] text-sm font-medium rounded-md hover:bg-[#5C9A78] transition-colors">
          Download Resume
        </a>
        <a href="/#contact" className="px-5 py-2.5 border border-[#232A34] text-sm font-medium rounded-md hover:border-[#6FAE8C] transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  );
}