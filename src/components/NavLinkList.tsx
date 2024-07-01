import { NavLink } from 'react-router-dom';
import { RouteConfig } from "../routes/routesConfig";
import { isActiveRoute } from "../utils";


export interface NavLinkListProps {
  routesConfig: RouteConfig[];
}


export const NavLinkList = ({ routesConfig, }: NavLinkListProps) => (
  routesConfig.map(({ path, name }, index) => (
    path && (
      <li key={index + path + name}>
        <NavLink to={path} children={name} className={isActiveRoute} />
      </li>
    )
  ))
);


