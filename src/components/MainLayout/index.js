import Header from '../Header';
import SideBar from '../SideBar';
import { Outlet } from 'react-router-dom';
import './index.css'

const MainLayout = () => (
  <div className="Appnew">
    <Header />
    <div className="routes-sidebar">
      <SideBar />
      <div className="route-body">
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainLayout