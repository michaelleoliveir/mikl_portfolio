import Link from "next/link";

import { MdArrowBackIosNew } from "react-icons/md";

interface NavbarProps {
    isContactPage?: boolean;
}

const Navbar = ({ isContactPage = false }: NavbarProps) => {
    const navItems = [
        { id: '#experience', label: 'EXPERIÊNCIA' },
        { id: '#projects', label: 'PROJETOS' },
        { id: '#about', label: 'SOBRE' },
        { id: '/contact', label: 'CONTATO' }
    ];

    const linkStyle = "relative cursor-pointer font-instrument text-letter text-[0.7rem] md:text-sm";

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-7 h-14 px-14 max-w-[310px] md:max-w-[450px] flex items-center justify-center rounded-full bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10">
            <div className="flex items-center gap-3 md:gap-6">
                {isContactPage ? (
                    <Link href="/" className={linkStyle + " flex flex-row items-center gap-6"}>
                        <MdArrowBackIosNew className="text-letter" />
                        <p className="relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-letter/70 after:transition-all after:duration-500 hover:after:w-full">VOLTAR PARA O INÍCIO</p>
                    </Link>
                ) : (
                    navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`${item.id}`}
                            className={linkStyle}
                        >
                            {item.label}
                        </Link>
                    ))
                )}
            </div>
        </nav>
    );
};

export default Navbar;