const items = [
  {
    title: "Master of Computer Applications (Artificial Intelligence)",
    org: "Gautam Buddha University",
    period: "2024 – 2026",
  },
  {
    title: "Java Full Stack Developer Training",
    org: "Tata STRIVE",
    period: "Started May 2026",
  },
  {
    title: "Bachelor of Science (Computer Science)",
    org: "Maa Shakumbhari University",
    period: "",
  },
  {
    title: "Advanced Diploma in Computer Applications (ADCA)",
    org: "Institute of Computer Studies",
    period: "",
  },
];

export default function Education() {
  return (
    <section id="Education" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#232A34]">
      <h2 className="font-serif text-2xl font-medium mb-6">Education & Training</h2>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border border-[#232A34] rounded-md p-5">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-[#9AA4B2] text-sm mt-1">{item.org}</p>
            </div>
            {item.period && (
              <span className="font-mono text-xs text-[#6FAE8C] mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap">
                {item.period}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}