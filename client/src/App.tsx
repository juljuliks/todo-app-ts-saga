/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppSelector, useAppDispatch } from './redux/store';
import { Spin } from 'antd'
const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isAuthenticated = Boolean(user?.id);
  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(actions.getAllTodosPending());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    dispatch(actions.getInitialUserPending());
  }, [dispatch]);

  return (
    <>
      <Navbar isAuth={isAuthenticated} />
      {isLoading && <Spin />}
      {routes}
    </>
  );
};

export default App;
