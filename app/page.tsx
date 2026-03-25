"use client";
import React, { useState } from "react";
import { TodoProvider } from "@/components/contexts";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updatedTodo = (id: number, todo: string) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, todo } : prevTodo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((preval) => preval.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo,
      ),
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updatedTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage your Todos
          </h1>
          <div>{/* {Todos gose here} */}</div>
          <div></div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default Page;
