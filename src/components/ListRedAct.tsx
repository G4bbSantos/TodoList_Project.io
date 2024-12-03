import { useReducer, useState, useEffect } from "react";
import { ListReducer } from "./ListReducer";
import ArrowCircleIcon from "@/images/ArrowCircleIcon";
import CheckmarkCircleIcon from "@/images/CheckMarkIcon";
import EditCircleIcon from "@/images/PenCircleIcon";
import TrashIcon from "@/images/TrashPlusIcon";

const LOCAL_STORAGE_KEY = "todoList";

export const ListRedAct = () => {
  const [list, dispatch] = useReducer(ListReducer, []);
  const [addField, setAddField] = useState("");

  // Carregar dados do LocalStorage ao montar o componente
  useEffect(() => {
    const savedList = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedList) {
      dispatch({
        type: "load",
        payload: JSON.parse(savedList),
      });
    }
  }, []);

  // Salvar dados no LocalStorage sempre que o estado "list" mudar
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  const handleAddButton = () => {
    if (addField.trim() === "") return;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim(),
      },
    });
    setAddField("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
        if (addField.trim() === "") return;

        dispatch({
            type: "add",
            payload: {
                text: addField.trim(),
            },
        });
        setAddField("");
      }
  }

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id },
    });
  };

  const handleEdit = (id: number) => {
    const item = list.find((it) => it.id === id);
    if (!item) return;

    const newText = window.prompt("Editar tarefa", item.text);
    if (!newText || newText.trim() === "") return;

    dispatch({
      type: "editText",
      payload: { id, newText },
    });
  };

  const handleRemove = (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir?")) return;
    dispatch({
      type: "remove",
      payload: { id },
    });
  };

  const totalTasks = list.length;
  const completedTasks = list.filter((item) => item.done).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="flex flex-col gap-4">
      <div className="w-full py-6 flex gap-2 justify-center">
        <input
          type="text"
          className="w-6/12 px-2 py-1 text-lg rounded-lg text-black"
          placeholder="Digite algo..."
          value={addField}
          onChange={(e) => setAddField(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          className="w-10 h-9 flex justify-center items-center bg-zinc-600 rounded-lg cursor-pointer active:bg-zinc-700"
          onClick={handleAddButton}
        >
          <ArrowCircleIcon width="28" height="28" fill="white" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 sm:w-8/12 min-h-20 bg-zinc-700 border border-black rounded-xl flex flex-col items-center">
          <ul className="flex flex-col w-full px-2">
            {list.map((item) => (
              <li
                className="w-full flex gap-2 justify-between py-0.5 hover:bg-zinc-600 items-center"
                key={item.id}
              >
                <CheckmarkCircleIcon
                  width="26"
                  height="26"
                  strokeColor={item.done ? "green" : "white"}
                  onToggle={() => handleDoneCheckbox(item.id)}
                />
                <p
                  className={`${
                    item.done ? "line-through text-gray-400" : ""
                  } flex-1 px-2`}
                >
                  {item.text}
                </p>
                <div className="flex gap-2">
                    <div
                        className="hover:bg-zinc-800 p-1 cursor-pointer"
                    >
                        <TrashIcon                                 
                            width="26"
                            height="26"
                            fill="white"
                            onAddTrash={() => handleRemove(item.id)}
                        />
                    </div>
                    <div
                        className="hover:bg-zinc-800 p-1 cursor-pointer"
                    >
                        <EditCircleIcon
                            width="26"
                            height="26"
                            fill="white"
                        onEditTx={() => handleEdit(item.id)}
                        />
                    </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="font-light text-gray-400 border-t flex justify-between mt-2 w-full px-4 py-2">
            <p>Total de tarefas: {totalTasks}</p>
            <p>Total de tarefas feitas: {completedTasks}</p>
            <p>Total de tarefas a fazer: {pendingTasks}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
