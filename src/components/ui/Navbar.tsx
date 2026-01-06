import Link from "next/link";

import { MdArrowBackIosNew } from "react-icons/md";

interface NavbarProps {
    isContactPage?: boolean;
}

const Navbar = ({ isContactPage = false }: NavbarProps) => {
    const navItems = [
        { id: '#about', label: 'SOBRE' },
        { id: '#experience', label: 'EXPERIÊNCIA' },
        { id: '#projects', label: 'PROJETOS' },
        { id: '/contact', label: 'CONTATO' }
    ];

    const linkStyle = "relative cursor-pointer font-instrument text-letter text-[0.7rem] md:text-sm transition-all active:scale-95 active:text-highlight active:duration-75";

    return (
        <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-7 h-14 flex items-center justify-center rounded-full bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10 transition-all duration-300 ${isContactPage
                ? 'max-w-[550px] px-9'
                : 'max-w-[550px] px-8 md:px-20'
            }`}
        >
            <div className="flex items-center gap-4 md:gap-6">
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
                            className={linkStyle + " after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-letter/70 after:transition-all after:duration-500 hover:after:w-full"}
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