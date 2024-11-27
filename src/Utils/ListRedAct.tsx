import { useReducer, useState } from "react"
import { ListReducer } from "./ListReducer"

export const ListRedAct = () => {
    const [list, dispatch] = useReducer(ListReducer, [])
    const [addField, setAddField] = useState('')

    const handleAddButton = () => {
        if(addField.trim() === '') return false

        dispatch({
            type: 'add',
            payload: {
                text: addField.trim()
            }
        })

        setAddField('')
    }

    const handleDoneCheckbox = (id: number) => {
        dispatch({
            type: 'toggleDone',
            payload: { id },
        })
    }

    const handleEdit = (id:number) => {
        const item = list.find(it => it.id === id)
        if(!item) return false

        const newText = window.prompt('Editar tarefa', item.text)
        if(!newText || newText?.trim() === '') return false

        dispatch({
            type: 'editText',
            payload: {id, newText}
        })
    }

    const handleRemove = (id: number) => {
        if(!window.confirm('Tem certeza que deseja excluir')) return false
        dispatch({
            type: 'remove',
            payload: {id}
        })
    }

    return (
        <section>
            <div className="w-full py-6 flex gap-2 justify-center">
                <input type="text" className="w-6/12 px-2 py-1 rounded-xl text-black" placeholder="Digite algo.." onChange={e => setAddField(e.target.value)}/>
                <div className="w-9 h-8 flex justify-center items-center bg-zinc-600 rounded-lg cursor-pointer active:bg-zinc-700" onClick={handleAddButton}>+</div>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 sm:w-8/12 min-h-20 bg-zinc-700 border border-black rounded-xl flex flex-col items-center">
                    <ul className="flex flex-col w-full px-2">
                        {list.map(item => (
                            <li className="w-full flex gap-2 justify-between py-0.5 hover:bg-zinc-600 items-center" key={item.id}>
                                <input type="checkbox" name="" id="" className="cursor-pointer" defaultChecked={item.done} onClick={() => handleDoneCheckbox(item.id)}/>
                                <p id="ItemList">{item.text}</p>
                                <div className="flex gap-2">
                                    <div className="hover:bg-zinc-800 p-1 cursor-pointer" onClick={() => handleRemove(item.id)}>X</div>
                                    <div className="hover:bg-zinc-800 p-1 cursor-pointer" onClick={() => handleEdit(item.id)}>E</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}