export const AddItens = () => {
    return(
        <div className="w-full py-6 flex gap-2 justify-center">
            <input type="text" className="w-6/12 px-2 py-1 rounded-xl text-black" id="IptAdd-text"/>
            <div className="w-9 h-8 flex justify-center items-center bg-zinc-600 rounded-lg cursor-pointer active:bg-zinc-700" id="IptAdd-btn">+</div>
        </div>
    )
}