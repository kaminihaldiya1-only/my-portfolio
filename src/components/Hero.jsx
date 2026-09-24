import profilePic from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10">
        <div className="flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-xs text-[#6FAE8C] border border-[#6FAE8C]/40 rounded-full px-3 py-1 tracking-wide">
              JAVA FULL STACK DEVELOPER
            </span>
            <span className="font-mono text-xs text-[#6FAE8C] border border-[#6FAE8C]/40 rounded-full px-3 py-1 tracking-wide">
              SOFTWARE DEVELOPER
            </span>
            <span className="font-mono text-xs text-[#6FAE8C] border border-[#6FAE8C]/40 rounded-full px-3 py-1 tracking-wide">
              FRONTEND DEVELOPER
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-medium leading-tight mb-6">
            Kamini Rani
          </h1>
          <p className="text-[#9AA4B2] text-lg max-w-2xl leading-relaxed">
            MCA in Artificial Intelligence, currently pursuing hands-on Java
            Full Stack Developer training at Tata STRIVE. Proficient in Java,
            OOP, SQL, Spring Boot, and React, with practical experience
            delivering full-stack applications such as FixNow — an end-to-end
            service marketplace platform. Combining a strong analytical
            foundation from AI with full-stack development expertise to build
            scalable, efficient, and real-world software solutions.
          </p>
          <p className="text-[#6FAE8C] text-sm font-medium mt-4">
            Open to internship and full-time opportunities as a Java Full
            Stack Developer, Software Developer, or Frontend Developer.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="#projects" className="px-5 py-2.5 bg-[#6FAE8C] text-[#0F1419] text-sm font-medium rounded-md hover:bg-[#5C9A78] transition-colors">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#232A34] text-sm font-medium rounded-md hover:border-[#6FAE8C] transition-colors">
              Download Resume
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-[#6FAE8C]/50 shadow-lg shadow-[#6FAE8C]/10">
            <img src={profilePic} alt="Kamini Rani" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}