export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2A323D] py-10 mt-10">
      <div className="max-w-3xl mx-auto px-6 flex flex-wrap gap-4">
        <a href="mailto:you@example.com" className="text-sm px-4 py-2 border border-[#2A323D] rounded hover:border-[#6FAE8C] transition-colors">Email</a>
        <a href="#" className="text-sm px-4 py-2 border border-[#2A323D] rounded hover:border-[#6FAE8C] transition-colors">LinkedIn</a>
        <a href="#" className="text-sm px-4 py-2 border border-[#2A323D] rounded hover:border-[#6FAE8C] transition-colors">GitHub</a>
        <a href="#" className="text-sm px-4 py-2 border border-[#2A323D] rounded hover:border-[#6FAE8C] transition-colors">Resume</a>
      </div>
    </footer>
  );
}