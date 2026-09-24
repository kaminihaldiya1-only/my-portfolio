const stack = [
  { layer: "Frontend", items: ["React.js", "HTML5", "CSS3", "JavaScript"] },
  { layer: "Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { layer: "Database", items: ["MySQL", "SQL"] },
  { layer: "Tools", items: ["Git", "Docker", "Agile/Scrum"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#232A34]">
      <h2 className="font-serif text-2xl font-medium mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {stack.map((row) => (
          <div key={row.layer} className="border border-[#232A34] rounded-md p-5">
            <p className="font-mono text-xs text-[#6FAE8C] mb-3">{row.layer}</p>
            <div className="flex flex-wrap gap-2">
              {row.items.map((item) => (
                <span key={item} className="text-sm px-3 py-1 bg-[#1A212C] rounded-md">
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