export const ListArea = () => {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-11/12 sm:w-8/12 min-h-20 bg-zinc-700 border border-black rounded-xl flex flex-col items-center">
                <ul className="flex flex-col w-full px-2">
                    <li className="w-full flex gap-2 justify-between py-0.5 hover:bg-zinc-600 items-center">
                        <input type="checkbox" name="" id="" className="cursor-pointer"/>
                        Item 1
                        <div className="flex gap-2">
                            <div className="hover:bg-zinc-800 p-1 cursor-pointer">X</div>
                            <div className="hover:bg-zinc-800 p-1 cursor-pointer">E</div>
                        </div>
                    </li>
                    <li className="w-full flex gap-2 justify-between py-0.5 hover:bg-zinc-600 items-center">
                        <input type="checkbox" name="" id="" className="cursor-pointer"/>
                        Item 2
                        <div className="flex gap-2">
                            <div className="hover:bg-zinc-800 p-1 cursor-pointer">X</div>
                            <div className="hover:bg-zinc-800 p-1 cursor-pointer">E</div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}