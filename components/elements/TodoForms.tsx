"use client";
import React, { useState } from "react";
import { useTodo } from "../contexts";

const TodoForms = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Add todos.."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none
         bg-white/20 duration-150 py-1.5"
         value={todo}
         onChange={(e: React.ChangeEvent<HTMLInputElement> )=> setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg text-white bg-green-600 px-3 py-1 shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForms;
