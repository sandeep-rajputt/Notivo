function PcHeaderLinks({ links }: { links: string[] }) {
  return (
    <nav
      className="flex items-center justify-center"
      aria-label="Main navigation"
    >
      <ul className="flex gap-4 text-primary-word">
        {links.map((link, index) => (
          <li key={`nav-${link}-${index}`}>
            <a
              href={link === "Home" ? "/" : `#${link.trim().toLowerCase()}`}
              className="p-2 hover:text-primary transition-colors"
              aria-label={`Navigate to ${link}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PcHeaderLinks;
