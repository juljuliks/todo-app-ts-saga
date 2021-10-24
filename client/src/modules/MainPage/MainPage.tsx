import styled from 'styled-components';
import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import FormCreateTodo from './components/FormCreateTodo';
import TodosFeed from './components/TodosFeed';
import { actions } from '../../redux/slices';
import { ITodo } from '../../types';

const Container = styled.div`
  width: 50%;
  margin: 50px auto;
`;

const initialValue: ITodo = { body: '' };

const MainPage: React.FC = () => {
  const [isEditing, setEditing] = useState(false);
  const [formState, setFormState] = useState(initialValue);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  function addTodo(value: ITodo) {
    dispatch(actions.createTodoPending(value));
  }

  function removeTodo(todoId: number) {
    dispatch(actions.deleteTodoPending({ todoId }));
  }

  function editTodo(value: ITodo) {
    dispatch(actions.editTodoPending(value));
  }

  return (
    <Container>
      <FormCreateTodo
        submitHandler={addTodo}
        formState={formState}
        setFormState={setFormState}
        isEditing={isEditing}
        setEditing={setEditing}
        editTodo={editTodo}
      />
      <TodosFeed
        todos={todos.items}
        removeTodo={removeTodo}
        editTodo={editTodo}
        setFormState={setFormState}
        setEditing={setEditing}
      />
    </Container>
  );
};

export default MainPage;
