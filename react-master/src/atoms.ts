import { atom } from "recoil";

export const isDarkAtom = atom({
	key: "isDark",
	default: false,
})

// for KanBan
interface IToDoState {
	[key: string]: string[];
}
  
export const toDoState = atom<IToDoState>({
	key: "toDo",
	default: {
		to_do: ["a", "b"],
		doing: ["c", "d", "e"],
		done: ["f"],
	  },
});
