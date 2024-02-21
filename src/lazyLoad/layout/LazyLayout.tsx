import { Outlet } from "react-router-dom";
import routesConfig from "../../routes/routesConfig";
import { NavLinkList } from "../components";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout</h1>
      <ul>
        {routesConfig[0] && routesConfig[0].children && <NavLinkList routesConfig={routesConfig[0].children} />}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

LazyLayout.displayName = "Lazy Layout";

export default LazyLayout;