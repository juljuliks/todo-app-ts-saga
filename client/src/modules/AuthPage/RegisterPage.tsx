import CustomForm from '../Form';
import { CustomItemProps } from '../types/customFormProps';
import { actions } from '../../redux/slices';
import { AuthData } from '../types/authTypes';
import { useAppDispatch } from '../../redux/store';

const formItems: CustomItemProps[] = [
  {
    name: 'username',
    label: 'Your name',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Please input Your name',
      },
    ],
  },
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

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  function onSubmit(values: AuthData) {
    dispatch(actions.registerUserPending(values));
  }

  return (
    <CustomForm formItems={formItems} submitHandler={onSubmit} />
  );
}
