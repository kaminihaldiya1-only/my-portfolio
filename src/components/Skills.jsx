const stack = [
  { layer: "frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript"] },
  { layer: "backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { layer: "data", items: ["MySQL", "SQL"] },
  { layer: "tools", items: ["Git", "Docker", "Agile/Scrum"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-serif text-2xl mb-6">Full-stack layers</h2>
      <div className="border border-[#2A323D] rounded-md overflow-hidden">
        {stack.map((row) => (
          <div key={row.layer} className="flex flex-col sm:flex-row border-b border-[#2A323D] last:border-0">
            <div className="sm:w-32 shrink-0 px-4 py-4 font-mono text-xs text-[#6FAE8C] bg-[#1B222C]">
              {row.layer}
            </div>
            <div className="px-5 py-4 flex flex-wrap gap-2">
              {row.items.map((item) => (
                <span key={item} className="text-sm px-2.5 py-1 border border-[#2A323D] rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}