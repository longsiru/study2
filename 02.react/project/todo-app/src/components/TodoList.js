// TodoListItem을 감싸고 있는
import React from "react";
import { List } from "react-virtualized";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { useCallback } from "react";

function TodoList({ todos, onRemove, onToggle }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57} //항목 높이
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: "none" }}
    />
  );
}

export default React.memo(TodoList);
