/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/slices';
import { useAppDispatch } from '../../redux/store';

const { Header } = Layout;

interface INavbarProps {
  isAuth: boolean;
}

const Navbar: React.FC<INavbarProps> = ({ isAuth }) => {
  const dispatch = useAppDispatch();

  function logoutHandler() {
    dispatch(actions.logoutUserPending());
  }

  if (!isAuth) {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="Register">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="Login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="Logout">
          <Button type="link" onClick={logoutHandler}>Logout</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
