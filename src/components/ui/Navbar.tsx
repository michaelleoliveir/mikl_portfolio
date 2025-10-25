const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 rounded-full mt-7 h-14 w-90 mx-auto flex items-center justify-center bg-highlight/20 backdrop-blur-lg border-2 border-highlight/10">
            <div className="flex items-center gap-6">
                <p className="text-letter font-instrument text-sm">EXPERIÊNCIA</p>
                <p className="text-letter font-instrument text-sm">PROJETOS</p>
                <p className="text-letter font-instrument text-sm">CONTATO</p>
            </div>
        </nav>
    )
}

export default Navbar
