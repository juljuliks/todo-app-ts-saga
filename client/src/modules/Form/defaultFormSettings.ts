import { CustomItemProps } from '../types/customFormProps';

export const defaultFormItems: CustomItemProps[] = [
  {
    name: 'email',
    label: 'Your email',
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
    isPassword: true,
    initialValue: '',
    rules: [
      {
        required: true,
        min: 6,
        message: 'Password must be at least 6 characters',
      },
    ],
  },
];

export const defaultSubmitHandler = () => {
  console.log('Plase add submit handler in props');
};
