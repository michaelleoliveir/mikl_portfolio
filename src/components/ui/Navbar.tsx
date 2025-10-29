const Navbar = () => {
    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-7 h-14 w-[90%] max-w-[450px] flex items-center justify-center rounded-full bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10">
            <div className="flex items-center gap-6">
                <p className="text-letter font-instrument text-sm">EXPERIÊNCIA</p>
                <p className="text-letter font-instrument text-sm">PROJETOS</p>
                <p className="text-letter font-instrument text-sm">SOBRE</p>
                <p className="text-letter font-instrument text-sm">CONTATO</p>
            </div>
        </nav>
    )
}

export default Navbar
