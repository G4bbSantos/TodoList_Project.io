export const FooterPage = () => {
    return (
        <footer className="w-full min-h-12 bg-zinc-900/40 border-t border-black px-3 py-1 flex justify-around items-center">
            <div>
                Desenvolvido por Gabriel Fernando
            </div>
            <div className="flex gap-3">
                <a href="https://github.com/G4bbSantos" className="hover:text-slate-300">Github</a>
                <a href="https://www.linkedin.com/" className="hover:text-slate-300">Linkedin</a>
            </div>
        </footer>
    )
}