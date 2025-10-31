const Navbar = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-7 h-14 w-[90%] max-w-[450px] flex items-center justify-center rounded-full bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10">
            <div className="flex items-center gap-6">
                {[
                    { id: 'experience', label: 'EXPERIÊNCIA' },
                    { id: 'projects', label: 'PROJETOS' },
                    { id: 'about', label: 'SOBRE' },
                    { id: 'contact', label: 'CONTATO' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="
                            relative
                            cursor-pointer
                            font-instrument text-letter text-sm
                            after:content-['']
                            after:absolute after:left-0 after:-bottom-1
                            after:w-0 after:h-0.5
                            after:bg-letter/70
                            after:transition-all after:duration-500
                            hover:after:w-full
                        "
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
