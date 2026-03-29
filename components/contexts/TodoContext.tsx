import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo: string) => {},
  updatedTodo: (id: number, todo: string) => {},
  deleteTodo: (id: number) => {},
  toggleComplete: (id: number) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
