export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#232A34] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-2xl font-medium mb-3">Get in Touch</h2>
        <p className="text-[#9AA4B2] mb-6">
          Open to Java Full Stack Developer roles — happy to walk through
          FixNow or anything else here in more detail.
        </p>
        <div className="flex flex-wrap gap-3">
         <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaminihaldiya1@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 border border-[#232A34] rounded-md hover:border-[#6FAE8C] transition-colors">Email</a>
          <a href="https://linkedin.com/in/kamini-rani-04b0692bb" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 border border-[#232A34] rounded-md hover:border-[#6FAE8C] transition-colors">LinkedIn</a>
          <a href="https://github.com/kaminihaldiya1-only" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 border border-[#232A34] rounded-md hover:border-[#6FAE8C] transition-colors">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 border border-[#232A34] rounded-md hover:border-[#6FAE8C] transition-colors">Resume</a>
        </div>
        <p className="font-mono text-xs text-[#9AA4B2] mt-12">© 2026 Kamini Rani · Dwarka, Delhi</p>
      </div>
    </footer>
  );
}