import React from 'react';
import CustomForm from '../Form';
import { CustomItemProps } from '../types/customFormProps';
import { useAppDispatch } from '../../redux/store';
import { actions } from '../../redux/slices';
import { AuthData } from '../types/authTypes';

const formItems: CustomItemProps[] = [
  {
    name: 'email',
    label: 'Email',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Please input valid email',
        type: 'email',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    initialValue: '',
    isPassword: true,
    rules: [
      {
        required: true,
        min: 6,
        message: 'Password must be at least 6 characters',
      },
    ],
  },
];

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  function onSubmit(values: AuthData) {
    dispatch(actions.loginUserPending(values));
  }

  return (
    <CustomForm formItems={formItems} submitHandler={onSubmit} />
  );
};

export default LoginPage;
