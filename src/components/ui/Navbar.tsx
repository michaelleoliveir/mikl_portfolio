import Link from "next/link";

interface NavbarProps {
    isContactPage?: boolean;
}

const Navbar = ({ isContactPage = false }: NavbarProps) => {
    const navItems = [
        { id: 'experience', label: 'EXPERIÊNCIA' },
        { id: 'projects', label: 'PROJETOS' },
        { id: 'about', label: 'SOBRE' },
    ];

    const linkStyle = "relative cursor-pointer font-instrument text-letter text-sm after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-letter/70 after:transition-all after:duration-500 hover:after:w-full";

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-7 h-14 w-[90%] max-w-[450px] flex items-center justify-center rounded-full bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10">
            <div className="flex items-center gap-6">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        // Lógica: se estiver na página de contato, o link deve ser "/#id"
                        // se estiver na home, pode ser apenas "#id"
                        href={isContactPage ? `/#${item.id}` : `#${item.id}`}
                        className={linkStyle}
                    >
                        {item.label}
                    </Link>
                ))}
                {isContactPage ? (
                    <Link href="/" className={linkStyle}>
                        INÍCIO
                    </Link>
                ) : (
                    <Link href="/contact" className={linkStyle}>
                        CONTATO
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;