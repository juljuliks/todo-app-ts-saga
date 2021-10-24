/* eslint-disable arrow-parens */
import React from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Card } from 'antd';
import { ITodo } from '../../../../types';

const ListItem = styled.li`
  list-style: none;
  margin: 20px 0;
`;

const TodoTitle = styled.p<ITodoTitle>`
  width: 80%;
  padding: 0;
  margin: 0 30px;
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

const CardInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ITodoTitle {
  isDone: boolean;
}

interface ITodoItemProps {
  todo: ITodo;
  editTodo: (value: ITodo) => void;
  removeTodo: (todoId: number) => void;
  setFormState: (value: ITodo) => void;
  setEditing: (value: boolean) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({
  todo, editTodo, removeTodo, setFormState, setEditing,
}) => {
  function editBtnClickHandler(currentTodo: ITodo) {
    setEditing(true);
    setFormState(currentTodo);
  }

  return (
    <ListItem>
      <Card>
        <CardInner>
          <Checkbox onChange={() => editTodo({ ...todo, completed: !todo.completed })} />
          <TodoTitle isDone={todo.completed ? todo.completed : false}>
            {todo.body}
          </TodoTitle>
          <Button
            style={{ margin: '0 5px' }}
            type="primary"
            onClick={() => editBtnClickHandler(todo)}
          >
            Edit
          </Button>
          <Button
            style={{ margin: '0 5px' }}
            type="primary"
            onClick={() => removeTodo(todo.id ? todo.id : 0)}
          >
            &times;
          </Button>
        </CardInner>
      </Card>
    </ListItem>
  );
};

export default TodoItem;
