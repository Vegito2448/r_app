import { NavLink, Outlet, } from 'react-router-dom';
import NavLinkList from "../lazyLoad/components/NavLinkList";
import { isActiveRoute } from "../utils";
import { routesConfig } from "./router";
import viteLogo from "/vite.svg";


const Home = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={viteLogo} alt="Vite Logo" />
        <ul>
          <li>
            <NavLink to='/' children="Home" className={isActiveRoute} />
          </li>
          <NavLinkList routesConfig={routesConfig} />

        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

    </div>
  );
};

export default Home;