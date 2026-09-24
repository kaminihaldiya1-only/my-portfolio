const certs = [
  { name: "Core Java — ICS", file: "/certificates/Core java.pdf" },
  { name: "ADCA — Institute of Computer Studies", file: "/certificates/ADCA diploma.pdf" },
  { name: "Personality Development — ICS", file: "/certificates/Personality development.pdf" },
  { name: "Light Fidelity (Li-Fi) — ICS", file: "/certificates/LI-FI.pdf" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-4xl mx-auto px-6 py-16 border-t border-[#232A34]">
      <h2 className="font-serif text-2xl font-medium mb-6">Certifications</h2>
      <div className="flex flex-wrap gap-3">
        {certs.map((cert) => (
          <a
            key={cert.name}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-[#232A34] rounded-md text-[#9AA4B2] hover:border-[#6FAE8C] hover:text-[#EDEAE2] transition-colors"
          >
            {cert.name}
          </a>
        ))}
      </div>
    </section>
  );
}