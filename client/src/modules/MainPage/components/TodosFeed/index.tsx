import React from 'react';
import styled from 'styled-components';
import TodoItem from '../TodoItem';
import { ITodo } from '../../../../types';

const List = styled.ul`
  margin: 30px 0;
  padding: 0;
`;

interface ITodoFeedProps {
  todos: ITodo[];
  editTodo: (value: ITodo) => void;
  removeTodo: (todoId: number) => void;
  setFormState: (value: ITodo) => void;
  setEditing: (value: boolean) => void;
}

const TodosFeed: React.FC<ITodoFeedProps> = ({
  todos, editTodo, removeTodo, setFormState, setEditing,
}) => {
  if (!todos.length) {
    return (
      <div>No todos</div>
    );
  }

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          removeTodo={removeTodo}
          setFormState={setFormState}
          setEditing={setEditing}
        />
      ))}
    </List>
  );
};

export default TodosFeed;
