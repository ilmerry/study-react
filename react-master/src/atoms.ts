import { atom } from "recoil";

export const isDarkAtom = atom({
	key: "isDark",
	default: false,
})

export interface ITodo {
	id: number;
	text: string;
  }

// for KanBan
interface IToDoState {
	[key: string]: ITodo[];
}
  
export const toDoState = atom<IToDoState>({
	key: "toDo",
	default: {
		"To Do": [],
		Doing: [],
		Done: [],
	  },
});
