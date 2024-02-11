import { NavLink, Outlet, } from 'react-router-dom';
import viteLogo from "../../public/vite.svg";
const isActiveRoute = ({ isActive }: { isActive: boolean; }) => isActive ? 'nav-active' : '';

const Home = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={viteLogo} alt="Vite Logo" />
        <ul>
          <li>
            <NavLink to='/' children="Home" className={isActiveRoute} />
          </li>
          <li>
            <NavLink to='about' children="About" className={isActiveRoute} />
          </li>
          <li>
            <NavLink to='users' children="Users" className={isActiveRoute} />
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default Home;