import { item } from "@/types/item";

type AddAction = {
    type: 'add';
    payload: {text: string}
}

type RemoveAction = {
    type: 'remove';
    payload: {id:number}
}

type EditTextAction = {
    type: 'editText';
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {id: number}
}

type LoadAction = {
  type: 'load',
  payload: item[];
}

type ListAction = AddAction | EditTextAction | ToggleDoneAction | RemoveAction | LoadAction

export const ListReducer = (list: item[], action: ListAction): item[] => {
    switch (action.type) {
      case 'load':
        return action.payload || [];

      case 'add':
        return [
          ...list,
          {
            id: list.length > 0 ? Math.max(...list.map(t => t.id)) + 1 : 0, // Garante IDs únicos.
            text: action.payload.text,
            done: false,
          },
        ];
  
      case 'editText':
        return list.map(t =>
          t.id === action.payload.id ? { ...t, text: action.payload.newText } : t
        );
  
      case 'remove':
        return list.filter(t => t.id !== action.payload.id);
  
      case 'toggleDone':
        return list.map(t =>
          t.id === action.payload.id ? { ...t, done: !t.done } : t
        );
  
      default:
        return list;
    }
  };