import { atom } from "recoil";

export const isDarkAtom = atom({
	key: "isDark",
	default: false,
})

export const toDoState = atom({
	key: "toDo",
	default: ["a", "b", "c", "d", "e", "f"],
  });