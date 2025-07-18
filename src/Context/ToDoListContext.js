import { createContext } from "react";

export let ToDoList = createContext([{id: 0, text: "first one", done: false, edit: "", delete: false}])
