import todosReducer, { todosActions } from './todos';
import userReducer, { userActions } from './user';

const rootReducer = {
  user: userReducer,
  todos: todosReducer,
};

export default rootReducer;

export const actions = {
  ...todosActions,
  ...userActions,
};
