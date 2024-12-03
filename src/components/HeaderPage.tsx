export const HeaderPage = () => {
    return(
        <header className="w-full min-h-12 bg-zinc-400/70 border-b dark:bg-zinc-900/40 dark:border-gray-950 border-gray-900 flex justify-between items-center px-3 py-2">
            <div className="">
                <h1 className="text-2xl font-bold">Todo-List</h1>
            </div>
            <div>
                <ul className="flex gap-3">
                    <li className="hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">Notas</li>
                    <li className="underline hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">Todo-list</li>
                    <li className="hover:underline underline-offset-8 text-lg dark:hover:text-slate-300 dark:active:text-slate-200 cursor-pointer hover:text-slate-800 active:text-slate-700">Configurações</li>
                </ul>
            </div>
        </header>
    )
}