import { Outlet } from 'react-router-dom';
import NavbarSimple from '../components/navbar';

const MainLayout = () => {
  return (
    <>
      <NavbarSimple />
      <Outlet />
    </>
  );
};

export default MainLayout;
