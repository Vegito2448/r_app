import { NavLink, Outlet, } from 'react-router-dom';
import { routesConfig } from "./router";
import viteLogo from "/vite.svg";
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
          {routesConfig.map(({ path, name }, index) => path && (
            <li key={index + path + name}>
              <NavLink to={path} children={name} className={isActiveRoute} />
            </li>)
          )}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default Home;