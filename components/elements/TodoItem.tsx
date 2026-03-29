"use client";
import React, { useState } from "react";
import { useTodo } from "../contexts";

type todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type todoItemprops = {
  todo: todo;
};

const TodoItem = ({ todo }: todoItemprops) => {
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, toggleComplete, updatedTodo } = useTodo();

  const editTodo = () => {
    updatedTodo(todo.id, todoMsg);
    setisTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 
    gap-x-3 shadow-sm shadow-white/50 duration-300 text-black 
    ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg
        ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} 
        ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* edit,save button  */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border
       border-black/10 items-center justify-center bg-gray-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setisTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* deleted button  */}
      <button
        className="inline-flex w-8 h-8 rounded-lg 
      text-sm border border-black/10 items-center justify-center bg-gray-50"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
