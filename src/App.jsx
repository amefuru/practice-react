import React, { useState } from "react";
import "./style.css";

import { InputTodo } from "./components/inputTodo";
import { InCompleteArea } from "./components/InCompleteArea";
import { CompleteArea } from "./components/CompleteArea";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "eeee"]);
  const [completeTodos, setCompleteTodos] = useState(["uuuu"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTods = [...incompleteTodos, todoText];
    setIncompleteTodos(newTods);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTods = [...incompleteTodos];
    newTods.splice(index, 1);
    setIncompleteTodos(newTods);
  };
  const onClickComplete = (index) => {
    const newTods = [...incompleteTodos];
    newTods.splice(index, 1);

    const newCompleteTods = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTods);

    setIncompleteTodos(newTods);
  };
  const onClickBack = (index) => {
    const newTods = [...completeTodos];
    newTods.splice(index, 1);

    const newInCompleteTods = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newInCompleteTods);

    setCompleteTodos(newTods);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるののは五コマでです</p>
      )}

      <InCompleteArea
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteArea completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
