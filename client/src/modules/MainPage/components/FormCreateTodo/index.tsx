/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import { ITodo } from '../../../../types';

const Form = styled.form`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const initialValue: ITodo = { body: '' };

interface IformCreateTodo {
  isEditing: boolean;
  formState: { body: string } | ITodo;
  setFormState: (value: any) => void;
  submitHandler: (values: ITodo) => void;
  setEditing: (value: boolean) => void;
  editTodo: (value: ITodo) => void;
}

const FormCreateTodo: React.FC<IformCreateTodo> = ({
  submitHandler, formState, setFormState, isEditing, setEditing, editTodo,
}) => {
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitHandler(formState);
    setFormState(initialValue);
  };

  const onEditForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(formState);
    setEditing(false);
    setFormState(initialValue);
  };

  return (
    <Form onSubmit={isEditing ? onEditForm : submitForm}>
      <Input placeholder="Basic usage" name="body" value={formState.body} onChange={changeInput} />
      <Button htmlType="submit">{isEditing ? 'Edit ToDo' : 'Add ToDo'}</Button>
    </Form>
  );
};

export default FormCreateTodo;
